<!-- <li>
      <a
        rel="prefetch"
        class={segment === 'blog' ? 'selected' : ''}
        href="blog">blog</a>
    </li>
  </ul>
</nav> -->
<script>
    import { fade } from 'svelte/transition';
    export let segment;

    let mobileMenu = false;
</script>

<div class="fixed top-0 w-full">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center py-6 md:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1 items-center">
                <!-- <a href="/" class="mr-2">
                    <span class="sr-only">Expat Expenses</span>
                    <img
                        class="h-6 w-10 sm:h-10"
                        src="favicon.png"
                        alt="cumulus creative logo"
                    />
                </a> -->
                <a
                    href="/"
                    name="home"
                    class="text-xl tracking-widest font-extralight text-white"
                    >Expat Expenses</a
                >
            </div>

            <div class="-mr-2 -my-2 md:hidden">
                <button
                    type="button"
                    class="rounded-md p-2 inline-flex items-center justify-end text-white hover:text-gray-100 focus:outline-none">
                    <span class="sr-only">Open menu</span>
                    <!-- Heroicon name: menu -->
                    <svg
                        on:click={() => (mobileMenu = true)}
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        /></svg
                    >
                </button>
            </div>
            <nav class="hidden md:flex space-x-10">
                <div class="relative">
                    <a
                        href="/"
                        name="home"
                        class:text-gray-50={segment === undefined}
                        class="text-base text-white hover:text-gray-100 font-extralight tracking-wider">
                        Home
                    </a>
                </div>
                <a
                    rel="prefetch"
                    href="blog"
                    name="blog"
                    class:text-gray-50={segment === 'blog'}
                    class="text-base text-white hover:text-gray-100 font-extralight tracking-wider">
                    Blog
                </a>

                <div class="relative hidden">
                    <button
                        type="button"
                        class:text-gray-900={segment === 'work'}
                        class="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span>Work</span>
                        <svg
                            class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    </div>

    <!--
    Mobile menu, show/hide based on mobile menu state.
    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
    {#if mobileMenu === true}
        <div
            class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10"
            in:fade={{ duration: 200 }}
            out:fade={{ duration: 150 }}
        >
            <div
                class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
            >
                <div class="pt-5 pb-6 px-5">
                    <div class="flex items-center justify-between">
                        <div>
                            <svg
                                class="w-6 mr-2 text-secondary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                ><path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                />
                            </svg>
                        </div>
                        <div class="-mr-2">
                            <button
                                type="button"
                                class="bg-white rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none ">
                                <span class="sr-only">Close menu</span>
                                <svg
                                    on:click={() => (mobileMenu = false)}
                                    class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="mt-6">
                        <nav class="grid gap-y-8">
                            <a
                                href="/"
                                class:bg-gray-100={segment === 'home'}
                                on:click={() => (mobileMenu = false)}
                                class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                <svg
                                    class="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    ><path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                                <span
                                    class="ml-3 text-base font-medium text-gray-900">
                                    Home
                                </span>
                            </a>
                            <a
                                rel="prefetch"
                                href="blog"
                                class:bg-gray-100={segment === 'blog'}
                                on:click={() => (mobileMenu = false)}
                                class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                <svg
                                    class="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    ><path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                                    />
                                </svg>
                                <span
                                    class="ml-3 text-base font-medium text-gray-900">
                                    Blog
                                </span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div>
