
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'umi_arcgisAPI',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  chainWebpack(config, { webpack }) {
    config.output.libraryTarget('amd');
  },
  externals: function (context, request, callback) {
    if (/^dojo/.test(request) ||
      /^dojox/.test(request) ||
      /^dijit/.test(request) ||
      /^esri/.test(request) 
    ) {
      return callback(null, `amd ${request}`)
    }
    return callback()
  },
}
