<script>
	import { Motion, AnimatePresence } from 'svelte-motion';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<AnimatePresence list={[{ key: page.url.pathname }]} let:item>
	<Motion
		initial={{ opacity: 0, y: 10 }}
		animate={{ opacity: 1, y: 0 }}
		exit={{ opacity: 0, y: -10 }}
		transition={{ duration: 0.3 }}
	>
		<div class="w-full">
			{@render children()}
		</div>
	</Motion>
</AnimatePresence>
