<script>
    import { fade } from 'svelte/transition';

    let formData = {
        name: '',
        email: '',
    };

    let displaySuccess = false;

    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(data[key])
            )
            .join('&');
    };

    function signUp() {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'beta signup', ...formData }),
        })
            .then(() => (displaySuccess = true))
            .catch((error) => alert(error));

        formData = {
            name: '',
            email: '',
        };
    }
</script>

<svelte:head>
    <title>Expat Expenses - Home</title>
</svelte:head>

<div class="bg-white">
    <div class="relative overflow-hidden" id="hero">
        <div
            class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden"
        >
            <div class="mx-auto max-w-7xl lg:px-8">
                <div class="lg:grid lg:grid-cols-2 lg:gap-24">
                    <div
                        class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
                    >
                        <div class="lg:py-24">
                            <h1
                                class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
                            >
                                <span class="block">Expat finances</span>
                                <span
                                    class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600"
                                    >made easy</span
                                >
                            </h1>
                            <p
                                class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                            >
                                Expat Expenses makes it fast, easy, and secure
                                for expats to budget and track expenses and
                                income in multiple currencies, from wherever you
                                are in the world. Conversions are all in
                                real-time and all of your data is completely
                                secure using end-to-end encryption.
                            </p>
                            <div class="mt-10 sm:mt-12">
                                <form
                                    netlify
                                    name="beta signup"
                                    action="POST"
                                    on:submit|preventDefault={signUp}
                                    class="sm:max-w-xl mx-auto"
                                >
                                    <div class="sm:flex sm:ml-8 lg:ml-0">
                                        <div class="min-w-0 flex">
                                            <input
                                                type="hidden"
                                                name="form-name"
                                                value="beta signup"
                                            />
                                            <label for="name" class="hidden"
                                                >Name</label
                                            >
                                            <input
                                                id="name"
                                                type="text"
                                                name="name"
                                                placeholder="Enter your name"
                                                bind:value={formData.name}
                                                class="block px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 focus:ring-offset-gray-900"
                                            />
                                            <label for="email" class="hidden"
                                                >Email</label
                                            >
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                bind:value={formData.email}
                                                placeholder="Enter your email"
                                                class="block ml-3 px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 focus:ring-offset-gray-900"
                                            />
                                        </div>
                                        <div
                                            class="mt-3 sm:mt-0 sm:ml-3 lg:w-24"
                                        >
                                            <button
                                                type="submit"
                                                class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-green-400 to-green-600 text-white font-medium hover:from-green-600 hover:to-green-800 focus:outline-none"
                                                >Sign Up</button
                                            >
                                        </div>
                                    </div>

                                    <p
                                        class="mt-3 text-sm text-gray-300 sm:mt-4 italic"
                                    >
                                        Expat Expenses is currently in beta on
                                        iOS devices. If you would like to be
                                        part of helping to test Expat Expenses,
                                        submit the email you use for your Apple
                                        ID above and we'll add you to the beta
                                        testing group.
                                    </p>
                                    {#if displaySuccess === true}
                                        <div
                                            class="text-white text-center mt-4"
                                            in:fade|local={{ duration: 250 }}
                                        >
                                            Thanks for signing up! We'll add you
                                            to the beta testing group shortly.
                                            In the meantime, please download the
                                            TestFlight app from the App Store.
                                            You'll need that to start using
                                            Expat Expenses.
                                        </div>
                                    {/if}
                                </form>
                                <form
                                    class="honeypot"
                                    name="contact"
                                    method="POST"
                                    netlify-honeypot="bot-field"
                                    data-netlify="true"
                                >
                                    <p class="hidden">
                                        <label
                                            >Don’t fill this out if you're
                                            human:
                                            <input name="bot-field" /></label
                                        >
                                    </p>
                                    <p class="hidden">
                                        <label
                                            >Email: <input
                                                type="text"
                                                name="email"
                                            /></label
                                        >
                                    </p>
                                    <p class="hidden">
                                        <label
                                            >Message: <textarea
                                                name="message"
                                            /></label
                                        >
                                    </p>
                                    <p class="hidden">
                                        <button type="submit">Send</button>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                        <div
                            class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
                        >
                            <img
                                class="w-full lg:absolute lg:w-auto lg:top-8"
                                src="homescreen.webp"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Feature section with screenshot
        <div class="relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32">
            <div
                class="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl"
            >
                <div>
                    <h2
                        class="text-base font-semibold tracking-wider text-cyan-600 uppercase"
                    >
                        Serverless
                    </h2>
                    <p
                        class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
                    >
                        No server? No problem.
                    </p>
                    <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                        Phasellus lorem quam molestie id quisque diam aenean
                        nulla in. Accumsan in quis quis nunc, ullamcorper
                        malesuada. Eleifend condimentum id viverra nulla.
                    </p>
                </div>
                <div class="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
                    <img
                        class="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                        src="https://tailwindui.com/img/component-images/green-project-app-screenshot.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div> -->

        <!-- Feature section with grid -->
        <div class="relative bg-white py-16 sm:py-24 lg:py-32">
            <div
                class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
            >
                <h2
                    class="text-base font-semibold tracking-wider text-cyan-600 uppercase"
                >
                    Budget Better
                </h2>
                <p
                    class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
                >
                    Everything you need to budget and track expenses in multiple
                    currencies
                </p>
                <!-- <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                    Phasellus lorem quam molestie id quisque diam aenean nulla
                    in. Accumsan in quis quis nunc, ullamcorper malesuada.
                    Eleifend condimentum id viverra nulla.
                </p> -->
                <div class="mt-12">
                    <div
                        class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        <div class="pt-6">
                            <div
                                class="flow-root bg-gray-50 rounded-lg px-6 pb-8"
                            >
                                <div class="-mt-6">
                                    <div>
                                        <span
                                            class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-400 to-green-600 rounded-md shadow-lg"
                                        >
                                            <!-- Heroicon name: outline/cloud-upload -->
                                            <svg
                                                class="w-6 h-6 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                ><path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                                /></svg
                                            >
                                        </span>
                                    </div>
                                    <h3
                                        class="mt-8 text-lg font-medium text-gray-900 tracking-tight"
                                    >
                                        Instant Conversion
                                    </h3>
                                    <p
                                        class="mt-5 text-base text-gray-500 h-20"
                                    >
                                        All your expenses not in your budget
                                        currency convert instantly based on the
                                        exchange rate that day.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="pt-6">
                            <div
                                class="flow-root bg-gray-50 rounded-lg px-6 pb-8"
                            >
                                <div class="-mt-6">
                                    <div>
                                        <span
                                            class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-400 to-green-600 rounded-md shadow-lg"
                                        >
                                            <!-- Heroicon name: outline/lock-closed -->
                                            <svg
                                                class="w-6 h-6 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                ><path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                /></svg
                                            >
                                        </span>
                                    </div>
                                    <h3
                                        class="mt-8 text-lg font-medium text-gray-900 tracking-tight"
                                    >
                                        34 Currencies
                                    </h3>
                                    <p
                                        class="mt-5 text-base text-gray-500 h-20"
                                    >
                                        Support for 34 currencies currently,
                                        with more to come!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="pt-6">
                            <div
                                class="flow-root bg-gray-50 rounded-lg px-6 pb-8"
                            >
                                <div class="-mt-6">
                                    <div>
                                        <span
                                            class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-400 to-green-600 rounded-md shadow-lg"
                                        >
                                            <!-- Heroicon name: outline/refresh -->
                                            <svg
                                                class="w-6 h-6 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                ><path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                /></svg
                                            >
                                        </span>
                                    </div>
                                    <h3
                                        class="mt-8 text-lg font-medium text-gray-900 tracking-tight"
                                    >
                                        Recurring Expenses or Income
                                    </h3>
                                    <p
                                        class="mt-5 text-base text-gray-500 h-20"
                                    >
                                        Set up an expense or paycheck to
                                        automatically be added each month.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="pt-6">
                            <div
                                class="flow-root bg-gray-50 rounded-lg px-6 pb-8"
                            >
                                <div class="-mt-6">
                                    <div>
                                        <span
                                            class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-400 to-green-600 rounded-md shadow-lg"
                                        >
                                            <!-- Heroicon name: outline/shield-check -->
                                            <svg
                                                class="w-6 h-6 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                ><path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                                /><path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <h3
                                        class="mt-8 text-lg font-medium text-gray-900 tracking-tight"
                                    >
                                        Budget Reports
                                    </h3>
                                    <p
                                        class="mt-5 text-base text-gray-500 h-20"
                                    >
                                        Easily view all of your budgets and
                                        transactions in multiple ways to gain a
                                        better understanding of your finances.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="pt-6">
                            <div
                                class="flow-root bg-gray-50 rounded-lg px-6 pb-8"
                            >
                                <div class="-mt-6">
                                    <div>
                                        <span
                                            class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-400 to-green-600 rounded-md shadow-lg"
                                        >
                                            <!-- Heroicon name: outline/cog -->
                                            <svg
                                                class="h-6 w-6 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <h3
                                        class="mt-8 text-lg font-medium text-gray-900 tracking-tight"
                                    >
                                        End-to-End Encryption
                                    </h3>
                                    <p
                                        class="mt-5 text-base text-gray-500 h-20"
                                    >
                                        All your data is securely encrypted from
                                        your phone to our database.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="pt-6">
                            <div
                                class="flow-root bg-gray-50 rounded-lg px-6 pb-8"
                            >
                                <div class="-mt-6">
                                    <div>
                                        <span
                                            class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-400 to-green-600 rounded-md shadow-lg"
                                        >
                                            <!-- Heroicon name: outline/server -->
                                            <svg
                                                class="w-6 h-6 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                ><path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                                /></svg
                                            >
                                        </span>
                                    </div>
                                    <h3
                                        class="mt-8 text-lg font-medium text-gray-900 tracking-tight"
                                    >
                                        Privacy
                                    </h3>
                                    <p
                                        class="mt-5 text-base text-gray-500 h-20"
                                    >
                                        Only you can see your data, we can't
                                        access it even if we wanted to.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Testimonial section
        <div
            class="pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative"
        >
            <div
                class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8"
            >
                <div class="relative lg:-my-8">
                    <div
                        aria-hidden="true"
                        class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                    />
                    <div
                        class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full"
                    >
                        <div
                            class="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full"
                        >
                            <img
                                class="object-cover lg:h-full lg:w-full"
                                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixqx=XHWnHlvfb8&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                    <div
                        class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none"
                    >
                        <blockquote>
                            <div>
                                <svg
                                    class="h-12 w-12 text-white opacity-25"
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                                    />
                                </svg>
                                <p class="mt-6 text-2xl font-medium text-white">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed urna nulla vitae
                                    laoreet augue. Amet feugiat est integer
                                    dolor auctor adipiscing nunc urna, sit.
                                </p>
                            </div>
                            <footer class="mt-6">
                                <p class="text-base font-medium text-white">
                                    Judith Black
                                </p>
                                <p class="text-base font-medium text-cyan-100">
                                    CEO at PureInsights
                                </p>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div> -->

        <!-- Blog section
        <div class="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
            <div class="relative">
                <div
                    class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
                >
                    <h2
                        class="text-base font-semibold tracking-wider text-cyan-600 uppercase"
                    >
                        Learn
                    </h2>
                    <p
                        class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
                    >
                        Helpful Resources
                    </p>
                    <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                        Phasellus lorem quam molestie id quisque diam aenean
                        nulla in. Accumsan in quis quis nunc, ullamcorper
                        malesuada. Eleifend condimentum id viverra nulla.
                    </p>
                </div>
                <div
                    class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl"
                >
                    <div
                        class="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                        <div class="flex-shrink-0">
                            <img
                                class="h-48 w-full object-cover"
                                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=XHWnHlvfb8&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                                alt=""
                            />
                        </div>
                        <div
                            class="flex-1 bg-white p-6 flex flex-col justify-between"
                        >
                            <div class="flex-1">
                                <p class="text-sm font-medium text-cyan-600">
                                    <a href="." class="hover:underline">
                                        Article
                                    </a>
                                </p>
                                <a href="." class="block mt-2">
                                    <p
                                        class="text-xl font-semibold text-gray-900"
                                    >
                                        Boost your conversion rate
                                    </p>
                                    <p class="mt-3 text-base text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Architecto accusantium
                                        praesentium eius, ut atque fuga culpa,
                                        similique sequi cum eos quis dolorum.
                                    </p>
                                </a>
                            </div>
                            <div class="mt-6 flex items-center">
                                <div class="flex-shrink-0">
                                    <a href=".">
                                        <span class="sr-only"
                                            >Roel Aufderehar</span
                                        >
                                        <img
                                            class="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=XHWnHlvfb8&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div class="ml-3">
                                    <p
                                        class="text-sm font-medium text-gray-900"
                                    >
                                        <a href="." class="hover:underline">
                                            Roel Aufderehar
                                        </a>
                                    </p>
                                    <div
                                        class="flex space-x-1 text-sm text-gray-500"
                                    >
                                        <time datetime="2020-03-16">
                                            Mar 16, 2020
                                        </time>
                                        <span aria-hidden="true">
                                            &middot;
                                        </span>
                                        <span> 6 min read </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                        <div class="flex-shrink-0">
                            <img
                                class="h-48 w-full object-cover"
                                src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=XHWnHlvfb8&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                                alt=""
                            />
                        </div>
                        <div
                            class="flex-1 bg-white p-6 flex flex-col justify-between"
                        >
                            <div class="flex-1">
                                <p class="text-sm font-medium text-cyan-600">
                                    <a href="." class="hover:underline">
                                        Video
                                    </a>
                                </p>
                                <a href="." class="block mt-2">
                                    <p
                                        class="text-xl font-semibold text-gray-900"
                                    >
                                        How to use search engine optimization to
                                        drive sales
                                    </p>
                                    <p class="mt-3 text-base text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Velit facilis
                                        asperiores porro quaerat doloribus,
                                        eveniet dolore. Adipisci tempora aut
                                        inventore optio animi., tempore
                                        temporibus quo laudantium.
                                    </p>
                                </a>
                            </div>
                            <div class="mt-6 flex items-center">
                                <div class="flex-shrink-0">
                                    <a href=".">
                                        <span class="sr-only"
                                            >Brenna Goyette</span
                                        >
                                        <img
                                            class="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixqx=XHWnHlvfb8&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div class="ml-3">
                                    <p
                                        class="text-sm font-medium text-gray-900"
                                    >
                                        <a href="." class="hover:underline">
                                            Brenna Goyette
                                        </a>
                                    </p>
                                    <div
                                        class="flex space-x-1 text-sm text-gray-500"
                                    >
                                        <time datetime="2020-03-10">
                                            Mar 10, 2020
                                        </time>
                                        <span aria-hidden="true">
                                            &middot;
                                        </span>
                                        <span> 4 min read </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                        <div class="flex-shrink-0">
                            <img
                                class="h-48 w-full object-cover"
                                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixqx=XHWnHlvfb8&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                                alt=""
                            />
                        </div>
                        <div
                            class="flex-1 bg-white p-6 flex flex-col justify-between"
                        >
                            <div class="flex-1">
                                <p class="text-sm font-medium text-cyan-600">
                                    <a href="." class="hover:underline">
                                        Case Study
                                    </a>
                                </p>
                                <a href="." class="block mt-2">
                                    <p
                                        class="text-xl font-semibold text-gray-900"
                                    >
                                        Improve your customer experience
                                    </p>
                                    <p class="mt-3 text-base text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Sint harum rerum
                                        voluptatem quo recusandae magni placeat
                                        saepe molestiae, sed excepturi cumque
                                        corporis perferendis hic.
                                    </p>
                                </a>
                            </div>
                            <div class="mt-6 flex items-center">
                                <div class="flex-shrink-0">
                                    <a href=".">
                                        <span class="sr-only">Daniela Metz</span
                                        >
                                        <img
                                            class="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixqx=XHWnHlvfb8&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div class="ml-3">
                                    <p
                                        class="text-sm font-medium text-gray-900"
                                    >
                                        <a href="." class="hover:underline">
                                            Daniela Metz
                                        </a>
                                    </p>
                                    <div
                                        class="flex space-x-1 text-sm text-gray-500"
                                    >
                                        <time datetime="2020-02-12">
                                            Feb 12, 2020
                                        </time>
                                        <span aria-hidden="true">
                                            &middot;
                                        </span>
                                        <span> 11 min read </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

        <!-- CTA Section -->
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="bg-gray-900">
            <div
                class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 md:flex md:items-center md:justify-between text-center md:text-left"
            >
                <h2
                    class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
                >
                    <span class="block">Ready to budget better?</span>
                    <span
                        class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600"
                        >Sign up for the beta today.</span
                    >
                </h2>
                <!-- <div class="mt-8 flex lg:mt-0 flex-shrink-0"> -->
                <div class="inline-flex rounded-md shadow mt-8">
                    <a
                        href="#hero"
                        class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-green-400 to-green-600 hover:bg-green-600"
                    >
                        Sign Up
                    </a>
                </div>
                <!-- </div> -->
            </div>
        </div>
    </div>
</div>
