<template>
    <headerMain />
    <div class="cartViews">
        <div class="text-6xl text-center text-black mt-20 p-auto" v-show="$store.state.cart == 0">
            Yor cart is empty
        </div>
        <!--стили карточек-->
        <div class="grid grid-cols-5 m-2 p-2 gap-2">
            <div class="flex justify-center h-auto" v-for="(item, id) in cartItems" :key="id">
                <div class="rounded-lg shadow-lg bg-white max-w-sm relative"
                    :style="{ backgroundColor: '#' + item.rarity_color }">
                    <img class="mt-1 px-6"
                        :src="'https://community.akamai.steamstatic.com/economy/image/' + item.icon_url" />
                    <div class="px-2">
                        <h5 class="text-gray-800 text-auto mt-1 text-center">
                            {{ item.name }}
                        </h5>
                        <p class="text-black text-base m-auto mb-14 flex bottom-0 left-0">
                            Rarity: {{ item.rarity }}
                            <br />
                            Type: {{ item.type }}
                        </p>
                    </div>
                    <div class="flex absolute space-x-2 m-1 px-1 h-auto bottom-0 left-0">
                        <router-link :to="`/itemInfoPage/${item.id}`" type="button"
                            class="inline-block px-2 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">
                            Info about last buy
                        </router-link>
                        <button type="button"
                            class="inline-block px-2 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
                            @click=" DELETE_FROM_CART(id)">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store/index.js'
import headerMain from '@/components/headerMain.vue';
export default {
    name: "cartPage",
    components: { headerMain },
    data: () => ({
        pageNumber: 1,
        store,
        cartEmpty: true
    }),
    methods: {
        DELETE_FROM_CART(id) {
            this.$store.commit('REMOVE_ITEM', id);
        }
    },
    computed: {
        cartItems() {
            return this.$store.state.cart;
        }
    }
};
</script>
