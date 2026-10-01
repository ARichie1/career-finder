<script lang="ts">
  import { onMount } from 'svelte';
  import { authRequest } from '$lib/services/auth/client';

  let userName = $state('');
  let checking = $state(true);

  onMount(async () => {
    try {
      const session = await authRequest<{ user?: { name?: string } } | null>('/api/auth/get-session');
      userName = session?.user?.name ?? '';
    } catch {
      userName = '';
    } finally {
      checking = false;
    }
  });

  async function signOut() {
    await authRequest('/api/auth/sign-out', {});
    window.location.assign('/');
  }
</script>

{#if userName}
  <span class="account-name">{userName}</span>
  <button class="account-action" type="button" onclick={signOut}>Sign out</button>
{:else}
  <a class="account-action" href="/auth">{checking ? 'Account' : 'Sign in'}</a>
{/if}

<style>
  .account-name { color: #b2bbbe; font-size: .85rem; }
  .account-action { color: inherit; background: none; border: 0; font: inherit; font-size: .85rem; cursor: pointer; text-decoration: none; }
  .account-action:hover { color: #f0b18f; }
</style>
