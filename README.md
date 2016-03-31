# angular-weui-seed — 基于angularjs1.x和weuiUI的手脚架


[AngularJS](http://angularjs.org/) 单页框架;

[weui](https://github.com/weui/weui) 微信官网出的UI;
## 开始使用

你需要准备以下工具:

### 条件

git版本控制
[http://git-scm.com/](http://git-scm.com/).

node.js [http://nodejs.org/](http://nodejs.org/).

### Clone angular-weui-seed

使用 [git][git] 克隆:

```
git clone https://github.com/tsaoko/angular-weui-seed.git
cd angular-weui-seed
```


### 安装依赖包

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.
