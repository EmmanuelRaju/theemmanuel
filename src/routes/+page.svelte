<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';

	const skills = [
		'JavaScript',
		'TypeScript',
		'HTML',
		'CSS',
		'SvelteKit',
		'React',
		'TailwindCSS',
		'DaisyUI',
		'Node.js',
		'Express.js',
		'Supabase',
		'PostgreSQL',
		'MongoDB'
	];
</script>

<div class="flex min-h-[80vh] animate-fade-in-up flex-col justify-center space-y-8">
	<div class="space-y-4">
		<h1 class="text-4xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
			Mechanical Core. <br />
			<span class="bg-linear-to-r from-(--primary) to-(--accent) bg-clip-text text-transparent">
				Software Mind.
			</span>
		</h1>
		<p class="max-w-175 text-xl text-(--muted-foreground) md:text-2xl">
			Senior Web Developer building scalable headless systems and premium developer tools.
		</p>
	</div>

	<div class="flex flex-col gap-4 sm:flex-row">
		<a
			href="/work"
			class="inline-flex h-12 items-center justify-center rounded-full bg-(--primary) px-8 text-sm font-medium text-(--primary-foreground) shadow transition-colors hover:opacity-90 focus:ring-1 focus:ring-(--ring) focus:outline-none"
		>
			View Work
			<ArrowRight class="ml-2 h-4 w-4" />
		</a>
		<a
			href="/about"
			class="inline-flex h-12 items-center justify-center rounded-full border border-(--input) bg-(--background) px-8 text-sm font-medium shadow-sm transition-colors hover:bg-(--accent) hover:text-(--accent-foreground) focus:ring-1 focus:ring-(--ring) focus:outline-none"
		>
			Read My Story
		</a>
	</div>

	<div class="w-full overflow-hidden pt-16 pb-8">
		<div class="mask-gradient relative flex w-full overflow-hidden">
			<div
				class="flex animate-marquee gap-12 text-2xl font-bold whitespace-nowrap text-(--muted-foreground)/30 select-none"
			>
				{#each skills as skill}
					<span>{skill}</span>
				{/each}
				<!-- Duplicate for seamless loop -->
				{#each skills as skill}
					<span>{skill}</span>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.mask-gradient {
		mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
	}
</style>
