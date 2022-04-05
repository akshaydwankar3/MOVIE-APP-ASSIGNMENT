
var nav_bar = document.getElementById("nav_bar");

var nav_div = document.createElement("div");
nav_div.setAttribute("id", "nav_div");

var home = document.createElement("button");
home.textContent = "Home";
home.setAttribute("id","home");
home.onclick = function() {
    window.location.href = "./index.html";
}

var login = document.createElement("button");
login.textContent = "Login";
login.setAttribute("id","login");
login.onclick = function() {
    window.location.href = "./login.html";
}

var signup = document.createElement("button");
signup.textContent = "Signup";
signup.setAttribute("id","signup");
signup.onclick = function() {
    window.location.href = "./signup.html";
}

nav_div.append(home,signup,login);
nav_bar.append(nav_div);

var slide_show_arr = ["https://i.pinimg.com/originals/88/75/c8/8875c86bd0ffbe3ba5c8f8246683c900.jpg","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mv5bmtk4ntm1oty3ml5bml5banbnxkftztgwnzc2ndg3nzmat-v1-1596816361.jpg?crop=0.9876543209876544xw:1xh;center,top&resize=480:*","https://m.media-amazon.com/images/M/MV5BMTcxNDI0NzUxMF5BMl5BanBnXkFtZTcwOTIzMjkyNw@@._V1_.jpg","https://cdn.shopify.com/s/files/1/1416/8662/products/blade_runner_2049_2017_advance_original_film_art_a_850aae3d-695e-41dd-8fc8-f82f66902187_1600x.jpg?v=1640043898","https://cdn.europosters.eu/image/1300/posters/star-wars-episode-viii-the-last-jedi-one-sheet-i97646.jpg"];

var slide_show = document.getElementById("slideshow");

var i  = 0;

setInterval(function() {
    if(i === slide_show_arr.length)
    {
        i = 0;
    }

    var image = slide_show_arr[i];
    slide_show.innerHTML = null;

    var img = document.createElement("img");
    img.setAttribute("id","image");
    img.src = image;
    slide_show.append(img);
    i++;
},1500);


// here all objects arecreating for storing the movies data

// creating an array 
let movieArr = [];

//Action movies
//obj1 for sooryavanshi
let obj1 = {
    poster : "https://m.media-amazon.com/images/M/MV5BNDI3M2E5ZGQtZjVlNS00NzFhLTg0NTAtZDZmOTBjODg3ZDQ1XkEyXkFqcGdeQXVyNzkxOTEyMjI@._V1_FMjpg_UX1080_.jpg",
    name: "Sooryavansi",
    releaseDate : "5 November 2021",
    imdbRating: 6.7,
    genres : "Action", 
};

//obj2 for avengers EndGame
let obj2 = {
    poster : "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    name: "Avengers EndGame",
    releaseDate : "26 April 2019",
    imdbRating: 8.4,
    genres : "Action", 
};

//obj3 for pushpa
let obj3 = {
    poster : "https://m.media-amazon.com/images/M/MV5BMmQ4YmM3NjgtNTExNC00ZTZhLWEwZTctYjdhOWI4ZWFlMDk2XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_QL75_UX380_CR0,4,380,562_.jpg",
    name: "Pushpa : The Rise - Part 1",
    releaseDate : "17 December 2021",
    imdbRating: 8.0,
    genres : "Action", 
};

//Anime movies
//obj4 for arjun:the warrior prince
let obj4 = {
    poster : "https://m.media-amazon.com/images/M/MV5BY2ViM2VlZmYtZmQ5OC00NDYwLWFmMjEtYmMxN2RhNTFhMzZlXkEyXkFqcGdeQXVyMTM2MDU2MjI5._V1_QL75_UX380_CR0,9,380,562_.jpg",
    name: "Arjun:The Warrior Prince",
    releaseDate : "25 May 2012",
    imdbRating: 6.8,
    genres : "Anime",
};

//obj5 for ice age
let obj5 = {
    poster : "https://m.media-amazon.com/images/M/MV5BNDJmMzQyMzAtMzMxMy00NTI3LTgzOGMtZDU3Yzc4MjRjNzkwXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_QL75_UX380_CR0,0,380,562_.jpg",
    name: "Ice Age Adventure Of Buck Wild",
    releaseDate : "28 January 2022",
    imdbRating: 4.7,
    genres : "Anime",
};

//obj6 for kochadiiyaan
let obj6 = {
    poster : "https://m.media-amazon.com/images/M/MV5BOGJmYWYxODUtYjQxNy00YzFjLTk2OWQtMjVjNGQ2MzgzZjBiXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_QL75_UY562_CR14,0,380,562_.jpg",
    name: "Kochadiiyaan",
    releaseDate : "23 May 2014",
    imdbRating: 6.6,
    genres : "Anime",
};

//Horror movies
//obj7 for bhoot police
let obj7 = {
    poster : "https://m.media-amazon.com/images/M/MV5BNzE5OGQwMjgtMDFjOC00MzkyLTlhZTktNGE0NmUyODYyNDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UY562_CR35,0,380,562_.jpg",
    name: "Bhoot Police",
    releaseDate : "10 September 2021",
    imdbRating: 7.5,
    genres : "Horror", 
};

//obj8 for The nun
let obj8 = {
    poster : "https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    name: "The Nun",
    releaseDate : "7 September 2018",
    imdbRating: 5.3,
    genres : "Horror", 
};

//obj9 for Zombie Reddy
let obj9 = {
    poster : "https://m.media-amazon.com/images/M/MV5BYTg4NTRjZjUtZWMyYS00YTk2LThjN2ItYTBkNThiMDY5NDRkXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_QL75_UY562_CR4,0,380,562_.jpg",
    name: "Zombie Reddy",
    releaseDate : "5 February 2021",
    imdbRating: 7.0,
    genres : "Horror", 
};

movieArr.push(obj1, obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9);
console.log(movieArr);
localStorage.setItem('movies', JSON.stringify(movieArr));


var movie = document.getElementById("movies");

function appendMovies(movieArr)
{
    movie.innerHTML="";
    movieArr.forEach(function(ele){        
        var div = document.createElement("div");
        div.setAttribute("id","movie_div");
        var poster = document.createElement("img");
        poster.src = ele.poster;
        var name = document.createElement("p");
        name.textContent = `Name : ${ele.name}`;
        var releaseDate = document.createElement("p");
        releaseDate.textContent = `Release Date : ${ele.releaseDate}`;
        var imdbRating = document.createElement("p");
        imdbRating.textContent = `Imdb Rates : ${ele.imdbRating}`;
        var genres = document.createElement("p");
        genres.textContent = `Genres : ${ele.genres}`;
        div.append(poster,name,releaseDate,imdbRating,genres);
        movie.append(div);
    })
    console.log(movieArr);
}

//creating sort selecting tags

var sort = document.getElementById("sort-buttons");

var select = document.createElement("select");
select.setAttribute("id","select");
var option1 = document.createElement("option");
option1.textContent = "Sort by rating";
var option2 = document.createElement("option");
option2.textContent = "Sort by low rating to high";
option2.value = "sort-lh";
option2.setAttribute("id", "sort-lh");
var option3 = document.createElement("option");
option3.textContent = "Sort by high rating to low";
option3.value = "sort-hl";
option3.setAttribute("id", "sort-hl");
select.append(option1,option2,option3);
sort.append(select);

// select functionality

select.onchange = function() {
    var selected = document.getElementById("select").value;
    if(selected == "sort-lh")
    {
        movieArr.sort(function(a,b){
            return a.imdbRating - b.imdbRating;
        });
    }
    if(selected == "sort-hl")
    {
        movieArr.sort(function(a,b){
            return b.imdbRating - a.imdbRating;
        });
    }
    appendMovies(movieArr);
}


appendMovies(movieArr);