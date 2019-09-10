// needs scope
{
    const itemContainerClass = "s-item";
    const imageClass = "s-item_image";
    const titleClass = "s-item_title s-item_title--has-tags";
    const priceClass = "s-item_price";

    const items = document.getElementsByClassName(itemContainerClass);
    
    const arr = [];

    Array.from(items).forEach(item =>{
        const imgs = item.getElementsByClassName(imageClass);
        if(imgs.length === 0) return;
        const img = imgs[0];

        const src = img.dataset.src;

        if(!src) return;

        const title = item.getElementsByClassName(titleClass)[0];
        const price = item.getElementsByClassName(priceClass)[0];
        
        arr.push({
            imgSrc: src,
            title,
            price,
            category: document.title.split("|")[0].trim(),
        })
    });
    console.log(JSON.stringify(arr));
}