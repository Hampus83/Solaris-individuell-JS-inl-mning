// I denna modul har jag valt att lägga de funktioner som har med API-anrop att göra.
// I din genomgång av moduler har jag för mig du gjorde liknande, så jag har fortsatt att göra likadant
// Känns också bra att ha just API-funktionerna samlade på ett och samma ställe

const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com/';

async function getApiKey() {
    try {
        const KEY_REQUEST = `${BASE_URL}keys`;
        const response = await fetch(KEY_REQUEST, {
            method: 'POST'}
        );
            const data = await response.json();
            
            return data.key;
    }
    catch(err) {
        console.error(err);
    }
}

async function requestBodies() {
    try {
        const BODIES_REQUEST = `${BASE_URL}bodies`;
        const API_KEY = await getApiKey();
    
    console.log(API_KEY);

    const response = await fetch(BODIES_REQUEST, {
        headers: {
            'x-zocom': API_KEY
        }        
    });
    const data = await response.json();
    console.log(data);

    return data.bodies;
    }
    catch(err) {
        console.error(err);
    }
}

export { requestBodies }