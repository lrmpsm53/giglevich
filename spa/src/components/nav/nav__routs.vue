<template>
    <ul>
        <li>
            <router-link to="/home">home</router-link>
        </li>
        <li>
            <router-link to="/about-icon">об иконе</router-link>
        </li>
        <li>
            <router-link to="/map">карта</router-link>
        </li>
    </ul>
</template>

<style lang="sass" scoped>
ul
    color:#656565
    font-family: Open Sans Condensed Light
    font-size: 18px
    list-style-type: none
    padding: 0
    margin: auto auto
    li
        text-decoration: none
        display: inline
        margin: 
            left: 4%
            right: 4%
        &:hover
            border-bottom: 2px solid #656565
        a
            all: unset
</style>