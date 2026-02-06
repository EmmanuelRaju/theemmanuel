<script lang="ts">
	import { Briefcase, Calendar } from 'lucide-svelte';

	// SEO
	const title = 'Work Experience - Emmanuel Raju';
	const description =
		'Professional journey of Emmanuel Raju - Leading frontend development at Able.do and building scalable systems for enterprise clients.';

	const experiences = [
		{
			company: 'Able.do',
			role: 'Senior Web Developer (Lead)',
			period: 'Dec 2022 - Present',
			description:
				'Leading frontend architecture for a headless commerce platform. Partnering with the team to build scalable account management systems, component libraries, and developer-focused SDKs. Orchestrating complex state management and creating tools that empower other developers to ship faster.',
			stack: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'Headless CMS', 'Component Architecture']
		},
		{
			company: 'Tech Mahindra',
			role: 'Associate Software Engineer',
			period: 'Jul 2018 - Jan 2022',
			description:
				'Developed full-stack applications for enterprise clients, contributing to core business logic and UI implementation. Built scalable solutions using modern JavaScript frameworks, collaborated with cross-functional teams, and delivered features that improved user workflows and system performance.',
			stack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs']
		}
	];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://theemmanuel.dev/work" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<div class="animate-fade-in-up space-y-12">
	<!-- Hero -->
	<div class="space-y-4">
		<h1 class="text-3xl font-bold tracking-tight md:text-5xl">
			Professional <span class="text-(--primary)">Journey</span>
		</h1>
		<p class="text-lg text-(--muted-foreground)">
			Partnerships, projects, and platforms that have shaped my path.
		</p>
		<div class="space-y-4 text-base leading-relaxed text-(--muted-foreground)">
			<p>
				My professional path began in Mechanical Engineering, where I learned to think in systems,
				solve complex problems, and understand how intricate pieces work together. Those years
				taught me precision, structure, and the importance of solid foundations.
			</p>
			<p>
				But I've always been drawn to building digital solutions—tools and applications that can
				reach more people and create broader impact. That pull led me to transition into software
				development, where I could combine systems thinking with creative problem-solving in the
				digital realm.
			</p>
			<p>
				Today, I specialize in modern frontend development with React, SvelteKit, TypeScript, and
				headless architectures. I've built everything from dynamic content platforms to
				developer-focused SDKs, always with an eye toward performance, scalability, and exceptional
				user experience.
			</p>
			<p>
				My engineering background still shapes how I work: I approach frontend challenges with
				architectural rigor, I document thoroughly, and I build with maintainability in mind. Now, I
				get to create solutions that can scale infinitely and touch lives across the globe.
			</p>
		</div>
	</div>

	<!-- Timeline -->
	<div
		class="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-linear-to-b before:from-transparent before:via-(--muted-foreground)/20 before:to-transparent md:before:mx-auto md:before:translate-x-0"
	>
		{#each experiences as xp, i}
			<div
				class="group relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse"
			>
				<!-- Icon Dot -->
				<div
					class="absolute top-0 left-0 flex h-10 w-10 shrink-0 transform items-center justify-center rounded-full border border-(--border) bg-(--background) shadow transition-all group-hover:scale-110 group-hover:border-(--primary) md:left-1/2 md:-translate-x-1/2"
				>
					<Briefcase size={16} class="text-(--primary)" />
				</div>

				<!-- Content Card -->
				<div
					class="ml-16 w-full pl-4 md:w-[calc(50%-2.5rem)] md:pl-0 md:group-odd:mr-auto md:group-odd:ml-0 md:group-even:mr-0 md:group-even:ml-auto"
				>
					<div
						class="rounded-xl border border-(--border) bg-(--card) p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-(--primary)/50 hover:shadow-xl"
					>
						<div class="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
							<h3 class="text-xl font-bold text-(--foreground)">{xp.company}</h3>
							<span
								class="inline-flex items-center rounded-full bg-(--secondary)/10 px-2.5 py-0.5 text-xs font-medium text-(--muted-foreground)"
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

	<!-- CTA -->
	<section class="pt-8 text-center">
		<div class="inline-flex flex-col items-center gap-4">
			<p class="max-w-2xl text-lg text-(--muted-foreground)">
				Ready to collaborate? I'm always open to partnerships where I can create meaningful impact.
				Let's build something great together.
			</p>
			<a
				href="/contact"
				class="inline-flex h-12 items-center justify-center rounded-full bg-(--accent) px-8 text-sm font-medium text-(--accent-foreground) shadow transition-all hover:scale-105 hover:opacity-90 focus:ring-2 focus:ring-(--ring) focus:outline-none"
			>
				Let's Connect
			</a>
		</div>
	</section>
</div>
