// Переключение тем
document.getElementById('theme-selector').addEventListener('change', function() {
    const theme = this.value;
    document.getElementById('theme-style').href = `css/themes/${theme}.css`;
});

// Копирование CSS
document.getElementById('copy-css').addEventListener('click', async function() {
    const theme = document.getElementById('theme-selector').value;
    const response = await fetch(`css/themes/${theme}.css`);
    const css = await response.text();
    navigator.clipboard.writeText(css);
    alert('CSS скопирован!');
});
