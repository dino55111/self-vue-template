module.exports = (api, options, rootOptions) => {

  api.extendPackage({
    "version": "1.0.0",
    "scripts": {
      "serve": "vue-cli-service serve --port 3000",
      "build": "env BUILD=true vue-cli-service build --mode $NODE_ENV",
      "test:unit": "vue-cli-service test:unit",
      "lint": "npm run lint:script && npm run lint:style",
      "lint:script": "vue-cli-service lint",
      "lint:style": "stylelint --cache src/**/*.{vue,scss} --fix"
    },
    "dependencies": {
      "@vue/composition-api": "^1.0.0-rc.8",
      "axios": "^0.21.0",
      "detect-browser": "^5.2.0",
      "vue-router": "^3.2.0",
      "vuex": "^3.4.0"
    },
    "devDependencies": {
      "@vue/cli-plugin-unit-jest": "^4.5.11",
      "compression-webpack-plugin": "^5.0.1",
      "css-minimizer-webpack-plugin": "^1.1.5",
      "deepmerge": "^4.2.2",
      "lint-staged": "^9.5.0",
      "stylelint": "^13.7.2",
      "stylelint-config-recommended-scss": "^4.2.0",
      "stylelint-order": "^4.1.0",
      "stylelint-scss": "^3.18.0",
      "stylelint-webpack-plugin": "^2.1.0",
      "tailwindcss": "^1.8.10"
    },
    "gitHooks": {
      "pre-commit": "lint-staged"
    },
    "lint-staged": {
      "*.vue": [
        "npm run lint",
        "git add"
      ],
      "*.scss": [
        "npm run lint:style",
        "git add"
      ],
      "*.{js,ts}": [
        "npm run lint:script",
        "git add"
      ]
    }
  })

  // 自動產憑證 script
  if(options.needDevContainer) { 
    api.extendPackage({
      "scripts": {
        "init": "sh script/generateKey.sh"
      }
    })
  }

  // 安裝額外 plugin
  const pluginMap = {
    'vue-meta': '^2.4.0',
    'dayjs': '^1.10.4',
    'lodash': '^4.17.21',
    'vue-outside-events': '^1.1.3',
    'vee-validate': '^3.4.5',
    'velocity-animate': '^1.5.2'
  }
  const pluginResult = {}

  for (let i = 0, max = options.plugins.length; i < max; i++) {
    let key = options.plugins[i]
    let value = pluginMap[key]
    if (value) pluginResult[key] = value
  }
  
  api.extendPackage({
    "dependencies": pluginResult
  })

  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') 
                    || path.startsWith('public/') 
                    || path.startsWith('.eslintrc.js'))
      .forEach(path => delete files[path])
  })

  api.render('./template')

  api.onCreateComplete(() => {
    const fs = require('fs');
    const path = `./${rootOptions.projectName}/`

    fs.rmdirSync(`${path}node_modules`,{ 
      recursive:true, 
    })
    fs.rmdirSync(`${path}package-lock.json`,{ 
      recursive:true, 
    })
  })
}