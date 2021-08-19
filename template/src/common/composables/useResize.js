import { onMounted, onBeforeUnmount } from '@vue/composition-api'

const useResize = (context) => {
  const store = context.root.$store

  const resizeHandler = () => {
    store.commit('userAgent/SET_SIZE', {
      width: window.innerWidth,
      height: window.innerHeight
    })
    store.commit('userAgent/SET_SIZE', {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      type: 'client'
    })
  }

  onMounted(() => {
    window.addEventListener('resize', resizeHandler)
  })
  onBeforeUnmount(() => window.removeEventListener('resize', resizeHandler))

  return { resizeHandler }
}

export default useResize
