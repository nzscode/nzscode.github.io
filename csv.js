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

addCopyButton("saving_csv_list_tup_copy");
addCopyButton("reading_csv_copy");
addCopyButton("read_csv_to_dict_copy");
addCopyButton("write_csv_to_dict_copy");
addCopyButton("write_pdf_copy");
addCopyButton("read_pdf_copy");
addCopyButton("json_dump_copy");
addCopyButton("json_dumps_copy");
addCopyButton("json_load_copy");
addCopyButton("json_loads_copy");
addCopyButton("create_database_Python_copy");
addCopyButton("delete_database_copy");
addCopyButton("create_table_copy");
addCopyButton("delete_table_copy");
addCopyButton("alter_database_name_copy");
addCopyButton("alter_table_name_copy");
addCopyButton("diconnect_4_copy");
