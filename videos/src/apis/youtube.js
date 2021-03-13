import axios from 'axios'

const KEY = 'AIzaSyAhrYv-TBhp8J0FLxPJLr3CUYLjDoKU6sk';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type:'video'
    }
})
