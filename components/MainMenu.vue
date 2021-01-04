<template>
	<div class="main-menu">
		<NuxtLink v-for="category in getMenu"
				  :to="category.link"
				  :key="category.title"
				  class="main-menu__link"
		>
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

<style lang="scss">
	.main-menu {

		&__link {
			$fz: 11;
			text-decoration: none;
			color: $c-menu;
			text-transform: uppercase;
			font-weight: 700;
			font-size: 11px;
			letter-spacing: 1.1px;
			margin-right: em(15, $fz);
		}
	}
</style>
