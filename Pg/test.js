// function displayCode() {
//     var inputTag = document.getElementsByTagName("input");
//     var preCode = document.getElementsByTagName("pre");
//     for (let i = 0; i < inputTag.length; i++) {
//         if (inputTag[i].checked == true) {
//             preCode[i].setAttribute("style", "display: block;");
//         } else {
//             preCode[i].setAttribute("style", "display: none;");
//         }
//     }
// }

// var divCheckBoxes = document.getElementById("divCheckBoxes");
// var inputDivCheckBoxes = divCheckBoxes.getElementsByTagName("input");
// var inputLabel = divCheckBoxes.getElementsByTagName("label");
// console.log(divCheckBoxes);
// console.log(inputDivCheckBoxes.length);

// for (let i = 0; i < inputDivCheckBoxes.length; i++) {
//     console.log(inputDivCheckBoxes[i]);
// }
// function displayCode(id, tagName, label) {
//     var divCheckBoxes = document.getElementById(id);
//     var inputDivCheckBoxes = divCheckBoxes.getElementsByTagName(tagName);
//     var inputLabel = divCheckBoxes.getElementsByTagName(label);
//     for (let i = 0; i < inputDivCheckBoxes.length; i++) {
//         if (inputDivCheckBoxes[i].checked == true) {
//             // console.log(inputDivCheckBoxes[i]);
//             inputLabel[i].setAttribute("style", "background-color: green;");
//         } else {
//             inputLabel[i].removeAttribute("style", "background-color");
//         }
//     }
// }

// var level1 = document.getElementById("divPrintCode");
// var level2 = level1.getElementsByTagName("div");
// console.log(level1);
// console.log(level2);

// var levelX = document.getElementsByClassName("class2");
// console.log(levelX);

// var level5 = document.getElementsByTagName("ul");
// console.log(level5);

var x = document.querySelectorAll("pop");
for (let i = 0; i < x.length; i++) {
    var xy = x.querySelectorAll("figure");
    console.log(xy);
}
