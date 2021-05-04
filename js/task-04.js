const ref = {
    btnDecrement: document.querySelector('button[data-action="decrement"]'),
    btnIncrement: document.querySelector('button[data-action="increment"]'),
    spanValue: document.querySelector('#value')
}

let counter = +ref.spanValue.textContent;
ref.btnDecrement.addEventListener('click', (event) => {
    counter -= 1;
    ref.spanValue.textContent = counter;
});

ref.btnIncrement.addEventListener('click', (event) => {
    counter += 1;
    ref.spanValue.textContent = counter;
})