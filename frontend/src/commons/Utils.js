import {Labels} from "./Labels";
import { ADD, REMOVE, UPDATE } from './ActionButton';

const capitalizeFirstLetter = (text) => text.charAt(0).toUpperCase() + text.slice(1);

const foundLabelColor = (nome) => {
    
    for( const label of Object.entries(Labels) ) {
        if(label[1].nome === nome.toLowerCase())
            return label[1].cor;
    }
};


const backColorButton = (action) => {

    let backgroundColor;
    switch (action) {
        case ADD:
            backgroundColor = '#4CAF50'
            break;
        case REMOVE:
            backgroundColor = '#008CBA';
            break;
        case UPDATE:
            backgroundColor = '#f44336';
            break;
        default:
            backgroundColor = '#4CAF50'
            break;
    } 

    return backgroundColor;
};

export default {capitalizeFirstLetter, foundLabelColor, backColorButton};

