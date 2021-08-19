import { detect } from 'detect-browser'

const useDetectBrowser = (context) => {
  const store = context.root.$store
  const browser = detect()

  const detectBrowserHandler = () => {
    store.commit('userAgent/SET_USERAGENT_INFO', browser)
  }

  return { detectBrowserHandler }
}

export default useDetectBrowser
