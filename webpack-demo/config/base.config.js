const path=require('path')
//定义入口和出口文件的路径
const PATH={
    app:path.join(__dirname,'../src/main.js'),
    build:path.join(__dirname,'../dist')
}

module.exports={
//定义打包的入口文件
entry:{
    app:PATH.app
},
//定义打包的出口文件
 output:{
     filename:'[name].js',
     path:PATH.build
 }
}
//文件打包,打开cmd，输入npx webpack

//cmd:np webpack --config config/base.config.js