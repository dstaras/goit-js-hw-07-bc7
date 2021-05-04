const lCat = document.querySelectorAll('.item');
console.log(lCat);
console.log(`В списке ${lCat.length} категории`);

lCat.forEach(item => {
    const h2 = item.children[0].textContent;
    const ul = item.querySelector(`ul`).children.length;
    console.log(`Категория: ${h2} \n Количество элементов: ${ul}`);
})
