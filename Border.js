export default {
  all:(width = 0, color = "transparent")=>({width, color}),
  horizontal:(width = 0, color = "transparent")=>({leftWidth: width, leftColor: color, rightWidth: width, rightColor: color}),
  vertical:(width = 0, color = "transparent")=>({bottomWidth: width, bottomColor: color, topWidth: width, topColor: color}),
  only:({
          top = {width: 0 , color:"transparent"},
          bottom = {width: 0 , color:"transparent"},
          left = {width: 0 , color:"transparent"},
          right = {width: 0 , color:"transparent"}}) =>
    ({
      topWidth: top.width,
      topColor: top.color,
      bottomWidth: bottom.width,
      bottomColor: bottom.color,
      leftWidth: left.width,
      leftColor: left.color,
      rightWidth: right.width,
      rightColor: right.color,
    })
}
export const borderSide = {
  init:(width = 0, color = 'transparent')=>({width, color})
}
