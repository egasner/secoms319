fetch('data.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})

.catch(function (err) {
    console.log('error:' + err);
})

function appendData(data){
    let meme1 = document.getElementById("jammingCat");
    let meme2 = document.getElementById("kermit");
    let meme3 = document.getElementById("dylan");
    let poopy = 1;


    for (let meme of data) {
        let div = document.createElement("div");
        console.log(meme);
        div.innerHTML = `<h2> ${meme["title"]} </h2><p> ${meme["description"]} </p> <p> ${meme["year"]} </p>`;
        if(poopy == 1){
            meme1.appendChild(div);
        }else if(poopy == 2){
            meme2.appendChild(div);
        }else
            meme3.appendChild(div);
        
        poopy++;
        // for (let element of data[productName]) {
        //     console.log(element);
        //     let div2 = document.createElement("div");
        //     div2.innerHTML = `${element["productId"]} : ${element["shortDescription"]} <br>`;
        //     mainContainer.appendChild(div2);
        // }
    }
}