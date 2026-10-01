<script lang="ts">
	import { onMount } from 'svelte';
	import { apiFetch } from '$lib/services/api/client';

	type Career = { id: string; slug: string; name: string; category: string; overview: string; activities: string[] };
	let careers = $state<Career[]>([]);
	let search = $state('');
	let loading = $state(true);

	onMount(async () => {
		try { careers = await apiFetch<Career[]>('/api/v1/careers'); } finally { loading = false; }
	});

	async function filter() {
		loading = true;
		try { careers = await apiFetch<Career[]>(`/api/v1/careers?search=${encodeURIComponent(search)}`); } finally { loading = false; }
	}
</script>

<svelte:head><title>Explore careers — Career Finder</title></svelte:head>

<div class="shell">
	<header><a class="brand" href="/">Career<span>Finder</span></a><a href="/assessment">Take assessment →</a></header>
	<main>
		<div class="eyebrow">CAREER EXPLORER</div>
		<h1>Explore possibilities.</h1>
		<p class="intro">Browse the structured career layer that will power matching, comparison and future skill planning.</p>
		<form onsubmit={(event) => { event.preventDefault(); filter(); }}>
			<input bind:value={search} placeholder="Search careers…" aria-label="Search careers" />
			<button type="submit">Search</button>
		</form>
		{#if loading}<p class="muted">Loading…</p>{:else}
			<div class="grid">
				{#each careers as career}
					<a class="card" href={`/careers/${career.slug}`}>
						<span>{career.category}</span><h2>{career.name}</h2><p>{career.overview}</p><b>Explore →</b>
					</a>
				{/each}
			</div>
		{/if}
	</main>
</div>

<style>
	:global(body){margin:0;background:#080a0f;color:#f4f7fb;font-family:Inter,ui-sans-serif,system-ui,sans-serif}:global(*){box-sizing:border-box}:global(a){color:inherit;text-decoration:none}
	.shell{min-height:100vh}header{max-width:1100px;margin:auto;padding:1.25rem 1.1rem;display:flex;justify-content:space-between;color:#818b99;font-size:.88rem}.brand{color:#fff;font-weight:800;letter-spacing:-.05em;font-size:1.15rem}.brand span{opacity:.5}
	main{max-width:1100px;margin:auto;padding:5rem 1.1rem}.eyebrow{font-size:.7rem;letter-spacing:.16em;color:#7f8a9a;font-weight:800}h1{font-size:clamp(3rem,8vw,6rem);line-height:.9;letter-spacing:-.07em;margin:1rem 0}.intro{max-width:650px;color:#8e99a8;line-height:1.6}
	form{display:flex;gap:.6rem;margin:2rem 0}input{flex:1;min-height:50px;background:#10141c;border:1px solid #252c37;border-radius:13px;color:#fff;padding:0 1rem;font:inherit}button{border:0;border-radius:13px;padding:0 1.2rem;font:inherit;font-weight:800;background:#f4f7fb;color:#080a0f}.muted{color:#7f8a9a}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem}.card{padding:1.4rem;border:1px solid #202732;background:#10141c;border-radius:20px}.card>span{font-size:.72rem;text-transform:uppercase;letter-spacing:.1em;color:#778292}.card h2{margin:2.8rem 0 .5rem;letter-spacing:-.04em}.card p{color:#8792a1;line-height:1.55;min-height:4.6rem}.card b{font-size:.85rem}@media(max-width:700px){main{padding-top:3rem}.grid{grid-template-columns:1fr}form{flex-direction:column}button{min-height:48px}}
</style>
