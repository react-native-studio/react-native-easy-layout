export default {
  only:({topLeft = 0, topRight = 0, bottomLeft = 0, bottomRight = 0})=>({topLeft, topRight, bottomLeft, bottomRight}),
  all:(value = 0)=>({all: value}),
  horizontal:({left = 0, right = 0})=>({topLeft: left, topRight: right, bottomLeft : left, bottomRight : right}),
  vertical:({ top = 0, bottom = 0})=>({topLeft: top, topRight: top, bottomLeft : bottom, bottomRight : bottom}),
}
