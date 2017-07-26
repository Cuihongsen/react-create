## react 脚手架工具

### 特点
---
* 代码热加载
* sass预处理器
* 测试环境与生产环境打包
* 自动提取css
* 公用模块分离
* 静态资源文件防止缓存
* ...

### 配置需求
---
webpack: ^2.0.0
npm: ^3.0.0

### 开始
---
```bash
git clone https://github.com/Lzzzzzq/react-create.git
cd react-create
cnpm i
cnpm run dev
```
依次执行后，会自动打开浏览器，如页面中显示 load success 字样，则可以进行进一步的开发。

### 项目目录
---
```
├── src                           // 项目源文件
├── webpack-dev-server-config     // webpack-dev-server 的配置 
├── .gitignore                    // 不加入 git 的配置
├── LICENSE                       // 协议
├── package.json                  // 项目依赖配置
├── webpack.dev.js                // 开发环境下 webpack 的配置
├── webpack.devBuild.js           // 测试环境下 webpack 的配置
├── webpack.pro.js                // 生产环境下 webpack 的配置
```
---


