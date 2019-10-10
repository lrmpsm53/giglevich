<template>
    <section class="about-project__sources">  
        <headline size="24px" h="2">
            <template v-slot:second>Источники</template>
        </headline>       
        <paragraph>   
            Окулич-Казарин Н. Спутник по древнему Пскову. Псков, 1913. Рис. 11.
        </paragraph>
        <paragraph>
            И. К. Лабутина. Историческая топография Пскова в ⅩⅣ - ⅩⅤ веках/
            И.К. Лабутина; Ин-т археологии РАН. – М.: Наука, 2011.
        </paragraph>
        <paragraph>
            Древний Псков. История. Искусство. Археология., 1988// 
            Ю. Г. Малков «План Пскова конца ⅩⅦ века («икона Жиглевича»). 
        </paragraph>
        <paragraph>
            <a href="http://architecture.artyx.ru/books/item/f00/s00/z0000006/st013.shtml " target="blank">
                architecture.artyx.ru
            </a>
        </paragraph>
        <paragraph>
            <a href="https://pskovskij-putevoditel-okuneva.blogspot.com/2019/04/Ikona-iz-lavki-Zhiglevicha-cerkvi-K-voprosu-o-datirovke.html" target="blank">
                pskovskij-putevoditel-okuneva.blogspot.com
            </a>
        </paragraph>
    </section>
</template>

<style lang="sass" scoped>
    .about-project__sources
        width: 40%
        @media screen and (max-width: 767px)
            width: 80%
        p
            margin-bottom: 10px
            &:last-child
                margin: 0
</style>