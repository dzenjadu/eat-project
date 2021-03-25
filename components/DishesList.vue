<template>
	<div class="dishes" ref="dishes">
		<div v-for="(item, name) in items" :key="name" class="dishes__item">
			<div class="dishes__wrapper">
<!--				showDishPopup(name, item)-->
				<img @click="openDishPage(item.id)"
					 :src="require(`~/assets/dishes/${name}.jpg`)"
					 :alt="item.title"
					 class="dishes__img"
				>

				<div class="dishes__block">
					<h3 @click="openDishPage(item.id)" class="dishes__title">{{ item.title }}</h3>

					<DishesDetails :dish="item" />

					<div class="dishes__row dishes__row_center">
						<div class="dishes__price">{{ item.price }} &#8381;</div>
						<div class="dishes__width">
							<div class="dishes__name">Порция:</div>
							<div class="dishes__num">{{ item.width }}г.</div>
						</div>
					</div>

					<DishesListBuyPanel v-if="buyPanel" :dish-name="name" :theme="THEME_BIG" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import DishesList from "~/mixins/DishesList"

    export default {
        name: "DishesList",
        mixins: [
            DishesList,
        ]
    }
</script>

<style lang="scss">
	@import "~/styles/dish-list";
</style>