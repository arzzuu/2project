const element = document.querySelector('.in');
const secButt = document.querySelector('.knopka');
   secButt.addEventListener('click', deleteValue);
  
element.addEventListener('click', getListContent);
function getListContent()
{
   div.insertAdjacentHTML('afterend','<li><input type="text" id="enter"><button type="button" class="knopka"><img src="./plus.svg" class="plusik"> </button></li>')
}
function deleteValue(){
   document.getElementById('enter').value = "";
}