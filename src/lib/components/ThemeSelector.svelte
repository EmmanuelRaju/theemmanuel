<script lang="ts">
	import { onMount } from 'svelte';
	import { Palette, Sun, Moon } from 'lucide-svelte';
	import { themes, applyTheme, getThemeByName, getDefaultTheme, type Theme } from '$lib/themes';

	let currentTheme = $state<Theme>(themes[0]);
	let isDark = $state(false);
	let isOpen = $state(false);

	function selectTheme(theme: Theme) {
		currentTheme = theme;
		applyTheme(theme, isDark);
		// localStorage.setItem('theme', theme.name);
		isOpen = false;
	}

	function cycleTheme() {
		const currentIndex = themes.findIndex((t) => t.name === currentTheme.name);
		const nextIndex = (currentIndex + 1) % themes.length;
		selectTheme(themes[nextIndex]);
	}

	function toggleDarkMode() {
		isDark = !isDark;
		applyTheme(currentTheme, isDark);
		localStorage.setItem('darkMode', isDark ? 'dark' : 'light');
	}

	onMount(() => {
		// Load saved theme
		// const savedThemeName = localStorage.getItem('theme');
		// const theme = savedThemeName
		// 	? getThemeByName(savedThemeName) || getDefaultTheme()
		// 	: getDefaultTheme();

		const theme = getDefaultTheme();

		// Load saved dark mode preference
		const savedDarkMode = localStorage.getItem('darkMode');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		isDark = savedDarkMode === 'dark' || (!savedDarkMode && prefersDark);
		currentTheme = theme;
		applyTheme(theme, isDark);
	});
</script>

<div class="flex items-center gap-2">
	<!-- Dark/Light Mode Toggle -->
	<button
		onclick={toggleDarkMode}
		class="relative flex h-9 w-9 items-center justify-center rounded-full border border-(--border) bg-(--secondary)/50 text-(--foreground) transition-all hover:bg-(--secondary) hover:text-(--primary) focus:ring-2 focus:ring-(--ring) focus:outline-none"
		aria-label="Toggle Dark Mode"
		title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
	>
		<div
			class="absolute inset-0 flex items-center justify-center transition-transform duration-500 {isDark
				? 'scale-100 rotate-0'
				: 'scale-0 rotate-90'}"
		>
			<Moon size={18} />
		</div>
		<div
			class="absolute inset-0 flex items-center justify-center transition-transform duration-500 {isDark
				? 'scale-0 -rotate-90'
				: 'scale-100 rotate-0'}"
		>
			<Sun size={18} />
		</div>
	</button>

	<!-- Theme Selector -->
	<div class="relative">
		{#if themes.length === 1}
			<!-- Single theme - no button needed -->
		{:else if themes.length === 2}
			<!-- Two themes - simple toggle button -->
			<button
				onclick={cycleTheme}
				class="relative flex h-9 w-9 items-center justify-center rounded-full border border-(--border) bg-(--secondary)/50 text-(--foreground) transition-all hover:bg-(--secondary) hover:text-(--primary) focus:ring-2 focus:ring-(--ring) focus:outline-none"
				aria-label="Change Theme"
				title={`Switch to ${themes.find((t) => t.name !== currentTheme.name)?.label}`}
			>
				<Palette size={18} />
			</button>
		{:else}
			<!-- Multiple themes - dropdown -->
			<button
				onclick={() => (isOpen = !isOpen)}
				class="relative flex h-9 w-9 items-center justify-center rounded-full border border-(--border) bg-(--secondary)/50 text-(--foreground) transition-all hover:bg-(--secondary) hover:text-(--primary) focus:ring-2 focus:ring-(--ring) focus:outline-none"
				aria-label="Select Theme"
				title="Select Theme"
			>
				<Palette size={18} />
			</button>

			{#if isOpen}
				<div
					class="absolute top-12 right-0 z-50 min-w-35 rounded-lg border border-(--border) bg-(--card) p-2 shadow-lg"
				>
					{#each themes as theme}
						<button
							onclick={() => selectTheme(theme)}
							class="w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-(--accent)/10 hover:text-(--accent) {currentTheme.name ===
							theme.name
								? 'bg-(--accent)/10 font-medium text-(--accent)'
								: 'text-(--foreground)'}"
						>
							{theme.label}
						</button>
					{/each}
				</div>
			{/if}
		{/if}
	</div>
</div>

{#if isOpen}
	<button
		onclick={() => (isOpen = false)}
		class="fixed inset-0 z-40"
		aria-label="Close theme selector"
	></button>
{/if}
