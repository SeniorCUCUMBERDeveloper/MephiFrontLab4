const container = document.getElementById('number-container');
let html = '';
for (let i = 1; i <= 100; i++) {
    html += `<span class="number-item">${i}</span>`;
}
container.innerHTML = html;