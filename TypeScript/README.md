1. 使用对象上所有属性可选

   ```typescript
   interface IUser {
     name: string
     age: number
   }
   type TUser = Partial<IUser>
   // { name?: string; age?: number }
   ```

2. 使用 extends 和 infer 推断所需类型

  ```typescript
  // 得到 Promise 函数 resolve 类型
  type ApiResponse<F> = F extends (...args: any[]) => Promise<infer T> ? T : never
  ApiResponse<() => Promise(string[])> // string[]

  // 得到 Record key 的类型
  type RecordKeyType<T> = T extends Reacord<infer K, V> ? K : never
  RecordKeyType<{a: string; b: string}> // "a" | "b"
  ```

- [通过 JS 文件注释自动生成 .d.ts 声明文件](https://www.typescriptlang.org/docs/handbook/declaration-files/dts-from-js.html)
