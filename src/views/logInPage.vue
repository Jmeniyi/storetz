<template>
    <section class="h-screen">
        <div class="container px-12 py-12 h-full">
          <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                <svg width="400" height="400" viewBox="0 0 256 221" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet">
                <path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z" fill="#41B883" />
                <path d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z" fill="#41B883" />
                <path d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z" fill="#35495E" />
                </svg>
            </div>
            <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form>
                <!-- Email input -->
                <div class="mb-0">
                  <input
                  type="email" name="email" id="email"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                  />
                  <p class="invisible peer-invalid:visible text-red-700 font-light">
                    Please enter a valid email address
                </p>
                </div>
      
                <!-- Password input -->
                <div class="mb-6">
                  <input
                  type="password" name="password" id="pass1" placeholder="Password"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  />
                </div>
      
                <div class="flex justify-between items-center mb-4">
                  <div class="form-group form-check">
                    <input
                      type="checkbox"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck3"
                      checked
                    />
                    <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
                      >Remember me</label
                    >
                  </div>
                  <router-link to="/registerPage"  class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">
                    No account? Create it right now!
                  </router-link>
                </div>
      
                <!-- Submit button -->
                <button
                  type="submit"
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>
      
              </form>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
import store from '@/store/index.js'
export default {
    name: "logIn",
    data: () => ({
        store,
    }),

};
</script>