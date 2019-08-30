<template>
    <div>
        <slot></slot>
    </div>
</template>

<style lang="sass" scoped>
    div
        width: 1136px/1920px*100vw
        margin: 0
        margin: auto auto
        margin-top: 144px
        @media screen and (max-width: 425px)
            width: 90%
</style>