<template>
    <div>
        <v-header></v-header>
    </div>
</template>
<style lang="sass" scoped>
    header
        margin-top: 100px
</style>

<script>
import header from '../header/header.vue'
export default {
    components: {
        'v-header': header
    }
}
</script>