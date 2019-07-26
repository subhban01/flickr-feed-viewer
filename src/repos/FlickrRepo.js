import http from 'axios';
import {baseURI, publicPhotoFeed} from '../constants/Constants';


export function getPublicFeed() {
    return http.get(baseURI + publicPhotoFeed);
}