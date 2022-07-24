const renderItems = (data) => {
    console.log(data)
    data.forEach(el => {
        console.log(el)
    })
}

fetch('https://deliveryfood-6cf17-default-rtdb.firebaseio.com/db/partners.json')
    .then((response) => response.json())
    .then((data) =>
        renderItems(data)
    )
    .catch((error) => console.log(error))