<template>
<div>
    <h1 v-if="h == '1'"  v-bind:style="{ 'text-align': position, 'font-size': size }">
        <span><slot name="first"></slot></span><slot name="second"></slot>
    </h1>
    <h2 v-else v-bind:style="{ 'text-align': position, 'font-size': size }">
        <span>
            <slot name="first"></slot>
        </span>
        <slot name="second"></slot>
    </h2>
</div>
</template>

<style lang="sass" scoped>
    h1, h2
        font-weight: normal
        font-family: Play Bold
    span
        color: #d63c37
</style>

<script>
export default {
    props: ['h', 'size', 'position']
}
</script>
