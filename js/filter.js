let input = document.querySelector('#site-search');
let main = document.querySelector('main');
let article = main.querySelectorAll('article');
let section = main.querySelectorAll('section');
let listItems = main.querySelectorAll('li');

function submit(evt) {
	evt.preventDefault();
}

function filter(evt) {
	evt.preventDefault();
	let inputValue = input.value.toUpperCase();	

	listItems.forEach(
		function getMatch(info) {
			let listLinks = info.querySelectorAll('a');
			listLinks.forEach(
				function allLinks(item) {
					let linkText = item.innerHTML.toUpperCase();
					if (linkText.includes(inputValue)) {
						info.classList.add('show');
						info.classList.remove('hide');		
					}
					else {
						info.classList.add('hide');
						info.classList.remove('show');
					}
				}
			);
		}
	);
	
	article.forEach(
		function hideArticles(item) {
			if (! item.querySelector('.show')) {
				item.classList.add('hide');
			}
			else {
				item.classList.remove('hide');
			}
		}
	);
	section.forEach(
		function hideArticles(item) {
			if (! item.querySelector('.show')) {
				item.classList.add('hide');
			}
			else {
				item.classList.remove('hide');
			}
		}
	);
}

function autoReset() {
			if (input.value == null, input.value == "") {
				let all = main.querySelectorAll('.hide');
				all.forEach(
					function showAll(items) {
						items.classList.remove('hide');
					}
				);
			}
			else {
				return;
			}			
}

let form = document.querySelector('.search-form');

form.addEventListener('keyup', filter);

form.addEventListener('submit', submit);
