<template>
  <div></div>
</template>

<script>
export default {
  name: "Test",
  props: {
    /**@props-comment-start aaa */
    d: {
      type: String,
      default: "",
    },
    /**@props-comment-start bbb
     * bbb
     * bbb*
     * bbb
     * bbb
     */
    d2: {
      type: String,
      required:true,
      default: () => {
        return 111;
      },
    },
    /**@props-comment-start ccc */
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