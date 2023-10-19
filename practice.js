// Capitalize each word in sentence
// function camelCase(text) {
// TO CAPITALIZE THE FIGCAPTION AND GIVE THE IMAGE A TITLE
figCapCount = document.getElementsByTagName("figcaption").length;
for (let i = 0; i < figCapCount; i++) {
  let text = document.getElementsByTagName("figcaption")[i];
  let imgTitle = text.nextElementSibling;
  let imgTitleText = "";
  let result = "";
  let newWord = "";
  let splitString = text.innerHTML.split(" ");
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i].length < 2) {
      newWord = splitString[i];
    } else {
      let firstAlpha = splitString[i][0].toUpperCase();
      let simple = splitString[i].slice(1, splitString[i].length);
      newWord = firstAlpha + simple;
    }
    if (result.split(" ").length < text.innerHTML.split(" ").length) {
      result += newWord + " ";
    } else {
      result += newWord;
    }
  }
  for (let i = 0; i < splitString.length; i++) {
    imgTitleText += splitString[i].toLowerCase() + "_";
  }
  imgTitleText = imgTitleText.substring(0, imgTitleText.length - 1);
  text.innerHTML = result;
  imgTitle.setAttribute("title", imgTitleText);
}
