<script lang="ts">
	import AccountControl from '$lib/components/AccountControl.svelte';

	const features = [
		['01', 'Discover how you work', 'A fast visual assessment turns your responses into a multidimensional work-style profile.'],
		['02', 'Explore careers that fit', 'See career options with transparent reasons instead of a mysterious personality label.'],
		['03', 'Know what to do next', 'Career Finder is being built to connect discovery with skills, planning and action.']
	];
</script>

<svelte:head>
	<title>Career Finder — Discover careers that fit how you work</title>
	<meta name="description" content="Career Finder helps you understand your work style, explore careers and make informed career decisions." />
</svelte:head>

<div class="shell">
	<header class="nav">
		<a class="brand" href="/" aria-label="Career Finder home">Career<span>Finder</span></a>
		<nav aria-label="Main navigation">
			<a class="nav-link" href="/careers">Explore careers</a>
			<a class="nav-link" href="/assessment">Take assessment <span aria-hidden="true">→</span></a>
			<AccountControl />
		</nav>
	</header>

	<main>
		<section class="hero">
			<div class="eyebrow">CAREER DISCOVERY, REIMAGINED</div>
			<h1>Find work that fits <em>how you work.</em></h1>
			<p class="lead">Career Finder combines a visual work-style assessment with interests and career intelligence to help you discover possibilities — and understand why they fit.</p>
			<div class="actions">
				<a class="primary" href="/assessment">Start the assessment <span>→</span></a>
				<a class="secondary" href="#how-it-works">How it works</a>
			</div>
			<p class="micro">30 visual rounds · multidimensional profile · explainable matches</p>
		</section>

		<section id="how-it-works" class="features" aria-label="How Career Finder works">
			{#each features as feature}
				<article class="feature">
					<div class="number">{feature[0]}</div>
					<h2>{feature[1]}</h2>
					<p>{feature[2]}</p>
				</article>
			{/each}
		</section>

		<section class="statement">
			<p>Not “we know your perfect career.”</p>
			<h2>“Here are careers worth exploring — and here’s why.”</h2>
		</section>
	</main>
</div>

<style>
	:global(*) { box-sizing: border-box; }
	:global(body) { margin: 0; background: #080a0f; color: #f4f7fb; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
	:global(a) { color: inherit; text-decoration: none; }
	.shell { min-height: 100vh; background: radial-gradient(circle at 80% 0%, rgba(93, 84, 255, .18), transparent 32rem), radial-gradient(circle at 0% 40%, rgba(0, 210, 190, .08), transparent 28rem); }
	.nav { max-width: 1180px; margin: 0 auto; padding: 1.25rem 1.1rem; display: flex; justify-content: space-between; align-items: center; }
	.brand { font-weight: 800; letter-spacing: -.05em; font-size: 1.15rem; }
	.brand span { opacity: .5; }
	.nav nav { display: flex; align-items: center; gap: 1.25rem; }
	.nav-link { font-size: .9rem; color: #c9d1dc; }
	.hero { max-width: 900px; margin: 0 auto; padding: 6rem 1.1rem 5rem; text-align: center; }
	.eyebrow { font-size: .72rem; letter-spacing: .18em; color: #8c98a8; font-weight: 700; }
	h1 { font-size: clamp(3rem, 10vw, 7rem); line-height: .92; letter-spacing: -.075em; margin: 1.4rem 0 1.5rem; }
	h1 em { font-style: normal; opacity: .48; }
	.lead { max-width: 680px; margin: 0 auto; color: #aeb8c6; font-size: clamp(1rem, 2vw, 1.2rem); line-height: 1.7; }
	.actions { display: flex; gap: .75rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem; }
	.primary, .secondary { min-height: 50px; padding: .9rem 1.2rem; border-radius: 14px; display: inline-flex; align-items: center; gap: .75rem; font-weight: 750; }
	.primary { background: #f4f7fb; color: #080a0f; }
	.secondary { border: 1px solid #252b36; color: #d8dee7; background: rgba(255,255,255,.025); }
	.micro { color: #697586; font-size: .8rem; margin-top: 1.25rem; }
	.features { max-width: 1180px; margin: 0 auto; padding: 0 1.1rem 6rem; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
	.feature { border: 1px solid #1d232d; background: rgba(16, 20, 28, .72); border-radius: 22px; padding: 1.4rem; min-height: 210px; }
	.number { color: #6f7b8b; font-size: .75rem; font-weight: 800; letter-spacing: .12em; }
	.feature h2 { font-size: 1.2rem; margin: 4rem 0 .65rem; letter-spacing: -.03em; }
	.feature p { color: #8994a4; line-height: 1.6; margin: 0; font-size: .92rem; }
	.statement { border-top: 1px solid #1b2029; max-width: 1180px; margin: 0 auto; padding: 5rem 1.1rem 7rem; }
	.statement p { color: #737f8f; margin: 0 0 1rem; }
	.statement h2 { max-width: 800px; font-size: clamp(2rem, 5vw, 4rem); line-height: 1; letter-spacing: -.06em; margin: 0; }
	@media (max-width: 760px) {
		.hero { padding-top: 4.5rem; }
		.features { grid-template-columns: 1fr; }
		.feature { min-height: 170px; }
		.feature h2 { margin-top: 2.5rem; }
	}
	@media (max-width: 420px) { .nav nav { gap: .7rem; } .nav-link { font-size: .8rem; } }
</style>
