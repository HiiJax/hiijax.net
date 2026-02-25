<script>
    let { children } = $props();
    function toggle() {
        window.document.body.classList.toggle("calm");
    }
</script>

<button aria-label="Toggle calmer background" onclick={toggle}>
    {@render children?.()}
</button>
