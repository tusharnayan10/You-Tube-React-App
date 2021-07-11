import axios from 'axios';

const KEY = 'AIzaSyCeiqHYspOo8cxkCitLZo_WhtZ70xXI_T0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});