const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// const ExtractTextPlugin = require("extract-text-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	mode: "production",
	entry: {main: "./src/index.js"},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[app.bundle].[chunkhash].js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				options: {
					presets: [
						"@babel/preset-env",
						"@babel/preset-react"
					]
				}
			},
			{
				test: /\.scss$/,
				use: [ 
					"style-loader", 
					MiniCssExtractPlugin.loader, 
					"css-loader",
					"sass-loader"
				],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
	new HtmlWebpackPlugin({
		inject: false,
		hash: true,
		template: "./src/index.html",
		filename: "index.html"
	}),
	new MiniCssExtractPlugin({
		filename: "styles.[contenthash].css"
	})
	]
}