const main = document.querySelector('.main');
const movie = document.querySelectorAll('.movie');
const container = document.querySelectorAll('.container');
const movies = document.querySelector('.main__movie');
const movieImage = document.querySelectorAll('.movie__img');
const movieHeader = document.querySelectorAll('.movie__header');
const movieVote = document.querySelectorAll('.movie__vote');
const movieOverview = document.querySelectorAll('.movie__overview');
const input = document.querySelector('.header__search');
const form = document.querySelector('.header__form');

const page = Math.floor(Math.random() * 500) + 1;
const url = `https://api.themoviedb.org/3/discover/movie?api_key=4e862687ced12b29e07204eec8aa9590&page=${page}`;

const getData = async () => {
	const res = await fetch(url);
	const data = await res.json();
	const results = data.results;
	const imgUrl = results.map(el => el.poster_path);
	const title = results.map(el => el.title);
	const vote = results.map(el => el.vote_average);
	const overview = results.map(el => el.overview);
	console.log(results);

for(let i = 0; i < movieImage.length; i++){
	const img = document.createElement('img');
	img.classList.add('img__movie');
	img.src = `https://image.tmdb.org/t/p/w1280${imgUrl[i]}`;
	img.alt = `${title[i]}`;
	movieImage[i].append(img)
	movieHeader[i].innerHTML = title[i];
	movieVote[i].innerHTML = vote[i];
	movieOverview[i].innerHTML = `Overview <br/> <br/> ${overview[i]}`;
	}
 }

 window.addEventListener('load', getData())

 function reset() {
	document.querySelectorAll('.img__movie').forEach(el => {
		 el.remove()
	});
	
	movieHeader.forEach(el => {
		el.innerHTML = '';
	});
	movieVote.forEach(el => {
		el.innerHTML = '';
	});
	movieOverview.forEach(el => {
		el.innerHTML = '';
	});
	if(document.querySelector('.error')){
		document.querySelector('.error').remove();
	}
	
}

 const getDataInput = async () => {
	const urls = `https://api.themoviedb.org/3/search/movie?query=${input.value}&api_key=4e862687ced12b29e07204eec8aa9590`;
	const res = await fetch(urls);
	const data = await res.json();
	const results = data.results;
	const imgUrl = results.map(el => el.poster_path);
	const title = results.map(el => el.title);
	const vote = results.map(el => el.vote_average);
	const overview = results.map(el => el.overview);
	if (results.length === 0) {
		alert('oops.. something went wrong')
		movie.forEach(el => {
			el.classList.add('movie__hide');
	  });
	  const error = document.createElement('div');
	  error.classList.add('error');
	  main.append(error);
	} else {
		if(movie[19].classList.contains('movie__hide')){ 
			movie.forEach(el => el.classList.remove('movie__hide'))
		}
		if (results.length < 20){
			for ( let i = results.length; i < 20; i++){
				movie[i].classList.add('movie__hide');
			}
		}
		for(let i = 0; i < results.length; i++){
			const img = document.createElement('img');
			img.classList.add('img__movie');
			img.src = `https://image.tmdb.org/t/p/w1280${imgUrl[i]}`;
			img.alt = `${title[i]}`;
			movieImage[i].append(img)
			movieHeader[i].innerHTML = title[i];
			movieVote[i].innerHTML = vote[i];
			movieOverview[i].innerHTML = `Overview <br/> <br/> ${overview[i]}`;
			}
	}
	console.log(results);
	
	console.log(urls)
 }


form.addEventListener('submit', (e) => {
	e.preventDefault();
	reset();
	getDataInput();
	input.value = '';
})

 
 //https://api.themoviedb.org/3/search/movie?query=summer&api_key=4e862687ced12b29e07204eec8aa9590