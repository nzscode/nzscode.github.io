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


document.querySelector('copy-btn').addEventListener('click', () => {
  const code = document.getElementsByClassName('code-text');
  navigator.clipboard.writeText(code.innerHTML);
});

function copy_to_clip(){
  var copyText = document.getElementById("1");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);

  alert("Copied the text: " + copyText.value) ;
}