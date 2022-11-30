const url = window.location.search;
const searchParas = new URLSearchParams(url);
const productId = searchParas.get("id").replace('"', "").replace("%20", " ");

const product = inventary.find(data =>
    data.item === productId

)

const container = document.getElementById("productContainer");
container.innerHTML = "";
container.innerHTML = 
        
`<section class="elementList">
    <figure class= "card_figure">
        <img class = "card_img" src= ${product.imagenProducto} width= "50%" height= "80%" >
    </figure>

    <article class = "card_article">
    <h2>${product.item}</h2>
    <p>${product.descripcion}</p>
    <h3>${product.material}</h3>
    <h5 class="card_precio"> ${product.precio}</h5>
    </article>
    </a>
</section>`


