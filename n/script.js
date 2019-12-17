document.onclick = function (event) {
 
  if(event.target.tagName == 'IMG'){
   event.target.classList.add('bordered')
  }
  console.log(event.target.tagName);
}