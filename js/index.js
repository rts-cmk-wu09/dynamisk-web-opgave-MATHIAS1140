document.addEventListener("DOMContentLoaded", function () {
  // hero section start---------------------------------------------------
  // hero image start
  const heroSection = document.querySelector(".hero");
  const heroImg = document.createElement("img");

  heroImg.src = hero.image;
  heroImg.alt = "dame bag en skranke";
  heroSection.appendChild(heroImg);
  // hero image slut

  // heroBox start
  hero.headline = hero.headline.replace(
    "save your time",
    "<span>save your time</span>"
  );
  document.querySelector(".hero").innerHTML = `
  <img src="${hero.image}">
  <div class="heroBox">
  <section class="h1Box">
  <h1>${hero.headline}</h1>
  </section>
  <div class="p">
  <p>
  ${hero.copy}  
  </p>
  </div>
  <button class="heroBox-Btn">
  <img src="${hero.icon}">
    <p>
    Explore
    </p>
  </button>
  </div>`;
  // heroBox slut
  // hero section slut------------------------------------------------------

  // card start-------------------------------------------------------------
  // Henter min section med klassen = .services i HTML
  let servicesSection = document.querySelector(".services");
  // her laver jeg et loop, på de sectioner "cards" der skal ligge inde i min section - .services
  services.forEach((service) => {
    // her skaber jeg en article inde i min .services
    let cards = document.createElement("article");
    // her skaber jeg en klasse til min article
    cards.classList = "cards-article";

    // her laver jeg et element i min HTML, som ligger i min nye article.
    let image = document.createElement("img");
    let heading = document.createElement("h3");
    let text = document.createElement("p");
    let link = document.createElement("a");

    // her henter jeg data og tilføjer dem i min nybyggede elementer.
    image.src = service.illustration;
    heading.textContent = service.headline;
    text.textContent = service.text;
    link.textContent = service.linktext;

    // her appender jeg alt det jeg lige har bygget
    cards.append(image);
    cards.append(heading);
    cards.append(text);
    cards.append(link);

    //  her appender jeg mine nye elementer og min data ind i min .services (querySelector)
    servicesSection.append(cards);
    // card slut-------------------------------------------------------------
  });
  // facilities start------------------------------------------------------

  let facilitiesSection = document.querySelector(".facilities");

  let headingTwo = document.createElement("h2");
  headingTwo.textContent = facilities.headline;
  facilitiesSection.append(headingTwo);
  headingTwo.classList = "h2-overskrift";

  let wrapper = document.createElement("div");
  wrapper.classList = "wrapper";
  facilitiesSection.append(wrapper);

  facilities.options.forEach((option) => {
    let facilitiesCards = document.createElement("article");
    facilitiesCards.classList = "facilitiesCards";

    let image = document.createElement("img");
    let headline = document.createElement("h2");
    let text = document.createElement("p");
    let link = document.createElement("a");

    image.src = option.icon;
    headline.textContent = option.headline;
    text.textContent = option.text;
    link.textContent = option.a;

    facilitiesCards.append(image);
    facilitiesCards.append(headline);
    facilitiesCards.append(text);
    facilitiesCards.append(link);

    wrapper.append(facilitiesCards);
  });

  // facilities slut-------------------------------------------------------

  // sites start-------------------------------------------------------

  let sitesSection = document.querySelector(".sites");

  // wrapper
  let div = document.createElement("div");
  div.classList = "wrapperTwo";
  sitesSection.append(div);

  //overskrift
  let headingThree = document.createElement("h2");
  headingThree.textContent = sites.headline;
  headingThree.classList = "h2-overskrift-three";
  div.append(headingThree);

  // paragraf
  let headingText = document.createElement("p");
  headingText.textContent = sites.text;
  div.append(headingText);
  headingText.classList = "heading-p";

  // btnicon
  let btn = document.createElement("button");
  btn.classList = "btn";
  btn.innerHTML = `<img src="${sites.btnicon}">Start`;
  div.append(btn);

  // article
  sites.places.forEach((place) => {
    let sitesCards = document.createElement("article");
    sitesCards.classList = "sitesCards";

    let image = document.createElement("img");
    let name = document.createElement("h3");
    let city = document.createElement("p");
    let link = document.createElement("a");

    image.src = place.img;
    name.textContent = place.name;
    city.textContent = place.city;
    link.textContent = place.link;

    sitesCards.append(image);
    sitesCards.append(name);
    sitesCards.append(city);
    sitesCards.append(link);

    sitesSection.append(sitesCards);
  });

  // sites slut-------------------------------------------------------
});
