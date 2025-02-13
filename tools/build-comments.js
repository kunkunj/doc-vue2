const fs = require('fs');
const { parse } = require('@vue/compiler-sfc');
const path = require('path');

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walkDir(filePath);
    } else {
      parseFile(filePath)
    }
  });

}

walkDir('../packages/components')

function parseFile(vueFilePath) {
  const fileContent = fs.readFileSync(vueFilePath, 'utf-8');

  // 解析Vue文件
  const { descriptor } = parse(fileContent);
  if (descriptor.script && descriptor.script.content) {
    const propsMatches = descriptor.script.content.match(/@props-comment-start([\S\s]+)@props-comment-end/g);
    let strList = propsMatches[0].replace(/@props-comment-end/g, '').split('@props-comment-start').filter(str => str)
    let props = strList.map(str => {
      console.log(str.replace(/\s/g,''))
      let obj = {}
      const chunks = str.split('*/')
      obj.comment = chunks[0].replace(/\s\*/g, ',').replace(/\s/g, '')
      if (chunks[1]) {
        const ruleStr = chunks[1].replace(/\s/g, '').replace('/**', '')
        console.log(ruleStr)
        obj.prop = ruleStr.split(':')[0]
        obj.type = ruleStr.replace(/\S+type:([^,]+),\S+/, '$1')
        obj.required = ruleStr.indexOf('required') == -1 ? false : ruleStr.replace(/\S+required:([^,]+),\S+/, '$1')
      }
      return obj
    })
    let content = {
      props,
    }
    if (!fs.existsSync('..\\src\\views' + vueFilePath.replace('..\\packages\\components', '').replace('.vue', '.js'))) {
      fs.mkdirSync('..\\src\\views' + vueFilePath.replace('..\\packages\\components', '').replace(/[^(\\)]+.vue/, ''))
    }
    fs.writeFileSync('..\\src\\views' + vueFilePath.replace('..\\packages\\components', '').replace('.vue', '.js'), 'export default ' + JSON.stringify(content));
  }
}