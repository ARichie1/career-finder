<script lang="ts">
	let { data } = $props();
</script>

<svelte:head><title>{data.career?.name ?? 'Career'} — Career Finder</title></svelte:head>

<div class="shell">
	<header><a class="brand" href="/">Career<span>Finder</span></a><a href="/careers">All careers</a></header>
	{#if data.career}
		<main>
			<div class="eyebrow">{data.career.category}</div>
			<h1>{data.career.name}</h1>
			<p class="overview">{data.career.overview}</p>
			<section><h2>What you might do</h2><ul>{#each data.career.activities as activity}<li>{activity}</li>{/each}</ul></section>
			<section><h2>Education & training</h2><p>{data.career.education}</p></section>
			<a class="primary" href="/assessment">See how you match →</a>
		</main>
	{:else}<main><h1>Career not found.</h1><a href="/careers">Back to careers →</a></main>{/if}
</div>
<style>
	:global(body){margin:0;background:#080a0f;color:#f4f7fb;font-family:Inter,ui-sans-serif,system-ui,sans-serif}:global(*){box-sizing:border-box}:global(a){color:inherit;text-decoration:none}.shell{min-height:100vh}header{max-width:1000px;margin:auto;padding:1.25rem 1.1rem;display:flex;justify-content:space-between;color:#818b99;font-size:.88rem}.brand{color:#fff;font-weight:800;letter-spacing:-.05em;font-size:1.15rem}.brand span{opacity:.5}main{max-width:900px;margin:auto;padding:6rem 1.1rem}.eyebrow{font-size:.7rem;letter-spacing:.16em;color:#7f8a9a;font-weight:800}h1{font-size:clamp(3rem,8vw,6rem);line-height:.9;letter-spacing:-.07em;margin:1rem 0}.overview,section p,li{color:#929dab;line-height:1.7;font-size:1.05rem}.overview{max-width:720px;font-size:1.2rem}section{border-top:1px solid #202732;padding:2rem 0}h2{font-size:1rem;text-transform:uppercase;letter-spacing:.1em;color:#b5becb}ul{padding-left:1.2rem}.primary{display:inline-flex;margin-top:1rem;padding:.9rem 1.1rem;background:#f4f7fb;color:#080a0f;border-radius:13px;font-weight:800}
</style>
