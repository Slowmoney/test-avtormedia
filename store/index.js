export const state = () => ({
  posts: [],
  openPost: null,
  comments: [],
  total: 0,
  currentPage: 1,
  searchString: ""
})

export const getters = {
}
export const mutations = {
  setPosts(state, payload) {
    state.posts = payload
  },
  setOpenPost(state, payload) {
    state.openPost = payload
  },
  setComments(state, payload) {
    state.comments = payload
  },
  setPost(state, payload) {
    const index = state.posts.findIndex(e => e.id === payload.id)
    if (~index) {
      state.posts[index] = payload
    }
  },
  setTotal(state, payload) { state.total = payload },
  setPage(state, payload) {
    if (!payload) return
    state.currentPage = payload
  },
  setSearchString(state, qstring) {
    state.searchString = qstring
  }
}
export const actions = {
  async getPostList({ commit, state }) {
    try {
      const limit = 12
      const params = { _page: state.currentPage, _limit: limit, _embed: "comments" }
      if (state.searchString) params.q = state.searchString
      const data = await this.$axios.get(`https://jsonplaceholder.typicode.com/posts?${new URLSearchParams(params).toString()}`)
      commit('setTotal', Math.ceil(data.headers['x-total-count'] / limit))
      commit('setPosts', data.data)
    } catch (error) {

    }
  },
  async openPost({ commit }, id) {
    try {
      const post = await this.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      commit('setOpenPost', post)

      const comments = await this.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      commit('setComments', comments)
    } catch (error) {

    }
  },
  async saveOpenText({ commit }, { id, body }) {
    try {
      const post = await this.$axios.$patch(`https://jsonplaceholder.typicode.com/posts/${id}`, { body })
      commit('setPost', post)
      commit('setOpenPost', post)
    } catch (error) {

    }
  },
  async setPage({ commit, dispatch }, payload) {
    try {
      commit('setPage', payload)
      await dispatch('getPostList')
    } catch (error) {

    }
  },
  async search({ commit, dispatch }) {
    commit('setPage', 1)
    await dispatch('getPostList')
  }
}
