<script>
	import Modal from '$lib/components/Modal.svelte';

	let showModal = $state(false);
</script>

<h1>Contact</h1>
<p>
  In terms of chatting, outside of <a href="/guestbook">guestbooks</a> and social media, I keep to myself and small friend group. If you need to contact me for support though,
  I am on <button class="link-button" onclick={() => (showModal = true)}>Discord</button> and <a href="https://t.me/HiiJax">Telegram</a>.
</p>

<Modal bind:showModal>
    @hii_jax
</Modal>
