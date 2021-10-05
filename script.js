let quickHideEnabled = true;
document.addEventListener('keydown', function(event) {
event.preventDefault();
console.log(event)
if((event.key == "q" || event.key == "Q") && event.altKey) {
  quickHideEnabled = !quickHideEnabled
} else if ((event.key == "q" || event.key == "Q") && quickHideEnabled == true) {
  document.write()
  window.location = "https://aisdblend.instructure.com"
}
})
