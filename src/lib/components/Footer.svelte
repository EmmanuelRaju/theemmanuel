<script>
	import { Github, Linkedin, Mail } from 'lucide-svelte';
</script>

<footer class="mt-auto border-t border-(--border) bg-(--card)/50 py-8 backdrop-blur-sm">
	<div class="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
		<p class="text-sm text-(--muted-foreground)">
			&copy; {new Date().getFullYear()} Emmanuel Raju. Built with Svelte 5 & Tailwind.
		</p>

		<div class="flex items-center gap-6">
			<a
				href="https://github.com"
				target="_blank"
				rel="noreferrer"
				class="text-(--muted-foreground) transition-colors hover:text-(--primary)"
				aria-label="GitHub"
			>
				<Github size={20} />
			</a>
			<a
				href="https://linkedin.com/in/emmanuel-raju"
				target="_blank"
				rel="noreferrer"
				class="text-(--muted-foreground) transition-colors hover:text-(--primary)"
				aria-label="LinkedIn"
			>
				<Linkedin size={20} />
			</a>
			<a
				href="mailto:contact@example.com"
				class="text-(--muted-foreground) transition-colors hover:text-(--primary)"
				aria-label="Email"
			>
				<Mail size={20} />
			</a>
		</div>
	</div>
</footer>
