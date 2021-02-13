import {mapGetters, mapMutations} from 'vuex'

export default {
    name: "CartList",
    data() {
        return {
            total: 0,
            calories: 0,
        }
    },
    computed: {
        ...mapGetters({
            cartList: 'cart/cartList',
        }),
    },
    watch: {
        cartList() {
            this.getTotal()
            this.getTotalCalories()
        },
    },
    mounted() {
        this.getTotal()
        this.getTotalCalories()
    },
    methods: {
        ...mapMutations({
            setCartList: 'cart/setCartList',
        }),
        removeDish(dishName) {
            let cartList = {...this.cartList}
            delete cartList[dishName]

            this.setCartList(cartList)
            localStorage.setItem('cartList', JSON.stringify(cartList))
        },
        getTotal() {
            this.total = Object.values(this.cartList).reduce((sum, dishData) => sum += dishData.price * dishData.count, 0)
        },
        getTotalCalories() {
            this.calories = Object.values(this.cartList).reduce((sum, dishData) => sum += dishData.calories * dishData.count, 0)
        },
    },
}