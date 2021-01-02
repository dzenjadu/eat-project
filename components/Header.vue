<template>
	<div class="header">
		<NuxtLink to="/" class="header__link">
			<img src="~/assets/logo.svg" alt="Главная" class="header__logo">
		</NuxtLink>
		<MainMenu/>
	</div>
</template>

<script>
    export default {
        name: "Header",
    }
</script>

<style lang="scss">
	.header {
		&__logo {
			height: em(62);
		}
	}
</style>
