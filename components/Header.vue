<template>
	<header class="header">
		<div class="container">
			<NuxtLink to="/" class="header__link">
				<img src="~/assets/logo.svg" alt="Главная" class="header__logo">
			</NuxtLink>

			<MainMenu/>

			<div class="header__panel">
				<button class="header-login">login</button>
				<HeaderCart />
			</div>
		</div>
	</header>
</template>

<script>
    export default {
        name: "Header",
    }
</script>

<style lang="scss">
	.header {
		border-bottom: 1px solid $c-border;
		position: fixed;
		width: 100%;
		top: 0;
		background: #fff;
		min-height: em(45);
		display: flex;

		&__link	{
			position: absolute;
			top: 0;
			left: 0;
		}

		&__logo {
			height: em(62);
		}

		&__panel {
			display: flex;
		}

		.container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;
			padding: em(10) 0 em(10) em(90);
			box-sizing: border-box;
			width: 100%;
		}
	}
</style>
