import http from 'axios';
import {
    baseURI, publicPhotoFeed, keywordBeach, keywordFlowers,
} from '../constants/Constants';


export function getPublicFeed() {
    return http.get(baseURI + publicPhotoFeed);
}

export function searchBeach() {
    return http.get(baseURI + keywordBeach);
}

export function searchFlowers() {
    return http.get(baseURI + keywordFlowers);
}
