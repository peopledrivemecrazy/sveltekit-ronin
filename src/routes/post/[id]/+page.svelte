<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	interface Root {
		type: string;
		content: Content[];
	}

	interface Content {
		type: string;
		content: Content2[];
	}

	interface Content2 {
		type: string;
		text: string;
	}

	let body: Root;
	if (data.post?.body) {
		body = data.post.body as unknown as Root;
	}
</script>
<a href="/">Go Back</a>
{#if data.post}
	{#each body.content as { content }}
		{#each content as { text, type }}
			<p>{text}</p>
		{/each}
	{/each}
{/if}
