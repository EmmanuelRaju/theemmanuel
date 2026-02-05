<script lang="ts">
	import { onMount } from 'svelte';
	import { Sun, Moon } from 'lucide-svelte';

	let isDark = $state(false);

	function toggleTheme() {
		isDark = !isDark;
		if (isDark) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
			isDark = true;
			document.documentElement.classList.add('dark');
		} else {
			isDark = false;
			document.documentElement.classList.remove('dark');
		}
	});
</script>

<button
	onclick={toggleTheme}
	class="relative flex h-9 w-9 items-center justify-center rounded-full border border-(--border) bg-(--secondary)/50 text-(--foreground) transition-all hover:bg-(--secondary) hover:text-(--primary) focus:ring-2 focus:ring-(--ring) focus:outline-none"
	aria-label="Toggle Theme"
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
