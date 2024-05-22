import httpInstance from '@/utils/http'

// 获取首页分类数据
export function getCategoryAPI () {
  return httpInstance.get('/home/category/head')
}