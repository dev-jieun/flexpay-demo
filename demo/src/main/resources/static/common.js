/**
 * 
 */
const container = document.querySelector(".card-list");
const URL = "https://avatars.dicebear.com/api/male/";
const NUM_IMAGES = 12;

function loagdImageList(){
	
	let i=0;
	while(i<NUM_IMAGES){
		const li = document.createElement('li');
		const card_div = document.createElement('div');
		const card_body_div = document.createElement('div');
		const img = document.createElement('img');
		const p = document.createElement('p');
		const a = document.createElement('a');
		
		a.className = "btn btn-primary";
		a.innerText = "Go somewhere";
	
		p.className = "card-text";
		p.innerText = "Some quick example text to build on the card title and make up the bulk of the card's content.";
	
		card_body_div.className = "card-body";
		card_div.className = "card";
		
		img.className = "card-img-top";
		img.src = URL+randNumber()+".svg";
		
		card_body_div.appendChild(p);
		card_body_div.appendChild(a);
		
		card_div.appendChild(img);
		card_div.appendChild(card_body_div);
		
		li.appendChild(card_div);
		container.appendChild(li);
		
		i++;
	}
}

function randNumber(){
	return Math.floor(Math.random() * 100);
}

loagdImageList();

window.addEventListener("scroll", () => {

	if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
		loagdImageList();
	}	
	
});