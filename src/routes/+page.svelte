<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';

	// SEO
	const title = 'Emmanuel Raju - Senior Frontend Developer';
	const description =
		"Senior Frontend Developer building purpose-driven web applications with React, SvelteKit, and modern JavaScript. Let's create digital experiences that outlive us.";

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

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://theemmanuel.dev" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<div class="flex min-h-[80vh] animate-fade-in-up flex-col justify-center space-y-12">
	<!-- Hero Section -->
	<div class="space-y-6">
		<h1 class="text-4xl font-extrabold sm:text-6xl md:text-7xl lg:text-8xl">
			Building Digital Experiences <br />
			<span class="bg-linear-to-r from-(--primary) to-(--accent) bg-clip-text text-transparent">
				That Outlive Us
			</span>
		</h1>
		<p class="max-w-3xl text-xl text-(--muted-foreground) md:text-2xl">
			Senior Frontend Developer partnering with teams to craft purpose-driven web applications using
			React, SvelteKit, and modern JavaScript.
		</p>
	</div>

	<!-- CTA Buttons -->
	<div class="flex flex-col gap-4 sm:flex-row">
		<a
			href="/work"
			class="inline-flex h-12 items-center justify-center rounded-full bg-(--primary) px-8 text-sm font-medium text-(--primary-foreground) shadow transition-all hover:scale-105 hover:opacity-90 focus:ring-2 focus:ring-(--ring) focus:outline-none"
		>
			View My Work
			<ArrowRight class="ml-2 h-4 w-4" />
		</a>
		<a
			href="/contact"
			class="inline-flex h-12 items-center justify-center rounded-full border border-(--input) bg-(--background) px-8 text-sm font-medium shadow-sm transition-all hover:scale-105 hover:bg-(--accent) hover:text-(--accent-foreground) focus:ring-2 focus:ring-(--ring) focus:outline-none"
		>
			Let's Connect
		</a>
	</div>

	<!-- Philosophy Section -->
	<div
		class="relative mt-8 rounded-2xl border border-(--border) bg-(--card) p-8 shadow-lg backdrop-blur-sm md:p-10"
	>
		<div
			class="absolute inset-0 rounded-2xl bg-linear-to-br from-(--primary)/5 via-transparent to-(--accent)/5"
		></div>
		<div class="relative space-y-4">
			<div class="flex items-start gap-3">
				<div class="mt-1 h-1 w-12 rounded-full bg-(--accent)"></div>
				<div class="flex-1 space-y-4 text-base leading-relaxed text-(--foreground) md:text-lg">
					<p>
						I believe the work we do can outlive us. That's why I love partnering on projects that
						make a positive difference. My motivation comes from one of my favorite verses:
						<span class="font-semibold text-(--primary)"
							>"Whatever you do, work at it with all your heart, as working for the LORD."</span
						>
					</p>
					<p>
						I'm adaptable and always ready to upskill myself with tools and technologies that
						generate maximum value to the end users. When you work with me, you don't just get a
						skilled developer—you gain a partner who is genuinely invested in your success.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Skills Marquee -->
	<div class="w-full overflow-hidden pt-8 pb-8">
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
