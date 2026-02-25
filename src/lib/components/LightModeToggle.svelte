<script>
    let { children } = $props();
    function toggle() {
        window.document.body.classList.toggle("light-mode");
    }
</script>

<button aria-label="Toggle light mode" onclick={toggle}>
    {@render children?.()}
</button>
