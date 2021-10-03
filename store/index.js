export const state = () => ({
  posts: []
})

export const getters = {
}
export const mutations = {
  setPosts(state, payload) {


    state.posts = payload

  }
}
export const actions = {
  async getPostList({commit}) {
    try {
      const posts = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts?_embed=comments')
      commit('setPosts', posts)
    } catch (error) {

    }
  }
}
