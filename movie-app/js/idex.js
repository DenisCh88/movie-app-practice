
const container = document.querySelectorAll('.container');
const movies = document.querySelector('.main__movie');
const movieImage = document.querySelectorAll('.movie__img');
const movieHeader = document.querySelectorAll('.movie__header');
const movieVote = document.querySelectorAll('.movie__vote');
const movieOverview = document.querySelectorAll('.movie__overview');
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
	img.alt = `image`;
	movieImage[i].append(img)
	movieHeader[i].innerHTML = title[i];
	movieVote[i].innerHTML = vote[i];
	movieOverview[i].innerHTML = `Overview <br/> <br/> ${overview[i]}`;
	}
 }



 setTimeout(getData, 0);


 

