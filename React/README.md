# React

# <a href='https://reactjs.org' style="line-height:60px;vertical-align:middle;text-decoration:none;"><img alt='React' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' height='60px' /> React</a>

React 相关

- [开发环境](开发环境.md)
- [dva 开发规范](开发文档.md)
- [dva + umi 使用笔记](dva使用.md)

### modules

- Webpack 配置
  - [@craco/craco](https://www.npmjs.com/package/@craco/craco)

- 富文本
  - [react-quill](https://github.com/zenoamaro/react-quill) 
  - [react-draft-wysiwyg](https://github.com/jpuri/react-draft-wysiwyg) 
  - [react-lz-editor](https://github.com/leejaen/react-lz-editor) 
  - [braft-editor](https://github.com/margox/braft-editor) 
  - [react-umeditor](https://github.com/liuhong1happy/react-umeditor) 

渲染富文本

```jsx
<div dangerouslySetInnerHTML={{ __html: `你的 HTML 字符串` }} />
```

可用在线视频地址: http://7xkyp2.media1.z0.glb.clouddn.com/MarkEditor2.0.mp4

参考:

https://segmentfault.com/a/1190000012239812

### 组件

组件名必需大写字母开头

```jsx
class CustomComponent extends React.Component
```

布尔类型属性建议拼写完整

```jsx
// 不建议
<CheckBox checked />
// 推荐
<CheckBox checked={true} />
```

### 声明组件的不同方式

1. `React.createElement(component, props, ...children)`

   ```jsx
   function Hello(props) {
       return React.createElement(
       	'h1',
           null,
           'Hello World!'
       )
   }
   ```

2. class ... extends ...

   ```jsx
   class Hello extends React.Component {
       render() {
           return (
               <h1>Hello World!</h1>
           )
       }
   }
   ```

### JSX

1. JSX 会移除空行和开始与结尾处的空格。标签邻近的新行也会被移除，字符串常量内部的换行会被压缩成一个空格 。

2. 组件可以通过数组的形式返回多个元素

   ```jsx
   class Multi extends React.Component {
       render() {
           return [
               <h1>Hello World!</h1>,
               <p>This is a paragraph.</p>
           ]
       }
   }
   ```


### React 离开确认提醒

参考：https://juejin.im/post/5a982b15f265da237313de1a

​	

### antd-mobile Carousel 只有一个子元素时的问题

当 `<Carousel>` 有多于一个子元素的时候会使用 `<li>` 包裹，当只有一个子元素的时候不会使用 `<li>` 包裹，但 antd-mobile 似乎通过 JS 修改了子元素最近一层父元素的内联 style 的 height 为 auto，导致再只有一个子元素时设置高无效。

解决方案时在子元素外出包裹一个空的 `<div>`。