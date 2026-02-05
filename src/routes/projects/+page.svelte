<script lang="ts">
	import { ExternalLink, Github, Layers } from 'lucide-svelte';

	const projects = [
		{
			title: 'Apex Subscriptions SDK',
			tagline: 'Headless Account Management',
			description:
				'Architecture and implementation of a headless subscription management system. Designed to separate frontend concerns from complex backend logic.',
			tags: ['SvelteKit', 'TypeScript', 'Headless CMS', 'Architecture'],
			links: []
		},
		{
			title: 'BRICKS UI',
			tagline: 'Component Library & Design System',
			description:
				'A custom component library built for internal use across multiple client projects. Focuses on accessibility, theming, and composability.',
			tags: ['Svelte', 'TailwindCSS', 'Design System'],
			links: []
		},
		{
			title: 'ISHRAFF',
			tagline: 'Task Management PWA',
			description:
				'Image-based task management Progressive Web App tailored for blue-collar workforce efficiency. Supports offline mode and real-time sync.',
			tags: ['Node.js', 'SvelteKit', 'PostgreSQL', 'PWA'],
			links: []
		},
		{
			title: 'Ellipsis',
			tagline: 'Headless Cart SDK',
			description:
				'Robust shopping cart logic abstracting away complex validation and inventory checks. Achieved 90%+ test coverage.',
			tags: ['Jest', 'Svelte', 'TypeScript', 'Testing'],
			links: []
		},
		{
			title: 'Saut',
			tagline: 'EdTech Platform',
			description:
				'Curriculum management platform specifically designed for tracking progress of differently-abled children.',
			tags: ['SvelteKit', 'TypeScript', 'Accessibility'],
			links: []
		},
		{
			title: 'eNetra & eFortify',
			tagline: 'IoT & Health Tech',
			description: 'Smart energy management and COVID tracking applications deployed at scale.',
			tags: ['IoT', 'Dashboard', 'Data Viz'],
			links: []
		}
	];
</script>

<div class="animate-fade-in-up space-y-12">
	<div class="space-y-4">
		<h1 class="text-3xl font-bold tracking-tight md:text-5xl">Selected Works</h1>
		<p class="text-lg text-(--muted-foreground)">
			A collection of SDKs, platforms, and tools I've engineered.
		</p>
	</div>

	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
		{#each projects as project}
			<div
				class="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-(--border) bg-(--card) p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--primary)/50 hover:shadow-xl"
			>
				<!-- Gradient Overlay on Hover -->
				<div
					class="absolute inset-0 bg-linear-to-br from-(--primary)/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				></div>

				<div class="relative z-10">
					<div
						class="mb-4 flex h-10 w-10 transform items-center justify-center rounded-full bg-(--primary)/10 text-(--primary) transition-colors duration-300 group-hover:scale-110 group-hover:bg-(--primary) group-hover:text-(--primary-foreground)"
					>
						<Layers size={20} />
					</div>

					<h3
						class="text-xl font-bold tracking-tight text-(--foreground) transition-colors group-hover:text-(--primary)"
					>
						{project.title}
					</h3>
					<p class="mt-1 text-sm font-medium text-(--accent)">
						{project.tagline}
					</p>
					<p
						class="mt-4 text-sm leading-relaxed text-(--muted-foreground) duration-300 group-hover:text-(--foreground)"
					>
						{project.description}
					</p>
				</div>

				<div class="relative z-10 mt-6">
					<div class="flex flex-wrap gap-2 text-xs">
						{#each project.tags as tag}
							<span
								class="rounded-full bg-(--secondary) px-3 py-1 font-medium text-(--secondary-foreground) transition-colors group-hover:bg-(--primary)/20 group-hover:text-(--primary)"
							>
								{tag}
							</span>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
