<script lang="ts">
	import { onMount } from 'svelte';
	import { X, Palette, Sun, Moon, RefreshCw, Menu } from 'lucide-svelte';
	import { scale, fade } from 'svelte/transition';

	let isVisible = $state(false);
	let isMobile = $state(false);

	function closeModal() {
		isVisible = false;
		localStorage.setItem('welcomeModalSeen', 'true');
	}

	onMount(() => {
		// Check if user has seen the modal before
		const hasSeenModal = localStorage.getItem('welcomeModalSeen');
		if (!hasSeenModal) {
			// Small delay before showing modal for better UX
			setTimeout(() => {
				isVisible = true;
			}, 500);
		}

		// Detect if user is on mobile
		isMobile = window.innerWidth < 768;

		// Update on resize
		const handleResize = () => {
			isMobile = window.innerWidth < 768;
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

{#if isVisible}
	<!-- Backdrop -->
	<button
		transition:fade={{ duration: 200 }}
		onclick={closeModal}
		class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
		aria-label="Close modal"
	></button>

	<!-- Modal -->
	<div
		transition:scale={{ duration: 300, start: 0.95 }}
		class="fixed top-1/2 left-1/2 z-51 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-(--border) bg-(--card) p-6 shadow-2xl"
	>
		<!-- Close Button -->
		<button
			onclick={closeModal}
			class="absolute top-4 right-4 rounded-full p-1.5 text-(--muted-foreground) transition-colors hover:bg-(--muted) hover:text-(--foreground)"
			aria-label="Close"
		>
			<X size={20} />
		</button>

		<!-- Content -->
		<div class="space-y-4">
			<!-- Title -->
			<h2 class="pr-8 text-2xl font-bold text-(--foreground)">
				Hi there! Glad to have you here. 👋
			</h2>

			<!-- Instructions -->
			<div class="space-y-4 text-sm text-(--muted-foreground)">
				<!-- Theme & Dark Mode -->
				<div class="space-y-2">
					<div class="flex items-start gap-3">
						<div class="mt-0.5 flex gap-2">
							<div
								class="flex h-7 w-7 items-center justify-center rounded-full bg-(--secondary)/50"
							>
								<Sun size={14} class="text-(--foreground)" />
							</div>
							<div
								class="flex h-7 w-7 items-center justify-center rounded-full bg-(--secondary)/50"
							>
								<Moon size={14} class="text-(--foreground)" />
							</div>
						</div>
						<p class="flex-1">
							<span class="font-semibold text-(--foreground)">Toggle Dark Mode:</span> Use the sun/moon
							icon in the navigation bar to switch between light and dark modes.
						</p>
					</div>

					<div class="flex items-start gap-3">
						<div
							class="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-(--secondary)/50"
						>
							<Palette size={14} class="text-(--foreground)" />
						</div>
						<p class="flex-1">
							<span class="font-semibold text-(--foreground)">Change Themes:</span> Click the palette
							icon to explore different color themes and font combinations.
						</p>
					</div>
				</div>

				<!-- Refresh Tip -->
				<div class="rounded-lg bg-(--muted)/50 p-3">
					<div class="flex items-start gap-3">
						<RefreshCw size={16} class="mt-0.5 text-(--accent)" />
						<p class="flex-1">
							<span class="font-semibold text-(--foreground)">Pro Tip:</span> Refresh or reload the page
							to get a completely new random theme and experience a fresh look!
						</p>
					</div>
				</div>

				{#if isMobile}
					<!-- Mobile Navigation -->
					<div class="rounded-lg border border-(--border) bg-(--accent)/5 p-3">
						<div class="flex items-start gap-3">
							<Menu size={16} class="mt-0.5 text-(--accent)" />
							<p class="flex-1">
								<span class="font-semibold text-(--foreground)">Mobile Navigation:</span> Tap the hamburger
								menu (☰) in the top right to navigate across the site.
							</p>
						</div>
					</div>
				{/if}
			</div>

			<!-- Got it Button -->
			<button
				onclick={closeModal}
				class="w-full rounded-lg bg-(--primary) px-4 py-2.5 font-medium text-(--primary-foreground) transition-all hover:opacity-90 focus:ring-2 focus:ring-(--ring) focus:outline-none"
			>
				Got it, thanks!
			</button>
		</div>
	</div>
{/if}
