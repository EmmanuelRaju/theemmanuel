<script lang="ts">
	import { Icon } from 'lucide-svelte';
	import { MyApproach, Offerings } from './data';
	import SEO from '$lib/components/SEO.svelte';

	// SEO
	const title = 'About - Emmanuel Raju';
	const description =
		'Purpose-driven frontend developer with 3+ years building scalable applications. Partner with me for projects that make a lasting positive impact.';
	const url = 'https://theemmanuel.dev/about';
</script>

<svelte:head>
	<SEO {title} {description} {url}></SEO>
</svelte:head>

<div class="animate-fade-in-up space-y-16">
	<!-- Hero / Intro -->
	<section class="space-y-6">
		<h1 class="text-3xl font-bold tracking-tight md:text-5xl">
			<span class="text-(--primary)">Purpose-Driven</span> Development
		</h1>
		<div
			class="prose prose-lg max-w-none space-y-4 text-base leading-relaxed text-(--muted-foreground) md:text-lg"
		>
			<p>
				I believe the work we do can outlive us. That's why I love partnering on projects that make
				a positive difference. My motivation comes from one of my favorite verses:
			</p>
			<p class="font-semibold text-(--foreground)">
				"Whatever you do, work at it with all your heart, as working for the LORD."
			</p>
			<p>
				This isn't just philosophy—it shapes how I approach every line of code, every architecture
				decision, and every collaboration.
			</p>
			<p>
				I'm Emmanuel Raju, a Senior Frontend Heavy Fullstack Developer based in Hyderabad with 7+
				years of building production-grade applications. I specialize in React, SvelteKit,
				TypeScript, and headless architectures—crafting scalable systems that prioritize both
				developer experience and end-user value.
			</p>
			<p>
				When you work with me, you don't just get a skilled developer. You gain a partner who is
				genuinely invested in your success, ready to adapt and upskill with whatever technologies
				will create the most impact for your users.
			</p>
		</div>
	</section>

	<!-- My Approach Cards -->
	<section class="space-y-8">
		<h2 class="text-2xl font-bold">My Approach</h2>
		<div class="grid gap-6 md:grid-cols-3">
			{#each MyApproach as approach (approach.title)}
				{@render ApproachCard({ ...approach })}
			{/each}
		</div>
	</section>

	<!-- What I Bring -->
	<section class="space-y-6">
		<h2 class="text-2xl font-bold">What I Bring to Your Team</h2>
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each Offerings as offering}
				{@render Offering({ ...offering })}
			{/each}
		</div>
	</section>

	<!-- CTA -->
	<section class="text-center">
		<div class="inline-flex flex-col items-center gap-4">
			<p class="text-lg text-(--muted-foreground)">Ready to build something meaningful together?</p>
			<a
				href="/contact"
				class="inline-flex h-12 items-center justify-center rounded-full bg-(--accent) px-8 text-sm font-medium text-(--accent-foreground) shadow transition-all hover:scale-105 hover:opacity-90 focus:ring-2 focus:ring-(--ring) focus:outline-none"
			>
				Let's Connect
			</a>
		</div>
	</section>
</div>

{#snippet ApproachCard(props: { title: string; description: string; icon: typeof Icon })}
	<div
		class="group rounded-2xl border border-(--border) bg-(--card) p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-(--primary)/50 hover:shadow-xl"
	>
		<div
			class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-odd:bg-(--primary)/10 group-odd:text-(--primary) group-even:bg-(--accent)/10 group-even:text-(--accent) group-hover:scale-110"
		>
			<props.icon size={24} />
		</div>
		<h3 class="mb-3 text-xl font-semibold">{props.title}</h3>
		<p class="text-sm leading-relaxed text-(--muted-foreground)">
			{props.description}
		</p>
	</div>
{/snippet}

{#snippet Offering(props: { title: string; description: string[]; icon: typeof Icon })}
	<div class="group space-y-3">
		<div class="flex items-center gap-2">
			<props.icon size={20} class="group-odd:text-(--primary) group-even:text-(--accent)" />
			<h3 class="font-semibold text-(--foreground)">{props.title}</h3>
		</div>
		<ul class="list-inside list-disc space-y-2 text-sm text-(--muted-foreground)">
			{#each props.description as item}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
{/snippet}
