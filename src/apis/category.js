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