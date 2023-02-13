document.addEventListener("DOMContentLoaded", function () {
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



  // heroText.className = "hej";
});
