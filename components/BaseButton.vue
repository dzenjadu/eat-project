<template>
	<NuxtLink v-if="to" :to="to" class="button">
		<slot></slot>
	</NuxtLink>
	<button v-else class="button">
		<slot></slot>
	</button>
</template>

<script>
    export default {
        name: "BaseButton",
        props: {
            to: {
                type: String,
                default: () => '',
            },
        }
    }
</script>

<!--<style scoped>-->

<!--</style>-->
