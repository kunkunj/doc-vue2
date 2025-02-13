<template>
  <div>
    <h1>属性props</h1>
    {{Props.props}}
    <h1>回调事件</h1>
    {{Props.emit}}
    <h1>内置方法</h1>
    {{Props.methods}}
    <h1>demo</h1>
  </div>
</template>

<script>
import Props from './index.js'
export default {
    name:`{name}`,
    data(){
        return {
            Props,
        }
    }
}
</script>

<style>

</style>