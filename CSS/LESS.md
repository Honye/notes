# LESS

1. calc 函数

   **计算不同单位**

   ```less
   calc(~"100% - 7rem");
   // or
   e("calc(100% - 7rem)");
   ```

   **使用变量**

   ```less
   @diff: 3rem;
   
   clac(~"100% - @{diff}");
   ```
