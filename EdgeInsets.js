export default {
  only:({left = 0, right = 0, top = 0, bottom = 0})=>({left, right, top, bottom}),
  all:(value = 0)=>({all: value}),
  horizontal:(value = 0)=>({ horizontal: value}),
  vertical:(value = 0)=>({ vertical: value}),
  symmetric:({vertical = 0, horizontal = 0})=>({vertical, horizontal})
}
