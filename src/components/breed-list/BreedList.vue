<template>
    <ul class="breed-list">
        <router-link
                tag="li"
                v-for="(breed, idx) of breeds"
                :key="`breed_${idx}`"
                :to="breed.route"
                class="breed-list__element">{{breed.name}}</router-link>
    </ul>
</template>

<script>
    export default {
        name: "BreedList",
        props: {
            breeds: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style lang="scss" scoped src="./BreedList.scss"></style>