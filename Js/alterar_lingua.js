document.getElementById("linguas").addEventListener('change', function () {
    const lingua = this.value;
    fetch(`Lang/${lingua}.json`)
    .then(response => response.json())
    .then(data => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = data[key];
        });
    })
})