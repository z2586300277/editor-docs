import { defineConfig, loadEnv } from 'vitepress'

export default defineConfig({
  title: "ThreeJS Editor",
  base: '/docs',
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

    ],
    footer: {
        copyright: `版权所有 ©2019-2025 优雅永不过时`,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/z2586300277/threejs-editor' }
    ]
  },

})
