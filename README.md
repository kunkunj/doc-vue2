# doc-vue

## Project setup

props的提取规则：@props-comment-start开头，@props-comment-end结尾，中间分割用@props-comment-start

```
/**@props-comment-start aaa */
    d: {
      type: String,
      default: "",
    },
    /**@props-comment-start ccc */
    d3: {
      type: String,
      default: "",
    },
/**@props-comment-end */
```

emit提取规则

```
/**@emit-comment test->这是一个测试的回调事件 */
this.$emit('test',11)
```

methods提取规则

```
/**@method-comment test(a)->这是一个内部方法，参数a是它的一个参数 */
methods:{
    test(a){
        return a
    }
}
```