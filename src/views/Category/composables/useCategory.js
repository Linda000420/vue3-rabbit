// 封装 category 相关
import { getCategoryAPI } from '@/apis/category'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

export function useCategory () {
  const categoryData = ref({})
  const route = useRoute()
  const getCategoryData = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }

  // 路由变化，数据接口重新发送
  onBeforeRouteUpdate((to) => {
    getCategoryData(to.params.id)
  })

  onMounted(() => {
    getCategoryData()
  })

  return {
    categoryData
  }
}