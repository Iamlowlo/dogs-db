<template>
    <section class="breed-info main-page">
        <h1 class="breed-info__title main-page__title">{{activeSubBreed || activeBreed}}</h1>

        <BreedList :breeds="mappedSubBreeds"></BreedList>

        <ul>
            <li v-for="(picture, idx) of pictures.slice(0, 10)" :key="idx">
                <img :src="picture" :alt="(activeSubBreed || activeBreed)+idx">
            </li>
        </ul>
    </section>
</template>

<script>
    import BreedList from '../../components/breed-list/BreedList'
    import {mapActions, mapState} from "vuex";
    import {actionNames} from "../../store/modules/dogs/actions";

    export default {
        name: "BreedInfo",
        components: {
            BreedList
        },
        computed: {
            ...mapState('dogs', ['activeBreed', 'activeSubBreed', 'subBreeds', 'pictures']),
            mappedSubBreeds(){
                return this.subBreeds.map(subBreed => ({
                    route: `${this.activeBreed}/${subBreed}`,
                    name: subBreed
                }))
            }
        },
        methods: {
            ...mapActions('dogs', [actionNames.GET_SUBBREED_PICTURES, actionNames.GET_BREED_PICTURES])
        }
    }
</script>

<style lang="scss" scoped src="./BreedInfo.scss"></style>