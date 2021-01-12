<template>
	<div class="preloader">
		<div></div><div></div>
		<div><div></div></div>
		<div><div></div></div>
	</div>
</template>

<script>
    export default {
        name: "Preloader"
    }
</script>

<style>
	@keyframes preloader {
		0% {
			transform: rotate(0)
		}
		100% {
			transform: rotate(360deg)
		}
	}

	.preloader div {
		box-sizing: border-box !important
	}

	.preloader > div {
		position: absolute;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		border: 4px solid #000;
		border-color: #404040 transparent #404040 transparent;
		animation: preloader 1.1627906976744184s linear infinite;
	}

	.preloader > div:nth-child(2), .preloader > div:nth-child(4) {
		width: 32px;
		height: 32px;
		top: 6px;
		left: 6px;
		animation: preloader 1.1627906976744184s linear infinite reverse;
	}

	.preloader > div:nth-child(2) {
		border-color: transparent #404040 transparent #404040
	}

	.preloader > div:nth-child(3) {
		border-color: transparent
	}

	.preloader > div:nth-child(3) div {
		position: absolute;
		width: 100%;
		height: 100%;
		transform: rotate(45deg);
	}

	.preloader > div:nth-child(3) div:before, .preloader > div:nth-child(3) div:after {
		content: "";
		display: block;
		position: absolute;
		width: 4px;
		height: 4px;
		top: -4px;
		left: 16px;
		background: #404040;
		border-radius: 50%;
		box-shadow: 0 40px 0 0 #404040;
	}

	.preloader > div:nth-child(3) div:after {
		left: -4px;
		top: 16px;
		box-shadow: 40px 0 0 0 #404040;
	}

	.preloader > div:nth-child(4) {
		border-color: transparent;
	}

	.preloader > div:nth-child(4) div {
		position: absolute;
		width: 100%;
		height: 100%;
		transform: rotate(45deg);
	}

	.preloader > div:nth-child(4) div:before, .preloader > div:nth-child(4) div:after {
		content: "";
		display: block;
		position: absolute;
		width: 4px;
		height: 4px;
		top: -4px;
		left: 10px;
		background: #404040;
		border-radius: 50%;
		box-shadow: 0 28px 0 0 #404040;
	}

	.preloader > div:nth-child(4) div:after {
		left: -4px;
		top: 10px;
		box-shadow: 28px 0 0 0 #404040;
	}

	.loadingio-preloader-double-ring-z7fogpm0pr {
		width: 200px;
		height: 200px;
		display: inline-block;
		overflow: hidden;
		background: #ffffff;
	}

	.preloader {
		width: 44px;
		height: 44px;
		position: relative;
		transform: translateZ(0) scale(1);
		backface-visibility: hidden;
		transform-origin: 0 0;
	}

	.preloader div {
		box-sizing: content-box;
	}
</style>