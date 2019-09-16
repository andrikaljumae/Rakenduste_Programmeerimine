function createItemElement(item){
    const anchor = document.createElement("a");
    anchor.href = `./item.html?title=${item.title}&cost=${item.price}&src=${item.imgSrc}`;

    const itemContainer = document.createElement("div");
    itemContainer.className = "item";

    const imgElement = document.createElement("img");
    imgElement.src = item.imgSrc;

    const titleElement = document.createElement("div");
    titleElement.textContent = item.title;
    titleElement.className = "item_title";
    

    const priceElement = document.createElement("div");
    priceElement.innerText = item.price;
    priceElement.className = "item_price";

    anchor.append(itemContainer);
    itemContainer.append(imgElement);
    itemContainer.append(titleElement);
    itemContainer.append(priceElement);

    return anchor;

}

module.exports = {
    createItemElement
};