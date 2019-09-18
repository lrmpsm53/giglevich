<template>
    <div class="header__paragraph">
        <slot></slot>
    </div>
</template>

<style lang="sass" scoped>
    .header__paragraph
        width: 1136px/1920px*100vw
        margin: 0
        margin: auto auto
        margin-top: 144px
        @media screen and (max-width: 768px)
            width: 80vw
</style>