<template>
    <ul class="nav__routs">
        <li class="nav__rout">
            <router-link to="/home">home</router-link>
        </li>
        <li class="nav__rout">
            <router-link to="/about-icon">об иконе</router-link>
        </li>
        <li v-on:click="clear" class="nav__rout">
            <router-link to="/map">карта</router-link>
        </li>
        <li class="nav__rout">
            <router-link to="/about-progect">о проекте</router-link>
        </li>
    </ul>
</template>

<style lang="sass" scoped>
.nav__routs
    color:#656565
    font-family: Open Sans Condensed Light
    font-size: 18px
    list-style-type: none
    padding: 0
    margin: auto auto
.nav__rout
    text-decoration: none
    display: inline
    margin: 
        left: 4%
        right: 4%
    &:hover
        border-bottom: 2px solid #656565
    a
        &.router-link-active 
            border-bottom: 2px solid #656565
        all: unset
</style>

<script>
import store from '../../store.js'
export default {
    computed: {
        render_card: function() {
            return this.$store.state.render_card
        }
    },
    methods: {
        clear: function() {
            if(this.render_card != false) {
                store.commit('card')
            }
        }
    }
}
</script>