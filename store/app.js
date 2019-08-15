import Cookie from 'js-cookie'
export const state = () => ({
  theme: 'light',
  background: true,
  backgroundUrl: '1.jpg'
})

export const mutations = {
  TOGGLE_BACKGROUND: state => {
    Cookie.set('background', !state.background)
    state.background = !state.background
  },
  SET_BACKGROUND: (state, background) => {
    Cookie.set('background', background)
    state.background = background
  },
  SET_BACKGROUND_URL: (state, backgroundUrl) => {
    Cookie.set('backgroundUrl', backgroundUrl)
    state.backgroundUrl = backgroundUrl
  },
  SET_THEME: (state, theme) => {
    Cookie.set('theme', theme)
    state.theme = theme
  },
  TOGGLE_THEME: state => {
    Cookie.set('theme', state.theme === 'light' ? 'dark': 'light')
    state.theme = state.theme === 'light' ? 'dark': 'light'
  }
}

export const actions = {
  toggleBackground({ commit }) {
    commit('TOGGLE_BACKGROUND')
  },
  setBackground({ commit }, background) {
    commit('SET_BACKGROUND', background)
  },
  setBackgroundUrl({ commit }, backgroundUrl) {
    commit('SET_BACKGROUND_URL', backgroundUrl)
  },
  toggleTheme({ commit }) {
    commit('TOGGLE_THEME')
  },
  setTheme({ commit }, theme) {
    commit('SET_THEME', theme)
  }
}


