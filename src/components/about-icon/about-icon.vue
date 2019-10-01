<template>
    <div class="about-icon">
        <about-icon__headline>
            <headline position="center" size="36px" h="2">
                <template v-slot:first>Об иконе: </template>
                <template v-slot:second>история</template>
            </headline>
        </about-icon__headline>
        <div class="flex">
            <about-icon__image></about-icon__image>
            <about-icon__content>
                <about-icon__paragraph>
                    <paragraph>
                        Одним из немаловажных вопросов изучения 
                        древнерусского зодчества все еще остается 
                        вопрос о сложении архитектурных композиций 
                        древнейших городов Руси, вопрос выявления 
                        основных закономерностей этого живого 
                        динамичного процесса, а также поэтапной 
                        характеристики самих городских ансамблей 
                        от их зарождения до заключительного периода 
                        их развития, приходящегося, как правило, 
                        на вторую половину XVII столетия.
                    </paragraph>
                </about-icon__paragraph>
                <about-icon__paragraph>
                    <paragraph>
                        Икона позволяет составить более полное 
                        представление о характере городского 
                        ансамбля Пскова в последней четверти 
                        XVII века. Она была задумана художником 
                        как своеобразный реально-исторический 
                        фон, на котором развертываются легендарные 
                        события весьма популярного в средневековом 
                        Пскове "Сказания о явлении Божией матери 
                        кузнецу Дорофею" во время осады Пскова 
                        польским королем Стефаном Баторием в 1581 
                        году.
                    </paragraph>
                </about-icon__paragraph>
                <about-icon__paragraph>
                    <paragraph>
                        Икона Жиглевича была ранее упомянута Н. 
                        Окулич-Казариным в его известной книге о 
                        Пскове. При этом никакой 
                        расшифровки изображенных на иконе зданий 
                        сделано не было. За этой иконой утвердилось 
                        условное название "икона Жиглевича", так как 
                        некогда она находилась в псковском Гостином 
                        дворе, возле лавки купца И. И. Жиглевича. 
                        Размер иконы 68 * 60 см.
                    </paragraph>
                </about-icon__paragraph>

                 <about-icon__paragraph>
                    <paragraph>
                        Данная икона 
                        представляет интерес не только с точки 
                        зрения истории топографии древнего Пскова, 
                        но любопытен и тем, что дополнительно 
                        знакомит нас, хотя бы и в схематических 
                        чертах, с рядом несохранившихся древних 
                        культовых сооружений города.
                    </paragraph>
                </about-icon__paragraph>
            </about-icon__content>
        </div>
    </div>
</template>

<style lang="sass" scoped>
    .about-icon
        width: 80%
        margin: auto auto

    .flex
        display: inline-flex
        justify-content: space-around
        flex-wrap: nowrap
        align-items: center
        box-sizing: content-box
        @media screen and (max-width: 1024px)
            flex-direction: column
            align-items: center
            justify-content: center
</style>
<script>
import about_icon__headline from './about-icon__headline.vue'
import about_icon__image from './about-icon__image.vue'
import about_icon__content from './about-icon__content.vue'
import about_icon__paragraph from './about-icon__paragraph.vue'
export default {
    components: {
        'about-icon__headline': about_icon__headline,
        'about-icon__image': about_icon__image,
        'about-icon__content': about_icon__content,
        'about-icon__paragraph': about_icon__paragraph
    }
}
</script>
