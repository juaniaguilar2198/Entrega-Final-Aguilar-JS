const COD = 0
const BT1 = 1
const FFX = 2
const GTA = 3
const SK3 = 4
const UCH = 5

const buttons = document.getElementsByClassName("cart_btn")
const deleteButtons = document.getElementsByClassName("delete")
const totalPriceElement = document.getElementById ("totalPrice")
let cartDiv = document.getElementById("cart")
let gamesHtml = []

let prices = [100000,47000,150000,25000,5000,60000]
let totalPrice = 0
function UpdateTotalPrice (){
    totalPriceElement.textContent = "$" + totalPrice
}

UpdateTotalPrice()


for (let index = 0; index < buttons.length; ++index) {
    const button = buttons[index];
    button.onclick = () => {
        AddGameHtml(index)
        UpdateHtml()
        InitializeDeleteButtons()
        totalPrice += prices[index]
        UpdateTotalPrice()
    }
}

function InitializeDeleteButtons() {
    for (let i = 0; i < deleteButtons.length; ++i) {
        const deleteButton = deleteButtons[i];
        deleteButton.onclick = () => {
            DeleteGameHtml(i)
            UpdateHtml()
            InitializeDeleteButtons()
            let price = deleteButton.getAttribute('data-value');
            totalPrice -= price
            UpdateTotalPrice()
        }
    }
}

function UpdateHtml() {
    let finalHtml = ""
    for (let index = 0; index < gamesHtml.length; ++index) {
        finalHtml += gamesHtml[index]
    }
    cartDiv.innerHTML = finalHtml
}

function AddGameHtml(index) {
    switch (index) {
        case COD: {
            gamesHtml.push(CodHtml)
        } break
        case BT1: {
            gamesHtml.push(Bt1Html)
        } break
        case FFX: {
            gamesHtml.push(FfxHtml)
        } break
        case GTA: {
            gamesHtml.push(GtaHtml)
        } break
        case SK3: {
            gamesHtml.push(Sk3Html)
        } break
        case UCH: {
            gamesHtml.push(UchHtml)
        } break
    }
}

function DeleteGameHtml(index) {
    gamesHtml.splice(index, 1)
}

const CodHtml = `
<div class="card shadow-sm mb-3">
    <div class="card-body" style="display: flex; flex-direction: row; gap: 16px;">
    <img src="Img-juegos/BO6.png" style="width: 200px; aspect-ratio: 1;">        
    <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
            <button type="button" class="delete btn btn-sm btn-outline-secondary" data-value="100000">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>
            </button>
        </div>
    </div>
    
    </div>  
</div>`

const Bt1Html = `
<div class="card shadow-sm mb-3">
    <div class="card-body" style="display: flex; flex-direction: row; gap: 16px;">
        <img src="Img-juegos/BTF-1.png" style="width: 200px; aspect-ratio: 1;">        
        <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <button type="button" class="delete btn btn-sm btn-outline-secondary" data-value="47000">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>  
</div>`

const FfxHtml = `
<div class="card shadow-sm mb-3">
    <div class="card-body" style="display: flex; flex-direction: row; gap: 16px;">
        <img src="Img-juegos/FFX.png" style="width: 200px; aspect-ratio: 1;">        
        <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <button type="button" class="delete btn btn-sm btn-outline-secondary" data-value="150000">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                    </svg>    
                </button>
            </div>
        </div>
    </div>  
</div>`

const GtaHtml = `
<div class="card shadow-sm mb-3">
    <div class="card-body" style="display: flex; flex-direction: row; gap: 16px;">
        <img src="Img-juegos/GTA-V.png" style="width: 200px; aspect-ratio: 1;">        
        <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <button type="button" class="delete btn btn-sm btn-outline-secondary" data-value="25000">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>  
</div>`

const Sk3Html = `
<div class="card shadow-sm mb-3">
    <div class="card-body" style="display: flex; flex-direction: row; gap: 16px;">
        <img src="Img-juegos/SK3.png" style="width: 200px; aspect-ratio: 1;">        
        <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <button type="button" class="delete btn btn-sm btn-outline-secondary" data-value="5000">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>  
</div>`

const UchHtml = `
<div class="card shadow-sm mb-3">
    <div class="card-body" style="display: flex; flex-direction: row; gap: 16px;">
        <img src="Img-juegos/UC.png" style="width: 200px; aspect-ratio: 1;">        
        <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <button type="button" class="delete btn btn-sm btn-outline-secondary" data-value="60000">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>  
</div>`

