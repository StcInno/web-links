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
					let firstItem = main.querySelector('article:not(.hide)');
					if (linkText.includes(inputValue)) {
						info.classList.add('show');
						info.classList.remove('hide');
						firstItem.classList.remove('first-item');		
					}
					else {
						info.classList.add('hide');
						info.classList.remove('show');
						firstItem.classList.add('first-item');
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
		function hideSections(item) {
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
				let allHide = main.querySelectorAll('.hide');
				let allShow = main.querySelectorAll('.show');
				allHide.forEach(
					function showAll(items) {
						items.classList.remove('hide');
						items.classList.remove('show');
					}
				);
				allShow.forEach(
					function showAll(items) {
						items.classList.remove('hide');
						items.classList.remove('show');
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
