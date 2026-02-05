<script lang="ts">
	import { User, Cpu, Code, BookOpen } from 'lucide-svelte';
</script>

<div class="animate-fade-in-up space-y-16">
	<!-- Hero / Intro -->
	<section class="space-y-6">
		<h1 class="text-3xl font-bold tracking-tight md:text-5xl">
			Mechanical Roots. <span class="text-(--primary)">Digital Future.</span>
		</h1>
		<div class="prose prose-lg dark:prose-invert text-(--muted-foreground)">
			<p>
				I'm Emmanuel Raju, a Senior Web Developer based in Hyderabad. My journey began in Mechanical
				Engineering, where I learned the laws of the physical world. Today, I apply those same
				principles of system design, precision, and efficiency to the digital realm.
			</p>
			<p>
				I don't just write code; I engineer systems. From scalable headless architectures to
				developer-first tools, my passion lies in building software that stands the test of time.
			</p>
		</div>
	</section>

	<!-- The Philosophy -->
	<section class="grid gap-8 md:grid-cols-2">
		<div
			class="rounded-2xl border border-(--border) bg-(--card) p-6 shadow-sm transition-all hover:border-(--primary)/50 hover:shadow-md"
		>
			<div
				class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)"
			>
				<Cpu size={24} />
			</div>
			<h3 class="mb-2 text-xl font-semibold">Engineering First</h3>
			<p class="text-(--muted-foreground)">
				My mechanical background taught me that a system is only as good as its weakest component. I
				prioritize robust architecture, type safety, and clean abstractions.
			</p>
		</div>

		<div
			class="rounded-2xl border border-(--border) bg-(--card) p-6 shadow-sm transition-all hover:border-(--primary)/50 hover:shadow-md"
		>
			<div
				class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-(--accent)/10 text-(--accent)"
			>
				<User size={24} />
			</div>
			<h3 class="mb-2 text-xl font-semibold">Developer Ergonomics</h3>
			<p class="text-(--muted-foreground)">
				Software should be a joy to build. I focus heavily on DX (Developer Experience), creating
				tools and SDKs that empower teams to ship faster with less friction.
			</p>
		</div>
	</section>

	<!-- Skills Grid -->
	<section class="space-y-6">
		<h2 class="text-2xl font-bold">Technical Arsenal</h2>
		<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
			{#each ['SvelteKit', 'TypeScript', 'Node.js', 'TailwindCSS', 'PostgreSQL', 'MongoDB', 'System Design', 'Headless CMS'] as skill}
				<div
					class="flex items-center justify-center rounded-lg border border-(--border) bg-(--background)/50 p-4 text-center text-sm font-medium transition-colors hover:bg-(--muted) dark:hover:bg-white/5"
				>
					{skill}
				</div>
			{/each}
		</div>
	</section>
</div>
