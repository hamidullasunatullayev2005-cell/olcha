let korzina = document.querySelector('.korzina');

korzina.addEventListener('click', () => {
    let korzina = document.querySelector('.korzina');

korzina.addEventListener('click', () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
      

    let kotalog = document.querySelector('.kotalog')
    kotalog.classList.add('')

    
      
    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("matn saqlandi");
    
});

});




let count = 1;

document.getElementById("plus").onclick = () => {
    count++;
    document.getElementById("count").textContent = count;
};

document.getElementById("minus").onclick = () => {
    if (count > 1) {
        count--;
        document.getElementById("count").textContent = count;
    }
};
