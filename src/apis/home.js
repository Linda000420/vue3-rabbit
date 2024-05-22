import httpInstance from '@/utils/http'

// 获取轮播图数据
export function getBannerAPI () {
  return httpInstance.get('/home/banner')
}

// 新鲜好物
export function getNewAPI () {
  return httpInstance.get('/home/new')
}

// 人气推荐
export function getHotAPI () {
  return httpInstance.get('/home/hot')
}