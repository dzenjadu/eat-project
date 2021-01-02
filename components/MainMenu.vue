<template>
	<div class="main-menu">
		<NuxtLink v-for="category in getMenu" :to="category.link" :key="category.title">
			{{ category.title }}
		</NuxtLink>
	</div>
</template>

<script>
    import config from '~/config/index.js'

    export default {
        name: "MainMenu",
        computed: {
            getMenu() {
                return config.MAIN_CATEGORIES
            },
        },
    }
</script>

<!--<style scoped>-->

<!--</style>-->
