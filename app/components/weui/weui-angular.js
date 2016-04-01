(function() {

	var WeuiModule = angular.module('weui', []),
		extend = angular.extend,
		forEach = angular.forEach,
		isDefined = angular.isDefined,
		isNumber = angular.isNumber,
		isString = angular.isString,
		jqLite = angular.element,
		noop = angular.noop;

	/**
	 * 获取当前页面的内容
	 * 
	 * @param  {[type]} $document)   {		return                  {			addClass: function() {				for     (var          x [description]
	 * @param  {[type]} removeClass: function()                  {				for      (var       x             [description]
	 * @param  {[type]} enableClass: function(shouldEnableClass) {				var      args       [description]
	 * @return {[type]}              [description]
	 */
	WeuiModule.factory('$weuiBody', ['$document', function($document) {
		return {
			addClass: function() {
				for (var x = 0; x < arguments.length; x++) {
					$document[0].body.classList.add(arguments[x]);
				}
				return this;
			},

			removeClass: function() {
				for (var x = 0; x < arguments.length; x++) {
					$document[0].body.classList.remove(arguments[x]);
				}
				return this;
			},

			enableClass: function(shouldEnableClass) {
				var args = Array.prototype.slice.call(arguments).slice(1);
				if (shouldEnableClass) {
					this.addClass.apply(this, args);
				} else {
					this.removeClass.apply(this, args);
				}
				return this;
			},

			append: function(ele) {
				$document[0].body.appendChild(ele.length ? ele[0] : ele);
				return this;
			},
			get: function() {
				return $document[0].body;
			}
		};
	}]);

	/**
	 * 获取模板文件
	 * 
	 * @param  {[type]} $compile        [description]
	 * @param  {[type]} $controller     [description]
	 * @param  {[type]} $http           [description]
	 * @param  {[type]} $q              [description]
	 * @param  {[type]} $rootScope      [description]
	 * @param  {[type]} $templateCache) {			return   {				load: fetchTemplate,				compile: loadAndCompile			};			function fetchTemplate(url) {				return $http.get(url, {						cache: $templateCache					})					.then(function(response) {						return response.data && response.data.trim();					});			}			function loadAndCompile(options [description]
	 * @return {[type]}                 [description]
	 */
	WeuiModule.factory('$weuiTemplateLoader', [
		'$compile',
		'$controller',
		'$http',
		'$q',
		'$rootScope',
		'$templateCache',
		function($compile, $controller, $http, $q, $rootScope, $templateCache) {

			return {
				load: fetchTemplate,
				compile: loadAndCompile
			};

			function fetchTemplate(url) {
				return $http.get(url, {
						cache: $templateCache
					})
					.then(function(response) {
						return response.data && response.data.trim();
					});
			}

			function loadAndCompile(options) {
				options = extend({
					template: '',
					templateUrl: '',
					scope: null,
					controller: null,
					locals: {},
					appendTo: null
				}, options || {});

				var templatePromise = options.templateUrl ?
					this.load(options.templateUrl) :
					$q.when(options.template);

				return templatePromise.then(function(template) {
					var controller;
					var scope = options.scope || $rootScope.$new();

					//Incase template doesn't have just one root element, do this
					var element = jqLite('<div>').html(template).contents();

					if (options.controller) {
						controller = $controller(
							options.controller,
							extend(options.locals, {
								$scope: scope
							})
						);
						element.children().data('$ngControllerController', controller);
					}
					if (options.appendTo) {
						jqLite(options.appendTo).append(element);
					}

					$compile(element)(scope);

					return {
						element: element,
						scope: scope
					};
				});
			}

		}
	]);

	var LOADING_TPL =
		'<div class="loading-container">' +
		'<div class="loading">' +
		'</div>' +
		'</div>';

	WeuiModule.constant('$weuiToastConfig', {
		'template': '<div class="weui_toast"><i class="weui_icon_toast"></i><p class="weui_toast_content">已完成</p></div>'
	});

	WeuiModule.factory('$weuiToast', [
		'$weuiBody',
		'$weuiTemplateLoader',
		'$weuiToastConfig',
		'$compile',
		'$timeout',
		'$q',
		function($weuiBody, $weuiTemplateLoader, $weuiToastConfig, $compile, $timeout, $q) {

			var loaderInstance;
			//default values
			var loadingShowDelay = $q.when();
			return {
				show: showLoader,
				hide: hideLoader,
				_getLoader: getLoader
			};

			function getLoader() {
				if (!loaderInstance) {
					loaderInstance = $weuiTemplateLoader.compile({
							template: LOADING_TPL,
							appendTo: $weuiBody.get()
						})
						.then(function(self) {
							self.show = function(options) {
								var templatePromise = options.templateUrl ?
									$weuiTemplateLoader.load(options.templateUrl) :
									//options.content: deprecated
									$q.when(options.template || options.content || '');

								self.scope = options.scope || self.scope;

								if (options.duration) {
									$timeout.cancel(self.durationTimeout);
									self.durationTimeout = $timeout(
										angular.bind(self, self.hide), +options.duration
									);
								}

								templatePromise.then(function(html) {
									if (html) {
										var loading = self.element.children();
										loading.html(html);
										$compile(loading.contents())(self.scope);
									}

									//Don't show until template changes
									if (self.isShown) {
										self.element.addClass('visible');
										if (self.isShown) {
											self.element.addClass('active');
											$weuiBody.addClass('loading-active');
										}
									}
								});

								self.isShown = true;
							};
							self.hide = function() {

								if (self.isShown) {

									self.element.removeClass('active');
									$weuiBody.removeClass('loading-active');
									self.element.removeClass('visible');

								}

								$timeout.cancel(self.durationTimeout);
								self.isShown = false;
								var loading = self.element.children();
								loading.html("");
							};

							return self;
						});
				}
				return loaderInstance;
			}

			function showLoader(options) {
				options = extend({}, $weuiTemplateLoader || {}, options || {});
				var delay = options.delay || options.showDelay || 0;
				$timeout.cancel(loadingShowDelay);
				loadingShowDelay = $timeout(noop, delay);
				loadingShowDelay.then(getLoader).then(function(loader) {
					return loader.show(options);
				});

				return {
					hide: function deprecatedHide() {
						return hideLoader.apply(this, arguments);
					},
					show: function deprecatedShow() {

						return showLoader.apply(this, arguments);
					},
					setContent: function deprecatedSetContent(content) {
						return getLoader().then(function(loader) {
							loader.show({
								template: content
							});
						});
					}
				};
			}

			function hideLoader() {
				$timeout.cancel(loadingShowDelay);
				getLoader().then(function(loader) {
					loader.hide();
				});
			}

		}
	]);
})();