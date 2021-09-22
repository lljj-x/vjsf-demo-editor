## vue-json-schema-form 活动编辑器
当前项目实际为 [vue-json-schema-form demo项目](https://github.com/lljj-x/vue-json-schema-form/tree/master/packages/demo/demo-v2) 中活动编辑器的单独仓库。

![](https://lljj-xxxx.oss-cn-hongkong.aliyuncs.com/vue-editor.jpg)

### 启动方法
```
# 安装，或者yarn
npm install

# 开发环境
npm run dev

# 浏览器访问
http://127.0.0.1:8800/vue-editor.html

# build
npm run build

```

### 备注
> 为了和  [vue-json-schema-form demo项目](https://github.com/lljj-x/vue-json-schema-form/tree/master/packages/demo/demo-v2) 项目保持通用性。对依赖的 `demo-common` 做了以下处理，js中使用webpack 配置别名，css 使用postcss import插件配置path来兼容。

详细如下：
* webpack 配置 vue-config.js 添加别名，解决js中 import 'demo-common/xx'
```js
config.resolve.alias = {
    ...config.resolve.alias,
    'demo-common': path.resolve(__dirname, './src/demo-common'),
};
```

* postcss.config.js 配置post import plugin 添加path配置，解决css中 @import 'demo-common/xx'
```js
require('postcss-import')({
    path: ['src/']
})
```

### 构建
使用 vue cli 构建项目多entry形式，按文件目录自动查找entry，有兴趣可参见 `/scripts/entry.js` 文件

### 为何独立一份
[vue-json-schema-form](https://github.com/lljj-x/vue-json-schema-form) 为Monorepo，package 之间有相互依赖，由于会有新人不知如何抽出需要的独立package，
所以现在独立为一个单独的仓库，同时方便后续的更新。

