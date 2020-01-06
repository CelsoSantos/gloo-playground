const devCerts = require("office-addin-dev-certs");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const webpack = require("webpack");

const APP_DIR = path.resolve(__dirname, "/src/");

module.exports = async (env, options) => {
	const dev = options.mode === "development";
	const config = {
		devtool: "source-map",
		output: "bundle.js",
		entry: {
			polyfill: "@babel/polyfill",
			taskpane: APP_DIR + "taskpane:taskpane.ts",
			commands: APP_DIR + "commands:commands.ts"
		},
		resolve: {
			extensions: [".ts", ".tsx", ".html", ".js"]
		},
		module: {
			rules: [
				{
					test: /\.ts$/,
					exclude: /node_modules/,
					use: "babel-loader"
				},
				{
					test: /\.tsx?$/,
					exclude: /node_modules/,
					use: "ts-loader"
				},
				{
					test: /\.html$/,
					exclude: /node_modules/,
					use: "html-loader"
				},
				{
					test: /\.(png|jpg|jpeg|gif)$/,
					use: "file-loader"
				}
			]
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				filename: "taskpane.html",
				template: "//addin/src/taskpane/taskpane.html",
				chunks: ["polyfill", "taskpane"]
			}),
			new CopyWebpackPlugin([
				{
					to: "taskpane.css",
					from: "//addin/src/taskpane/taskpane.css"
				}
			]),
			new HtmlWebpackPlugin({
				filename: "commands.html",
				template: "//addin/src/commands/commands.html",
				chunks: ["polyfill", "commands"]
			})
		],
		devServer: {
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
			https: (options.https !== undefined) ? options.https : await devCerts.getHttpsServerOptions(),
			port: process.env.npm_package_config_dev_server_port || 3000
		}
	};

	return config;
};
