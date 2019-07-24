import axios from 'axios';

const KEY = 'AIzaSyBQ6thewJ_PtefetkzXYx5ja8BR3xrt_iE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
