<script lang="ts">
	import { ExternalLink, Github, Layers } from 'lucide-svelte';

	// SEO
	const title = 'Projects - Emmanuel Raju';
	const description =
		'Selected works including SDKs, platforms, and developer tools built with React, SvelteKit, and modern JavaScript.';

	const projects = [
		{
			title: 'Apex Subscriptions SDK',
			tagline: 'Headless Account Management',
			description:
				'Architected and implemented a headless subscription management system that cleanly separates frontend concerns from complex backend logic. Designed for flexibility and scale, enabling teams to build custom account experiences while the SDK handles the heavy lifting of subscription state, validation, and sync.',
			impact: '', // PLACEHOLDER: Add metrics like "Reduced integration time by 60%"
			tags: ['SvelteKit', 'TypeScript', 'Headless CMS', 'Architecture'],
			links: [] // PLACEHOLDER: Add GitHub or case study links
		},
		{
			title: 'BRICKS UI',
			tagline: 'Component Library & Design System',
			description:
				'Built a custom component library from the ground up for internal use across multiple client projects. Prioritizes accessibility, theming flexibility, and composability—empowering developers to build consistent, high-quality interfaces faster. Includes comprehensive documentation and Storybook integration.',
			impact: '', // PLACEHOLDER: e.g., "Used across 5+ production apps"
			tags: ['Svelte', 'TailwindCSS', 'Design System', 'Accessibility'],
			links: []
		},
		{
			title: 'ISHRAFF',
			tagline: 'Task Management for Field Teams',
			description:
				'Developed an image-based task management Progressive Web App tailored for blue-collar workforce efficiency. Supports offline mode, real-time sync, and intuitive workflows that work even in low-connectivity environments. Built to solve real communication gaps in field operations.',
			impact: '', // PLACEHOLDER: e.g., "Improved task completion tracking by 70%"
			tags: ['Node.js', 'SvelteKit', 'PostgreSQL', 'PWA', 'Offline-First'],
			links: []
		},
		{
			title: 'Ellipsis',
			tagline: 'Headless Shopping Cart SDK',
			description:
				'Engineered robust shopping cart logic that abstracts away complex validation, inventory checks, and state management. Achieved 90%+ test coverage through comprehensive Jest testing. Designed for e-commerce teams who need reliable cart functionality without the complexity.',
			impact: '', // PLACEHOLDER: e.g., "Handles 10,000+ transactions/month"
			tags: ['Jest', 'Svelte', 'TypeScript', 'Testing', 'E-commerce'],
			links: []
		},
		{
			title: 'Saut',
			tagline: 'EdTech for Inclusive Learning',
			description:
				'Built a curriculum management platform specifically designed for tracking the progress of differently-abled children. Prioritized accessibility, intuitive navigation, and customizable learning paths—creating a tool that genuinely serves educators and families in the special education space.',
			impact: '', // PLACEHOLDER: e.g., "Supports 100+ students and educators"
			tags: ['SvelteKit', 'TypeScript', 'Accessibility', 'EdTech'],
			links: []
		},
		{
			title: 'eNetra & eFortify',
			tagline: 'IoT & Health Tech at Scale',
			description:
				'Developed smart energy management dashboards and COVID tracking applications deployed across multiple facilities. Combined real-time data visualization with intuitive interfaces, enabling users to make informed decisions quickly. Built for scale and reliability during critical operations.',
			impact: '', // PLACEHOLDER: e.g., "Tracked 50,000+ screenings"
			tags: ['IoT', 'Dashboard', 'Data Visualization', 'React'],
			links: []
			}
			];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://theemmanuel.dev/projects" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<div class="animate-fade-in-up space-y-12">
	<!-- Hero -->
	<div class="space-y-4">
		<h1 class="text-3xl font-bold tracking-tight md:text-5xl">Selected Works</h1>
		<p class="text-lg text-(--muted-foreground)">
			SDKs, platforms, and tools I've architected and built—each designed to solve real problems
			and create lasting value.
		</p>
	</div>

	<!-- Projects Grid -->
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
		{#each projects as project}
			<div
				class="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-(--border) bg-(--card) p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-(--primary)/50 hover:shadow-xl"
			>
				<!-- Gradient Overlay on Hover -->
				<div
					class="absolute inset-0 bg-linear-to-br from-(--primary)/5 to-(--accent)/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				></div>

				<div class="relative z-10">
					<div
						class="mb-4 flex h-10 w-10 transform items-center justify-center rounded-full bg-(--primary)/10 text-(--primary) transition-all duration-300 group-hover:scale-110 group-hover:bg-(--primary) group-hover:text-(--primary-foreground)"
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
						class="mt-4 text-sm leading-relaxed text-(--muted-foreground) transition-colors duration-300 group-hover:text-(--foreground)"
					>
						{project.description}
					</p>

					{#if project.impact}
						<p class="mt-3 text-xs font-semibold text-(--primary)">
							{project.impact}
						</p>
					{/if}
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

					{#if project.links && project.links.length > 0}
						<div class="mt-4 flex gap-3">
							{#each project.links as link}
								<a
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-1 text-xs text-(--primary) hover:underline"
								>
									{#if link.type === 'github'}
										<Github size={14} />
									{:else}
										<ExternalLink size={14} />
									{/if}
									{link.label}
								</a>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>

	<!-- CTA -->
	<section class="text-center pt-8">
		<div class="inline-flex flex-col items-center gap-4">
			<p class="text-lg text-(--muted-foreground) max-w-2xl">
				These are just highlights. I love diving deep into challenging problems and building
				solutions that last. Want to see more or discuss a project?
			</p>
			<a
				href="/contact"
				class="inline-flex h-12 items-center justify-center rounded-full bg-(--accent) px-8 text-sm font-medium text-(--accent-foreground) shadow transition-all hover:opacity-90 hover:scale-105 focus:ring-2 focus:ring-(--ring) focus:outline-none"
			>
				Let's Talk
			</a>
		</div>
	</section>
</div>
