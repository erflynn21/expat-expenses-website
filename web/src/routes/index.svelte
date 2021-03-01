<svelte:head>
    <title>Expat Expenses - Home</title>
</svelte:head>

<div class="hero">
    <div class="pt-28 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="text-white text-5xl font-thin tracking-wide uppercase">
            Expat finances
        </div>
        <div class="text-white text-5xl font-thin tracking-wide uppercase mt-3">
            made easy
        </div>
        <div class="mt-10 max-w-xl my-0 mx-auto">
            <form action="#" method="POST" class="space-y-6 grid grid-cols-3">
                <div class="col-span-2">
                    <div class="mb-4">
                        <label for="name" class="sr-only">FULL NAME</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            autocomplete="name"
                            placeholder="FULL NAME"
                            required
                            class="block w-10/12 border-b text-white placeholder-white bg-transparent focus:outline-none"
                        />
                    </div>

                    <div>
                        <label for="email" class="sr-only">APPLE ID EMAIL</label
                        >
                        <input
                            type="text"
                            name="email"
                            id="email"
                            autocomplete="email"
                            placeholder="APPLE ID EMAIL"
                            required
                            class="block w-10/12 border-b bg-transparent text-white placeholder-white focus:outline-none"
                        />
                    </div>
                </div>

                <div class="col-span-1">
                    <button
                        type="submit"
                        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none">
                        Sign Up For Beta
                    </button>
                </div>
            </form>

            <div class="mt-8 ">
                <img
                    src="homescreen.webp"
                    alt="app homescreen image"
                    class="h-96 my-0 mx-auto"
                />
            </div>
        </div>
    </div>
</div>

<!-- <div class="relative bg-gray-100 overflow-hidden">
    <main class="mt-16 sm:mt-24 mb-10">
        <div class="mx-auto max-w-7xl">
            <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                <div
                    class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
                >
                    <div>
                        <h1
                            class="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
                        >
                            <span class="inline"
                                >Expat personal finances made</span
                            >
                            <span class="text-green-400 inline">easy</span>
                            <span class="inline">and</span>
                            <span class="text-green-400 inline">secure</span>
                        </h1>
                        <p
                            class="mt-3 text-base sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                        >
                            Expat Expenses allows you to budget and track your
                            incomes and expenses in whatever currency you like,
                            completely securely, from any country in the world.
                        </p>
                        <p
                            class="text-base sm:text-xl lg:text-lg xl:text-xl mt-4"
                        >
                            We're currently in beta,so if you'd like to help us
                            out by testing the app, please sign up using the
                            form here! We're currently texting on iOS devices
                            but will open up beta testing to Android devices in
                            the near future.
                        </p>
                    </div>
                </div>
                <div class="mt-16 sm:mt-24 lg:mt-16 lg:col-span-6">
                    <div
                        class="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden"
                    >
                        <div class="px-4 py-8 sm:px-10">
                            <div>
                                <p
                                    class="text-md font-medium text-gray-700 text-center"
                                >Sign Up for the Beta:</p>
                            </div>

                            <div class="mt-6 relative">
                                <div
                                    class="absolute inset-0 flex items-center"
                                    aria-hidden="true"
                                >
                                    <div
                                        class="w-full border-t border-gray-300"
                                    />
                                </div>
                                <div
                                    class="relative flex justify-center text-sm"
                                >
                                    <span class="px-2 bg-white text-gray-500" />
                                </div>
                            </div>

                            <div class="mt-6">
                                <form
                                    action="#"
                                    method="POST"
                                    class="space-y-6"
                                >
                                    <div>
                                        <label for="name" class="sr-only"
                                            >Full name</label
                                        >
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autocomplete="name"
                                            placeholder="Full name"
                                            required
                                            class="block w-full shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div>
                                        <label for="email" class="sr-only"
                                            >Apple ID Email</label
                                        >
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            autocomplete="email"
                                            placeholder="Apple ID Email"
                                            required
                                            class="block w-full shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                            Sign Up
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div> -->
<style>
    .hero {
        height: 700px;
        background-color: white;
        background-image: -webkit-linear-gradient(
            -65deg,
            #10b981 65%,
            #fff 35%
        );
    }
</style>
