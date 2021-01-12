<template>
	<div class="counter">
		<button @click="subCount">-</button>
		<div>{{ count }}</div>
		<button @click="addCount">+</button>
		dishName - {{dishName}}
	</div>
</template>

<script>
    export default {
        name: "Counter",
        props: {
            dishName: {
                type: String,
                default: () => null,
            },
        },
		data() {
            return {
                count: 1,
			}
		},
		methods: {
            addCount() {
                this.count += 1;
			},
            subCount() {
                if (this.count > 1) {
                    this.count -= 1;
                }
			},
		}
    }
</script>

<style>

</style>