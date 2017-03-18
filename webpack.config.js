/**
 * Created by heyong on 17/3/15.
 */
var htmlWebpackPlugin =require('html-webpack-plugin');
var path =require('path');
module.exports={
    // 表示我们说打包的入口哪个文件夹引入
    entry:'./src/components/app.js',
    // 表示我们的输入文件
    output:{
        // 定义输出目录
        path:'./dist',
        // 定义输出文件的名字,我们这里定义文件名加上hash值
        filename:'js/[name]-[hash].js',
        // 如果是线上地址就加上这个
        // publicPath:'http://cdn.com/',
    },
    module:{
      loaders:[
          {
              test:/\.js$/,
              loader:'babel-loader',
              // 只打包文件的位置
              include:path.resolve(__dirname,'src'),
              // 排除打包范围
              exclude:path.resolve(__dirname,'node_modules'),
          },
          {
            test:/\.css$/,
              // postcss-loader给浏览器加前缀的插件
              loader: 'style-loader!css-loader!postcss-loader',
              options: {
                  plugins: function () {
                      return [
                          require('autoprefixer')
                      ];
                  }
              }
          },
          {
              test:/\.less$/,
              loader: 'style-loader!css-loader!less-loader',
          },
          {
              test:/\.html$/,
              loader:'html-loader'
          },
          {
              test:/\.ejs$/,
              loader:'ejs-loader'
          },
          {
              // 不区分大小写$/i
              test:/\.(png|jpg|gif|svg)$/i,
              //当图片大致小于20k的时候不会执行压缩
              loaders:[
                  'url-loader?limit=20000&name=image/[name]-[hash:5].[ext]',
                  'image-webpack-loader'
              ]
          }

      ]
    },
    plugins:[
        new htmlWebpackPlugin({
            // 表示模板
            template:'index.html',
            filename:'index-[hash].html',
            // 把我们的脚本放在头部
            inject:'body',
            title:'webpack is good',
            minify:{
                // 删除注释
                removeComments:true,
                // 去掉空格压缩
                collapseWhitespace:true
            }
        })
    ]
}