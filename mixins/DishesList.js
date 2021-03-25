import {mapMutations} from 'vuex'
import config from '~/config/index.js'

export default {
    name: "DishesList",
    props: {
        items: {
            type: Object,
            default: () => {},
        },
        buyPanel: {
            type: Boolean,
            default: () => false,
        }
    },
    data() {
        return {
            THEME_BIG: config.THEME_BIG
        }
    },
    methods: {
        ...mapMutations({
            setCurrentDish: 'dishes/setCurrentDish',
        }),
        openDishPage(id) {
            this.$router.push(`/shop/${id}`)
        },
        // showDishPopup(dishName, dishData) {
        //     import('./DishPopup').then(component => {
        //         this.$modal.show(component.default, {
        //             dishName: dishName,
        //             dishData: dishData,
        //         }, {
        //
        //             height: 'auto',
        //             classes: 'popup dish__popup',
        //         });
        //     });
        // },
    },
}