# Api 文档

::: info 简介
包含了整个生命周期使用的Api, 以及如何扩展自定义3D 组件库 和 后期处理
:::

## 初始化

```js
import { ThreeEditor } from 'three-edit-cores'

ThreeEditor.dracoPath = '/draco/' // draco解码器路径

window.GUI_PARAMS = { step: 0.1 } // 内置gui 控制面板 数字步长 值

const options = {

    fps: null, // 例如60 则最大60帧率, 如果没值则是以显示器帧率为准

    pixelRatio: window.devicePixelRatio * 1, // 渲染器像素比 原始属性

    webglRenderParams: { antialias: true, alpha: true, logarithmicDepthBuffer: true }, // 渲染器参数

    sceneParams: json // 保存场景模板参数

} // 内部参数皆为可选

const threeEditor = new ThreeEditor(DOM, options)

// 添加点击事件
DOM.addEventListener('dblclick', (e) =>  threeEditor.getSceneEvent(e, (info) => {}))

window.addEventListener('resize', () => threeEditor.renderSceneResize()) // 窗口自适应

```

## 自定义扩展项
```js
ThreeEditor.__DESIGNS__  // 自定义组件列表

ThreeEditor.__EFFECTS__  // 后期处理列表

ThreeEditor.__GLSLLIB__  // 着色器列表

```
- 三个扩展项均为数组, 按照规范书写扩展组件或功能, 直接 push 进去即可加载扩展


## 编辑器Api

```js

const json  = threeEditor.saveSceneEdit()  // 获取编辑器保存的json 初始化可加载

threeEditor.renderSceneResize() // 渲染器自适应窗口大小

threeEditor.resetEditorStorage(json) // 重置编辑器 场景1 => 场景2

threeEditor.destroySceneRender() // 销毁场景

threeEditor.openControlPanel() // 打开内置的 gui 控制面板

```

## import 内置简易函数

```js
import { getObjectBox3, createGsapAnimation } from 'three-edit-cores'

// 获取物体包围盒信息
const info = getObjectBox3(mesh)

// 创建gsap动画
const animation = createGsapAnimation(mesh.position, { x: 1, y: 1, z: 1 }, {
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
})

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
threeEditor.setCss2dDOM(div, position) // return css2dObject
threeEditor.setCss3dDOM(div, position) // return css3dObject

const { scene } = threeEditor

scene.setSceneBackground(urls) // 设置场景背景 天空盒六张图 urls = []
scene.background = null // 清空天空

scene.setEnvBackground(urls) // 设置环境贴图 天空盒六张图 urls = []
scene.environmentEnabled = true // 开启环境贴图
scene.envBackground = null // 清空环境贴图

threeEditor.scene.addUpdateListener(() => {}) // 动画渲染帧
threeEditor.scene.removeUpdateListener(() => {}) // 移除动画渲染帧

threeEditor.handler.helpers.showAxes = true // 显示坐标轴
threeEditor.handler.helpers.showGrid = true // 显示网格

// 监听模型加载进度
Promise.all(threeEditor.modelCores.progressList.map(i => {
    return new Promise(resolve => {
        i.loaderService.complete = () => resolve();
    })
})).then(() => {
    console.log('所有模型加载完成');
});
// 其余属性控制自行参考打印 ...

```

```js
scene.ADDCALL?.(obj) // 场景添加回调 scene.ADDCALL = (obj) => 每次有物体添加都会回调

scene.REMOVECALL?.(obj) // 场景移除回调 scene.REMOVECALL = (obj) => 每次有物体移除都会回调

obj.ADDCALL?.() // 物体添加场景的时候调用例如 group.ADDCALL = () => console.log('group添加到场景了')

obj.REMOVECALL?.() // 物体从场景移除的时候调用例如 group.REMOVECALL = () => console.log('group从场景移除了')

obj.SET_STORAGE_CALL?.(storage) // 物体存储赋值后调用 例如 group.SET_STORAGE_CALL = (storage) => console.log('group存储了', storage)

```

## 自定义3D 组件

- 自定义组件开发参考 [链接](https://github.com/z2586300277/threejs-editor/tree/main/src/editor/compoents)

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

// mesh.disBlendShader = true // 禁用配置着色面板
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

## 自定义着色器 扩展

```js
ThreeEditor.__GLSLLIB__.push(
    {
        name: '太阳照射',
        commonUniforms: true, // 公共 uniforms
        vertex: 'vUv-material', // uv
        fragment:`
        float cheap_star(vec2 uv, float anim)
        {
            uv = abs(uv);
            vec2 pos = min(uv.xy/uv.yx, anim);
            float p = (2.0 - pos.x - pos.y);
            return (2.0+p*(p*p-1.5)) / (uv.x+uv.y);      
        }
        <SPLIT_PLACEHOLDER>
        vec2 uv = ( gl_FragCoord.xy - .5*iResolution.xy ) / iResolution.y;
        <UV_PLACEHOLDER>
        uv *= 2.0 * ( cos(iTime * 2.0) -2.5); // scale
        float anim = sin(iTime * 12.0) * 0.1 + 1.0;
        vec3 col = cheap_star(uv, anim) * vec3(0.35,0.2,0.15);
        `,
        key: 'col', // 最终颜色值变量字段
        commonFinish: true, // 公共结束尾部
        render: 'iTime+speed' // 渲染类型 iTime += speed
    }
)
```
