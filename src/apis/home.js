import httpInstance from '@/utils/http'

// 获取轮播图数据
export function getBannerAPI (params = {}) {
  // 默认 1，商品 2
  const { distributionSite = '1' } = params
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

// 新鲜好物
export function getNewAPI () {
  return httpInstance.get('/home/new')
}

// 人气推荐
export function getHotAPI () {
  return httpInstance.get('/home/hot')
}

// 所有商品
export function getGoodsAPI () {
  return httpInstance.get('/home/goods')
}