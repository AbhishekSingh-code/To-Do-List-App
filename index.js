const input = document.querySelector("input");
const btn = document.querySelector("button");
const works = document.querySelector(".works");
const img = document.querySelector("#close");
btn.addEventListener("click", () => {

    const newDiv = document.createElement("div");
    const newLi = document.createElement("li");
    const closeIcon = document.createElement("span");

    closeIcon.classList.add("material-symbols-outlined");
    closeIcon.textContent = "close";
    closeIcon.id = "close";

    newLi.textContent = input.value;

    newDiv.append(newLi);
    newDiv.append(closeIcon);
    works.append(newDiv);

    closeIcon.addEventListener("click", () => {
        newDiv.remove();
    })
    input.value = "";    
});

