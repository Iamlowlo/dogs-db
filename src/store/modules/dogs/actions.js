import { DogsService } from "../../../services/DogsService";
import { mutationNames } from "./mutations";

export const actionNames = {
    GET_ALL_BREEDS: '[DOGS action]: Request a list of all dog breeds',
    GET_AVAILABLE_SUBBREEDS: '[DOGS action]: Request a list of available subreeds from a breed',
    GET_BREED_PICTURES: '[DOGS action]: Request a list of all images available for a breed',
    GET_SUBBREED_PICTURES: '[DOGS action]: Request a list of all images available for a subbreed'
};

export default {
    [actionNames.GET_ALL_BREEDS]: ({commit}) => {
        return new Promise((resolve, reject) => {
            DogsService.getAllBreeds()
                .then(({ data }) => {
                    if (data.status === 'success') {
                        console.log('ASAS')
                        commit(mutationNames.SET_ALL_BREEDS, Object.keys(data.message));
                        resolve(data.message)
                    } else {
                        console.error('Error requesting all breeds');
                        reject(data)
                    }
                })
                .catch(err => {
                    console.error('Error requesting all breeds');
                    reject(err)
                })
        })
    },

    [actionNames.GET_AVAILABLE_SUBBREEDS]: ({commit}, { breedName }) => {
        return new Promise((resolve, reject) => {
            DogsService.getAvailableSubBreeds(breedName)
                .then(({ data }) => {
                    if (data.status === 'success') {
                        commit(mutationNames.SET_AVAILABLE_SUBBREEDS, Object.keys(data.message));
                        resolve(data.message)
                    } else {
                        console.error('Error requesting all breeds');
                        reject(data)
                    }
                })
                .catch(err => {
                    console.error('Error requesting all breeds');
                    reject(err)
                })
        })
    },

    [actionNames.GET_BREED_PICTURES]: ({commit}, { breedName }) => {
        return new Promise((resolve, reject) => {
            DogsService.getBreedPictures(breedName)
                .then(({ data }) => {
                    if (data.status === 'success') {
                        commit(mutationNames.SET_ACTIVE_PICTURES, data.message);
                        resolve(data.message)
                    } else {
                        console.error('Error requesting all pictures for a breed');
                        reject(data)
                    }
                })
                .catch(err => {
                    console.error('Error requesting all pictures for a breed');
                    reject(err)
                })
        })
    },

    [actionNames.GET_SUBBREED_PICTURES]: ({commit}, { breedName, subBreedName }) => {
        return new Promise((resolve, reject) => {
            DogsService.getSubBreedPictures(breedName, subBreedName)
                .then(( data ) => {
                    if (data.status === 'success') {
                        commit(mutationNames.SET_ACTIVE_PICTURES, data.message);
                        resolve(data.message)
                    } else {
                        console.error('Error requesting all pictures for a subbreed');
                        reject(data)
                    }
                })
                .catch(err => {
                    console.error('Error requesting all pictures for a subbreed');
                    reject(err)
                })
        })
    }
}
