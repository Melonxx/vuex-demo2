const user = {
  state: {
    name: '嘿嘿'
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    },
    change(state){
      state.name = 'data'
    }
  },
  actions: {
    changeName({ commit }, data){
      commit('SET_NAME', data)
    }
  }
}

export default user