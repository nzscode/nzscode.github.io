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
  coll[i].addEventListener("click", function() {
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

function addCopyButton (tab_id) {
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
        setTimeout(function(){
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
  };

  addCopyButton("Collapsible_html_copy")
  addCopyButton("Collapsible_css_copy")
  addCopyButton("Collapsible_js_copy")
  addCopyButton("tabsONLY_html_copy")
  addCopyButton("tabsONLY_css_copy")
  addCopyButton("tabsONLY_js_copy")
  addCopyButton("tabsWithOutputONLY_html_copy")
  addCopyButton("tabsWithOutputONLY_css_copy")
  addCopyButton("tabsWithOutputONLY_js_copy") 
  addCopyButton("tabsWithCodeBlock_html_copy")
  addCopyButton("tabsWithCodeBlock_css_copy")
  addCopyButton("tabsWithCodeBlock_js_copy")  
  addCopyButton("tabsWithCopyButton_html_copy")
  addCopyButton("tabsWithCopyButton_css_copy")
  addCopyButton("tabsWithCopyButton_js_copy") 
  addCopyButton("Flora_html");
  addCopyButton("Fauna_html");
  addCopyButton("Mineral_html");
  addCopyButton("Test1HTML_copy")
  addCopyButton("Test1CSS_copy")
  addCopyButton("Test1JS_copy")
  addCopyButton("Test1Python1.1_copy")
  addCopyButton("Test1Python1.2_copy")
  addCopyButton("tabsWithOutputOnTabs_html_copy")
  addCopyButton("tabsWithOutputOnTabs_css_copy")
  addCopyButton("tabsWithOutputOnTabs_js_copy")
  addCopyButton("html_copy_btn")
  addCopyButton("css_copy_btn")
  addCopyButton("js_copy_btn")