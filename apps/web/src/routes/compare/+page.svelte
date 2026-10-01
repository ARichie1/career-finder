<script lang="ts">
	import { onMount } from 'svelte';
	import { apiFetch } from '$lib/services/api/client';
	import AccountControl from '$lib/components/AccountControl.svelte';
	import { clearCompareSlugs, readCompareSlugs, toggleCompareSlug } from '$lib/utils/compare';

	type Career = {
		slug: string;
		name: string;
		category: string;
		overview: string;
		education: string;
		activities: string[];
	};

	let careers = $state<Career[]>([]);
	let loading = $state(true);
	let error = $state('');

	onMount(async () => {
		try {
			const slugs = readCompareSlugs();
			if (!slugs.length) {
				careers = [];
				return;
			}

			const payload = await Promise.all(
				slugs.map((slug) => apiFetch<Career>(`/api/v1/careers/${encodeURIComponent(slug)}`))
			);
			careers = payload.filter(Boolean);
		} catch (err) {
			error = err instanceof Error ? err.message : 'Unable to load comparison data.';
		} finally {
			loading = false;
		}
	});

	function resetSelection() {
		clearCompareSlugs();
		careers = [];
	}

	function removeCareer(slug: string) {
		toggleCompareSlug(slug);
		careers = careers.filter((career) => career.slug !== slug);
	}
</script>

<svelte:head>
	<title>Compare careers — Career Finder</title>
</svelte:head>

<div class="shell">
	<header>
		<a class="brand" href="/">Career<span>Finder</span></a>
		<nav aria-label="Main navigation"><a href="/careers">Back to careers</a><a href="/assessment">Assessment</a><AccountControl /></nav>
	</header>

	<main>
		<div class="eyebrow">CAREER COMPARISON</div>
		<h1>Compare shortlisted careers.</h1>
		<p class="intro">Select up to three careers to compare the main signals that matter to a decision.</p>

		{#if loading}
			<p class="muted">Loading comparison…</p>
		{:else if error}
			<p class="error">{error}</p>
		{:else if !careers.length}
			<div class="empty-state">
				<p>No careers are selected yet.</p>
				<a href="/careers">Browse careers →</a>
			</div>
		{:else}
			<div class="compare-grid">
				{#each careers as career}
					<article class="card">
						<span class="category">{career.category}</span>
						<h2><a href={`/careers/${career.slug}`}>{career.name}</a></h2>
						<p class="overview">{career.overview}</p>
						<div class="meta">
							<div>
								<p class="label">Education</p>
								<p>{career.education}</p>
							</div>
							<div>
								<p class="label">Typical activities</p>
								<ul>
									{#each career.activities as activity}
										<li>{activity}</li>
									{/each}
								</ul>
							</div>
						</div>
						<button class="remove" type="button" onclick={() => removeCareer(career.slug)}>Remove</button>
					</article>
				{/each}
			</div>

			<button class="secondary" type="button" onclick={resetSelection}>Clear selection</button>
		{/if}
	</main>
</div>

<style>
	:global(body){margin:0;background:#080a0f;color:#f4f7fb;font-family:Inter,ui-sans-serif,system-ui,sans-serif}:global(*){box-sizing:border-box}:global(a){color:inherit;text-decoration:none}
	.shell{min-height:100vh}header{max-width:1100px;margin:auto;padding:1.25rem 1.1rem;display:flex;justify-content:space-between;color:#818b99;font-size:.88rem}header nav{display:flex;gap:1rem}.brand{color:#fff;font-weight:800;letter-spacing:-.05em;font-size:1.15rem}.brand span{opacity:.5}
	main{max-width:1100px;margin:auto;padding:5rem 1.1rem}.eyebrow{font-size:.7rem;letter-spacing:.16em;color:#7f8a9a;font-weight:800}h1{font-size:clamp(2.8rem,8vw,5rem);line-height:.9;letter-spacing:-.07em;margin:1rem 0}.intro{max-width:650px;color:#8e99a8;line-height:1.6}.compare-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem;margin-top:2rem}.card{border:1px solid #202732;background:#10141c;border-radius:20px;padding:1.25rem}.category{font-size:.7rem;letter-spacing:.12em;color:#778292;text-transform:uppercase}.card h2{margin:1.2rem 0 .8rem;letter-spacing:-.04em}.card h2 a:hover{text-decoration:underline}.overview{color:#9aa5b3;line-height:1.6}.meta{display:grid;gap:1rem;margin-top:1.2rem}.label{display:block;font-size:.7rem;letter-spacing:.12em;color:#73819a;text-transform:uppercase;margin-bottom:.5rem}.meta p,.meta li{color:#b8c3d3;line-height:1.6}.meta ul{margin:0;padding-left:1.2rem}.secondary,.remove{margin-top:1.5rem;border:1px solid #2d3745;background:#11151d;color:#eff5fb;border-radius:12px;padding:.8rem 1rem;font:inherit;font-weight:800;cursor:pointer}.remove{margin-top:1rem}.muted,.error,.empty-state{color:#8e99a8}.empty-state{padding:2rem 0}.empty-state a{display:inline-block;margin-top:.5rem}@media(max-width:800px){.compare-grid{grid-template-columns:1fr}}
</style>
