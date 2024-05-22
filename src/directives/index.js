import { useIntersectionObserver } from '@vueuse/core'

// 定义懒加载
export const lazyPlugin = {
  install (app) {
    // 懒加载逻辑
    app.directive('img-lazy', {
      mounted (el, binding) {
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            if (isIntersecting) {
              // 进入视口区域
              el.src = binding.value
              stop()
            }
          },
        )
      }
    })
  }
}