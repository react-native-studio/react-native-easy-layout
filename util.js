export default {
  toUpperFirstLetter(string){
    if(string == "all" || string.length == 0)return ""
    return string[0].toUpperCase() + string.slice(1)
  },
  getStyle(baseData,prefix,suffix = ""){
    let style = {}
    for(let key in baseData){
      style[`${prefix}${this.toUpperFirstLetter(key)}${suffix}`] = baseData[key]
    }
    return style;
  }
}
