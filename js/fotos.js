/* Fetch a la API de Picsum, una galeria de fotos random */
const contenedorGaleriaFotos = document.getElementById("galeriaFotos")

fetch('https://picsum.photos/v2/list?limit=12', {   
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => {    
    data.forEach((post)=>{
        const div = document.createElement("div")
        div.innerHTML = `            
            <img src="${post.download_url}" alt="imagen con GoPro" class="foto-galeria">
        `
        contenedorGaleriaFotos.append(div)
    })
  })