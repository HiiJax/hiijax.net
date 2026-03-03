<script>
  let theme = $state('auto');

  function cycleTheme() {
    if (theme === 'auto') {
      theme = 'dark';
    } else if (theme === 'dark') {
      theme = 'light';
    } else {
      theme = 'auto';
    }
  }

  $effect(() => {
    if (typeof document !== 'undefined') {
      document.body.classList.remove('light-mode', 'dark-mode');
      
      if (theme === 'light') {
        document.body.classList.add('light-mode');
      } else if (theme === 'dark') {
        document.body.classList.add('dark-mode');
      }
    }
  });
</script>


<button class="theme-button" onclick={cycleTheme}>{theme}</button>