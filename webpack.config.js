const path = require('path' );
const webpack = require('webpack');
const HTMLWEBPACKPLUGIN = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

var config = {
	mode: 'development',
	entry: {
		index: path.resolve(__dirname,'./src/index.js'),
	},

	optimization: {
		splitChunks: {
			minChunks: 1,
			cacheGroups: {
				commons: {
					name: "commons",
					chunks: "initial"
				}
			}
		}
	},
	plugins: [
		new VueLoaderPlugin(),
		new HTMLWEBPACKPLUGIN({
			filename: "index.html",
			template: "src/index.html",
			minify: true,
			chunks: ['index','commons']
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: __dirname+'/dist',
		publicPath: "./",
	},
	module: {
		rules:[
			{test:/\.css$/ , use: ['style-loader','css-loader']},
			{test:/\.(png|jpg|svg|gif|jpeg)$/ , use:['file-loader']},
			{test:/\.vue$/ ,use:'vue-loader' },
			{test:/\.html$/ ,use:'html-loader'},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
	         	use: 'url-loader'
       		},
			{
				test: /\.(scss)$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader', // Run postcss actions
						options: {
							plugins: function () { // postcss plugins, can be exported to postcss.config.js
								return [
									require('autoprefixer')
								];
							}
						}
					},
					{  loader: 'sass-loader'}
				]
			}
		]
	},
	resolve : {
		alias: {
			vue: 'vue/dist/vue.esm.js'
		}
	},

}
module.exports = config