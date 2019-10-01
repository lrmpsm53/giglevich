<template>
    <article class="about-project">
            <about-project__headline></about-project__headline>
            <section class="about-project__data">
                <about-project__sources></about-project__sources>
                <about-project__other></about-project__other>
        </section>
    </article>
</template>

<style lang="sass">
    .about-project__data
        width: 80%
        margin: auto auto
        display: flex
        justify-content: space-around
        @media screen and (max-width: 1049px)
            width: 90%
        @media screen and (max-width: 767px)
            width: 100%
            flex-direction: column
            align-items: center
        a
            all: unset
            cursor: pointer
            text-decoration: underline
    .about-project__column:last-child
        float: right
</style>

<script>
import about_project__headline from './about-progect__headline.vue'
import about_project__sources from './about-project__sources.vue'
import about_project__other from './about-project__other'

export default {
    components: {
        'about-project__headline': about_project__headline,
        'about-project__sources': about_project__sources,
        'about-project__other': about_project__other
    }
}
</script>