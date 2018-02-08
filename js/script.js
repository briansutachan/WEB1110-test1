const container = document.querySelector(`.container`)
const row = document.querySelector(`.row`)
const second = document.querySelectorAll(`.second`)
const refresh = document.querySelector(`.refresh`)
const addprice = document.querySelector(`.addprice`)


function addPrice(e) {
    const stuff = window.prompt("Add a New Price")
    container.innerHTML += `
    <div class="box" >BTC/${stuff}`
    row.innerHTML += `
    <div class="second"> ${"No Money"}`
}

class Bitcoin {
    constructor(second) {
        this.container = container
        this.row = row
        this.second = second
        this.getPrices(this.second)

    }
    setPrices(second, prices) {
        for (let i = 0; i < second.length; i++) {
            second[i].textContent = prices[i]
        }
    }
    getPrices(second) {
        $.ajax({
            url: "https://bitpay.com/api/rates",
            dataType: `json`,
            success: data => {
                this.prices = data
                for (let i = 0; i < second.length; i++) {
                    this.prices[i] = data[i].rate.toFixed(2)
                }
                this.setPrices(this.second, this.prices)
                console.log(data)
            },
            error: error => {
                console.log(`ERROR`)
            }

        })

    }
}


addprice.addEventListener(`click`, function (e) {
    addPrice(e)
})

refresh.addEventListener(`click`, function (e) {
    bit.getPrices(second)

})


const bit = new Bitcoin(second)