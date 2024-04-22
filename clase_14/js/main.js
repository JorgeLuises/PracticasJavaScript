const blogEntries = [
    {
      image: "https://picsum.photos/id/237/200/300",
      title: "Los Secretos de la Cocina Italiana",
      content:
        "Explorar la cocina italiana va más allá de la pizza y la pasta. En este artículo, descubrimos los ingredientes autóctonos, las técnicas de cocción y los platos menos conocidos que definen la verdadera esencia de la cocina italiana.",
      abstract:
        "Explorar la cocina italiana va más allá de la pizza y la pasta...",
      rating: 8.75,
      fechaCreacion: "2024-04-18",
      autor: "Daniel Torres",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      image: "https://picsum.photos/id/102/200/300",
      title: "Avances en la Energía Solar",
      content:
        "La energía solar ha alcanzado nuevos hitos en la última década, con avances en la eficiencia de los paneles y la reducción de costos. Analizamos cómo estos cambios están configurando el futuro de las energías renovables.",
      abstract:
        "La energía solar ha alcanzado nuevos hitos en la última década...",
      rating: 9.3,
      fechaCreacion: "2024-04-17",
      autor: "Laura Martínez",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      image: "https://picsum.photos/id/401/200/300",
      title: "La Revolución de la Inteligencia Artificial",
      content:
        "La inteligencia artificial está transformando industrias enteras, desde la automotriz hasta la financiera. Este artículo explora los desarrollos más recientes y cómo están influyendo en nuestras vidas cotidianas.",
      abstract:
        "La inteligencia artificial está transformando industrias enteras...",
      rating: 7.9,
      fechaCreacion: "2024-04-16",
      autor: "Sofía Hernández",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      image: "https://picsum.photos/id/200/200/300",
      title: "El Futuro del Trabajo Remoto",
      content:
        "El trabajo remoto se ha convertido en una parte fundamental de muchas industrias. Este artículo analiza las herramientas, técnicas y culturas que están moldeando esta nueva forma de trabajar.",
      abstract: "El trabajo remoto se ha convertido en una parte fundamental...",
      rating: 8.65,
      fechaCreacion: "2024-04-15",
      autor: "Daniel Torres",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      image: "https://picsum.photos/id/305/200/300",
      title: "Secretos para un Jardín Sostenible",
      content:
        "Crear un jardín sostenible no solo es beneficioso para el medio ambiente, sino también relajante y gratificante. Descubre técnicas y consejos para mantener tu jardín verde y próspero con un impacto mínimo en la naturaleza.",
      abstract:
        "Crear un jardín sostenible no solo es beneficioso para el medio ambiente...",
      rating: 9.5,
      fechaCreacion: "2024-04-14",
      autor: "Sofía Hernández",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      image: "https://picsum.photos/id/180/200/300",
      title: "Explorando la Historia del Jazz",
      content:
        "El jazz es un género musical que ha influido en muchas otras formas de música a lo largo del tiempo. Este artículo explora la historia del jazz, sus figuras clave y su impacto en la música moderna.",
      abstract:
        "El jazz es un género musical que ha influido en muchas otras formas...",
      rating: 8.2,
      fechaCreacion: "2024-04-13",
      autor: "Miguel Ángel García",
      avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    },
  ];
  
  console.log(blogEntries);
  
  /*
    <div class="card blog-card mb-3">
      <img src="https://picsum.photos/id/237/200/300" alt="" />
      <div class="card-body">
        <h3 class="card-title">'Los Secretos de la Cocina Italiana'</h3>
        <p class="card-text">Explorar la cocina italiana va más allá de la pizza y lapasta...</p>

        <div class="d-flex align-items-center">
          <img src="https://randomuser.me/api/portraits/men/38.jpg" alt="Avatar del Autor" class="rounded-circle avatar-image">
          <p class="m-0 ps-3 fs-5 fst-italic">Nombre del Autor</p>
        </div>

        <div class="inforpost">
          <p class="fecha">2024-04-13 / </p>
          <p class="rating">8.2</p>
        </div>

        <button class="direccionDePagina">Ir a pagina</button>
      </div>
    </div>
  */
  
  const createBlogCard = (entryObject) => {
    let { image, title, abstract, autor, avatar, fechaCreacion, rating} = entryObject;
    
    //Tarjeta de blog
    let card = document.createElement("div");
    card.classList.add("card", "blog-card", "mb-3");
  
    //Imagen del blog
    let cardImage = document.createElement("img");
    cardImage.setAttribute("src", image);
  
    //Contenedor del blog
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    let cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    let cardTitleText = document.createTextNode(title);
    cardTitle.append(cardTitleText);
  
    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    let cardTextContent = document.createTextNode(abstract);
    cardText.append(cardTextContent);

    //Contenedor del Autor
    let cardAutor = document.createElement("div");
    cardAutor.classList.add("d-flex", "align-items-center", "my-3");

    let cardImageAvatar = document.createElement("img");
    cardImageAvatar.setAttribute("src", avatar);
    cardImageAvatar.classList.add("rounded-circle", "avatar-image");

    let cardAvatarName = document.createElement("p");
    cardAvatarName.classList.add("m-0", "ps-3", "fs-5", "fst-italic");
    let nameAvatarText = document.createTextNode(autor);
    cardAvatarName.append(nameAvatarText);

    //Detalles finales
    let DateContainer = document.createElement("div");
    DateContainer.classList.add("px-3", "d-flex", "justify-content-end");

    let dateText= document.createElement("p");
    let dateTextContent = document.createTextNode(fechaCreacion);
    let dateSpanRating = document.createElement('span');
    let spanCaracter = document.createTextNode("/");
    dateSpanRating.append(spanCaracter); 
    dateText.append(dateTextContent, dateSpanRating);

    let ratingText= document.createElement("p");
    let ratingTextContent = document.createTextNode(rating);
    ratingText.append(ratingTextContent);

    //Boton
    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("d-grid", "gap-2", "d-md-flex", "justify-content-md-end");

    let buttonPost = document.createElement('button');
	  buttonPost.classList.add('btn', 'btn-primary', 'me-md-2');
	  let buttonText = document.createTextNode('Ir al post');
	  buttonPost.append(buttonText);
    buttonContainer.append(buttonPost);

    //Insercion de los objetos
    DateContainer.append(dateText, ratingText);
    cardAutor.append(cardImageAvatar, cardAvatarName);
    cardBody.append(cardTitle, cardText, cardAutor, DateContainer, buttonContainer);
    card.append(cardImage, cardBody);
  
    return card;
  };
  
  const printBlogCards = (blogData, wrapperId) => {
    let wrapper = document.getElementById(wrapperId);
    blogData.forEach((entry) => {
      let blogCard = createBlogCard(entry);
      wrapper.append(blogCard);
    });
  };
  
  const createPopularItem = (entryObject) => {
    let { title } = entryObject;
  
    let entryItem = document.createElement("li");
    entryItem.classList.add("list-group-item");
  
    let itemAnchor = document.createElement("a");
    itemAnchor.setAttribute("href", "#");
  
    let entryHeading = document.createElement("h3");
    let entryTitle = document.createTextNode(title);
  
    entryHeading.append(entryTitle);
    itemAnchor.append(entryHeading);
    entryItem.append(itemAnchor);
  
    return entryItem;
  };
  
  const printPopularEntries = (popularArray, wrapperId) => {
    console.log(popularArray);
    let wrapper = document.getElementById(wrapperId);
    popularArray.forEach((entry) => {
      let popularEntry = createPopularItem(entry);
      wrapper.append(popularEntry);
    });
  };
  
  printBlogCards(blogEntries, "main-posts");
  
  printPopularEntries(
    blogEntries.filter((entry) => entry.rating > 9),
    "popular-entries"
  );

/*
<div class="d-flex align-items-center">
 <img src="https://randomuser.me/api/portraits/men/38.jpg" alt="Avatar del Autor"
 class="rounded-circle avatar-image">
 <p class="m-0 ps-3 fs-5 fst-italic">Nombre del Autor</p>
</div>
*/

const createUserCard = (user) => {
    let {avatar, autor} = user;

    let userContainer = document.createElement("div");
    userContainer.classList.add("d-flex", "align-items-center", "p-2");

    let userImage = document.createElement("img");
    userImage.setAttribute("src", avatar);
    userImage.classList.add("rounded-circle", "avatar-image");

    let username = document.createElement("p");
    username.classList.add("m-0", "ps-3", "fs-5", "fst-italic");
    let nameText = document.createTextNode(autor);
    
    username.append(nameText);
    userContainer.append(userImage, username);

    return userContainer;
};

const printUsers = (array, wrapperId) => {
    let wrapper = document.getElementById(wrapperId);
    array.forEach((bloger) => {
        let userCard = createUserCard(bloger);
        wrapper.append(userCard); 
    });
};

const usersArray = (array) => {
  let result = array.reduce((accum, object) => {
    let autorRepetido = accum.find(objeto => objeto.autor === object.autor);
    if (!autorRepetido) {
      accum.push(object);
    }
    return accum;
  }, []);
  return result;
}

printUsers(usersArray(blogEntries), "users-space");