"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkImageSupport = function () {
    var htmlElement = document.querySelector('html');
    if (htmlElement === null)
        return;
    var setHTMLClass = function (imgHeight, className) {
        if (imgHeight < 2) {
            return htmlElement.classList.add("not" + className);
        }
        htmlElement.classList.add(className);
    };
    var AVIF = new Image();
    AVIF.onload = AVIF.onerror = function () { return setHTMLClass(AVIF.height, 'avif'); };
    AVIF.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
    var WebP = new Image();
    WebP.onload = WebP.onerror = function () { return setHTMLClass(WebP.height, 'webp'); };
    WebP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
};
exports.default = checkImageSupport;
