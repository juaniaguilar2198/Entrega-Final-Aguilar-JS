const COD = 0
const BT1 = 1
const FFX = 2
const GTA = 3
const SK3 = 4
const UCH = 5

let gamesHtml = []

async function loadJsonData() {
    const res = await fetch("./data.json")
    if(res.ok) {
        const data = await res.json();
        return data;
    } else {
        throw new Error("Cannot load json file!");
        return null;
    }
}

let totalPrice = 0
function UpdateTotalPrice(totalPriceElement) {
    totalPriceElement.textContent = "$" + totalPrice
}

function InitializeDeleteButtons(gameInfo, deleteButtons, totalPriceElement) {
    for (let i = 0; i < deleteButtons.length; ++i) {
        const deleteButton = deleteButtons[i];
        deleteButton.onclick = () => {
            DeleteGameHtml(i)
            UpdateHtml()
            InitializeDeleteButtons(gameInfo, deleteButtons, totalPriceElement)
            let index = deleteButton.getAttribute('data-value');
            totalPrice -= gameInfo[index].price
            UpdateTotalPrice(totalPriceElement)
        }
    }
}

function UpdateHtml() {
    let cartDiv = document.getElementById("cart")
    let finalHtml = ""
    for (let index = 0; index < gamesHtml.length; ++index) {
        finalHtml += gamesHtml[index]
    }
    cartDiv.innerHTML = finalHtml
}

function AddGameHtml(gameInfo, index) {
    const cartHtml= getCartHtml(gameInfo, index)
    gamesHtml.push(cartHtml)
}

function DeleteGameHtml(index) {
    gamesHtml.splice(index, 1)
}

function getGameHtml(gameInfo, index) {
    const gameImg = gameInfo[index].image
    const gameName = gameInfo[index].title
    const gameDesc = gameInfo[index].desc
    const gamePrice = gameInfo[index].price
    return `
    <div class="col"> <!-- 1 -->
    <div class="card shadow-sm">
    <img src=${gameImg} alt=${gameName} width="100%" height="225">
    <div class="card-body">
        <p class="card-text">${gameDesc}</p>
        <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
            <button type="button" class="cart_btn btn btn-sm btn-outline-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
            </svg>
            </button>
        </div>
        <div> $ ${gamePrice} </div>
        </div>
    </div>
    </div>
    </div>`
}


function getCartHtml(gameInfo, index){
    const cartImg = gameInfo[index].image
    const cartPrice = gameInfo[index].price

    return `<div class="card shadow-sm mb-3">
    <div class="card-body" style="display: flex; flex-direction: row; gap: 16px;">
    <img src=${cartImg} style="width: 200px; aspect-ratio: 1;">        
    <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
            <button type="button" class="delete btn btn-sm btn-outline-secondary" data-value=${index}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>
            </button>
        </div>
    </div>
    
    </div>  
</div>`
}

async function generateHTML() {

    const data = await loadJsonData();
    const gameInfo = data.info;
    
    // Create the game cards
    const gamesCounterDiv = document.getElementById("gamesCounter")
    for(let index = 0; index < gameInfo.length; ++index) {
        gamesCounterDiv.innerHTML += getGameHtml(gameInfo, index)
    }

    // Get HTML buttons
    const buttons = document.getElementsByClassName("cart_btn")
    const deleteButtons = document.getElementsByClassName("delete")
    const totalPriceElement = document.getElementById("totalPrice")
    const checkOutbuttom = document.getElementById("checkOutbuttom")
    checkOutbuttom.onclick = ()=>{
        localStorage.setItem("totalPrice",totalPrice)
    }

    
    for (let index = 0; index < buttons.length; ++index) {
        const button = buttons[index];
        button.onclick = () => {
            AddGameHtml(gameInfo, index)
            UpdateHtml()
            InitializeDeleteButtons(gameInfo, deleteButtons, totalPriceElement)
            totalPrice += gameInfo[index].price
            UpdateTotalPrice(totalPriceElement)
        }
    }

    // Update prices
    UpdateTotalPrice(totalPriceElement)

}

generateHTML();
