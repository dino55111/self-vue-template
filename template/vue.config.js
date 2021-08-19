const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const resolve = (dir) => path.join(__dirname, '.', dir)

module.exports = {
  publicPath: process.env.BASE_URL,
  outputDir: path.join(__dirname, `dist${process.env.BASE_URL}`),
  productionSourceMap: false,
  devServer: {
    // public: 'https://domain',
    disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    extract: {
      filename: process.env.BUILD === 'true' ? '[name].[hash:8].css' : '[name].css',
      chunkFilename: process.env.BUILD === 'true' ? '[name].[hash:8].css' : '[name].css'
    },
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/style/config/_index.scss";'
      }
    }
  },
  configureWebpack: (config) => {
    const result = {
      mode: process.env.BUILD ? 'production' : 'development', // 相應地使用其內置優化
      output: {
        filename: '[name].[hash:8].js',
        chunkFilename: '[name].[hash:8].js'
      },
      resolve: {
        alias: {
          '~': resolve('src'),
          '@': resolve('src')
        }
      },
      plugins: [
        new StyleLintPlugin({
          files: ['src/**/*.{vue,scss}']
        })
      ],
      optimization: {}
    }

    if (process.env.BUILD) {
      // 壓縮 css
      result.optimization.minimize = true
      result.optimization.minimizer = [new CssMinimizerPlugin()]

      // gzip
      result.plugins.push(
        new CompressionPlugin({
          test: /\.js$|\.html$|.\css/,
          threshold: 10240,
          deleteOriginalAssets: false
        })
      )
    }

    return result
  }
}