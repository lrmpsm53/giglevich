<template>
    <div class="about-icon__content">
        <slot></slot>
    </div>
</template>

<style lang="sass" scoped>
    .about-icon__content
        width: 45%
        margin: 0
        @media screen and (max-width: 1024px)
            width: 95%
</style>