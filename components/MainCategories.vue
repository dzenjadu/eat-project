<template>
	<div class="main-categories">
		<div  v-for="(category, name) in getCategories" class="main-categories__category" :key="category.title">
			<img :src="require(`~/assets/icons/${name}.svg`)"
				 :alt="category.title"
				 class="main-categories__img"
			>

			<h2 class="main-categories__title">{{ category.title }}</h2>
			<p class="main-categories__desc">{{ category.desc }}</p>

			<BaseButton :to="category.link">
				{{ category.textBtn }}
			</BaseButton>
		</div>
	</div>
</template>

<script>
	import config from '~/config/index.js'

	export default {
		name: "MainCategories",
		computed: {
			getCategories() {
				return config.MAIN_CATEGORIES
			},
		},
	}
</script>

<style>

</style>
