<script>
    let { children } = $props();
    function light() {
        window.document.body.classList.add("light-mode");
        window.document.body.classList.remove("dark-mode");
    }
</script>

<button aria-label="Light Mode" onclick={light}>
    {@render children?.()}
</button>
