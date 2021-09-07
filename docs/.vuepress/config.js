module.exports = {
  base: "/zero/",
  dest: "dist",
  title: "Jason Lee",
  description: "技术总结",
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: 'blog'}],
    ['meta', { name: 'theme-color', content: '#11a8cd'}], // 移动浏览器主题颜色
  ],
  markdown: {
    toc: {
      includeLevel: [1, 2, 3, 4],
    },
  },
  theme: "vdoing",
  plugins: [["@dovyp/vuepress-plugin-clipboard-copy", true]],
  serviceWorker: false,
  themeConfig: {
    repo: "LRG00/zero",
    // editLinks: true, // 编辑链接
    // docsDir: "docs", // 编辑的文件夹
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    // editLinkText: "在 GitHub 上编辑此页",
    author: {
      // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: "jason lee", // 必需
      href: "https://github.com/LRG00", // 可选的
    },
    lastUpdated: "上次更新",
    footer: {
      // 页脚信息
      createYear: 2019, // 博客创建年份
      copyrightInfo: "jason lee | MIT License", // 博客版权信息，支持a标签
    },
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端",
        items: [
          {text: "学习笔记", items: [
            { text: "html&css", link: "/pages/6d546b/" },
            { text: "webpack", link: "/pages/fe0b24/" },
            { text: "常用资源", link: "/pages/039d46/" },
          ]}
        ],
      },
      {
        text: "interview",
        link: "/pages/35a15c/",
        items: [
          { text: "css", link: "/pages/35a15c/" },
          { text: "javascript", link: "/pages/1d1a2e/" },
          { text: "es6常问", link: "/pages/7d449f/" },
          { text: "手写代码", link: "/pages/da0a0a/" },
          { text: "错误监控", link: "/pages/ade6ea/" },
          { text: "webpack", link: "/pages/6423fa/" },
          { text: "vue框架", link: "/pages/d4dc7d/" },
          { text: "浏览器相关", link: "/pages/d4dc7d/" },
          { text: "计算机网络", link: "/pages/5bae33/" },
          { text: "数据结构和算法", link: "/pages/bb8af9/" },
        ],
      },
      {
        text: "electron",
        link: "/pages/54895f/",
        items: [
          {
            text: "学习笔记",
            link: "/pages/54895f/",
          },
        ],
      },
      {
        text: "nodejs",
        link: "/pages/4ff0e8/",
      },
    ],
    sidebar: { mode: "structuring", collapsable: false },
    updateBar: {
      // 最近更新栏
      showToArticle: false, // 显示到文章页底部，默认true
      // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    // sidebar: {
    //   '/interview/': [
    //     {
    //       title: '手写JS',
    //       collapsable: true,
    //     },
    //     {
    //       title: 'css',
    //       collapsable: true,
    //     },
    //     {
    //       title: 'js基础',
    //       collapsable: true,
    //       children: [
    //         ['javascript/', '展开'],
    //         // 'shouxie/bind',
    //       ]
    //     },
    //     {
    //       title: '错误监控',
    //       collapsable: true,
    //       children: [
    //         ['error1/', '展开'],
    //         // 'shouxie/bind',
    //       ]
    //     },
    //     {
    //       title: 'es6',
    //       collapsable: true,
    //       children: [
    //         ['es6/', '展开'],
    //         // 'shouxie/bind',
    //       ]
    //     },
    //   ],
    //   '/node/': []
    // }
  },
};
