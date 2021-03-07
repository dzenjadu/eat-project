<template>
	<footer class="footer">
		&copy; TheJadu
	</footer>
</template>

<script>
    export default {
        name: "Header",
    }
</script>

<style lang="scss">
	.footer {
		flex: 0 0 auto;
		font-size: em(14);
		text-align: center;
		padding: em(20) 0;
		background-color: #fff;
		box-shadow: $box-shadow;
		color: #555;
	}
</style>
