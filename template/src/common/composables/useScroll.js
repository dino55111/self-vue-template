import { onMounted, onBeforeUnmount } from '@vue/composition-api'

const useScroll = (context) => {
  const store = context.root.$store

  const scrollHandler = () => {
    store.commit('userAgent/SET_SCROLL', {
      top: document.body.scrollTop || document.documentElement.scrollTop,
      left: document.body.scrollLeft || document.documentElement.scrollLeft
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', scrollHandler)
  })
  onBeforeUnmount(() => window.removeEventListener('scroll', scrollHandler))

  return { scrollHandler }
}

export default useScroll
