# dva 使用记录



### 修改端口

```bash
$ set PORT=4000 && npm start
```

### 文档

- [UmiJS](https://umijs.org/docs/zh-Hans/getting-started.html) 
- [dva](https://github.com/dvajs/dva/blob/master/README_zh-CN.md) 
- [serve](https://github.com/zeit/serve) - Static file serving and directory listing.


### 历程

**yarn 添加全局依赖**

```bash
$ yarn global add umi
```

**打包后图片路径不对的问题**

修改项目目录下的 `.webpackrc.js` 文件，新增如下内容

```js
export default {
    ...
    "publicPath": "/static/"
}
```

**开发环境下根布局卸载问题**

在开发环境中，进入新页面的时候 `layout` 会 `componentWillUnmount` 后重新 `componentDidMount`。生产环境不存在此问题。

**无论开发环境还是生产环境进入下一个页面，当前页面会卸载掉(unMount)**

**页面跳转加载组件**

`.umirc.js` 配置

```javascript
export default {
    loading: './src/PageLoadingComponent'
}
```

在开发环境下不生效，只有在生产环境中才会生效

## 笔记

### [React 事件](https://reactjs.org/docs/handling-events.html)

参考: [react阻止冒泡事件，绝对干货](https://zhuanlan.zhihu.com/p/26742034)

#### 事件冒泡

从目标元素向外传播事件，由内而外直到最外层。

1. 阻止合成事件的冒泡

    ```jsx
    handleOuterClick = (e) => {
        console.log('外层点击事件');
    }

    handleInnerClick = (e) => {
        // 阻止事件冒泡
     	e.stopPropagation();
        console.log('里层点击事件');
    }

    render() {
        return (
         	<div onClick={ this.handleOuterClick }>
            	<a onClick={ this.handleInnerClick } />
            </div>
        )
    }
    ```

2. 阻止合成事件与最外层 document 上事件间的冒泡

   ```jsx
   componentDidMount() {
       document.addEventListener('click', () => {
           console.log('document 点击事件');
       })
   }

   handleInnerClick = (e) => {
       // 阻止合成事件与最外层 document 上事件间的冒泡
       e.nativeEvent.stopImmediatePropagation();
       console.log('里层点击事件');
   }

   render() {
       return (
           <div>
           	<a onClick={ this.handleInnerClick } />
           </div>
       )
   }
   ```

   ​

#### 事件捕获

时间捕获会优先调用结构树最外层的元素上绑定的事件监听器，然后依次向内调用，一直调用到目标元素上的事件监听器为止。事件捕获并不是一个通用的技术，在低于 IE9 版本的浏览器中无法使用。Rect 的合成事件并没有实现事件捕获，仅仅支持了事件冒泡机制。

参考: [EventTarget.addEventListener()](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

#### 阻止原生事件传播

```jsx
handleClick = (e) => {
    // 阻止默认行为
	e.preventDefault();
    console.log('阻止了 <a> 的默认跳转行为')
}

render() {
    return (
    	<div>
        	<a onClick={ this.handleClick } />
        </div>
    )
}
```

​