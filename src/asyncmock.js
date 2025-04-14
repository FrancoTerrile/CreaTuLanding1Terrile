const misProductos = [
    {
    id: "1", 
    nombre: "2020 Fender Stratocaster Limited 56 Heavy Relic", 
    marca: "Fender",
    modelo: "Stratocaster",
    description: "Posee una construcción de Alder en el cuerpo, un mango de Maple con un perfil en C con una sutil 'V', 21 trastes 6105, un radio de 9.5 y 3 single-coil Fat 50's hand-wound.",
    idCat: "Guitarra Electrica",
    precio: 4990,
    img:"https://www.springinstrumentos.com/images/productos/590/fotos/max_197c3791c1a8dcc59f4856f5ac6c5c6d.jpg?v=1732288411",
    stock: 10,
    },
    {
    id: "2", 
    nombre: "1965 Fender Jaguar Candy Apple Red", 
    marca: "Fender",
    modelo: "Jaguar",
    description: "La guitarra estuvo en una colección privada en Brasil por mas de 15 años. Posee algunas marcas de uso de sus pasados 59 años, nada grave para el look de una guitarra que estuvo en varios discos y en constante uso. Su estado es excelente, posee todas sus partes originales, incluyendo trastes, micrófonos, potes y palanca de tremolo. Suena como se ve, con ese audio mellow en la posición de rhythm y sumamente filosa en la opción lead. Ideal para otros 60 años de uso o simplemente para cumplir el sueño off-set custom-color de tu colección.",
    idCat: "Guitarra Electrica",
    precio: 13990,
    img: "https://www.springinstrumentos.com/images/productos/562/fotos/max_94fae5e31e3be2db4594da32d3dccdcc.jpg?v=1724934075",
    stock: 10,
    },
    {
    id: "3", 
    nombre: "1978 Fender Telecaster Custom Black", 
    marca: "Fender",
    modelo: "Telecaster",
    description: "La guitarra se encuentra en excelentes condiciones tanto estética como funcional. Posee un up-grade en el micrófono del puente por un Bare Knuckle Yardbird. Excelentes micrófonos fabricados en UK. El original se entrega dentro del case junto a sus perillas originales. Actualmente tiene unas witch-hats que en nuestra opinión le hacen más justicia. ¿Ustedes que opinan?. La entregamos con su case rígido, recientemente puesta a punto y lista para otros 45 años.",
    idCat: "Guitarra Electrica",
    precio: 4990,
    img: "https://www.springinstrumentos.com/images/productos/406/fotos/max_7166db65171ef13060f9fd6650d39c55.jpg?v=1686156107",
    stock: 10,
    },
    {
    id: "4", 
    nombre: "1966 Gibson ES-335 Cherry", 
    marca: "Gibson",
    modelo: "ES-335",
    description: "En Spring Instrumentos ya tenemos disponible esta elegante Gibson ES-335 del año 1966 en un vibrante Cherry finish. La guitarra se encuentra en excelente estado, con mínimos dings sobre el cuerpo. Posee una construcción de Maple laminado, un mango de Caoba de una pieza y una trastera de Rosewood con block-inlays.",
    idCat: "Guitarra Electrica",
    precio: 13990,
    img: "https://www.springinstrumentos.com/images/productos/618/fotos/max_18b9994e3196d69b5b1f0969ef8b1c40.jpg?v=1740066586",
    stock: 10,
    },
    {
    id: "5", 
    nombre: "2007 Gibson ES-339 Custom Shop Sunburst", 
    marca: "Gibson",
    modelo: "ES-339",
    description: "La guitarra posee un cuerpo laminado de Maple, un mango sólido de Caoba con un perfil un poco mas fat del que estamos acostumbrados. Podríamos catalogarlo definitivamente como un perfil 50s, chunky.",
    idCat: "Guitarra Electrica",
    precio: 3990,
    img: "https://www.springinstrumentos.com/images/productos/519/fotos/max_3fa7ce953af78dd8b5e54853a421e549.jpg?v=1712849558",
    stock: 10,
    },
    {
    id: "6", 
    nombre: "1976 Gretsch White Falcon", 
    marca: "Gretsch",
    modelo: "White Falcon",
    description: "La guitarra se encuentra 100% original salvo por un old-refin en la parte posterior del neck y por su estuche rígido Gretsch pero de los 90's. Posee los filter-blacktops, los favoritos del gran Billy Duffy, sonando realmente increíbles. Una palanca Bigsby, clavijas Grover, gold-pickguard en excelente estado al igual que el binding. ¡Wow!. Se entrega recientemente calibrada y puesta a punto por el luthier Santiago Fassi.",
    idCat: "Guitarra Electrica",
    precio: 7990,
    img: "https://www.springinstrumentos.com/images/productos/390/fotos/max_7dfef66492d2306dddd935bd20cdbf30.jpg?v=1678753469",
    stock: 10,
    },
    {
    id: "7", 
    nombre: "1973 Fender Telecaster Blonde", 
    marca: "Fender",
    modelo: "Telecaster",
    description: "El bajo posee un cuerpo de Ash, un mango de Maple con un cómodo perfil en 'C', una escala de 34 y un radio de 7.25. Se entrega recientemente puesto a punto y con funda acolchonada.",
    idCat: "Bajo",
    precio: 4490,
    img: "https://www.springinstrumentos.com/images/productos/615/fotos/max_b22932a1453a73a5566affd0aae343f1.jpg?v=1740063532",
    stock: 10,
    },
    {
    id: "8", 
    nombre: "Fender Jazzbass 1968 Sunburst", 
    marca: "Fender",
    modelo: "Jazzbass",
    description: "-",
    idCat: "Bajo",
    precio: 5490,
    img: "https://www.springinstrumentos.com/images/productos/137/fotos/max_bf067e3078d94bf9a9b9757de69e31cd.jpg?v=1614279705",
    stock: 10,
    },

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(misProductos)
        },100)
    })
}


export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setInterval(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(()=>{
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria)
            resolve(productosCategoria)
        }, 100)
    })
}

export const getProductosPorMarca = (idMarca) =>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            const productosMarca = misProductos.filter(item=> item.marca === idMarca)
            resolve(productosMarca)
        }, 100)
    })
}