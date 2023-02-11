// DOM selectors
const coinJar = document.getElementById("coin-jar");
const lootDisplay = document.getElementById("loot");
const lootPSDisplay = document.getElementById("loot-per-second")
const basicUpgrade = document.getElementById("basic-auto");
const basicCost = document.getElementById("basic-cost");
const advancedUpgrade = document.getElementById("advanced-auto");
const advancedCost = document.getElementById("advanced-cost");
const megaUpgrade = document.getElementById("mega-auto");
const megaCost = document.getElementById("mega-cost");
// Variable declaration
let loot = 0;
let basicPrice = 5;
let advancedPrice = 10;
let megaPrice = 100
let lootPerSecond = 0

// Upgrade Prices
basicCost.innerText = basicPrice;
advancedCost.innerText = advancedPrice;
megaCost.innerText = megaPrice;

// click for points function

const clickJar = (event) => {
    if (event.target === coinJar) {
        loot +=1;
        lootDisplay.innerText = loot;
    }
}

coinJar.addEventListener("click", clickJar);

const basicAutoClick = () => {
    loot += 1;
    lootDisplay.innerText = loot;
}

const advancedAutoClick = () => {
    loot += 3;
    lootDisplay.innerText = loot;
}

const megaAutoClick = () => {
    loot += 9;
    lootDisplay.innerText = loot;
}

// Purchasable upgrades
const basicUpgradePurchase = () => {
    if (loot >= basicPrice) {
        loot -= basicPrice;
        lootDisplay.innerText = loot;
        basicPrice += (basicPrice * 3);
        basicCost.innerText = basicPrice;
        lootPerSecond +=1;
        lootPSDisplay.innerText = lootPerSecond;
        setInterval(basicAutoClick, 1000);
    }
}

basicUpgrade.addEventListener('click', basicUpgradePurchase);

const advancedUpgradePurchase = () => {
    if (loot >= advancedPrice) {
        loot -= advancedPrice;
        lootDisplay.innerText = loot;
        advancedPrice += (advancedPrice * 7);
        advancedCost.innerText = advancedPrice;
        lootPerSecond +=3;
        lootPSDisplay.innerText = lootPerSecond;
        setInterval(advancedAutoClick, 1000);
    }
}

advancedUpgrade.addEventListener('click', advancedUpgradePurchase);

const megaUpgradePurchase = () => {
    if (loot >= megaPrice) {
        loot -= megaPrice;
        lootDisplay.innerText = loot;
        megaPrice += (megaPrice * 9);
        megaCost.innerText = megaPrice;
        lootPerSecond +=9
        lootPSDisplay.innerText = lootPerSecond;
        setInterval(megaAutoClick, 1000)
    }
}

megaUpgrade.addEventListener('click', megaUpgradePurchase);

