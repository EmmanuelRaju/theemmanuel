<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
	import { page } from '$app/stores';
	import { Menu, X } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	let isOpen = $state(false);

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/work', label: 'Work' },
		{ href: '/projects', label: 'Projects' }
	];

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}
</script>

<nav class="fixed top-4 right-0 left-0 z-50 mx-auto w-full max-w-4xl px-4">
	<div
		class="relative flex h-14 items-center justify-between rounded-full border border-white/10 bg-white/10 px-6 shadow-lg backdrop-blur-md transition-all dark:border-white/5 dark:bg-black/20"
	>
		<!-- Logo -->
		<a
			href="/"
			class="text-lg font-bold tracking-tight text-(--foreground) transition-colors hover:text-(--primary)"
		>
			ER<span class="text-(--primary)">.</span>
		</a>

		<!-- Desktop Links -->
		<div class="hidden items-center gap-8 md:flex">
			{#each links as link}
				<a
					href={link.href}
					class="text-sm font-medium transition-colors hover:text-(--primary) {$page.url
						.pathname === link.href
						? 'text-(--primary)'
						: 'text-(--muted-foreground)'}"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Actions -->
		<div class="flex items-center gap-3">
			<ThemeToggle />

			<!-- Mobile Menu Button -->
			<button
				class="text-(--foreground) hover:text-(--primary) md:hidden"
				onclick={toggleMenu}
				aria-label="Toggle Menu"
			>
				{#if isOpen}
					<X size={24} />
				{:else}
					<Menu size={24} />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Menu Overlay -->
	{#if isOpen}
		<div
			transition:fly={{ y: -20, duration: 300 }}
			class="absolute top-20 right-4 left-4 flex flex-col gap-4 rounded-2xl border border-white/10 bg-(--background)/95 p-6 shadow-2xl backdrop-blur-xl md:hidden"
		>
			{#each links as link}
				<a
					href={link.href}
					class="text-lg font-medium text-(--foreground) hover:text-(--primary)"
					onclick={closeMenu}
				>
					{link.label}
				</a>
			{/each}
		</div>
	{/if}
</nav>
