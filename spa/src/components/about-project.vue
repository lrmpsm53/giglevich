<template>
    <article class="about-project">
        <headline position="center" size="36px" h="2">
            <template v-slot:first>О </template>
            <template v-slot:second>проекте</template>
        </headline>
        <paragraph>Ресурс был создан в рамках индивидуального проекта.</paragraph>
        <paragraph>
            Все фотографии, которые были использованы, принадлежат автору проекта.
        </paragraph>
        <paragraph>
            Шрифты, библиотеки и т.п. ввзяты из открытых источников и распространяются в рамках opensource.
        </paragraph>
        <paragraph>
            В качестве основного источника информации использовался сайт
            <a target="blank" href="http://architecture.artyx.ru/books/item/f00/s00/z0000006/st013.shtml">architecture.artyx.ru</a>.
        </paragraph>
        <paragraph>
            Отдельно хочу выразить благодарность своему другу 
            <a target="blank" href="https://vk.com/kmiziz_man">Арсению Кмицицу</a>
            за помощь в создании проекта.
        </paragraph>
    </article>
</template>

<style lang="sass" scoped>
    .about-project
        padding:
            left: 10%
            right: 10%
        box-sizing: content-box
        text-align: center
        a
            all: unset
            cursor: pointer
            text-decoration: underline
</style>