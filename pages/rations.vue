<template>
	<div class="rations">
		<div class="container">
			<div class="rations__list">
				<div v-for="(item, name) in allRations" :key="name" class="rations__item">
					<div @click="openRation(name)">{{ name }}</div>
				</div>
			</div>
			<NuxtChild />
		</div>
	</div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import config from '~/config/index.js'

    export default {
        name: "rations",
        computed: {
            ...mapGetters({
                allRations: 'rations/allRations',
            }),
        },
        created() {
            this.getAllRations()
			this.openRation(config.DEFAULT_RATION)
        },
        methods: {
            ...mapActions({
                getAllRations: 'rations/getAllRations',
            }),
            openRation(ration) {
                this.$router.push(`/rations/${ration}`)
            },
        }
    }
</script>

<style>

</style>