// get quote from api
async function getQuote() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        var response = await fetch(proxyUrl + apiUrl);
        var data = await response.json();
        console.log(data);
    } catch (error) {
        getQuote();
        console.log('whoops, no quote', error);
    }

}

// on load
getQuote();