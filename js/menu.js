const restorant = `food-band`

const renderItems = (data) => {
    console.log(data)
    data.forEach(el => {
        console.log(el)
    })
}

fetch(`../db/${restorant}.json`)
    .then((response) => response.json())
    .then((data) =>
        renderItems(data)
    )
