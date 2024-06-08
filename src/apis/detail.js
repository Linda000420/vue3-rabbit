import httpInstance from "@/utils/http"

// 获取商品详情
export function getDetailAPI (id) {
  return httpInstance({
    url: '/goods',
    params: {
      id
    }
  })
}