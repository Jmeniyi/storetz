<template>
    <button type="button"
        class="inline-block px-2 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
        @click="ADD_TO_CART(item)">
        Add to cart
    </button>
</template>

<script>
import store from '@/store/index.js'
export default {
    name: "headerMain2",
    data: () => ({
        store,
    }),
    methods:{
        ADD_TO_CART(item) {
            this.$store.dispatch('ADD_TO_CART', item);
        },
        
    }
};
</script>
