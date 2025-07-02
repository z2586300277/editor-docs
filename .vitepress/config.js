import { defineConfig, loadEnv } from 'vitepress'

export default defineConfig({
  title: "Three.js Editor",
  base: '/editor-docs',
  outDir: './docs',
  description: "ThreeJS Editor, 3D可视化编辑器, three编辑器, 组态编辑器",
  head: [
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-LKJQBJNGVF' }],
    ['script', { async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8697430839896878', crossorigin: 'anonymous' }],
    ['script', {}, `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-LKJQBJNGVF');`],
    ['script', {}, `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?85aef82369b0fe002f0e62a775344e89";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`]
  ],
  themeConfig: {
    logo: 'https://z2586300277.github.io/three-editor/dist/site.png',
    nav: [
      { text: '下载⚡', link: 'https://pan.quark.cn/s/1f507069e8f1' },
      { text: '主页🏠', link: 'https://z2586300277.github.io/' },
      { text: '开源案例🍃', link: 'https://z2586300277.github.io/three-cesium-examples/#/example' },
      { text: '旧版文档📙', link: 'https://z2586300277.github.io/three-editor/docs/dist/' },
      { text: 'npm📦', link: 'https://www.npmjs.com/package/three-edit-cores' },
      { text: 'BiBi📺', link: 'https://space.bilibili.com/245165721' },
      { text: 'QQ群🐧', link: 'https://qm.qq.com/q/QdsKkzo2gI' },
      { text: '组织🏢', link: 'https://openthree.github.io/three-cesium-links/' }
    ],
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '安装', link: '/install' },
          { text: '设计', link: '/design' },
          { text: 'api', link: '/api' }
        ]
      }
    ],
    footer: {
        copyright: `版权所有 ©2019-2025 优雅永不过时`,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/z2586300277/threejs-editor' }
    ]
  },

})
