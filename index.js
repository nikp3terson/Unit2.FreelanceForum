

let freelancers = [
{name: "Alice", occupation: "Writer", price: 30},
{name: "Bob", occupation: "Teacher", price: 50},
{name: "Carol", occupation: "Programmer", price: 70 },
{name: "Batman", occupation: "Crimefighter", price: 100 },
{name: "Fabio", occupation: "Model", price: 45 },
{name: "Jean-Claude", occupation: "Martial-Artist", price: 60 },
{name: "Ash", occupation: "Pokemon Trainer", price: 20 },
]


function avePrice() {
    let prices = document.getElementsByClassName("price");
    let sum = 0;
    for (let i = 0; i < price.length; i++) {
        sum += prices[i] + sum
        }
        Ave = sum / prices.length;
    avePrice.innerHTML = `The average price is currently $ ${Math.floor(ave)}`
    }


function renderLancers() {
    let freeschmancers = document.getElementById('free-schmancers')
    for (let i = 0; i < freelancers.length; i++) {
        let currentLancer = lancer[i]

        let lancerDiv = document.createElement('div')
        lancerDiv.className = 'lancer'

        lancerDiv.innerHTML = `<h3>${currentLancer.name}<h3>
                                <h3>Price: $ ${currentLancer.price}<h3>
                                <h3>Occupation: ${currentLancer.occupation}<h3>`
    
    freeschmancers.appendChild(freelancers)
 }
}

renderLancers()

setInterval(renderLancers, 20000)