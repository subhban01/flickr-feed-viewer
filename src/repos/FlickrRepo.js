import http from 'axios';
import {baseURI, publicPhotoFeed, keyword_beach, keyword_flowers} from '../constants/Constants';


export function getPublicFeed() {
    return http.get(baseURI + publicPhotoFeed);
}

export function searchBeach() {
    return http.get(baseURI + keyword_beach);
}

export function searchFlowers() {
    return http.get(baseURI + keyword_flowers);
}