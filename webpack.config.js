const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/scripts/index.js',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[{
            test:/\.css$/i,
            use:['style-loader' , 'css-loader']
        },{
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },{
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },{
            test:/\.svg$/,
            loader:'svg-inline-loader'
          },
          ]
    },
    plugins:[
        new HtmlWebpackPlugin({
        template:'./src/index.html',
        filename:'../index.html'
    })]
}