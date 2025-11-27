document.addEventListener("DOMContentLoaded", () => {

    
    // GUARDAR PRODUCTOS 
    //busca los archivos guardados con la class fav-btn por su titulo descripcion e imagen, y si no esta dentro de fav, los carga para añadirlos y si ya esta lanza una alerta llamada "Ya está en favoritos"
    

    const favButtons = document.querySelectorAll(".fav-btn");

    if (favButtons.length > 0) {
        favButtons.forEach((btn) => {
            btn.addEventListener("click", () => {

                const card = btn.closest(".card");
                const title = card.querySelector("h2").innerText;
                const description = card.querySelector("p").innerText;
                const img = card.querySelector("img").src;

                const producto = { title, description, img };

                let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

                if (!favoritos.some(fav => fav.title === title)) {
                    favoritos.push(producto);
                    localStorage.setItem("favoritos", JSON.stringify(favoritos));
                    alert("Agregado a favoritos ★");
                } else {
                    alert("Ya está en favoritos");
                }
            });
        });
    }


  
    // CARGAR FAVORITOS 
   

    const contenedorFavs = document.getElementById("fav-container");

    if (contenedorFavs) {
        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

        if (favoritos.length === 0) {
            contenedorFavs.innerHTML = `
                <div class="no-favs">
                    <p>No has agregado productos a favoritos aún.</p>
                    <p>Ve a <a href="products.html">Productos</a> y toca ★ en algo que te guste.</p>
                </div>`;
        } else {
            favoritos.forEach(fav => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <div class="face-front">
                        <img src="${fav.img}" alt="imagen">
                    </div>
                    <div class="face-back">
                        <h2>${fav.title}</h2>
                        <p>${fav.description}</p>
                        <button class="remove-btn">Quitar ✖</button>
                    </div>
                `;

                contenedorFavs.appendChild(card);
            });
        }
    }


    // ELIMINAR FAVORITO
  

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-btn")) {
            const title = e.target.closest(".card").querySelector("h2").innerText;

            let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
            favoritos = favoritos.filter(item => item.title !== title);
            localStorage.setItem("favoritos", JSON.stringify(favoritos));

            location.reload();
        }
    });

});
