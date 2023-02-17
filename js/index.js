document.addEventListener("DOMContentLoaded", function () {
  // hero section start-----------------------------------------------------
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
    // card slut------------------------------------------------------------
  });
  // facilities start-------------------------------------------------------

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

  // facilities slut--------------------------------------------------------

  // sites start------------------------------------------------------------

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

  // sites slut-------------------------------------------------------------

  // advantages start-------------------------------------------------------
  let advantagesSection = document.querySelector(".advantages");

  let wrapperThree = document.createElement("div");
  wrapperThree.classList = "wrapperThree";
  advantagesSection.append(wrapperThree);

  let headingFour = document.createElement("h2");
  headingFour.textContent = advantages.headline;
  advantagesSection.append(headingFour);
  headingFour.classList = "h2-overskrift";

  advantages.forEach((advantage) => {
    let advantagesArticle = document.createElement("article");
    advantagesArticle.classList = "advantagesArticle";

    let image = document.createElement("img");
    let headline = document.createElement("h2");
    let text = document.createElement("p");

    image.src = advantage.icon;
    headline.textContent = advantage.headline;
    text.textContent = advantage.text;

    advantagesArticle.append(image);
    advantagesArticle.append(headline);
    advantagesArticle.append(text);

    wrapperThree.append(advantagesArticle);
  });
  // advantages slut--------------------------------------------------------

  // footer start-----------------------------------------------------------

  // led efter root-tagget "<body>"
  let body = document.querySelector("body");
  // skab elementet <footer>
  let footer = document.createElement("footer");
  // lav en klasse til <footer>
  footer.classList = "footer";
  // inject det ind i <body>
  body.append(footer);

  // øverste container
  let container = document.createElement("div");
  container.classList = "footer_container";
  footer.append(container);

  // højre div
  let right_div = document.createElement("div");
  right_div.classList = "right_div";
  container.append(right_div);

  // overskrift
  let overskrift = document.createElement("h2");
  overskrift.textContent = footerData.text;
  right_div.append(overskrift);

  // tekst
  let text = document.createElement("p");
  text.textContent = footerData.text;
  right_div.append(text);

  // container til info
  let infoWrapper = document.createElement("section");
  infoWrapper.classList = "inforWrapper";
  container.append(infoWrapper);

  // loop til footerData
  footerData.information.forEach((info) => {
    let card = document.createElement("section");
    card.classList = "info_section";
    infoWrapper.append(card);

    let title = document.createElement("h2");
    title.textContent = info.title;
    card.append(title);

    let list = document.createElement("ul");
    card.append(list);

    info.link.forEach((link) => {
      let item = document.createElement("li");
      list.append(item);
      let a = document.createElement("a");
      item.append("a");
      a.innerText = link;
      a.href = "#";
    });
  });

  let buttom_section = document.createElement("section");
  buttom_section.classList = "buttom_section";
  footer.append(buttom_section);

  let right = documnt.createElement("p");
  right.textContent = footerData.rights;
  buttom_section.append(right);

  let buttomList = document.createElement("ul");
  buttom_section.append(buttomList);
  footerData.forEach((link) => {
    let item = document.createElement("li");
    buttomList.append(item);

    let a = document.createElement("a");
    item.append(a);
    a.innerText = link;
    a.href = "#"
  });

  // footer slut------------------------------------------------------------
});
