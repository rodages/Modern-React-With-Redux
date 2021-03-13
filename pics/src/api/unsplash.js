import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID Q3JYPGwtJCOjyRgs8Ecimt11rz7KWsWlzSidkuIOf8M'
    }
})