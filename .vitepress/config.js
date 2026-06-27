import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vitepress'

const SITE_URL = 'https://z2586300277.github.io/editor-docs'
const OG_IMAGE = 'https://z2586300277.github.io/three-editor/dist/site.png'

function toCanonicalUrl(page) {
  const normalized = page.startsWith('/') ? page : `/${page}`
  const htmlPath = normalized.replace(/\.md$/, '.html').replace(/\/index\.html$/, '/')
  return `${SITE_URL}${htmlPath}`
}

const SITEMAP_PAGES = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'install', priority: '0.9', changefreq: 'weekly' },
  { path: 'design', priority: '0.8', changefreq: 'monthly' },
  { path: 'api', priority: '0.9', changefreq: 'weekly' },
  { path: 'details', priority: '0.9', changefreq: 'weekly' },
  { path: 'pdf', priority: '0.7', changefreq: 'monthly' },
]

export default defineConfig({
  title: 'Three.js Editor',
  titleTemplate: ':title · Three.js Editor',
  description:
    'Three.js Editor 官方文档：国内首款开源 3D 可视化 AI 编辑器，基于 three-edit-cores，支持 Vue/React 集成、组态编辑与场景搭建。',
  lang: 'zh-CN',
  base: '/editor-docs/',
  outDir: './docs',
  srcExclude: ['README.md'],
  head: [
    [
      'meta',
      {
        name: 'keywords',
        content:
          'Three.js,3D编辑器,可视化编辑器,组态编辑器,three-edit-cores,三维编辑器,AI编辑器,WebGL,开源编辑器',
      },
    ],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'author', content: '北京优悦幻光科技有限公司' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Three.js Editor' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:image', content: OG_IMAGE }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: OG_IMAGE }],
    ['link', { rel: 'icon', href: OG_IMAGE }],
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-LKJQBJNGVF' }],
    [
      'script',
      {
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8697430839896878',
        crossorigin: 'anonymous',
      },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-LKJQBJNGVF');`,
    ],
    [
      'script',
      {},
      `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?85aef82369b0fe002f0e62a775344e89";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`,
    ],
    [
      'style',
      {},
      `
    .VPNavBarTitle .title::after {
      content: url('https://visitor-badge.laobi.icu/badge?page_id=three_editor&format=true');
      margin-left: 8px;
      vertical-align: middle;
    }`,
    ],
  ],
  transformHead({ pageData, siteData, page }) {
    const canonical = toCanonicalUrl(page)
    const title = pageData.title || siteData.title
    const description =
      pageData.description ||
      pageData.frontmatter?.description ||
      siteData.description

    return [
      ['link', { rel: 'canonical', href: canonical }],
      ['meta', { property: 'og:url', content: canonical }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
    ]
  },
  async buildEnd(siteConfig) {
    const outDir = path.resolve(siteConfig.outDir || './docs')
    const lastmod = new Date().toISOString().slice(0, 10)
    const urls = SITEMAP_PAGES.map(({ path: pagePath, priority, changefreq }) => {
      const loc = pagePath ? `${SITE_URL}/${pagePath}.html` : `${SITE_URL}/`
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].join('\n')
    }).join('\n')

    const sitemap = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      urls,
      '</urlset>',
    ].join('\n')

    fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap, 'utf-8')
  },
  themeConfig: {
    logo: OG_IMAGE,
    nav: [
      { text: '编辑器🍏', link: 'https://z2586300277.github.io/threejs-editor/' },
      { text: '旧版文档📙', link: 'https://z2586300277.github.io/three-editor/docs/dist/' },
      { text: '联系☘️', link: 'https://z2586300277.github.io/' },
      { text: '企业🏬', link: 'http://site.threehub.cn/' },
      { text: '下载⚡', link: 'https://pan.quark.cn/s/1f507069e8f1' },
      { text: '开源案例🍃', link: 'https://z2586300277.github.io/three-cesium-examples/#/example' },
      { text: 'npm📦', link: 'https://www.npmjs.com/package/three-edit-cores' },
      { text: 'BiBi📺', link: 'https://space.bilibili.com/245165721' },
      { text: 'QQ群🐧', link: 'https://qm.qq.com/q/QdsKkzo2gI' },
      { text: '组织🏢', link: 'https://openthree.github.io/three-cesium-links/' },
    ],
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '安装', link: '/install' },
          { text: '设计', link: '/design' },
          { text: 'Api', link: '/api' },
          { text: '完整说明', link: '/details' },
        ],
      },
    ],
    footer: {
      copyright: `版权所有 ©2019-${new Date().getFullYear()} 北京优悦幻光科技有限公司`,
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/z2586300277/threejs-editor' }],
  },
})
