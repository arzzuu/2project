const element = document.querySelector('.in');
const secButt = document.querySelector('.knopka');
const firstInput = document.querySelector('input');
const sortButton = document.querySelector('#list')
let enters = document.querySelectorAll('input')

secButt.addEventListener('click', deleteValue);
firstInput.addEventListener('keyup', (e) => {
   console.log(e.key)
   if(e.key == 'Enter'){
      // console.log(e.target.disabled )
      e.target.disabled = true;
   }
});

element.addEventListener('click', getListContent);
function getListContent()
{
   new1.insertAdjacentHTML('beforeend','<li><input type="text" id="enter"><button type="button" class="knopka"><img src="./plus.svg" class="plusik"> </button></li>')
   let inputs = document.querySelectorAll('input');
   let cross = document.querySelectorAll('.knopka');
   cross.forEach((element,i) => {
      element.addEventListener('click', () => {
         inputs[i].value= ''
         inputs[i].disabled=false

      });
   });
   inputs.forEach(element => {
      addEventListener('keyup', (event) => {
         if(event.key == 'Enter'){
            event.target.disabled = true;
         }
      })
      
   });
   list.scrollBy(0,10000);
}
function deleteValue(){
   document.getElementById('enter').value = "";
   document.getElementById('enter').disabled=false
}

sortButton.addEventListener('click', functionSort);
let k = 0;
function functionSort(){
   k++
   let list = document.querySelectorAll('input');
   let sortList = new Array;
   if(k % 2 != 0){
   for(let i = 0; (i < list.length); i++){
      if( list[i].value != '')
      sortList[i] = list[i].value;
   }
   sortList.sort()
   for(let i = 0; (i < list.length); i++){
      list[i].value = sortList[i];
      if(sortList[i] == undefined)
      list[i].value = '';
}
}
   else{
   for(let i = 0; (i < list.length); i++){
      if( list[i].value != '');
       sortList[i] = list[i].value;
}
sortList.sort().reverse()
for(let i = 0; (i < list.length); i++){
   list[i].value = sortList[i];
   if(sortList[i] == undefined)
   list[i].value = ''
}}
}
const list = document.querySelector('.button-and-input');
list.addEventListener('keydown', function(event){
   if(event.code == 'Enter'){
      event.target.scrollIntoView()
      }}); 
let i=0;
let image=document.getElementById("list");
image.addEventListener('click', imgsrc)
let imgs=new Array('icon2.svg', 'icon.svg');
function imgsrc() {
    i++; i %= imgs.length;
    image.src = imgs[i];
}
let drag = document.querySelector('#new1')
drag = new Sortable(drag);
