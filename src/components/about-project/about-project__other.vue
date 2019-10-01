<template>
    <section class="about-project__other">
        <headline size="24px" h="2">
            <template v-slot:second>Дополнительно</template>
        </headline>
        <paragraph>
            Ресурс был создан в рамках индивидуального проекта.
        </paragraph>
        <paragraph>
            Все фотографии, которые были использованы, принадлежат автору проекта.
        </paragraph>
        <paragraph>
            Шрифты, библиотеки и т.п. ввзяты из открытых источников и распространяются в рамках opensource.
        </paragraph>
        <paragraph>
            Отдельно хочу выразить благодарность своему другу 
            <a target="blank" href="https://vk.com/vietnamian_rhapsody">Арсению Кмицицу</a>
            за помощь в создании проекта.
        </paragraph>
        <paragraph>
            Конечное закрытое тестирование проводилось в сообществе 
            <a target="blank" href="https://vk.com/old_pskov_town">Старый Псков</a>
            за помощь в создании проекта.
        </paragraph>
    </section>
</template>

<style lang="sass" scoped>
    .about-project__other
        width: 40%
        @media screen and (max-width: 767px)
            width: 80%
            margin-top: 90px
</style>