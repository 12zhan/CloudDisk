<script>
import * as monaco from 'monaco-editor';
export default {
  name: 'MonacoEditor',
  props: {
    code: '',
    language: 'java'
  },
  data() {
    return {
      editor: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // 初始化编辑器
      if(this.language === 'properties'){
        this.language = 'yaml'
      }
      this.editor = monaco.editor.create(this.$refs.editorContainer, {
        value: this.code,
        language: this.language,
        tabSize: 2,
        scrollBeyondLastLine: false,
        automaticLayout: true, // 自动布局
        readOnly: false,
        theme:"vs-dark",
      })
      console.log(this.editor)

      // 监听内容变化
      this.editor.onDidChangeModelContent(() => {

      })

      // 监听失去焦点事件
      this.editor.onDidBlurEditorText((e) => {
        console.log(e)
      });
    },
    // 获取编辑框内容
    getCodeContext() {
      return this.editor.getValue()
    },
    // 自动格式化代码
    format() {
      this.editor.trigger('anything', 'editor.action.formatDocument')
      // 或者
      // this.editor.getAction(['editor.action.formatDocument']).run()
    }
  }
}
</script>

<template>
  <div ref="editorContainer" class="editor"></div>
</template>

<style scoped>
.editor{
  height: 100%;
}
</style>