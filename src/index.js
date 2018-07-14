function addListener(elem, type, fn) {
    if (elem.addEventListener) {
        elem.addEventListener(type, fn, false);

    } else if (elem.attachEvent) {
        elem.attachEvent("on" + type, function () {
            return fn.call(elem, window.event);
        });
    } else {
        elem["on" + type] = fn;
    }
}

let submenuItems = document.querySelectorAll(".submenu > li");

for (let i = 0; i < submenuItems.length; i++) {
    addListener(submenuItems[i], "click", function (e) {
        alert(this.innerText);
    });
}


