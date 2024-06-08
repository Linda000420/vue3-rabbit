import httpInstance from "@/utils/http"

// 二级分类
export function getCategoryAPI (id) {
  return httpInstance({
    url: '/category',
    params: {
      id
    }
  })
}

// 获取二级分类列表数据
export function getCategoryFilterAPI (id) {
  return httpInstance({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}

// 获取导航数据
// data{
//   categoryId,
//   page: 1,
//   pageSize: 20,
//   sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
// }
export function getSubCategoryAPI (data) {
  return httpInstance.post('/category/goods/temporary', data)
}