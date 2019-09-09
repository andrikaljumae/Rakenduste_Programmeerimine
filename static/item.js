  //alert("Tere tulemast!");
      const x = window.location;
      console.log(x);
      const urlParams = new URLSearchParams(window.location.search);
      const title = urlParams.get("title");
      const cost = urlParams.get("cost");
      const src = urlParams.get("src");
      console.log(title, cost, src);
      alert(`Title: ${title} cost: ${cost} path: ${src}`)

      const container = document.createElement("div");
      container.className = "itemContainer";

      const image = document.createElement("img");
      image.src = src;
      image.className = "item_image";

      const titleElement = document.createElement("h2");
      titleElement.textContent = title;
      title.Element.className = "item_title";

      const description = "siin on mingi lambine tekst";
      const textElement = document.createElement("p");
      textElement.textContent = description;
      textElement.className = "item_description";

      const costElement = document.createElement("div");
      costElement.textContent = cost;
      costElement.className = "item_price";

      container.append(image);
      container.append(titleElement);
      container.append(textElement);
      container.append(costElement);

      window.addEventListener("load", () =>{
        const app =document.getElementById("item-body");
        app.append(container);
    });