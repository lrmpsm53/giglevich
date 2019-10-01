<template>
    <header>
        <headlline h="1" position="center" size="48px">
            <template v-slot:first>Икона Жиглевича: </template>
            <template v-slot:second>взгляни на историю</template>
        </headlline>
        <header__paragraph>
            <paragraph>
                    Когда-то у одного неизвестного художника появилась идея: 
                    запечатлеть свой город во времена его жизни на иконе. 
                    На ней поместилось несколько десятков зданий, многие из 
                    которых сейчас являются историко-культурным наследием Пскова. 
                    Часть из них мы никогда не увидим, но многие пережили всю 
                    бурную историю нашей страны. Предлагаю Вам получить 
                    удовольствие не только от просмотра карты средневекового 
                    Пскова, но и сравнить её объекты с их современным состоянием. 
            </paragraph>
        </header__paragraph>
        <header__banner></header__banner>
    </header>
</template>

<style lang="sass" scoped>
header
    width: 100%
    color: #333333

</style>

<script>
import headline from '../headline.vue'
import paragraph from '../paragraph.vue'
import HeaderParagraph from './header__paragraph'
import header__banner from './header__banner.vue'
export default {
    components: {
        'headlline': headline,
        'paragraph': paragraph,
        'header__paragraph': HeaderParagraph,
        'header__banner': header__banner
    }
}
</script>