module.exports = {
    plugins: [
        require('postcss-import')(),
        require('postcss-preset-env')({
          importFrom: 'src/common/css/variable.css' // 设置导入变量相关的样式文件
        }),
        require('postcss-mixins'),
        require('postcss-nested'),
        require('postcss-color-mod-function'),
        require('postcss-cssnext')({
            warnForDuplicates: false,
        }),
    ]
};
