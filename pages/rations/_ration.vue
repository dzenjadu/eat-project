<template>
	<div>
		RationList -
		{{rationName}}
	</div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "RationList",
		data() {
            return {
                rationData: {},
			}
		},
        computed: {
            ...mapGetters({
                allRations: 'rations/allRations',
            }),
            rationName() {
                return this.$route.params.ration
            },
        },
		watch: {
            allRations() {
                console.log(1)
                this.getRationData()
			}
		},
		methods: {
            getRationData() {
                console.log(123)
            }
		}
    }
</script>

<style>

</style>