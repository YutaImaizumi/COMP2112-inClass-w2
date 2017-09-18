
//3
let element = document.querySelector('.item-page__main-title');
element.textContent = "Le Petit Prince - Japan Tour :-)";

//4
let el = document.querySelector('.product-image__image--single');
el.src = "http://yurizm.work/sushi.jpg";

//5
let navTitles = ['Prince1', 'Prince2', 'Prince3', 'Prince4', 'Prince5', 'Prince6', 'Prince7', 'Prince8', 'Prince9', 'Prince10'];
let navs = Array.from(document.querySelectorAll('.top-nav__list-item'));
navs.map((nav, index) => nav.textContent = navTitles[index]);

//6
let newLogo = document.querySelector('.indigo-logo');
newLogo.innerHTML = "<img src='http://yurizm.work/Assets/ninja.gif' height='70'>";

//9
let author = document.querySelector('.item-contributor__list');

author.innerHTML = `
<span class='item-contributor__item' data-a8n='contributor-item-by-0' title='Georgian College'><a href='http://www.georgiancollege.ca/'>Georgian College</a></span>`;

//7
const obj = {'tourName':'Sushi Tour','viewpoints':'Asakusa - Tokyo St - Tsukiji - Shinjuku - Yotsuya', 'time':'9am-5pm'};

function render(obj) {
let contentBook =`
	<ul>
		<li><strong>Tour Title:</strong> ${obj.tourName}</li>
		<li><strong>View Points:</strong> ${obj.viewpoints}</li>
		<li><strong>Time Schedule:</strong> ${obj.time}</li>
	</ul>
`;
return contentBook;
}

let div = document.querySelector('.item-purchase-container__special-offer-wrapper');
div.innerHTML = render(obj);



//8
const tours = [
    { 'tourTitle' : 'Hokkaido Tour', 'tourPic' : 'https://hokkaido-labo.com/wp-content/uploads/2016/06/furano-lavender2.jpg', 'points' : 'Hakodate - Abashiri - Genkai Nada' },
    { 'tourTitle' : 'Shang Hai Tour', 'tourPic' : 'http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1446136805/shanghai-dg1015.jpg?itok=Rfe-AxAY', 'points' : 'Shanghai - Main Island - Shen Zhen' },
    { 'tourTitle' : 'Moscow Tour', 'tourPic' : 'http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Russia/Moscow/moscow-go-red-square-xlarge.jpg', 'points' : 'Moscow - Red Square - Serviev Posad' }
];

function render(tours) {
    let otherBooks = `
        ${tours.map ( tour => `
            <div>
                <p><strong>${tour.tourTitle}</strong></p>
                <p><img src="${tour.tourPic}" height=100/><p>
                <p>${tour.points}</p><br>        
            </div>
        `).join('')}
    `;
    
    let bk = document.querySelector('.other-books__list');
    bk.innerHTML = otherBooks;
}

render(tours);

//10
let btn = document.getElementById('add-to-cart-button');
btn.addEventListener('click', function(){
    document.documentElement.innerHTML = ''
});




