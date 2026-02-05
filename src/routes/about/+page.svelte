<script lang="ts">
	import { Heart, Users, TrendingUp, Code } from 'lucide-svelte';

	// SEO
	const title = 'About - Emmanuel Raju';
	const description =
		'Purpose-driven frontend developer with 3+ years building scalable applications. Partner with me for projects that make a lasting positive impact.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://theemmanuel.dev/about" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<div class="animate-fade-in-up space-y-16">
	<!-- Hero / Intro -->
	<section class="space-y-6">
		<h1 class="text-3xl font-bold tracking-tight md:text-5xl">
			<span class="text-(--primary)">Purpose-Driven</span> Development
		</h1>
		<div class="prose prose-lg max-w-none space-y-4 text-base leading-relaxed text-(--muted-foreground) md:text-lg">
			<p>
				I believe the work we do can outlive us. That's why I love partnering on projects that
				make a positive difference. My motivation comes from one of my favorite verses: <span
					class="font-semibold text-(--foreground)"
					>"Whatever you do, work at it with all your heart, as working for the LORD."</span
				>
				This isn't just philosophy—it shapes how I approach every line of code, every architecture
				decision, and every collaboration.
			</p>
			<p>
				I'm Emmanuel Raju, a Senior Frontend Developer based in Hyderabad with 3+ years of building
				production-grade applications. I specialize in React, SvelteKit, TypeScript, and headless
				architectures—crafting scalable systems that prioritize both developer experience and
				end-user value.
			</p>
			<p>
				When you work with me, you don't just get a skilled developer. You gain a partner who is
				genuinely invested in your success, ready to adapt and upskill with whatever technologies
				will create the most impact for your users.
			</p>
		</div>
	</section>

	<!-- My Approach - 3 Cards -->
	<section class="space-y-8">
		<h2 class="text-2xl font-bold">My Approach</h2>
		<div class="grid gap-6 md:grid-cols-3">
			<!-- Card 1: Purpose-Driven -->
			<div
				class="group rounded-2xl border border-(--border) bg-(--card) p-6 shadow-sm transition-all hover:border-(--primary)/50 hover:shadow-xl hover:-translate-y-1"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary) transition-transform group-hover:scale-110"
				>
					<Heart size={24} />
				</div>
				<h3 class="mb-3 text-xl font-semibold">Purpose-Driven</h3>
				<p class="text-sm leading-relaxed text-(--muted-foreground)">
					I seek projects that create real value for end users. Whether it's building tools that
					empower developers, platforms that serve communities, or applications that solve genuine
					problems—I'm motivated by work that makes a lasting positive difference.
				</p>
			</div>

			<!-- Card 2: Partnership Mindset -->
			<div
				class="group rounded-2xl border border-(--border) bg-(--card) p-6 shadow-sm transition-all hover:border-(--accent)/50 hover:shadow-xl hover:-translate-y-1"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-(--accent)/10 text-(--accent) transition-transform group-hover:scale-110"
				>
					<Users size={24} />
				</div>
				<h3 class="mb-3 text-xl font-semibold">Partnership Mindset</h3>
				<p class="text-sm leading-relaxed text-(--muted-foreground)">
					I don't just deliver code and move on. I collaborate deeply, communicate clearly, and
					stay invested in the long-term success of your project. Your wins are my wins, and I
					approach every engagement as a true partnership.
				</p>
			</div>

			<!-- Card 3: Continuous Growth -->
			<div
				class="group rounded-2xl border border-(--border) bg-(--card) p-6 shadow-sm transition-all hover:border-(--primary)/50 hover:shadow-xl hover:-translate-y-1"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary) transition-transform group-hover:scale-110"
				>
					<TrendingUp size={24} />
				</div>
				<h3 class="mb-3 text-xl font-semibold">Continuous Growth</h3>
				<p class="text-sm leading-relaxed text-(--muted-foreground)">
					Technology evolves rapidly, and so do I. I'm always ready to upskill with new tools,
					frameworks, and patterns that maximize value for your users. Adaptability isn't just a
					trait—it's my commitment to staying relevant and effective.
				</p>
			</div>
		</div>
	</section>

	<!-- My Journey -->
	<section class="space-y-6">
		<h2 class="text-2xl font-bold">My Journey</h2>
		<div class="space-y-4 text-base leading-relaxed text-(--muted-foreground)">
			<p>
				My professional path began in mechanical engineering, where I learned to think in systems,
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
				architectural rigor, I document thoroughly, and I build with maintainability in mind. But
				now, I get to create solutions that can scale infinitely and touch lives across the globe.
			</p>
		</div>
	</section>

	<!-- What I Bring -->
	<section class="space-y-6">
		<h2 class="text-2xl font-bold">What I Bring to Your Team</h2>
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Frontend Excellence -->
			<div class="space-y-3">
				<div class="flex items-center gap-2">
					<Code size={20} class="text-(--primary)" />
					<h3 class="font-semibold text-(--foreground)">Frontend Excellence</h3>
				</div>
				<ul class="space-y-2 text-sm text-(--muted-foreground)">
					<li>• React & SvelteKit</li>
					<li>• TypeScript & JavaScript (ES6+)</li>
					<li>• HTML5, CSS3, Tailwind CSS</li>
					<li>• Responsive Design & Accessibility</li>
					<li>• Component Architecture</li>
				</ul>
			</div>

			<!-- Backend & Architecture -->
			<div class="space-y-3">
				<div class="flex items-center gap-2">
					<Code size={20} class="text-(--accent)" />
					<h3 class="font-semibold text-(--foreground)">Backend & Architecture</h3>
				</div>
				<ul class="space-y-2 text-sm text-(--muted-foreground)">
					<li>• Node.js & Express.js</li>
					<li>• Supabase & PostgreSQL</li>
					<li>• RESTful APIs</li>
					<li>• Headless CMS Integration</li>
					<li>• System Design</li>
				</ul>
			</div>

			<!-- Developer Experience -->
			<div class="space-y-3">
				<div class="flex items-center gap-2">
					<Code size={20} class="text-(--primary)" />
					<h3 class="font-semibold text-(--foreground)">Developer Experience</h3>
				</div>
				<ul class="space-y-2 text-sm text-(--muted-foreground)">
					<li>• Clean, Maintainable Code</li>
					<li>• Comprehensive Documentation</li>
					<li>• SDK & Tool Development</li>
					<li>• Git & CI/CD Workflows</li>
					<li>• Performance Optimization</li>
				</ul>
			</div>

			<!-- Soft Skills -->
			<div class="space-y-3">
				<div class="flex items-center gap-2">
					<Users size={20} class="text-(--accent)" />
					<h3 class="font-semibold text-(--foreground)">Soft Skills</h3>
				</div>
				<ul class="space-y-2 text-sm text-(--muted-foreground)">
					<li>• Systems Thinking</li>
					<li>• Clear Technical Communication</li>
					<li>• Adaptability & Learning Agility</li>
					<li>• Collaborative Problem-Solving</li>
					<li>• Partnership-Focused Approach</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="text-center">
		<div class="inline-flex flex-col items-center gap-4">
			<p class="text-lg text-(--muted-foreground)">
				Ready to build something meaningful together?
			</p>
			<a
				href="/contact"
				class="inline-flex h-12 items-center justify-center rounded-full bg-(--accent) px-8 text-sm font-medium text-(--accent-foreground) shadow transition-all hover:opacity-90 hover:scale-105 focus:ring-2 focus:ring-(--ring) focus:outline-none"
			>
				Let's Connect
			</a>
		</div>
	</section>
</div>
