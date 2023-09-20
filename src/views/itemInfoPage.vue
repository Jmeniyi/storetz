<template>
    <div>
        <headerMain />
        <div class=" h-2/3 flex items-center p-2 lg:p-5 m-2 overflow-hidden relative"
            :style="{ backgroundColor: '#' + item.rarity_color }">
            <div class="rounded bg-white shadow-xl p-10 lg:p-10 mx-auto text-gray-800 relative md:text-left">
                <div class="md:flex items-center -mx-5">
                    <div class="w-full md:w-1/2 px-28 md:mb-0">
                        <div class="relative">
                            <img :src="'https://community.akamai.steamstatic.com/economy/image/' + item.icon_url"
                                class="w-full relative z-10" alt="">
                            <div class="border-4 absolute top-10 bottom-10 left-10 right-10 z-0"
                                :style="{ borderColor: '#' + item.rarity_color }">
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 px-10">
                        <h1 class="font-bold uppercase text-2xl"> {{ item.name }}</h1>
                        <div class="mb-10">
                            <h1 class="font-bold uppercase text-xl m-5">Type: {{ item.type }}</h1>
                        </div>
                        <div>
                            <div class="inline-block align-bottom mr-5">
                                <span class="text-2xl leading-none align-baseline">$</span>
                                <span class="font-bold text-5xl leading-none align-baseline">

                                </span>
                                <span class="text-2xl leading-none align-baseline"> last price</span>
                            </div>
                            <div class="inline-block align-bottom">
                                <button type="button"
                                    class="inline-block px-2 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
                                    @click="ADD_TO_CART(id)">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headerMain from '@/components/headerMain.vue';
import store from '@/store/index.js'
export default {
    name: "itemInfo",
    components: { headerMain },
    data: () => ({
        store,
    }),
    computed: {
        itemId() {
            return +this.$route.params.id
        },
        item() {
            return this.$store.state.itemsList.find(item => item.id === this.itemId)
        },
    },
    metods: {
        ADD_TO_CART(id) {
            this.$store.dispatch('ADD_TO_CART', id);
        },
    }
};
</script>
<!--

    return this.$store.state.itemsList.find(item => item.id === this.productId).id
-->