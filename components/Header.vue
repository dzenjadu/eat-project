<template>
	<header class="header">
		<div class="container">
			<div class="header__wrapper">
				<NuxtLink to="/" class="header__link">
					<img src="~/assets/logo.svg" alt="Главная" class="header__logo">
				</NuxtLink>

				<div class="header__panel">
					<HeaderCart />
				</div>
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
		z-index: 1;

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

		&__wrapper {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			position: relative;
			padding: em(10) 0 em(10) em(90);
			box-sizing: border-box;
			width: 100%;
		}

		.container {
			width: 100%;
		}
	}
</style>
