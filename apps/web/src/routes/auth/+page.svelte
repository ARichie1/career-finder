<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { authRequest } from '$lib/services/auth/client';

  type AuthMode = 'sign-in' | 'sign-up' | 'forgot' | 'reset';

  let mode = $state<AuthMode>('sign-in');
  let name = $state('');
  let email = $state('');
  let password = $state('');
  let newPassword = $state('');
  let resetToken = $state('');
  let googleEnabled = $state(false);
  let busy = $state(false);
  let error = $state('');
  let notice = $state('');

  onMount(async () => {
    const params = new URLSearchParams(window.location.search);
    resetToken = params.get('token') ?? '';
    if (resetToken) mode = 'reset';
    if (params.get('verified') === '1') notice = 'Your email is verified. Sign in to continue.';
    if (params.has('error')) error = 'That sign-in link could not be verified. Request a new one and try again.';

    try {
      const settings = await authRequest<{ googleEnabled: boolean }>('/api/v1/auth/config');
      googleEnabled = settings.googleEnabled;
    } catch {
      googleEnabled = false;
    }
  });

  async function submit(event: SubmitEvent) {
    event.preventDefault();
    if (busy) return;

    busy = true;
    error = '';
    notice = '';

    try {
      if (mode === 'sign-up') {
        await authRequest('/api/auth/sign-up/email', {
          name: name.trim(),
          email: email.trim(),
          password,
          callbackURL: `${window.location.origin}/auth?verified=1`
        });
        notice = 'Check your inbox for a verification link before signing in.';
      } else if (mode === 'sign-in') {
        await authRequest('/api/auth/sign-in/email', { email: email.trim(), password });
        await goto('/careers');
      } else if (mode === 'forgot') {
        await authRequest('/api/auth/request-password-reset', {
          email: email.trim(),
          redirectTo: `${window.location.origin}/auth`
        });
        notice = 'If an account exists for that address, a reset link is on its way.';
      } else {
        if (!resetToken) throw new Error('This reset link is missing its token. Request a new link.');
        await authRequest('/api/auth/reset-password', { newPassword, token: resetToken });
        mode = 'sign-in';
        password = '';
        newPassword = '';
        notice = 'Your password has been updated. Sign in with the new password.';
      }
    } catch (err) {
      error = err instanceof Error ? err.message : 'Unable to complete that request. Try again.';
    } finally {
      busy = false;
    }
  }

  async function signInWithGoogle() {
    if (!googleEnabled || busy) return;
    busy = true;
    error = '';
    try {
      const result = await authRequest<{ url?: string }>('/api/auth/sign-in/social', {
        provider: 'google', callbackURL: `${window.location.origin}/careers`
      });
      if (!result.url) throw new Error('Google sign-in did not return a redirect.');
      const redirect = new URL(result.url);
      if (redirect.hostname !== 'accounts.google.com') throw new Error('Unexpected Google sign-in destination.');
      window.location.assign(redirect.toString());
    } catch (err) {
      error = err instanceof Error ? err.message : 'Google sign-in is unavailable right now.';
      busy = false;
    }
  }

  const isPasswordMode = $derived(mode === 'sign-in' || mode === 'sign-up');
</script>

<svelte:head>
  <title>{mode === 'sign-up' ? 'Create account' : mode === 'reset' ? 'Reset password' : 'Sign in'} — Career Finder</title>
  <meta name="description" content="Create a Career Finder account to keep your career exploration close at hand." />
</svelte:head>

<main class="auth-shell">
  <a class="brand" href="/" aria-label="Career Finder home">Career<span>Finder</span></a>
  <div class="auth-layout">
    <section class="intro-panel" aria-labelledby="intro-title">
      <p class="eyebrow">A CAREER JOURNEY, BUILT AROUND YOU</p>
      <h1 id="intro-title">Keep your next direction <em>in view.</em></h1>
      <p class="intro-copy">Create an account to carry your career discoveries forward, save possibilities, and return when your thinking changes.</p>
      <div class="signal-list" aria-label="Your Career Finder workspace">
        <div><span>01</span><p>Understand how you work</p></div>
        <div><span>02</span><p>Explore careers worth a closer look</p></div>
        <div><span>03</span><p>Keep your choices together</p></div>
      </div>
      <a class="browse-link" href="/careers">Browse careers without an account <span aria-hidden="true">↗</span></a>
    </section>

    <section class="form-panel" aria-labelledby="form-title">
      <div class="form-heading">
        <p class="eyebrow">CAREER FINDER ACCOUNT</p>
        <h2 id="form-title">{mode === 'sign-up' ? 'Create your account' : mode === 'forgot' ? 'Reset your password' : mode === 'reset' ? 'Choose a new password' : 'Welcome back'}</h2>
        <p>{mode === 'sign-up' ? 'Start with an email you can verify.' : mode === 'forgot' ? 'We’ll email you a secure reset link.' : mode === 'reset' ? 'Choose a strong password you haven’t used here before.' : 'Sign in to return to your saved direction.'}</p>
      </div>

      {#if notice}<p class="feedback success" role="status">{notice}</p>{/if}
      {#if error}<p class="feedback failure" role="alert">{error}</p>{/if}

      {#if isPasswordMode}
        <button class="google-button" type="button" disabled={!googleEnabled || busy} onclick={signInWithGoogle}>
          <span class="google-mark" aria-hidden="true">G</span>
          {googleEnabled ? 'Continue with Google' : 'Google sign-in not configured'}
        </button>
        <div class="divider"><span>or continue with email</span></div>
      {/if}

      {#if mode !== 'reset' || resetToken}
        <form onsubmit={submit}>
          {#if mode === 'sign-up'}
            <label for="name">Your name</label>
            <input id="name" bind:value={name} autocomplete="name" required maxlength="100" />
          {/if}

          {#if mode !== 'reset'}
            <label for="email">Email address</label>
            <input id="email" bind:value={email} type="email" autocomplete="email" required maxlength="254" />
          {/if}

          {#if mode === 'sign-in' || mode === 'sign-up'}
            <label for="password">Password</label>
            <input id="password" bind:value={password} type="password" autocomplete={mode === 'sign-up' ? 'new-password' : 'current-password'} required minlength="8" maxlength="128" />
          {:else if mode === 'reset'}
            <label for="new-password">New password</label>
            <input id="new-password" bind:value={newPassword} type="password" autocomplete="new-password" required minlength="8" maxlength="128" />
          {/if}

          <button class="submit-button" type="submit" disabled={busy}>
            {busy ? 'Please wait…' : mode === 'sign-up' ? 'Create account' : mode === 'forgot' ? 'Send reset link' : mode === 'reset' ? 'Update password' : 'Sign in'}
            <span aria-hidden="true">→</span>
          </button>
        </form>
      {:else}
        <p class="feedback failure" role="alert">This reset link is incomplete. Request a new link below.</p>
      {/if}

      <div class="form-footer">
        {#if mode === 'sign-in'}
          <button type="button" class="text-button" onclick={() => { mode = 'forgot'; error = ''; notice = ''; }}>Forgot password?</button>
          <p>New to Career Finder? <button type="button" class="text-button" onclick={() => { mode = 'sign-up'; error = ''; notice = ''; }}>Create an account</button></p>
        {:else if mode === 'sign-up'}
          <p>Already have an account? <button type="button" class="text-button" onclick={() => { mode = 'sign-in'; error = ''; notice = ''; }}>Sign in</button></p>
        {:else}
          <p><button type="button" class="text-button" onclick={() => { mode = 'sign-in'; error = ''; notice = ''; }}>Return to sign in</button></p>
        {/if}
      </div>
      <p class="privacy-note">Your account is protected with verified email and secure sessions.</p>
    </section>
  </div>
</main>

<style>
  :global(*) { box-sizing: border-box; }
  :global(body) { margin: 0; background: #f0eee5; color: #202725; font-family: 'Avenir Next', 'Segoe UI', sans-serif; }
  :global(button), :global(input) { font: inherit; }
  :global(a) { color: inherit; text-decoration: none; }
  .auth-shell { min-height: 100svh; padding: 1.5rem clamp(1.25rem, 5vw, 5rem) 3rem; background: #f0eee5; }
  .brand { display: inline-flex; font-size: 1.1rem; font-weight: 800; letter-spacing: .01em; }
  .brand span { color: #6e7770; margin-left: .18rem; }
  .auth-layout { max-width: 1180px; min-height: calc(100svh - 7rem); margin: 0 auto; display: grid; grid-template-columns: 1.08fr .92fr; align-items: center; gap: clamp(2rem, 7vw, 7rem); }
  .intro-panel { padding: 3rem 0; }
  .eyebrow { margin: 0; color: #718079; font-size: .7rem; font-weight: 800; letter-spacing: .13em; }
  h1 { max-width: 620px; margin: 1.2rem 0 1.1rem; font-family: Georgia, 'Times New Roman', serif; font-size: 3.8rem; font-weight: 400; line-height: 1.02; }
  h1 em { color: #c76545; font-weight: 400; }
  .intro-copy { max-width: 490px; color: #626b65; font-size: 1.02rem; line-height: 1.7; }
  .signal-list { max-width: 510px; margin-top: 2.5rem; border-top: 1px solid #d4d2c8; }
  .signal-list div { display: flex; align-items: center; gap: 1rem; padding: .85rem 0; border-bottom: 1px solid #d4d2c8; }
  .signal-list span { color: #bf6547; font-size: .72rem; font-weight: 800; }
  .signal-list p { margin: 0; font-size: .92rem; }
  .browse-link { display: inline-flex; gap: .5rem; margin-top: 2rem; color: #59645c; font-size: .85rem; border-bottom: 1px solid #9ca49c; padding-bottom: .25rem; }
  .form-panel { width: 100%; max-width: 465px; justify-self: end; padding: clamp(1.5rem, 4vw, 2.5rem); background: #fbfaf6; border: 1px solid #deddd4; border-radius: 8px; box-shadow: 0 22px 70px rgba(32, 39, 37, .08); }
  .form-heading h2 { margin: .8rem 0 .4rem; font-family: Georgia, 'Times New Roman', serif; font-size: 2rem; font-weight: 400; }
  .form-heading > p:last-child { margin: 0 0 1.5rem; color: #727a74; font-size: .9rem; line-height: 1.5; }
  .google-button, .submit-button { width: 100%; min-height: 48px; border-radius: 4px; cursor: pointer; font-weight: 700; }
  .google-button { display: flex; align-items: center; justify-content: center; gap: .75rem; background: #fff; border: 1px solid #d5d7d1; color: #29302c; }
  .google-button:disabled { color: #7c827e; cursor: not-allowed; }
  .google-mark { font-family: Arial, sans-serif; font-weight: 900; color: #3975d7; }
  .divider { display: flex; align-items: center; gap: .8rem; margin: 1.2rem 0; color: #858c86; font-size: .75rem; }
  .divider::before, .divider::after { content: ''; height: 1px; flex: 1; background: #e0e1db; }
  form { display: grid; gap: .55rem; }
  label { margin-top: .35rem; font-size: .8rem; font-weight: 700; }
  input { width: 100%; min-height: 46px; padding: .7rem .8rem; border: 1px solid #d5d7d1; border-radius: 4px; background: #fff; color: #202725; }
  input:focus-visible, button:focus-visible, a:focus-visible { outline: 3px solid #d78a67; outline-offset: 2px; }
  .submit-button { display: flex; align-items: center; justify-content: space-between; margin-top: .8rem; padding: 0 1rem; border: 0; background: #20342f; color: #fff; }
  .submit-button:hover:not(:disabled) { background: #2c4a40; }
  .submit-button:disabled { opacity: .65; cursor: wait; }
  .feedback { padding: .7rem .8rem; border-radius: 4px; font-size: .83rem; line-height: 1.45; }
  .success { color: #24543c; background: #e6f1e6; }
  .failure { color: #8d382b; background: #f8e8e2; }
  .form-footer { display: grid; gap: .75rem; margin-top: 1rem; color: #737a74; font-size: .8rem; }
  .form-footer p { margin: 0; }
  .text-button { padding: 0; border: 0; background: none; color: #a84f35; font: inherit; font-weight: 700; cursor: pointer; }
  .privacy-note { margin: 1.4rem 0 0; padding-top: 1rem; border-top: 1px solid #e0e1db; color: #858c86; font-size: .72rem; line-height: 1.5; }
  @media (max-width: 820px) {
    .auth-layout { min-height: auto; grid-template-columns: 1fr; gap: 1rem; padding: 2rem 0; }
    .intro-panel { padding: 1rem 0; }
    h1 { max-width: 560px; font-size: 3rem; }
    .signal-list { margin-top: 1.5rem; }
    .browse-link { margin-top: 1.3rem; }
    .form-panel { max-width: none; justify-self: stretch; }
  }
  @media (max-width: 420px) {
    .auth-shell { padding-right: 1rem; padding-left: 1rem; }
    h1 { font-size: 2.5rem; }
    .form-panel { padding: 1.25rem; }
  }
</style>
