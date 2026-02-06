<script lang="ts">
	let { title, description, url } = $props();
</script>

<title>{title}</title>
<meta name="description" content={description} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={url} />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
