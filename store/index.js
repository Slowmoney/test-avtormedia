export const state = () => ({
  posts: [],
  openPost: null,
  comments:[]
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
    console.log(state);

    const index = state.posts.findIndex(e => e.id === payload.id)
    console.log(index);
    if (~index) {
      state.posts[index] = payload
    }
  }
}
export const actions = {
  async getPostList({commit}) {
    try {
      const posts = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts?_embed=comments')
      commit('setPosts', posts)
    } catch (error) {

    }
  },
  async openPost({commit}, id) {
    try {
      const post = await this.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      commit('setOpenPost', post)

      const comments = await this.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      commit('setComments', comments)
    } catch (error) {

    }
  },
  async saveOpenText({commit}, {id, body}){
    try {
      const post = await this.$axios.$patch(`https://jsonplaceholder.typicode.com/posts/${id}`, {body})
      commit('setPost', post)
      commit('setOpenPost', post)
    } catch (error) {

    }
  }
}
