<template>
    <footer class="footer">
        <a class="link" href="https://vk.com/lrmpsm" target="blank">
            <img class="footer__icon" src="../icons/vk-logo.png">
            Автор
        </a>
        <a class="link" href="mailto:orlov.dmitriy2303@outlook.com" target="blank">
            <img class="footer__icon" src="../icons/email.png">
            Почта автора
        </a>
        <a class="link" href="https://github.com/DmitriyOrlov53/giglevich" target="blank">
            <img class="footer__icon" src="../icons/github-logo.png">
            GitHub
        </a>
        <span>2019 год</span>
    </footer>
</template>

<style lang="sass" scoped>
.footer
    display: inline-flex
    justify-content: space-around
    flex-wrap: nowrap
    align-items: center
    box-sizing: content-box
    width: 100%
    background-color: #d63c37
    min-height: 100px
    font-family: Open Sans Condensed Light
    color: #ffffff
    font-size: 18px
    line-height: normal
    @media screen and (max-width: 1024px)
        align-items: center
        justify-content: center
        flex-direction: column;
.footer__icon
    height: 24px
    margin-bottom: -7px
    margin-right: 3px
.link
    all: unset
    cursor: pointer
    text-decoration: underline
</style>