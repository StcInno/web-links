let input = document.querySelector('#site-search');
let main = document.querySelector('main');
let article = main.querySelectorAll('article');
let section = main.querySelectorAll('section');
let listItems = main.querySelectorAll('li');
let form = document.querySelector('.search-form');

form.addEventListener('submit', submit);
form.addEventListener('keyup', autoReset);
form.addEventListener('keyup', filter);
form.addEventListener('keyup', filterHeadings);
form.addEventListener('keyup', scrollToTop);


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
						if (firstItem != null) {
							firstItem.classList.add('first-item');	
						}
						else {
							return;
						}
					}
					else {
						info.classList.add('hide');
						info.classList.remove('show');
						info.parentElement.classList.remove('first-item');
					}
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
	);
}

function filterHeadings(evt) {
	evt.preventDefault();
	let inputValue = input.value.toUpperCase();	
	let headings = main.querySelectorAll('h2');
	headings.forEach(
		function headings(item) {
			let headingText = item.innerHTML.toUpperCase();
			let thisArticle = item.parentElement;
			if (headingText.includes(inputValue)) {
				thisArticle.classList.add('show');
				thisArticle.classList.remove('hide');
				let a = thisArticle.querySelectorAll('.hide');
				a.forEach(item => {item.classList.remove('hide');});
			}
			else if (thisArticle.querySelector('.show')) {
				return;
			}
			else {
				thisArticle.classList.add('hide');
				thisArticle.classList.remove('show');
			}
		}
	);
}

function autoReset() {
	if (input.value == null, input.value == "") {
		let allHide = main.querySelectorAll('.hide');
		let allShow = main.querySelectorAll('.show');
		let firstItem = main.querySelectorAll('article.first-item');
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
		firstItem.forEach(
			function removeFirst(item) {
				item.classList.remove('first-item');	
			}
		);
	}
	else {
		return;
	}			
}

function scrollToTop() {
	if (document.body.scrollTop === 0) {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
}