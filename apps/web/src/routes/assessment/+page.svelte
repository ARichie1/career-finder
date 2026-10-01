<script lang="ts">
	import { onMount } from 'svelte';
	import { apiFetch } from '$lib/services/api/client';
	import type { Assessment, AssessmentOption, AssessmentResult } from '$lib/types/assessment';

	let assessment = $state<Assessment | null>(null);
	let result = $state<AssessmentResult | null>(null);
	let currentIndex = $state(0);
	let selections = $state<Record<string, string[]>>({});
	let loading = $state(true);
	let submitting = $state(false);
	let error = $state('');

	const currentQuestion = $derived(assessment?.questions[currentIndex]);
	const total = $derived(assessment?.questions.length ?? 0);
	const progress = $derived(total ? Math.round(((currentIndex + 1) / total) * 100) : 0);
	const selected = $derived(currentQuestion ? selections[currentQuestion.id] ?? [] : []);

	onMount(async () => {
		try {
			assessment = await apiFetch<Assessment>('/api/v1/assessment/current');
		} catch (err) {
			error = err instanceof Error ? err.message : 'Unable to load the assessment.';
		} finally {
			loading = false;
		}
	});

	function choose(option: AssessmentOption) {
		if (!currentQuestion) return;
		if (currentQuestion.selectionMode === 'single') {
			selections[currentQuestion.id] = [option.id];
			return;
		}

		const current = selections[currentQuestion.id] ?? [];
		selections[currentQuestion.id] = current.includes(option.id)
			? current.filter((id) => id !== option.id)
			: [...current, option.id];
	}

	function next() {
		if (!selected.length || !assessment) return;
		if (currentIndex < assessment.questions.length - 1) {
			currentIndex += 1;
		} else {
			submit();
		}
	}

	function previous() {
		if (currentIndex > 0) currentIndex -= 1;
	}

	async function submit() {
		if (!assessment || submitting) return;
		submitting = true;
		error = '';
		try {
			result = await apiFetch<AssessmentResult>('/api/v1/assessment/score', {
				method: 'POST',
				body: JSON.stringify({
					responses: assessment.questions.map((question) => ({
						questionId: question.id,
						selectedOptionIds: selections[question.id] ?? []
					}))
				})
			});
			if (typeof sessionStorage !== 'undefined') {
				sessionStorage.setItem('career-finder:last-result', JSON.stringify(result));
			}
		} catch (err) {
			error = err instanceof Error ? err.message : 'Unable to calculate your profile.';
		} finally {
			submitting = false;
		}
	}

	function label(value: string) {
		return value.charAt(0).toUpperCase() + value.slice(1);
	}
</script>

<svelte:head><title>Assessment — Career Finder</title></svelte:head>

<div class="assessment-shell">
	<header class="nav">
		<a class="brand" href="/">Career<span>Finder</span></a>
		<a href="/">Exit</a>
	</header>

	{#if loading}
		<div class="state">Loading assessment…</div>
	{:else if error && !assessment}
		<div class="state error">{error}</div>
	{:else if result}
		<main class="results">
			<div class="eyebrow">YOUR FIRST PROFILE</div>
			<h1>A starting point for your career exploration.</h1>
			<p class="intro">Your responses suggest a combination of work-style tendencies. These are signals to explore, not a fixed label.</p>

			<section class="profile-grid">
				{#each Object.entries(result.profile.workStyle) as [dimension, value]}
					{#if dimension !== 'confidence' && dimension !== 'calculationVersion'}
						<div class="metric">
							<div class="metric-head"><span>{label(dimension)}</span><strong>{value}</strong></div>
							<div class="bar"><span style={`width:${value}%`}></span></div>
						</div>
					{/if}
				{/each}
			</section>

			<div class="section-title">Career matches</div>
			<section class="matches">
				{#each result.matches.slice(0, 5) as match, index}
					<div class="match">
						<div class="rank">0{index + 1}</div>
						<div class="match-copy"><h2>{match.career.name}</h2><p>{match.career.category} · {label(match.matchStrength)} · {match.overallScore}/100</p></div>
						<div class="match-score">{match.overallScore}</div>
					</div>
				{/each}
			</section>

			<a class="primary" href="/">Continue exploring <span>→</span></a>
		</main>
	{:else if currentQuestion}
		<main class="test">
			<div class="progress-row"><span>Round {currentQuestion.order} of {total}</span><span>{progress}%</span></div>
			<div class="progress"><span style={`width:${progress}%`}></span></div>
			<div class="question-head">
				<div class="eyebrow">WORK STYLE</div>
				<h1>{currentQuestion.prompt}</h1>
				<p>{currentQuestion.selectionMode === 'multiple' ? 'Choose all that feel natural.' : 'Choose the situation that feels most like you.'}</p>
			</div>

			<div class="choices">
				{#each currentQuestion.options as option}
					<button class:selected={selected.includes(option.id)} class="choice" type="button" onclick={() => choose(option)}>
						<img src={option.image} alt="" />
						<span class="choice-copy"><strong>{option.label}</strong><small>{option.description}</small></span>
						<span class="check" aria-hidden="true">{selected.includes(option.id) ? '✓' : ''}</span>
					</button>
				{/each}
			</div>

			{#if error}<p class="submit-error">{error}</p>{/if}
			<div class="controls">
				<button class="secondary" type="button" onclick={previous} disabled={currentIndex === 0}>Back</button>
				<button class="primary" type="button" onclick={next} disabled={!selected.length || submitting}>{submitting ? 'Calculating…' : currentIndex === total - 1 ? 'See my results →' : 'Next →'}</button>
			</div>
		</main>
	{/if}
</div>

<style>
	:global(body) { margin: 0; background: #080a0f; color: #f4f7fb; font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
	:global(*) { box-sizing: border-box; }
	.assessment-shell { min-height: 100vh; background: radial-gradient(circle at 85% 10%, rgba(93,84,255,.14), transparent 28rem); }
	.nav { max-width: 980px; margin: 0 auto; padding: 1.25rem 1.1rem; display: flex; justify-content: space-between; color: #7f8a9a; font-size: .88rem; }
	.brand { color: #f4f7fb; font-weight: 800; letter-spacing: -.05em; font-size: 1.15rem; }
	.brand span { opacity: .5; }
	.test, .results { max-width: 980px; margin: 0 auto; padding: 3rem 1.1rem 5rem; }
	.progress-row { display: flex; justify-content: space-between; color: #7d8796; font-size: .8rem; font-weight: 700; }
	.progress, .bar { height: 4px; background: #1d232d; border-radius: 99px; overflow: hidden; }
	.progress { margin-top: .8rem; }
	.progress span, .bar span { display: block; height: 100%; background: #e9edf3; border-radius: inherit; transition: width .25s ease; }
	.question-head { padding: 5rem 0 2rem; max-width: 720px; }
	.eyebrow { color: #7f8a9a; font-size: .7rem; letter-spacing: .16em; font-weight: 800; }
	h1 { font-size: clamp(2.1rem, 6vw, 4.6rem); line-height: .98; letter-spacing: -.065em; margin: 1rem 0; }
	.question-head p, .intro { color: #8f9aa9; line-height: 1.6; }
	.choices { display: grid; grid-template-columns: repeat(2, 1fr); gap: .9rem; }
	.choice { text-align: left; padding: 0; overflow: hidden; background: #10141c; color: #f4f7fb; border: 1px solid #202732; border-radius: 20px; cursor: pointer; position: relative; }
	.choice:hover { border-color: #4a5361; }
	.choice.selected { border-color: #f4f7fb; box-shadow: 0 0 0 1px #f4f7fb; }
	.choice img { display: block; width: 100%; aspect-ratio: 1.52; object-fit: cover; opacity: .82; }
	.choice-copy { display: grid; gap: .35rem; padding: 1rem 1rem 1.1rem; }
	.choice-copy strong { font-size: .98rem; }
	.choice-copy small { color: #858f9e; line-height: 1.45; }
	.check { position: absolute; top: .8rem; right: .8rem; width: 30px; height: 30px; display: grid; place-items: center; border-radius: 50%; background: #f4f7fb; color: #080a0f; font-weight: 900; }
	.controls { display: flex; justify-content: space-between; gap: .75rem; margin-top: 1.4rem; }
	.primary, .secondary { min-height: 48px; padding: .8rem 1.1rem; border-radius: 13px; border: 0; font: inherit; font-weight: 800; cursor: pointer; display: inline-flex; align-items: center; gap: .6rem; }
	.primary { background: #f4f7fb; color: #080a0f; }
	.secondary { background: #11151d; color: #d8dee7; border: 1px solid #252c37; }
	button:disabled { opacity: .4; cursor: not-allowed; }
	.state { min-height: 70vh; display: grid; place-items: center; color: #8f9aa9; padding: 1rem; }
	.error, .submit-error { color: #f0a7a7; }
	.results { padding-top: 5rem; }
	.results .intro { max-width: 650px; }
	.profile-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 2.5rem 0 4rem; }
	.metric { padding: 1.1rem; border: 1px solid #202732; border-radius: 16px; background: #10141c; }
	.metric-head { display: flex; justify-content: space-between; margin-bottom: .8rem; }
	.metric-head span { text-transform: capitalize; color: #aeb7c4; }
	.metric-head strong { font-size: .9rem; }
	.section-title { color: #7f8a9a; text-transform: uppercase; letter-spacing: .14em; font-size: .7rem; font-weight: 800; margin-bottom: .8rem; }
	.matches { border-top: 1px solid #202732; margin-bottom: 2rem; }
	.match { display: grid; grid-template-columns: 50px 1fr auto; align-items: center; gap: 1rem; padding: 1.1rem 0; border-bottom: 1px solid #202732; }
	.rank { color: #687384; font-size: .8rem; }
	.match h2 { margin: 0; font-size: 1.1rem; text-transform: capitalize; }
	.match p { margin: .25rem 0 0; color: #7f8a9a; font-size: .82rem; }
	.match-score { font-weight: 850; }
	@media (max-width: 700px) {
		.test, .results { padding-top: 2rem; }
		.question-head { padding-top: 3rem; }
		.choices, .profile-grid { grid-template-columns: 1fr; }
		.choice img { aspect-ratio: 1.7; }
	}
</style>
