module.exports = {
  title: '赞同科技',
  description: '赞同科技',
  lang: "zh-CN",
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  port: 8080,
  configureWebpack: {
    resolve: {
      alias: {
        '@/': '../../'
      }
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',  // 设置网页语言
      title: '孙锋锋的文档',
      description: 'Static Site Generator for Vuepress'
    }
  },
  base: '/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  dest: 'dist',
  themeConfig: {
    // logo: '/assets/img/logo.png', // 导航栏logo
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    // 导航栏配置
    // navbar: false, // 禁用导航栏
    nav: [
      { text: "node", link: "/node/" },
      { text: "guide", link: "/guide/"},
      {
        text: '前端算法',
        link: '/algorithm/',
        target: '_blank'
      }, // 内部链接 以docs为根目录
      {
        text: '博客',
        link: 'http://www.sunfengfeng.com/'
      }, // 外部链接
      // 下拉列表
      {
        text: 'GitHub',
        ariaLabel: 'Language Menu',
        items: [{
            text: 'GitHub地址',
            link: 'https://github.com/OBKoro1'
          },
          {
            text: '算法仓库',
            link: 'https://github.com/OBKoro1/Brush_algorithm'
          }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '语音合成',
          sidebarDepth: 2,
          path: '/baidu-speech/' // 可选的, 应该是一个绝对路径
        },
        {
          title: '自助工具',
          sidebarDepth: 1,
          path: '/ss-utils/' // 可选的, 应该是一个绝对路径
        },
        {
          title: '外设调用',
          // children: [
          //   '/device/cashIn.md'
          // ]
          children: [
            {title: '现金存入', path: '/device/CashIn.md'},
            {title: '现金支取', path: '/device/CashDispenser.md'},
            {title: '凭条打印机', path: '/device/ReceiptPrinter.md'},
            {title: '存单读取', path: '/device/DepositReader.md'},
            {title: '存单打印', path: '/device/DepositPrinter.md'},
            {title: '磁条刷卡器', path: '/device/SPCardReader.md'},
            {title: '存折打印', path: '/device/PassbookPrinter.md'},
            {title: '摄像头', path: '/device/Camera.md'},
            {title: '发卡器', path: '/device/CardDispenser.md'},
            {title: '文档打印机', path: '/device/DocumentPrinter.md'},
            {title: '传感器与指示器', path: '/device/SIU.md'},
          ]
        },
        {
          title: '最新组件',
          children: [
            '/el-drawer/',
            '/new-components/'
          ]
        },
        {
          title: '加密解密',
          path: '/crypto-js/' // 可选的, 应该是一个绝对路径
        },
        {
          title: '组件',
          path: '/components/' // 可选的, 应该是一个绝对路径
        },
        {
          title: '超简易vue.js',
          path: '/vue/'
        }
      ],
      '/node/': [
        {
          title: '中文',
          path: 'zh' // 可选的, 应该是一个绝对路径
        },
        {
          titile: '语音合成',
          path: 'baidu-speech/'
        }
      ]
    },
    // sidebar: [
    //   {
    //     title: '语音合成',
    //     path: '/baidu-speech/' // 可选的, 应该是一个绝对路径
    //   },
    //   {
    //     title: '自助工具',
    //     path: '/ss-utils/' // 可选的, 应该是一个绝对路径
    //   },
    //   {
    //     title: '外设调用',
    //     // children: [
    //     //   '/device/cashIn.md'
    //     // ]
    //     children: [
    //       {title: '现金存入', path: '/device/CashIn.md'},
    //       {title: '现金支取', path: '/device/CashDispenser.md'},
    //       {title: '凭条打印机', path: '/device/ReceiptPrinter.md'},
    //       {title: '存单读取', path: '/device/DepositReader.md'},
    //       {title: '存单打印', path: '/device/DepositPrinter.md'},
    //       {title: '磁条刷卡器', path: '/device/SPCardReader.md'},
    //       {title: '存折打印', path: '/device/PassbookPrinter.md'},
    //       {title: '摄像头', path: '/device/Camera.md'},
    //       {title: '发卡器', path: '/device/CardDispenser.md'},
    //       {title: '文档打印机', path: '/device/DocumentPrinter.md'},
    //       {title: '传感器与指示器', path: '/device/SIU.md'},
    //     ]
    //   },
    //   {
    //     title: '最新组件',
    //     children: [
    //       '/el-drawer/',
    //       '/new-components/'
    //     ]
    //   },
    //   {
    //     title: '加密解密',
    //     path: '/crypto-js/' // 可选的, 应该是一个绝对路径
    //   },
    //   {
    //     title: '组件',
    //     path: '/components/' // 可选的, 应该是一个绝对路径
    //   },
    //   {
    //     title: '超简易vue.js',
    //     path: '/vue/'
    //   }
    // ],
    sidebarDepth: 2
  }
};