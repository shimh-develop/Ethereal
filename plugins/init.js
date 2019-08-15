import Cookie from 'js-cookie'
import settings from '@/setting'
import { getCookieInServer } from '@/utils'
export default function (context) {
  const {store, req } = context
  if (process.server) {
    const theme = getCookieInServer(req, 'theme') || settings.theme
    const background = getCookieInServer(req, 'background') || settings.background
    const backgroundUrl = getCookieInServer(req, 'backgroundUrl') || settings.backgroundUrl
    store.dispatch('app/setTheme', theme)
    store.dispatch('app/setBackground', background)
    store.dispatch('app/setBackgroundUrl', backgroundUrl)
  }
}
