// Allt som har med overlayen att göra ligger i denna modul. 
// Den är ju en stor del av hela sidan, så därför tycker jag det är vettigt
// att den får en egen modul

const closeBtnElem = document.querySelector('.close');

function displayOverlay(planetElem, bodies) {

    planetElem.addEventListener('click', () => {

        console.log(bodies.name);

        const titleSwedishElem = document.querySelector('.swedish-title');
        titleSwedishElem.innerHTML = bodies.name;
        const titleLatinElem = document.querySelector('.latin-title');
        titleLatinElem.innerHTML = bodies.latinName;
        const titleInfoElem = document.querySelector('.info-text');
        titleInfoElem.innerHTML = bodies.desc;

        const circumferenceStatsElem = document.querySelector('.circumference-stats');
        circumferenceStatsElem.innerHTML = bodies.circumference.toLocaleString() + ' km';
        const maxTempStatsElem = document.querySelector('.max-temp-stats');
        maxTempStatsElem.innerHTML = bodies.temp.day + 'C';

        const distanceStatsElem = document.querySelector('.distance-stats');
        distanceStatsElem.innerHTML = bodies.distance.toLocaleString() + ' km';
        const minTempStatsElem = document.querySelector('.min-temp-stats');
        minTempStatsElem.innerHTML = bodies.temp.night + 'C';

        const moonsStatsElem = document.querySelector('.moons-stats');
        moonsStatsElem.innerHTML = bodies.moons.join(', ');

        const overlayElem = document.querySelector('.overlay');
        overlayElem.classList.add('show'); 
        
        changePlanetBackgroundColor(bodies);
    });
}

function changePlanetBackgroundColor(bodies) {

    const overlayPlanetBackgrElem = document.querySelector('.planet-background');

    if (bodies.name === 'Solen') {
        overlayPlanetBackgrElem.style.backgroundColor = '#FFD029';
    } else if (bodies.name === 'Merkurius') {
        overlayPlanetBackgrElem.style.backgroundColor = '#888888';
    } else if (bodies.name === 'Venus') {
        overlayPlanetBackgrElem.style.backgroundColor = '#E7CDCD';
    } else if (bodies.name === 'Jorden') {
        overlayPlanetBackgrElem.style.backgroundColor = '#428ED4';
    } else if (bodies.name === 'Mars') {
        overlayPlanetBackgrElem.style.backgroundColor = '#EF5F5F';
    } else if (bodies.name === 'Jupiter') {
        overlayPlanetBackgrElem.style.backgroundColor = '#E29468';
    } else if (bodies.name === 'Saturnus') {
        overlayPlanetBackgrElem.style.backgroundColor = '#C7AA72';
    } else if (bodies.name === 'Uranus') {
        overlayPlanetBackgrElem.style.backgroundColor = '#C9D4F1';
    } else {
        overlayPlanetBackgrElem.style.backgroundColor = '#7A91A7';
    }
}

closeBtnElem.addEventListener('click', () => {
    const overlayElem = document.querySelector('.overlay');
    overlayElem.classList.remove('show');
});

export { displayOverlay }