export default{
    allRequests(state, getters, rootState, rootGetters){
        return state.requests;
    },
    hasRequets(state, getters){
        return getters.allRequests && getters.allRequests.length > 0
    }
}