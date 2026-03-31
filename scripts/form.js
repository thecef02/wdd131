let yr = new Date().getFullYear();
document.getElementById("currentyear").textContent =
    `${yr} Cristian Fernandez | Utah, USA`;

const d = new Date(document.lastModified);
document.getElementById("lastModified").textContent =
    `Last Modify ${d.toLocaleString("en-US", { hour12: false }).replace(",", "")}`;

    
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5,
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7,
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5,
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9,
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0,
    },
];


function fillSelectObj() {
    const selectObj = document.getElementById("productName");
    let finalHTML = selectObj.innerHTML;
    products.forEach((item) => {
        finalHTML += `<option value="${item.id}">${item.name}</option>;`;

    });

    // console.log(finalHTML);
    selectObj.innerHTML = finalHTML;
}

fillSelectObj();