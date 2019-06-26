import { http } from "./http";

class DogsService {
    static getAllBreeds = () => {
        return http.get('breeds/list/all')
    };

    static getAvailableSubBreeds = (breedName) => {
        return http.get(`breed/${breedName}/list`)
    };

    static getBreedPictures = (breedName) => {
        return http.get(`breed/${breedName}/images`)
    };

    static getSubBreedPictures = (breedName, subBreedName) => {
        return http.get(`breed/${breedName}/${subBreedName}/images`)
    };
}

export {
    DogsService
}