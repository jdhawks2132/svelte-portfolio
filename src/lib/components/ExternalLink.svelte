<script>
	// `label` adds screen-reader-only context when the visible text is generic (e.g. "Code").
	let { href, label = '', arrow = true, class: className = '', children } = $props();
</script>

<a {href} target="_blank" rel="noopener noreferrer" class={className}
	>{@render children()}{#if label}<span class="sr-only"> {label}</span>{/if}{#if arrow}<span
			aria-hidden="true"
			class="ml-1">↗</span
		>{/if}<span class="sr-only"> (opens in new tab)</span></a
>
