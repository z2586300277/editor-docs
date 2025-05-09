# 创作理念

- **集成Three.js各功能**

  three-edit-core使用最简,最优,性能最佳的的流程,将three.js各个通用功能模块集成了进去。

```js
/* 如用一句代码 实际上已经为你进行了 three.js 一系列功能的搭建*/
const threeEditor = new ThreeEditor(document.querySelector('#threeBox'))

const scene = new THREE.Scene() // 创建场景

const camera = new THREE.PerspectiveCamera() // 创建相机

const renderer = new THREE.WebGLRenderer() // 创建渲染器

const controls = new THREE.OrbitControls() // 创建轨道控制

const transformControls = new THREE.TransformControls() // 创建变换控制

const effectComposer = new THREE.EffectComposer() // 创建后期渲染

const css3DRender = new THREE.CSS3DRenderer() // 创建Css3D渲染

const css2DRender = new THREE.CSS2DRenderer() // 创建Css2D渲染
```

- **书写原始Three.js功能**

  three-edit-cores 最优的Three.js搭建架构封装成了一个类

```js

/* 你可以 通过解构方式取出,然后对其使用 Three.js 的操作毫无影响 */
const { scene, camera, renderer, controls, transformControls, ... } =  threeEditor

const box = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial())

scene.add(box)

camera.position.copy(new THREE.Vector3(0, 0, 10))

renderer.setClearColor(0x000000)

controls.enableDamping = true

transformControls.attach(box)

```