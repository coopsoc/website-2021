alert("Hello! I am an alert box!!");

const root = document.documentElement;
const row1_ElementsDisplayed = 6;
const row1_Content = document.querySelector(".row1_content");

root.style.setProperty("--row1-elements", row1_Content.children.length);

for(let i = 0; i < row1_ElementsDisplayed; i++) {
    row1_Content.appendChild(row1_Content.children[i].cloneNode(true));
}

const row2_ElementsDisplayed = 6;
const row2_Content = document.querySelector(".row2_content");

root.style.setProperty("--row2-elements", row2_Content.children.length);

for(let i = 0; i < row2_ElementsDisplayed; i++) {
    row2_Content.appendChild(row2_Content.children[i].cloneNode(true));
}