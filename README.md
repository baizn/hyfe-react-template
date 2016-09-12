# 项目概述
## 安装依赖
```
$ cd xxx
$ npm install
$ webpack --config webpack.lib.js --progress --colors
```

## 运行项目
### 开发环境
```
$ npm run prebuild
$ npm start
```

### 线上部署
```
$ git clone xxxxxx
$ cd xxxxxx
$ npm install
$ npm run build
$ pm2 start app.json --env production
```
