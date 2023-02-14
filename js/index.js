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

  // card start------------------------------------------------------
  // Henter min section med klassen = .services i HTML
  let servicesSection = document.querySelector(".services");
  // her laver jeg et loop, på de sectioner "cards" der skal ligge inde i min section - .services
  services.forEach((service) => {
    // her skaber jeg en article inde i min .services
    let cards = document.createElement("article");
    // her skaber jeg en klasse til min article
    cards.classList = "cards-article";

    // her laver jeg et element i min html, hvor jeg kan ligge img ind
    let image = document.createElement("img");
    let heading = document.createElement("h3");
    let text = document.createElement("p");
    let link = document.createElement("a");

    // her henter jeg data og tilføjer dem i min nybyggede elementer
    image.src = service.illustration;
    heading.textContent = service.headline;
    text.textContent = service.text;
    link.textContent = service.linktext;

    // her appender jeg alt det jeg lige har bygget
    cards.append(image);
    cards.append(heading);
    cards.append(text);
    cards.append(link);

    //  her appender jeg mine nye elementer og min data ind i min .services
    servicesSection.append(cards);
    // card slut------------------------------------------------------

    // facilities start------------------------------------------------------
    let facilitiesSection = document.querySelector(".facilities");
    let headingTwo = document.createElement("h2");
    headingTwo.textContent = facilities.headline;

    facilities.forEach((facility) => {
      let facilitiesCards = document.createElement("article");

      let icon = document.createElement("icon");
      let headline = document.createElement("h2");
      let text = document.createElement("p");

      icon.src = facilities.icon;
      headline.textContent = facilities.headline;
      text.textContent = facilities.text;

      facilitiesCards.append(icon);
      facilitiesCards.append(heading);
      facilitiesCards.append(text);

      facilitiesSection.append(facilitiesCards);
    });

    // facilities slut-------------------------------------------------------
  });
});
