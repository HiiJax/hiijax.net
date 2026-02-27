<script>
    let { children } = $props();
    function dark() {
        window.document.body.classList.add("dark-mode");
        window.document.body.classList.remove("light-mode");
    }
</script>

<button aria-label="Light Mode" onclick={dark}>
    {@render children?.()}
</button>
