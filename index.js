// Här blir det ju ganska tomt, men min tanke är att här ligger nu funktionen som bygger upp sidan med planeterna
// Känns ändå som att det är något som bör ligga i "huvud-filen"

import { requestBodies } from './modules/api.js'
import { displayOverlay } from './modules/overlay.js'

async function createBodies() {
    try {
        const planetsContElem = document.querySelector('.planets-container');
        const bodies = await requestBodies();

        for (let i = 0; i < bodies.length; i++) {
            
            const planetElem = document.createElement('section');
            planetElem.classList.add('planet');
            planetElem.setAttribute('planet-name', bodies[i].name)
            planetsContElem.appendChild(planetElem);

            displayOverlay(planetElem, bodies[i]);
        }
    }
    catch(err) {
        console.error(err);
    }
}

createBodies();

// UNBROKEN CODE

// const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com/';
// const closeBtnElem = document.querySelector('.close');
// const overlayElem = document.querySelector('.overlay');

// async function getApiKey() {
//     try {
//         const KEY_REQUEST = `${BASE_URL}keys`;
//         const response = await fetch(KEY_REQUEST, {
//             method: 'POST'}
//         );
//             const data = await response.json();
//             const KEY = data.key;
//             return KEY;
//     }
//     catch(err) {
//         console.error(err);
//     }
// }

// async function requestBodies() {
//     try {
//         const BODIES_REQUEST = `${BASE_URL}bodies`;
//         const API_KEY = await getApiKey();
    
//     console.log(API_KEY);

//     const response = await fetch(BODIES_REQUEST, {
//         headers: {
//             'x-zocom': API_KEY
//         }        
//     });
//     const data = await response.json();
//     console.log(data);
//     const bodies = data.bodies;
//     return bodies;
//     }
//     catch(err) {
//         console.error(err);
//     }
// }

// async function createBodies() {
//     try {
//         const planetsContElem = document.querySelector('.planets-container');
//         const bodies = await requestBodies();

//         for (let i = 0; i < bodies.length; i++) {
            
//             const planetElem = document.createElement('section');
//             planetElem.classList.add('planet');
//             planetElem.setAttribute('planet-name', bodies[i].name)
//             planetsContElem.appendChild(planetElem);

//             displayOverlay(planetElem, bodies[i]);
//         }
//     }
//     catch(err) {
//         console.error(err);
//     }
// }

// closeBtnElem.addEventListener('click', () => {
//     overlayElem.classList.remove('show');
// });

// function displayOverlay(planetElem, bodies) {
//     planetElem.addEventListener('click', () => {

//         console.log(bodies.name);

//         const titleSwedishElem = document.querySelector('.swedish-title');
//         titleSwedishElem.innerHTML = bodies.name;
//         const titleLatinElem = document.querySelector('.latin-title');
//         titleLatinElem.innerHTML = bodies.latinName;
//         const titleInfoElem = document.querySelector('.info-text');
//         titleInfoElem.innerHTML = bodies.desc;

//         const circumferenceStatsElem = document.querySelector('.circumference-stats');
//         circumferenceStatsElem.innerHTML = bodies.circumference.toLocaleString() + ' km';
//         const maxTempStatsElem = document.querySelector('.max-temp-stats');
//         maxTempStatsElem.innerHTML = bodies.temp.day + 'C';

//         const distanceStatsElem = document.querySelector('.distance-stats');
//         distanceStatsElem.innerHTML = bodies.distance.toLocaleString() + ' km';
//         const minTempStatsElem = document.querySelector('.min-temp-stats');
//         minTempStatsElem.innerHTML = bodies.temp.night + 'C';

//         const moonsStatsElem = document.querySelector('.moons-stats');
//         moonsStatsElem.innerHTML = bodies.moons.join(', ');

//         overlayElem.classList.add('show');  
//     });
// }

// createBodies();