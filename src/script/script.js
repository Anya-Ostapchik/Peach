// map
const mapList = document.querySelector('#map__list');
const mapLinks = document.querySelectorAll('.map__link');
const mapImgs = document.querySelectorAll('.map__img');

for(let i = 0; i < mapLinks.length; i++){
    mapLinks[i].addEventListener('click', function(e){
        e.preventDefault();

        for(let link of mapLinks){
            link.classList.remove('link__active');
        }

        this.classList.add('link__active');

        for(let img of mapImgs){
            img.classList.remove('img__active');
        }

        mapImgs[i].classList.add('img__active');
    });
}

const dropdownList = document.querySelector('#map__dropdown-list');
const mapCities = document.querySelector('#map__cities');
const citiesOverlay = document.querySelector('#cities__overlay');

dropdownList.addEventListener('click', () => {
    mapCities.classList.toggle('cities__active');
    citiesOverlay.classList.toggle('cities__closed');
});