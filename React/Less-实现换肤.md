---
title: Less 实现换肤
date: 2018-5-21 16:49:17
tags: [Less, Skin]
---

# Less 实现换肤

*Component.js*

```javascript
import styles from './Component.less';
```

*Component.less*

```less
@import 'vars.less';
...
```



*theme.js*

```javascript
export default {
    Component: import '../Component.less'
}
```

*Component.js*

```javascript
import { Component as styles } from '../theme';
```

