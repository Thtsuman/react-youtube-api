import axios from 'axios';

const KEY = 'AIzaSyDxEq0mWA5zHRxcu6DAY3hq57-DB-G9r2U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})