function addListener(elem, type, fn) {
    if (elem.addEventListener) {
        elem.addEventListener(type, fn, false);

    } else if (elem.attachEvent) {
        elem.attachEvent("on" + type, () => {
            return fn.call(elem, window.event);
        });
    } else {
        elem["on" + type] = fn;
    }
}

let submenuItems = document.querySelectorAll(".submenu > li");

for (let i = 0; i < submenuItems.length; i++) {
    addListener(submenuItems[i], "click", (e) => {
        alert(this.innerText);
    });
}

let content = document.getElementById("add");

addListener(content, "click", () => {
    let p = document.createElement("p");
    p.innerHTML += `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    The point of using Lorem Ipsum is that it has a more - or - less normal distribution of letters, as opposed to using
    Content here, content here, making it look like readable English.Many desktop publishing packages and web
    page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many
    web sites still in their infancy.Various versions have evolved over the years, sometimes by accident, sometimes
    on purpose(injected humour and the like)`;

    const article = document.getElementsByTagName("article")[0];
    article.appendChild(p);
});