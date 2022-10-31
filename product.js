const inventary = [{
        imagenProducto: "https://i.pinimg.com/236x/99/11/bd/9911bd04d604856ea32f7cd2b48c2868.jpg ",
        item: "Ojitos lindos",
        precio: "$15.000",
        material: "Porcelana",
        descripcion: "Anillo en porcelana fría con aro delagado, planon en color amarillo"
    },

    {
        imagenProducto: "https://i.pinimg.com/564x/b1/94/36/b19436165d1630e3efd5c9ddc92a5425.jpg",
        item: "Noche estrellada",
        precio: "$15.000",
        material: "Porcelana",
        descripcion: "Anillo de forma orgánica pintado a mano con la obra de Vincent an Gogh"
    },

    {
        imagenProducto: "https://i.pinimg.com/564x/91/35/2b/91352b2bf722e27081edd316a99880fa.jpg",
        item: "Pollito",
        precio: "$20.000",
        material: "Porcelana",
        descripcion: "Anillo de pollito feliz con gorrita de colores"
    },

    {
        imagenProducto: "https://i.pinimg.com/564x/55/d8/aa/55d8aa8fc9e747022587a76e80501079.jpg",
        item: "Blood",
        precio: "$15.000",
        material: "Porcelana",
        descripcion: "Anillo delicado de gotas de sangre"
    },

    {
        imagenProducto: "https://i.pinimg.com/564x/3a/f2/b4/3af2b41ff5107144802c8cb29c410097.jpg",
        item: "Snake",
        precio: "$25.000",
        material: "Porcelana",
        descripcion: "Anillo de serpiente con textura"
    },

    {
        imagenProducto: "https://i.pinimg.com/564x/c2/4a/ba/c24aba060c1975985d9a39c47eba95a1.jpg",
        item: "Salpicón",
        precio: "$15.000",
        material: "mostacilla",
        descripcion: "Gargantilla blanca con muchas frutitas"
    },

    {
        imagenProducto: "https://i.pinimg.com/564x/8c/f8/43/8cf843a972f36d78a7217960478db0a3.jpg",
        item: "Sapito",
        precio: "$20.000",
        material: "mostacilla",
        descripcion: "Collar blanco con un sapito a punto de meterse un hongo"
    },

    {
        imagenProducto: "https://i.pinimg.com/564x/b1/58/e4/b158e4d475dca3068a1e13ee9c913497.jpg",
        item: "Happiness",
        precio: "$20.000",
        material: "mostacilla",
        descripcion: "Doble collar, multicolor y blanco con carita feliz"
    },

    {
        imagenProducto: "https://i.pinimg.com/564x/21/ba/68/21ba68e42d926734fca0c0bef343a084.jpg",
        item: "Girasoles",
        precio: "$25.000",
        material: "mostacilla",
        descripcion: "Collar de girasoles con hojitas muy pritis"
    },

    {
        imagenProducto: "https://i.pinimg.com/564x/e1/69/75/e16975dbd3c7b08c2e9c9adaf00c53e4.jpg",
        item: "Bob esponja",
        precio: "$20.000",
        material: "mostacilla",
        descripcion: "Collar con el estilo de las nubes de Bob esponja"
    },

    {
        imagenProducto: "https://i.pinimg.com/originals/fb/72/6b/fb726b75880dd7b055325eb58f4f5fbe.jpg",
        item: "Conchitas",
        precio: "$20.000",
        material: "Mostacilla y cuentas de disco",
        descripcion: "Strap para teléfono en colores claros con conchitas"
    },

    {
        imagenProducto: "https://i.pinimg.com/originals/3a/0c/a9/3a0ca9c669af27e53bb130b237350ad8.jpg",
        item: "Good vibes",
        precio: "$20.000",
        material: "Varios",
        descripcion: "Strap multicolor para celular con formas y frases"
    },

    {
        imagenProducto: "https://i.pinimg.com/564x/56/af/3a/56af3a500fd086a144f774e5a9eda601.jpg",
        item: "gvb",
        precio: "$15.000",
        material: "gvbr",
        descripcion: "hola"
    },


    {
        imagenProducto: "ve",
        item: "grv",
        precio: "$15.000",
        material: "gvbr",
        descripcion: "hola"
    },

    {
        imagenProducto: "ve",
        item: "grv",
        precio: "$15.000",
        material: "gvbr",
        descripcion: "hola"
    },

    {
        imagenProducto: "ve",
        item: "grv",
        precio: "$15.000",
        material: "gvbr",
        descripcion: "hola"
    },

    {
        imagenProducto: "ve",
        item: "grv",
        precio: "$15.000",
        material: "gvbr",
        descripcion: "hola"
    },

    {
        imagenProducto: "ve",
        item: "grv",
        precio: "$15.000",
        material: "gvbr",
        descripcion: "hola"
    },

    {
        imagenProducto: "ve",
        item: "grv",
        precio: "$15.000",
        material: "gvbr",
        descripcion: "hola"
    },

    {
        imagenProducto: "ve",
        item: "grv",
        precio: "$15.000",
        material: "gvbr",
        descripcion: "hola"
    },

    {
        imagenProducto: "ve",
        item: "grv",
        precio: "$15.000",
        material: "gvbr",
        descripcion: "hola"
    },


];

let filteredProducts = inventary;

const submit = document.getElementById("search");
const searcher = document.getElementById("keyword");

submit.addEventListener("click", (e)=>{
    encontrar(searcher.value)
})

pintar();

function pintar() {
    const products = document.getElementById("inventary");
    products.innerHTML = "";
    filteredProducts.forEach((item) => {
        
        products.innerHTML += `<section class="elementList">
            <figure class= "card_figure">
                <img class = "card_img" src= ${item.imagenProducto} width= "25%" height= "15S%" >
            </figure>
    
            <article class = "card_article">
            <h2>${item.item}</h2>
            <p>${item.descripcion}</p>
            <h3>${item.material}</h3>
            <h5 class="card_precio"> ${item.precio}</h5>
            </article>
        </section>`
    })
}
function encontrar(element) {
    filteredProducts = [inventary.find((item)=> item.item === element)];
    pintar()
    }