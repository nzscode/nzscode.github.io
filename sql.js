function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

//   THIS IS FOR THE COLLAPSIBLE BITS
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

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

// THIS IS FOR THE COPY BUTTON

function addCopyButton(tab_id) {
  // Get the ^lt;pre> element
  const preButton = document.getElementById(tab_id);

  // Create a copy button element
  const copyButton = document.createElement("span");
  copyButton.innerText = "Copy";
  copyButton.classList.add("copy-button");

  // Append the copy button to the ^lt;pre> Button
  preButton.appendChild(copyButton);

  // Add click event listener to the copy button
  copyButton.addEventListener("click", () => {
    // Hide the copy button temporarily
    copyButton.style.display = "none";

    // Create a range and select the text inside the ^lt;pre> Button
    const range = document.createRange();
    range.selectNode(preButton);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      // Copy the selected text to the clipboard
      document.execCommand("copy");

      // Alert the user that the text has been copied
      copyButton.innerText = "Copied!";
      setTimeout(function () {
        copyButton.innerText = "Copy";
      }, 2000);
    } catch (err) {
      console.error("Unable to copy text:", err);
    } finally {
      // Show the copy button again
      copyButton.style.display = "inline";

      // Deselect the text
      window.getSelection().removeAllRanges();
    }
  });
}

addCopyButton("create_database_Python_copy");
addCopyButton("delete_database_copy");
addCopyButton("create_table_copy");
addCopyButton("delete_table_copy");
addCopyButton("alter_database_name_copy");
addCopyButton("alter_table_name_copy");
addCopyButton("copy_database_copy");
addCopyButton("create_schema_copy");
addCopyButton("delete_schema_copy");
addCopyButton("create_table_copy");
addCopyButton("create_table_in_schema_copy");
addCopyButton("alter_table_copy");
addCopyButton("copy_table_copy");
