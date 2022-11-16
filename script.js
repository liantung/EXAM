function hide(element) {
    element.remove();
}
function choice1(select) {
    alert(select.options[select.selectedIndex].value);
}


var likes = [3, 5, 8];
var spans = [
    document.querySelector("#post-1"),
    document.querySelector("#post-2"),
    document.querySelector("#post-3")
];

function like(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + "like(s)";
}