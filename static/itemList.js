

function createItems(){
    //const root = document.getElementById("item-list");
    phones.forEach((phone) => {
       const element = createItemElement(phone);
       console.log(element);
    });
}

function createItemElement(item){
    const anchor = document.createElement("a");
    anchor.href = "";

    const itemContainer = document.createElement("div");
    itemContainer.className = "item";

    const imgElement = document.createElement("img");
    imgElement.src = item.imgSrc;
    

    const priceElement = document.createElement("div");
    priceElement.innerText = item.price;
    priceElement.className = "item_price";

    const titleElement = document.createElement("div");
    titleElement.className = "item_title";
    titleElement.textContent = item.title;

    anchor.append(itemContainer);
    itemContainer.append(imgElement);
    itemContainer.append(titleElement);
    itemContainer.append(priceElement);

    return anchor;

}

window.addEventListener("load", () =>{
    console.log("hello world!");
    createItems();
    // const app =document.getElementById("item-body");
    // app.append(container);
});