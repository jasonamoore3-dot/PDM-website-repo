
function addReview(){
let text = document.getElementById('reviewText').value;
if(!text) return;
let div = document.createElement('div');
div.className='card';
div.innerText=text;
document.getElementById('reviews').appendChild(div);
document.getElementById('reviewText').value='';
}
