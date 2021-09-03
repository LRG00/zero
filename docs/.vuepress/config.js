module.exports = {
  base: '/zero/',
  dest: 'dist',
  title: 'Jason Lee',
  description: '技术总结',
  head: [
    // ['link', { rel: 'icon', href: `/logo.png` }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  markdown: {
    toc: {
        includeLevel:[1, 2, 3, 4]
    }
  },
  plugins: [
    ['@dovyp/vuepress-plugin-clipboard-copy', true],
  ],
  serviceWorker: false,
  themeConfig: {
    repo: 'LRG00/zero',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [
      {
        text: 'interview',
        link: '/interview/shouxie/'
      },
      {
        text: 'node',
        link: '/node/new/'
      },
    ],
    sidebar: {
      '/interview/': [
        {
          title: '手写JS',
          collapsable: true,
          children: [
            ['shouxie/', '展开'],
            // 'shouxie/bind',
          ]
        },
        {
          title: 'css',
          collapsable: true,
          children: [
            ['css/', '展开'],
            // 'shouxie/bind',
          ]
        },
        {
          title: 'js基础',
          collapsable: true,
          children: [
            ['javascript/', '展开'],
            // 'shouxie/bind',
          ]
        },
        {
          title: '错误监控',
          collapsable: true,
          children: [
            ['error1/', '展开'],
            // 'shouxie/bind',
          ]
        },
        {
          title: 'es6',
          collapsable: true,
          children: [
            ['es6/', '展开'],
            // 'shouxie/bind',
          ]
        },
      ],
      '/node/': []
    }
  }
}
