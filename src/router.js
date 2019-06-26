import Vue from 'vue'
import Router from 'vue-router'
import Breeds from './containers/breeds/Breeds.vue'
import BreedInfo from './containers/breed-info/BreedInfo.vue'
import store from "./store/store";
import {mutationNames} from "./store/modules/dogs/mutations";
import {actionNames} from "./store/modules/dogs/actions";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Breeds
    },
    {
      path: '/:breed',
      name: 'breed-info',
      component: BreedInfo
    },
    {
      path: '/:breed/:subbreed',
      name: 'subbreed-info',
      component: BreedInfo
    }
  ]
});

router.afterEach((to) => {
  store.commit(`dogs/${mutationNames.SET_ACTIVE_BREED}`, to.params.breed || '', { root: true });
  store.commit(`dogs/${mutationNames.SET_ACTIVE_SUBBREED}`, to.params.subbreed || '', { root: true });
  store.commit(`dogs/${mutationNames.SET_ACTIVE_PICTURES}`, [], { root: true });
  switch (to.name) {
    case 'breed-info':
      store.dispatch(`dogs/${actionNames.GET_AVAILABLE_SUBBREEDS}`, { breedName: to.params.breed }, { root: true });
      store.dispatch(`dogs/${actionNames.GET_BREED_PICTURES}`, { breedName: to.params.breed }, { root: true });
      break;
    case 'subbreed-info':
      store.dispatch(`dogs/${actionNames.GET_SUBBREED_PICTURES}`, { breedName: to.params.breed, subBreedName: to.params.subbreed }, { root: true });
      // eslint-disable-next-line no-fallthrough
      default:
      store.commit(`dogs/${mutationNames.SET_AVAILABLE_SUBBREEDS}`, [], { root: true });

  }
});

export default router;
