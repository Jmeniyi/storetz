<template>
    <header>
        <!-- component -->
        <div class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            <div class="px-4">
                <div class="flex justify-between">
                    <div class="flex items-start mt-2" type="button">
                        <router-link to="/mainPage">
                            <svg width="60" height="60" viewBox="0 0 256 221" xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="xMinYMin meet">
                                <path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z" fill="#41B883" />
                                <path d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z" fill="#41B883" />
                                <path d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z" fill="#35495E" />
                            </svg>
                        </router-link>
                    </div>

                    <div class="ml-2 flex">

                        <button class="static cursor-pointer items-center gap-x-1 rounded-md mt-2 mr-2"
                            v-bind='disabledBtnCart'
                            @click="disabledBtnCart ? showAlert = true : $router.push('cartPage')">
                            <div class="relative mr-3">
                                <svg class="h-10 w-10 text-green-500" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <circle cx="9" cy="21" r="1" />
                                    <circle cx="20" cy="21" r="1" />
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                </svg>
                                <div
                                    class="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                                    {{ $store.state.cart.length }}
                                </div>
                            </div>
                        </button>
                        <router-link to="/"
                            class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                            <span class="text-sm font-medium">Sign in</span>
                        </router-link>
                        
                    </div>
                </div>
            </div>
            <div class="absolute z-10 top-15 right-5 py-3 pl-4 pr-4 text-red-700 bg-red-100 rounded-lg"
                role="alert" 
                v-if="showAlert">
                <p>You cart is empty
                    <button class="w-4 h-4 relative center text-center" 
                    @click="showAlert = false">
                        <svg role="button" viewBox="0 0 20 20">
                        <path
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>
                    </button>
                </p>
            </div>
        </div>
    </header>
</template>

<script>
import store from '@/store/index.js'
export default {
    name: "headerMain2",
    data: () => ({
        store,
        showAlert: false,
    }),
    computed: {
        disabledBtnCart() {
            if (this.$store.state.cart.length == 0) {
                return true;
            } else {
                return false;
            }
        },
    },
};
</script>

<!--
<svg class="w-4 h-4 flex" role="button" viewBox="0 0 20 20"  @click="showAlert = false">
                        <path
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>
-->