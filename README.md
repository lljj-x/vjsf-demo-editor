## vue-json-schema-form 活动编辑器
当前项目实际为 [vue-json-schema-form](https://github.com/lljj-x/vue-json-schema-form) demo项目中活动编辑器的单独仓库。

![](https://lljj-xxxx.oss-cn-hongkong.aliyuncs.com/vue-editor.jpg)

### 启动方法
```
# 安装，或者yarn
npm install

npm run dev

npm run build
```

### 构建
使用 vue cli 构建项目多entry形式，按文件目录自动查找entry，有兴趣可参见 `/scripts/entry.js` 文件

### 为何独立一份
[vue-json-schema-form](https://github.com/lljj-x/vue-json-schema-form) 为Monorepo，package 之间有相互依赖，由于会有新人不知如何抽出需要的独立package，
所以现在独立为一个单独的仓库，同时方便后续的更新。

