import mutations from './mutations';
import actions from './actions';

export const initialState = () => ({
    breeds: [],
    subBreeds: [],
    pictures: [],
    activeBreed: '',
    activeSubBreed: ''
});

export const dogs = {
    namespaced: true,
    state: initialState(),
    mutations,
    actions
};