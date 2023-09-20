<template>
    <div class="mainPage h-full bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 lg:h-screen lg:overflow-hidden">
        <headerMain />
        <!-- Сетка-->
        <div class="flex grid grid-cols-1 lg:grid-cols-5 w-full h-screen">
            <!-- SideBar-->
            <div class="flex items-center h-screen bg-white shadow-xl overflow-x-hidden lg:flex-col lg:space-y-4 lg:h-screen sm:h-12">
                <!--InputField-->
                <div class="flex ml-6 lg:p-2 my-4 mx-auto rounded-md focus-within:sky-1 ring-teal-500 border-solid border-2 border-sky-500">
                    <input type="text"
                        class="w-full px-1 bg-transparent rounded-tl-md rounded-bl-md  text-sm text-gray-600 focus:outline-none"
                        placeholder="Write item name here..." v-model="searchValue" />
                    <button
                        class="rounded-tr-md rounded-br-md py-2 px-2 md:block">
                        <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <!-- NavButtons-->
                <div class="flex space-x-2 relative justify-center">
                    <button type="button"
                        class="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-2 rounded transition duration-150 ease-in-out"
                        :disabled="page > 1 ? disabled : ''" @click="page = page - 1">
                        Page Down
                    </button>
                    <button type="button"
                        class="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-2 rounded transition duration-150 ease-in-out"
                        :disabled="hasNextPage == false ? '' : disabled" @click="page = page + 1">
                        Page Up
                    </button>
                </div>
                <!-- Types-->
                <div id="menu" class="flex lg:w-full lg:px-4 sm:mt-1 flex-col space-y-3 m-auto">
                    <button href=""
                        class="border-solid border-2 border-sky-500 text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                        @click="filterByType()">
                        All Items
                    </button>
                    <button href=""
                        class="border-solid border-2 border-sky-500 text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                        v-for="(type, id) in uniqueTypes" :key="id" @click="filterByType(type.type)">
                        {{ type.type }}
                    </button>
                </div>
            </div>
            <!--Cards-->
            <div class="colField col-span-4 p-2 m-0">
            <div class="grid grid-cols-4 lg:grid-cols-5 gap-2">
                <div class="flex justify-center h-auto" v-for="(item, id) in filteredItems()" :key="id">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm relative text-sm p-1 text-white"
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
                        <div class="flex absolute space-x-1 text-sm lg:text-base m-1 mt-2 bottom-0 left-0">
                            <router-link :to="`/itemInfoPage/${item.id}`" type="button"
                                class="inline-block rounded bg-blue-600 mt-4 p-1 ">
                                Info about last buy
                            </router-link>
                            <button type="button"
                                class="inline-block rounded bg-blue-600 mt-4 p-1 "
                                @click="ADD_TO_CART(item)">
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
    name: "mainPage",
    components: { headerMain },
    data: () => ({
        hasNextPage: false,
        store,
        searchValue: '',
        page: 1,
        filteredType: null,
    }),
    computed: {
        itemsList() {
            return this.$store.state.data;
        },
        uniqueTypes() {
            return this.itemsList.reduce((seed, current) => {
                return Object.assign(seed, {
                    [current.type]: current
                });
            }, {});
        },
    },
    methods: {
        filteredItems() {
            const start = (this.page - 1) * 10;
            const end = this.page * 10;

            const filteredItems = this.filteredType ? this.itemsList
                .filter(item => item.type === this.filteredType) : this.itemsList
                    .filter(item => {
                        return item.name.toLowerCase().includes(this.searchValue) ||
                            item.name.toUpperCase().includes(this.searchValue)
                    });

            this.hasNextPage = filteredItems.length > end;

            return filteredItems.slice(start, end);
        },
        filterByType(type = null) {
            this.filteredType = type
        },
        ADD_TO_CART(item) {
            this.$store.dispatch('ADD_TO_CART', item);
        },
    },
    watch: {
        searchValue() {
            this.page = 1;
        }
    }
};
</script>
<!--


                 <div class="grid grid-cols-5 gap-0">
            <div class="w-full mt-1">
                <Лево - Навигация-
                
                <div class="font-poppins antialiased">
                    <div id="view" class="flex flex-row">
                        <div id="sidebar"
                            class="flex h-screen bg-white shadow-xl px-1 overflow-x-hidden transition-transform duration-300 ease-in-out overflow-hidden">
                            <div class="space-y-2 md:space-y-5 mt-10 m-2">
                                <div class="flex rounded-md focus-within:sky-1 ring-teal-500">
                                    <input type="text"
                                        class="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
                                        placeholder="Write item name here..." v-model="searchValue" />
                                    <button
                                        class="rounded-tr-md border-solid border-2 border-sky-500 rounded-br-md px-2 py-3 hidden md:block">
                                        <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </div>
                                Кнопки пагинации 
                                <div class="flex space-x-2 justify-center relative">
                                    <button type="button"
                                        class="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-2 rounded transition duration-150 ease-in-out"
                                        :disabled="page > 1 ? disabled : ''" @click="page = page - 1">
                                        Page Down
                                    </button>
                                    <button type="button"
                                        class="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-2 rounded transition duration-150 ease-in-out"
                                        :disabled="hasNextPage == false ? '' : disabled" @click="page = page + 1">
                                        Page Up
                                    </button>
                                </div>
                                <div id="menu" class="flex flex-col space-y-2">
                                    <button href=""
                                        class="border-solid border-2 border-sky-500 text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                                        @click="filterByType()">
                                        All Items
                                    </button>
                                    <button href=""
                                        class="border-solid border-2 border-sky-500 text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                                        v-for="(type, id) in uniqueTypes" :key="id" @click="filterByType(type.type)">
                                        {{ type.type }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Право - Карточки предметов
            <div class="colField col-span-4 mr-6 mt-2 m-0">
                <!стили карточек
                <div class="grid grid-cols-5 gap-2">
                    <div class="flex justify-center h-auto" v-for="(item, id) in filteredItems()" :key="id">
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
                                    @click="ADD_TO_CART(item)">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
-->