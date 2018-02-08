---
title: React Navigation 集成 Redux
date: 2017年12月7日21:54:53
tags: [React Native, redux]
---
[react-navigation](https://reactnavigation.org/docs/intro/) 是 React Native 官方推荐的导航库。[redux](https://redux.js.org/) 是一个状态容器，redux 的简单使用可参考阮一峰的 [Redux 入门教程](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)，现在网上也有很多中文文档。

### 首先写一个 navigator
```js
export const AppNavigator = StackNavigator({
    Home: { screen: HomeTab },  // 这是一个 TabNavigator
    Details: { screen: DetailPage },  // 简单的页面
  });
```

集成 Redux 主要含三部分：Store，Action，Reducer

![Redux](http://upload-images.jianshu.io/upload_images/3762216-ce7c29ca1d694ed5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/800)

### Action
```js
export function getBanners() {
    return dispatch => {
        // request 是我自己封装的网络请求方法
        request({
            url: apis.BANNER  // 常量 API 地址
        }).then(res => {
            dispatch({
                type: actionTypes.BANNER,  // 常量行为类型
                data: res
            })
        })
    }
}
```

### Reducer
1.  othersReducer.js
```js
// 初始 state
const initState = {
    banners: [],
    articles: [],
    loading: false
}

export default function discoveryData(state=initState, action) {
    switch(action.type) {
        case actionTypes.BANNER:
            return {...state, banners:action.data, loading:false}
        default:
            return state;
    }
}
```
2. navReducer.js 用于导航
```js
import { AppNavigator } from '../navigators/AppNavigator';
import { NavigationActions } from 'react-navigation';
// const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
// const initialNavState = AppNavigator.router.getStateForAction(firstAction);
const navReducer = (state, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
}

export default navReducer;
```
你应该注意到了，我将 initialNavState 部分注释掉了，因为我 Home 采用了的是 TabNavigator，如果不注释掉会在 getStateForAction 时报 `undefined` 错误
![undefined](http://upload-images.jianshu.io/upload_images/3762216-a738f6219e7475a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/400)
解决方案多种：
一种是将 TabNavigator 放在单纯的 Component 中作为 StackNavigator 的 screen，这样就可以使用 initialNavState了，弊端是不方便从其它页面跳转到  TabNavigator 的指定 Tab 页。
另一种就是我现在使用的方案了。
如果你有更好的解决方案请告诉我！！
3. 整合 Reducer
```js
import { combineReducers } from 'redux';
import navReducer from './navReducer';
import othersReducer from './othersReducer';

const AppReducer = combineReducers({
    nav: navReducer,
    othersReducer
});

export default AppReducer;
```

### 配置 Store
```js
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';  // 中间件
import reducers from './../reducers';  // 整合后的 Reducer

const configStore = applyMiddleware(thunkMiddleware)(createStore)

export default configStore(reducers);
```

### 自定义 Navigator
```js
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';

class AppWithNavigationState extends Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    dispatch(NavigationActions.back())
    return !(nav.index===0)
  }

  render() {
    return (
      <AppNavigator 
        navigation={addNavigationHelpers({ 
          dispatch: this.props.dispatch,
          state: this.props.nav
        })} 
      />
    )
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
```

### 绑定到应用中
在入口文件中绑定 Redux 的 store 管理库
```js
import { Provider } from 'react-redux';
import store from './src/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
```
[下载源码](https://github.com/Hongye567/react-native-mark)
