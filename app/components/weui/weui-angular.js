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

	WeuiModule.constant('$weuiToastConfig', {
		'template': '<i class="weui_icon_toast"></i>'
	});

	WeuiModule.factory('$weuiToast', [
			'$weuiToastConfig',
			'$weuiBody',
			'$weuiTemplateLoader',
			'$compile',
			'$timeout',
			'$q'
		],
		function($weuiToastConfig, $weuiBody, $weuiTemplateLoader, $compile, $timeout, $q) {

			var loaderInstance;
			//default values
			var loadingShowDelay = $q.when();
			return {
				show: showLoader,
				hide: hideLoader,
				_getLoader: getLoader
			};

			function getLoader() {

				return loaderInstance;
			}

			function showLoader(options) {
				//options = extend({}, $weuiLoadingConfig || {}, options || {});
			}

			function hideLoader() {

			}

		}
	);
})();