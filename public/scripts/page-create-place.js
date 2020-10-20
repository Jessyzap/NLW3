// create map
const map = L.map("mapid").setView([-23.6620735,-46.5337579], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],    
})

// L.marker([-27.222633,-49.6455874], { icon })
// .addTo(map)

let marker;

//create and add marker to map
map.on("click", (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;

    // remover icon
    marker && map.removeLayer(marker)

    // add icon layer 
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// add photos field 
function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector("#images")

    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll(".new-upload")
    
    // realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // verificar se o campo está vazio, se sim, não adicionar ao container
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }

    // limpar o campo antes de adicionar ao container de imagens
    input.value =""

    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll(".new-upload")

    if(fieldsContainer.length <= 1) {
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }
    // deletar o campo parentNode = pai, new-upload
    span.parentNode.remove()
}

// select yes or no
function toggleSelect(event) {
    // remover a class .active do botão
    document.querySelectorAll(".button-select button")
    .forEach(button => button.classList.remove("active"))
    // .forEach(funtion(button) {
    //     button.classList.remove("active")
    // })

    // colocar a class .active
    const button = event.currentTarget
    button.classList.add("active")    

    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    // verificar se sim ou não
    input.value = button.dataset.value

}

function validate(event) {    
    const lat = document.querySelector('[name="lat"]')
    const lng = document.querySelector('[name="lng"]')
    
    if(lat.value == "" && lng.value == "") {
        event.preventDefault()
        alert('Selecione um ponto no mapa!')        
    }          
}


