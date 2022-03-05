<template>
<!-- component에 들어갈수 있는 root레벨의 태그는 한개만 있어야 합니다. -->
    <header>
        <!-- <h1>TODO it!</h1> -->
        <h1>{{ this.headerText }}</h1>
    </header>
</template>

<script>
// js
import { mapState, mapGetters } from 'vuex'
export default {
    computed: {
        //...mapState('header',['headerText']),
        ...mapGetters(['headerText'])
    }

}
</script>

<style scoped>
/* css */
h1 {
    color: #2F3B52;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
}
</style>