<script lang="ts">
	import { Briefcase, Calendar } from 'lucide-svelte';

	const experiences = [
		{
			company: 'Able.do',
			role: 'Senior Web Developer (Lead)',
			period: 'Dec 2022 - Present',
			description:
				'Leading the frontend architecture for headless commerce solutions. Orchestrating component libraries and managing complex state for account management systems.',
			stack: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'Headless CMS']
		},
		{
			company: 'Tech Mahindra',
			role: 'Associate Software Engineer',
			period: 'Jul 2018 - Jan 2022',
			description:
				'Developed scalable full-stack applications. Contributed to core business logic and UI implementation for enterprise clients.',
			stack: ['React', 'Node.js', 'Express', 'MongoDB']
		},
		{
			company: 'Amazon',
			role: 'SME (Subject Matter Expert)',
			period: 'Jul 2017 - Jun 2018',
			description:
				'Specialized in process management and customer service excellence. Streamlined workflows and mentored new associates.',
			stack: ['Process Management', 'Leadership']
		}
	];
</script>

<div class="animate-fade-in-up space-y-12">
	<div class="space-y-4">
		<h1 class="text-3xl font-bold tracking-tight md:text-5xl">Professional Journey</h1>
		<p class="text-lg text-(--muted-foreground)">A timeline of building, learning, and leading.</p>
	</div>

	<div
		class="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-linear-to-b before:from-transparent before:via-(--muted-foreground)/20 before:to-transparent md:before:mx-auto md:before:translate-x-0"
	>
		{#each experiences as xp, i}
			<div
				class="group relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse"
			>
				<!-- Icon Dot -->
				<div
					class="absolute top-0 left-0 flex h-10 w-10 shrink-0 transform items-center justify-center rounded-full border border-(--border) bg-(--background) shadow md:left-1/2 md:-translate-x-1/2"
				>
					<Briefcase size={16} class="text-(--primary)" />
				</div>

				<!-- Content Card -->
				<div
					class="ml-16 w-full pl-4 md:w-[calc(50%-2.5rem)] md:pl-0 md:group-odd:mr-auto md:group-odd:ml-0 md:group-even:mr-0 md:group-even:ml-auto"
				>
					<div
						class="rounded-xl border border-(--border) bg-(--card) p-6 shadow-sm transition-all hover:border-(--primary)/50 hover:shadow-md"
					>
						<div class="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
							<h3 class="text-xl font-bold text-(--foreground)">{xp.company}</h3>
							<span
								class="inline-flex items-center rounded-full bg-(--secondary)/50 px-2.5 py-0.5 text-xs font-medium text-(--muted-foreground)"
							>
								<Calendar size={12} class="mr-1" />
								{xp.period}
							</span>
						</div>
						<p class="mt-1 text-sm font-medium text-(--primary)">{xp.role}</p>
						<p class="mt-4 text-sm leading-relaxed text-(--muted-foreground)">
							{xp.description}
						</p>

						<div class="mt-4 flex flex-wrap gap-2">
							{#each xp.stack as tech}
								<span
									class="inline-flex items-center rounded-md border border-(--border) bg-(--background) px-2 py-1 text-xs font-medium text-(--muted-foreground) transition-colors hover:text-(--foreground)"
								>
									{tech}
								</span>
							{/each}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
