<template>
    <section class="breeds main-page">
        <h1 class="breeds__title main-page__title">Dog breeds</h1>

        <ul class="breeds-group-list">
            <li v-for="(breedInitial, idx) of Object.keys(sortedBreeds)"
                :key="`breed_${idx}`"
                class="breeds-group-list__element">
                <h2 class="breeds-group-list__element__title">{{breedInitial.toUpperCase()}}</h2>

                <ul class="breeds-list">
                    <li v-for="(breed, idx) of sortedBreeds[breedInitial]"
                        :key="`breed_${idx}`"
                        class="breeds-list__element">{{breed}}</li>
                </ul>
            </li>
        </ul>
    </section>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Breeds",
        computed: {
            ...mapState('dogs', ['breeds']),
            sortedBreeds() {
                return this.breeds.reduce((acc, breed) => {
                    const initialLetter = breed.slice(0,1);
                    if (acc[initialLetter]) {
                        acc[initialLetter].push(breed)
                    } else {
                        acc[initialLetter] = [breed]
                    }
                    return acc;
                }, {})
            }
        }
    }
</script>

<style lang="scss" scoped src="./Breed.scss"></style>