import httpInstance from '@/utils/request'

export function getCategoryAPI () {
  return httpInstance.get('/home/category/head')
}