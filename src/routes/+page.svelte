<script lang="ts">
	export let data;

</script>

<ul>
	{#each data.posts as { title, id }}
		<a href="/post/{id}">
			<li>{title}</li>
		</a>
	{/each}
</ul>
