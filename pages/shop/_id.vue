<template>
	<DishPage :dish-id="dishId"/>
<!--	<div>123</div>-->
</template>

<script>
    export default {
        name: "ShopItem",
		computed: {
			dishId() {
			    return this.$route.params.id
			}
		},
    }
</script>

<style>

</style>