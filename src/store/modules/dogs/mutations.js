export const mutationNames = {
    SET_ALL_BREEDS: '[DOGS mutation]: Set all dogs',
    SET_AVAILABLE_SUBBREEDS: '[DOGS mutation]: Set all dogs',
    SET_ACTIVE_BREED: '[DOGS mutation]: Set active breed',
    SET_ACTIVE_SUBBREED: '[DOGS mutation]: Set active subbreed',
    SET_ACTIVE_PICTURES: '[DOGS mutation]: Set active pictures'
};

export default {
    [mutationNames.SET_ALL_BREEDS]: (state, payload) => {
        state.breeds = payload
    },

    [mutationNames.SET_AVAILABLE_SUBBREEDS]: (state, payload) => {
        state.subBreeds = payload
    },

    [mutationNames.SET_ACTIVE_BREED]: (state, payload) => {
        state.activeBreed = payload
    },

    [mutationNames.SET_ACTIVE_SUBBREED]: (state, payload) => {
        state.activeSubBreed = payload
    },

    [mutationNames.SET_ACTIVE_PICTURES]: (state, payload) => {
        state.pictures = payload
    }
}