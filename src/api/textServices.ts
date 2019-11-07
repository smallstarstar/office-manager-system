import axios from 'axios';
import textUrl from '@/url/text';


const textServices = {
    text() {
        const url = textUrl.textUrl;
        return axios.get(url);
    }
}

export default textServices;