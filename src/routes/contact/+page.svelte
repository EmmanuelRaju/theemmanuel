<script lang="ts">
	import { Mail, Linkedin, Github, Calendar, ArrowRight } from 'lucide-svelte';

	// SEO
	const title = 'Contact - Emmanuel Raju';
	const description =
		"Let's build something that matters. Reach out to discuss your project and explore how we can partner together.";

	const contactOptions = [
		{
			icon: Mail,
			label: 'Email',
			value: 'your-email@example.com', // PLACEHOLDER: Add your real email
			href: 'mailto:your-email@example.com', // PLACEHOLDER: Add your real email
			description: 'Send me an email',
			primary: true
		},
		{
			icon: Linkedin,
			label: 'LinkedIn',
			value: 'emmanuel-raju',
			href: 'https://linkedin.com/in/emmanuel-raju',
			description: 'Connect professionally'
		},
		{
			icon: Github,
			label: 'GitHub',
			value: 'your-github-username', // PLACEHOLDER: Add your GitHub username
			href: 'https://github.com/your-github-username', // PLACEHOLDER: Add your GitHub URL
			description: 'Check out my code'
		}
		// OPTIONAL: Uncomment if you have a Calendly link
		// {
		// 	icon: Calendar,
		// 	label: 'Schedule a Call',
		// 	value: 'calendly.com/your-link',
		// 	href: 'https://calendly.com/your-link', // PLACEHOLDER: Add your Calendly link
		// 	description: 'Book time to chat'
		// }
	];

	const expectations = [
		{
			title: 'Quick Response',
			description: 'I typically reply within 24-48 hours.'
		},
		{
			title: 'Discovery Call',
			description:
				"If we're a good fit, we'll schedule a call to dive deeper into your needs and explore how I can help."
		},
		{
			title: 'Transparent Process',
			description:
				"I'll be upfront about timelines, approach, and whether I'm the right partner for your project."
		}
	];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://theemmanuel.dev/contact" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<div class="animate-fade-in-up space-y-12">
	<!-- Hero -->
	<section class="space-y-6">
		<h1 class="text-3xl font-bold tracking-tight md:text-5xl">
			Let's Build Something <span class="text-(--primary)">That Matters</span>
		</h1>
		<div
			class="prose prose-lg max-w-none space-y-4 text-base leading-relaxed text-(--muted-foreground) md:text-lg"
		>
			<p>
				I'm always interested in projects where I can make a genuine impact. Whether you're a
				startup with a vision, an established company modernizing your stack, or a team that needs a
				reliable frontend partner—let's talk.
			</p>
			<p>
				I approach every conversation as the start of a potential partnership. Share your
				challenges, your goals, and what success looks like for you. If we're a good fit, I'll bring
				not just technical expertise, but genuine investment in your success.
			</p>
		</div>
	</section>

	<!-- Contact Options -->
	<section class="space-y-6">
		<h2 class="text-2xl font-bold">Get in Touch</h2>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each contactOptions as option}
				<a
					href={option.href}
					target={option.href.startsWith('mailto:') ? '_self' : '_blank'}
					rel={option.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
					class="group relative flex flex-col gap-3 rounded-xl border border-(--border) bg-(--card) p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-{option.primary
						? '(--accent)'
						: '(--primary)'}/50 hover:shadow-xl"
					class:bg-linear-to-br={option.primary}
					class:from-accent={option.primary}
					class:to-transparent={option.primary}
				>
					<div
						class="flex h-12 w-12 items-center justify-center rounded-lg bg-{option.primary
							? '(--accent)'
							: '(--primary)'}/10 text-{option.primary
							? '(--accent)'
							: '(--primary)'} transition-all group-hover:scale-110 group-hover:bg-{option.primary
							? '(--accent)'
							: '(--primary)'} group-hover:text-{option.primary
							? '(--accent-foreground)'
							: '(--primary-foreground)'}"
					>
						<svelte:component this={option.icon} size={24} />
					</div>

					<div class="flex-1">
						<h3 class="text-lg font-semibold text-(--foreground)">{option.label}</h3>
						<p class="mt-1 text-sm text-(--muted-foreground)">{option.description}</p>
						<p
							class="mt-2 text-sm font-medium text-{option.primary
								? '(--accent)'
								: '(--primary)'} group-hover:underline"
						>
							{option.value}
						</p>
					</div>

					<ArrowRight
						size={16}
						class="absolute top-6 right-6 text-(--muted-foreground) opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
					/>
				</a>
			{/each}
		</div>
	</section>

	<!-- What to Expect -->
	<section class="space-y-6">
		<h2 class="text-2xl font-bold">What to Expect</h2>
		<div class="grid gap-6 md:grid-cols-3">
			{#each expectations as expectation, i}
				<div class="flex gap-4">
					<div
						class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--primary)/10 text-sm font-bold text-(--primary)"
					>
						{i + 1}
					</div>
					<div>
						<h3 class="font-semibold text-(--foreground)">{expectation.title}</h3>
						<p class="mt-2 text-sm text-(--muted-foreground)">{expectation.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Final CTA -->
	<section
		class="mt-12 rounded-2xl border border-(--border) bg-(--card) p-8 text-center shadow-lg md:p-12"
	>
		<div class="relative space-y-4">
			<h2 class="text-2xl font-bold md:text-3xl">Ready to Start a Conversation?</h2>
			<p class="mx-auto max-w-2xl text-base text-(--muted-foreground) md:text-lg">
				Whether you have a fully-formed project or just an idea you'd like to explore, I'd love to
				hear from you. Let's see if we're a good fit.
			</p>
			<div class="pt-4">
				<a
					href="mailto:your-email@example.com"
					class="inline-flex h-12 items-center justify-center rounded-full bg-(--accent) px-8 text-sm font-medium text-(--accent-foreground) shadow transition-all hover:scale-105 hover:opacity-90 focus:ring-2 focus:ring-(--ring) focus:outline-none"
				>
					<Mail size={16} class="mr-2" />
					Send Me an Email
				</a>
			</div>
		</div>
	</section>
	<!-- <div
		class="absolute inset-0 rounded-2xl bg-linear-to-br from-(--primary)/5 via-transparent to-(--accent)/5"
	></div> -->
</div>
