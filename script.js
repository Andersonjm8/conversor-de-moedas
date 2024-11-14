const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select")


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-Currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//moeda real
    const currencyValueConverted = document.querySelector(".currency-value")//outras moedas

    
    const dolarToday = 5.2
    const euroToday = 5.9

       
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

        if(currencySelect.value = "dolar")
            {currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)       
        }
        
        if(currencySelect.value = "euro")
            {currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)       
        }
    
      
}

function changeCurrency(){

    const currencyName = document.getElementById("currency-name")
   
    if (currencySelect.value = "dolar"){
        currencyName.innerText = "Dolar Americano"
    }
   
    if (currencySelect.value = "euro"){
        currencyName.innerText = "Euro"
    }
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
