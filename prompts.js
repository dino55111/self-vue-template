module.exports = [
  {
    name: 'baseUrl',
    type: "input",
    message: "專案路徑, ex: / or /project/",
    validate: input => {
      return input === '/' || new RegExp(/^\/[0-9a-zA-Z\/]+[\/]$/).test(input)
    },
    default: "/"
  },
  {
    name: "needDevContainer",
    type: "confirm",
    message: "是否需要創建 VS Code devContainer 環境 (包含 nginx 設定)",
    default: false
  },
  {
    name: "projectName",
    type: "input",
    message: "請輸入專案顯示名稱, ex: reviews (docker 名稱使用)",
    default: "test",
    when: (input) => {
      return input.needDevContainer
    }
  },
  {
    name: "nginxDomain",
    type: "input",
    message: "請輸入要攔截之 Domain, ex: test.com.tw",
    default: "/",
    when: (input) => {
      return input.needDevContainer
    }
  },
  {
    name: 'plugins',
    type: 'checkbox',
    message: '安裝額外套件: ',
    choices: [
      { name: 'vue-meta^2.4.0', checked: true, value: 'vue-meta' },
      { name: 'dayjs^1.10.4', checked: false, value: 'dayjs' },
      { name: 'lodash^4.17.21', checked: false, value: 'lodash' },
      { name: 'vee-validate^3.4.5', checked: false, value: 'vee-validate' },
      { name: 'vue-outside-events^1.1.3', checked: false, value: 'vue-outside-events' },
      { name: 'velocity-animate^1.5.2', checked: false, value: 'velocity-animate' },
    ]
  },
  {
    name: "needTravisBuild",
    type: "confirm",
    message: "是否建立 travis ci",
    default: false
  },
]