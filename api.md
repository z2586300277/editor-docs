# Api 文档

::: info 简介
包含了整个生命周期使用的Api, 以及如何扩展自定义3D 组件库 和 后期处理
:::

## 初始化

```js
import { ThreeEditor } from 'three-edit-cores'

ThreeEditor.dracoPath = '/draco/' // draco解码器路径

ThreeEditor.__DESIGNS__  // 自定义组件列表

ThreeEditor.__EFFECTS__  // 后期处理列表

const options = {

    fps: null,

    pixelRatio: window.devicePixelRatio * 1,

    webglRenderParams: { antialias: true, alpha: true, logarithmicDepthBuffer: true },

    sceneParams: json // 场景参数

} // 内部参数皆为可选

const threeEditor = new ThreeEditor(DOM, options)

// 添加点击事件
DOM.addEventListener('dblclick', (e) =>  threeEditor.getSceneEvent(e, (info) => {}))

window.addEventListener('resize', () => threeEditor.renderSceneResize()) // 窗口自适应

```

## 编辑器Api

```js

const json  = threeEditor.saveSceneEdit()  // 获取编辑器保存的json 初始化可加载

threeEditor.renderSceneResize() // 渲染器自适应窗口大小

threeEditor.resetEditorStorage(json) // 重置编辑器 场景1 => 场景2

threeEditor.destroySceneRender() // 销毁场景

threeEditor.openControlPanel() // 打开内置的 gui 控制面板

```

## 常用方法

```js

// 截图
const base64 = threeEditor.getSceneEditorImage()
const link = document.createElement('a');
link.href = base64;
link.download = 'myImage.png';
link.click()

threeEditor.setOutlinePass([mesh1, mesh2]) // 选中物体添加轮廓

// 设置css2d css3d 标签
threeEditor.setCss2dDOM(div, position)
threeEditor.setCss3dDOM(div, position)

const { scene } = threeEditor

scene.setSceneBackground(urls) // 设置场景背景 天空盒六张图 urls = []
scene.background = null // 清空天空

scene.setEnvBackground(urls) // 设置环境贴图 天空盒六张图 urls = []
scene.environmentEnabled = true // 开启环境贴图
scene.envBackground = null // 清空环境贴图
```

## 自定义3D 组件

```js
/**
 * component 自定义组件  结构
 * {

    name: String, // 名称

    label: '组件名字', // 标签

    initPanel?: (initFolder, args, cores) => void,

    createPanel?: (mesh, folder, args) => void,

    getStorage: (mesh, args, cores) => storage,

    setStorage: (mesh, storage, args, cores) => void,

    create: (storage, args, cores) => mesh
}
 */
ThreeEditor.__DESIGNS__.push(component)
```

## 自定义后期处理

```js

const install = ({ DOM, renderer }) => {
    const afterimagePass = new AfterimagePass();
    afterimagePass.enabled = false
    afterimagePass.uniforms["damp"].value = 0.96
    return afterimagePass
}

const getStorage = (afterimagePass) => {
    return {
        damp: afterimagePass.uniforms["damp"].value,
        enabled: afterimagePass.enabled
    }
}

const setStorage = (afterimagePass, storage) => {
    if (storage.damp !== undefined)  afterimagePass.uniforms["damp"].value = storage.damp;
}

const createPanel = (afterimagePass, folder) => folder.add(afterimagePass, 'enabled').name('启用残影效果')

const customEffect = { 
    name: 'afterimagePass', 
    label: '残影效果', 
    order: 80,  // 排序
    install, // 安装
    getStorage, // 存储
    setStorage, // 还原
    createPanel // 控制板
}

ThreeEditor.__EFFECTS__.push(customEffect)
```