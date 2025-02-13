<template>
  <div></div>
</template>

<script>
export default {
  name: "Test2",
  props: {
    /**@props-comment-start aaa */
    d: {
      type: String,
      default: "",
    },
    /**@props-comment-start 这是
     * bbb
     * bbb*
     * bbb
     * bbb
     */
    d2: {
      type: String,
      default: () => {
        return 111;
      },
    },
    /**@props-comment-start bbb
     * bbb
     * bbb*
     * bbb
     * bbb
     */
    d3: {
      type: String,
      default: "",
    },
    /**@props-comment-end */
  },
};
</script>

<style>
</style>