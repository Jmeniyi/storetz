<template>
    <section class="h-screen">
        <div class="container px-12 py-12 h-full">
            <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
                    <form>
                        <!-- Username input -->
                        <div class="mb-6">
                            <input type="text" v-model="userName"
                                :class="userName.length > 4 ? 'trueWalidation' : ''"
                                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Username" />
                            <small>Username maust be min 5 chacters</small>
                        </div>
                        <!-- Email input -->
                        <div class="mb-6">
                            <input type="email" v-model="email"
                            :class="validationmail == true ? 'trueWalidation' : ''"
                                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Enter your email" 
                                required/>
                        </div>
                        <!-- Password input -->
                        <div class="mb-2">
                            <input type="password" v-model="password"
                                :class="password.length > 1 ? 'trueWalidation' : ''"
                                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Password" />
                            <small id="passwordHelp" class="form-text text-muted"
                                >Password should contain
                                <span>atleast 8 chacters </span>
                            </small>
                        </div>
                        <div class="mb-6">
                            <input type="password" v-model="confirmPassword"
                            :class="confirmPassword == password ? 'trueWalidation' : ''"
                                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Comfirm password" />
                        </div>
                        <!-- Submit button -->
                        <router-link to="/mainPage">
                            <button type="submit"
                                class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true" data-mdb-ripple-color="light"
                                :class="disabledbtn == true ? 'disabledBtn' : ''" 
                                :disabled="disabledbtn"
                                @click="register "
                                >
                                Register
                            </button>
                        </router-link>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import store from '@/store/index.js'
var filter = /.+@.+\..+/;
export default {
    name: "registerPage",
    data: () => ({
        store,
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }),
    computed: {
        disabledbtn() {
            if (this.password.length > 1 && this.userName.length > 5 
            && this.password === this.confirmPassword && this.validationmail == true ) {
                return false;
            } else {
                return true;
            }
        },
        validationmail(){
            if (filter.test(this.email)){
                return true;
            }else{
                return false;
            }
        },
    },
    methods:{
       register(){
        const newUser = {
        userName: this.userName,
        email: this.email,
        password: this.password,
      }
      this.$store.commit('addNewUser', newUser);
    }
       }
};
</script>

<style>
.trueWalidation {
    border-color: #0bb30b
}

.disabledBtn {
    opacity: 0.6;
    cursor: not-allowed;
}

;
</style>
<!--
 
-->