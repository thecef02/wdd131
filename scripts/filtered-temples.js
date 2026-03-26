//footer
let yr = new Date().getFullYear();
document.getElementById("currentyear").textContent =
  `${yr} Cristian Fernandez | Utah, USA`;
const d = new Date(document.lastModified);
document.getElementById("lastModified").textContent =
  `Last Modify ${d.toLocaleString("en-US", { hour12: false }).replace(",", "")}`;


//Hamburger
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");
hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});


function createTempleCard(filteredTemples) {
  document.querySelector(".container").innerHTML = "";
  filteredTemples.forEach((temple) => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".container").appendChild(card);
  });
}



const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Mendoza Argentina",
    location: "Mendoza, Argentina",
    dedicated: "2018, October, 7",
    area: 21999,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/mendoza-argentina-temple/mendoza-argentina-temple-51739-main.jpg",
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2008, October, 4",
    area: 41010,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg",
  },
  {
    templeName: "Mount Timpanogos Utah",
    location: "American Fork, Utah",
    dedicated: "1992, October, 3",
    area: 107240,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/mount-timpanogos-utah-temple/mount-timpanogos-utah-temple-36979-main.jpg",
  },
];

createTempleCard(temples);

const allTemples = document.querySelector("#all-temples");
const oldTemples = document.querySelector("#old-temples");
const newTemples = document.querySelector("#new-temples");
const largeTemples = document.querySelector("#large-temples");
const smallTemples = document.querySelector("#small-temples");


allTemples.addEventListener("click", () => {
    createTempleCard(temples);
});



oldTemples.addEventListener("click", () => {
  const filteredTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0].trim(), 10);
    return !isNaN(year) && year < 1900;
  });

  createTempleCard(filteredTemples);
});

newTemples.addEventListener("click", () => {
  const filteredTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0].trim(), 10);
    return !isNaN(year) && year >= 2000;
  });

  createTempleCard(filteredTemples);
});


largeTemples.addEventListener("click", () => {
  const filteredTemples = temples.filter((temple) => temple.area >= 90000);
  createTempleCard(filteredTemples);
});

smallTemples.addEventListener("click", () => {
  const filteredTemples = temples.filter((temple) => temple.area < 10000);
  createTempleCard(filteredTemples);
});










