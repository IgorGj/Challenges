$(function () {
  // write your code here
  let bikes = [];
  const cardContainer = document.querySelector("#card-container");
  const filterHeight = $("#filters").height();
  $(cardContainer).css({
    minHeight: `${filterHeight + 16}px`,
  });
  $.get(`https://json-project3.herokuapp.com/products`, (data) => {
    data.forEach((el, index) => {
      bikes.push(el);
      createCard(el, index);
    });
    const showAllLength = document.querySelector("#show-all");
    showAllLength.textContent = bikes.length;
    const brands = document.querySelector("#brands");
    const genders = document.querySelector("#gender");
    brands.addEventListener("click", (e) => {
      if (e.target.tagName === "SPAN") {
        const theBrand = e.target.textContent;
        const brandBikes = bikes.filter((bike) => bike.brand === `${theBrand}`);
        $("#card-container").children(":not(#filters)").remove();
        brandBikes.forEach((el, index) => {
          createCard(el, index);
        });
      } else {
        return;
      }
    });
    genders.addEventListener("click", (e) => {
      if (
        e.target.tagName === "SPAN" &&
        !e.target.classList.contains("ellipse")
      ) {
        const theGender = e.target.textContent.toUpperCase();
        const bikesByGender = bikes.filter(
          (bike) => bike.gender === `${theGender}`
        );
        $("#card-container").children(":not(#filters)").remove();
        bikesByGender.forEach((el, index) => {
          createCard(el, index);
        });
      } else {
        return;
      }
    });
    const ellipses = cardContainer.querySelectorAll(".ellipse");

    ellipses.forEach((el) => {
      const filterBy =
        el.parentElement.previousElementSibling.firstElementChild.textContent;

      let ifBrand =
        el.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.textContent.toLowerCase();

      if (ifBrand === "brand") {
        let arr = bikes.filter((bike) => bike.brand === `${filterBy}`);
        el.textContent = arr.length;
      } else if (ifBrand === "gender") {
        let arr = bikes.filter(
          (bike) => bike.gender === `${filterBy.toUpperCase()}`
        );
        el.textContent = arr.length;
      }
    });
  });

  const createCard = (el, index) => {
    const cardCol = document.createElement("div");
    cardCol.classList.add("col-3", "mb-5");
    if (index === 0 || index % 3 === 0) {
      cardCol.classList.add("offset-3");
    }
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("card-img-top", "mx-auto");
    img.style.height = "200px";
    img.setAttribute("src", `../img/${el.image}.png`);

    const cardBody = document.createElement("div");
    cardBody.setAttribute("style", "background-color:orange; ");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute("style", "font-weight: 700");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = el.name;

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = "$ " + el.price;

    cardBody.append(cardTitle, cardText);
    card.append(img, cardBody);
    cardCol.append(card);

    cardContainer.append(cardCol);
  };
  const showAllBtn = document.querySelector("#show-all-btn");
  showAllBtn.addEventListener("click", () => {
    showAllBtn.nextElementSibling.firstElementChild.classList.add("bg-orange");
    showAllBtn.classList.add("c-orange");
    $("#card-container").children(":not(#filters)").remove();
    bikes.forEach((el, index) => {
      createCard(el, index);
    });
  });

  const spans = cardContainer.querySelectorAll("span");

  spans.forEach((el, index) => {
    el.addEventListener("click", () => {
      spans.forEach((element) => {
        if (
          element.classList.contains("bg-orange") ||
          element.classList.contains("c-orange")
        ) {
          element.classList.remove("bg-orange");
          element.classList.remove("c-orange", "bolder");
        }
      });
      if (el.classList.contains("ellipse")) {
        return;
      } else {
        spans[index + 1].classList.add("bg-orange");
        el.classList.add("c-orange", "bolder");
      }
    });
    el.addEventListener("mouseover", () => {
      if (!el.classList.contains("ellipse")) {
        spans[index + 1].classList.add("bg-orange-hover");
        el.classList.add("c-orange-hover");
      }
    });
    el.addEventListener("mouseout", (e) => {
      spans[index + 1].classList.remove("bg-orange-hover");
      el.classList.remove("c-orange-hover");
    });
  });
});
