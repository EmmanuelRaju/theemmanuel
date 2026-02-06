<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/logo.svg';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import WelcomeModal from '$lib/components/WelcomeModal.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<WelcomeModal />

<div
	class="flex min-h-screen flex-col bg-(--background) text-(--foreground) transition-colors duration-300 selection:bg-(--primary) selection:text-white"
>
	<NavBar />

	<main class="mx-auto w-full max-w-4xl flex-1 px-4 pt-24 pb-16">
		<PageTransition>
			{@render children()}
		</PageTransition>
	</main>

	<Footer />
</div>
