---
title: 产品预览
description: Three.js Editor 产品与案例展示。
sidebar: false
aside: false
outline: false
prev: false
next: false
---

<style>
.pg {
  max-width: 960px;
  margin: 0 auto;
  padding: 0.5rem 0 2.75rem;
}
.pg__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5rem;
  row-gap: 1.75rem;
}
.pg__card {
  display: flex;
  flex-direction: column;
}
.pg__cover {
  position: relative;
  display: block;
  aspect-ratio: 16 / 11;
  border-radius: 14px;
  overflow: hidden;
  text-decoration: none;
  isolation: isolate;
  background: #1a1a1e;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}
.pg__photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: 0;
}
.pg__cover::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 0.05) 40%,
    rgba(0, 0, 0, 0.55) 100%
  );
  pointer-events: none;
}
.pg__cover::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  mix-blend-mode: multiply;
  opacity: 0.55;
  pointer-events: none;
}
.pg__mark {
  position: absolute;
  left: 0.95rem;
  top: 0.85rem;
  z-index: 2;
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  color: rgba(255, 255, 255, 0.78);
}
.pg__big {
  position: absolute;
  left: 0.95rem;
  right: 0.95rem;
  bottom: 0.9rem;
  z-index: 2;
  margin: 0;
  font-size: clamp(1.25rem, 2vw, 1.55rem);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0.04em;
  color: #fff;
  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  border: none;
  padding: 0;
}
.pg__meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  text-align: center;
  padding-top: -10px;
}
.pg__name {
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.45;
  letter-spacing: 0.02em;
  color: var(--vp-c-text-1);
  border: none;
  padding: 0;
}
.pg__links {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.04em;
}
.pg__links a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.pg__links a:hover {
  opacity: 0.75;
}
.pg__dot {
  margin: 0 0.4rem;
  color: var(--vp-c-text-3);
  font-weight: 400;
}

@media (max-width: 800px) {
  .pg__grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .pg__grid { grid-template-columns: 1fr; }
}
.VPDoc:not(.has-sidebar) .content,
.VPDoc:not(.has-sidebar) .content-container {
  max-width: 1020px !important;
}
</style>

<div class="pg">
<div class="pg__grid">
<article class="pg__card">
<a class="pg__cover pg__cover--ai" href="https://z2586300277.github.io/threejs-editor-beta/" target="_blank" rel="noopener">
<img class="pg__photo" src="https://z2586300277.github.io/file-server/images/ai_editor.webp" alt="人工智能三维编辑器" loading="lazy" />
<span class="pg__mark">2026</span>
<span class="pg__big">AI 三维</span>
</a>
<div class="pg__meta">
<h4 class="pg__name">Ai三维编辑器</h4>
<div class="pg__links"><a href="https://github.com/z2586300277/threejs-editor-beta" target="_blank" rel="noopener">github源码</a></div>
</div>
</article>
<article class="pg__card">
<a class="pg__cover pg__cover--classic" href="https://z2586300277.github.io/three-editor/dist/" target="_blank" rel="noopener">
<img class="pg__photo" src="https://z2586300277.github.io/3d-file-server/images/editor.jpg" alt="经典编辑器" loading="lazy" />
<span class="pg__mark">2024</span>
<span class="pg__big">经典版</span>
</a>
<div class="pg__meta">
<h4 class="pg__name">经典编辑器</h4>
<div class="pg__links"><a href="https://github.com/z2586300277/three-editor" target="_blank" rel="noopener">github源码</a></div>
</div>
</article>
<article class="pg__card">
<a class="pg__cover pg__cover--beta" href="https://z2586300277.github.io/threejs-editor/" target="_blank" rel="noopener">
<img class="pg__photo" src="https://z2586300277.github.io/file-server/images/new_editor.webp" alt="3D组件化" loading="lazy" />
<span class="pg__mark">2025</span>
<span class="pg__big">3D组件化</span>
</a>
<div class="pg__meta">
<h4 class="pg__name">新组态编辑器</h4>
<div class="pg__links"><a href="https://github.com/z2586300277/threejs-editor" target="_blank" rel="noopener">github源码</a></div>
</div>
</article>
<article class="pg__card">
<a class="pg__cover pg__cover--beta" href="https://z2586300277.github.io/go-view-three-editor/" target="_blank" rel="noopener">
<img class="pg__photo" src="https://z2586300277.github.io/three-cesium-examples/threeExamples/openSource/goViewThreeEditor.jpg" alt="goview" loading="lazy" />
<span class="pg__mark">2026</span>
<span class="pg__big">goview 集成</span>
</a>
<div class="pg__meta">
<h4 class="pg__name">goview集成编辑器</h4>
<div class="pg__links"><a href="https://github.com/z2586300277/go-view-three-editor" target="_blank" rel="noopener">github源码</a></div>
</div>
</article>
<article class="pg__card">
<a class="pg__cover pg__cover--beta" href="https://z2586300277.github.io/three-webgpu-editor/" target="_blank" rel="noopener">
<img class="pg__photo" src="https://z2586300277.github.io/three-editor/dist/home.png" alt="goview" loading="lazy" />
<span class="pg__mark">2026</span>
<span class="pg__big">webgpu</span>
</a>
<div class="pg__meta">
<h4 class="pg__name">webgpu编辑器</h4>
<div class="pg__links"><a href="https://github.com/z2586300277/three-webgpu-editor" target="_blank" rel="noopener">github源码</a></div>
</div>
</article>


</div>
</div>
