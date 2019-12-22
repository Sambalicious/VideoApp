import axios from 'axios';

const KEY = 'AIzaSyDifTlXS1hAlTU556c6uiOgGqVRamzQtJo';

export default axios.create({
    baseUrl: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            maxResult: 5,
            key: KEY
        }
    
});



