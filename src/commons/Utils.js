import {Labels} from "./Labels";

const capitalizeFirstLetter = (text) => text.charAt(0).toUpperCase() + text.slice(1);

const foundLabelColor = (nome) => {

    for( const label of Object.entries(Labels) ) {
        if(label[1].nome === nome)
            return label[1].cor;
    }
};

export default {capitalizeFirstLetter, foundLabelColor};

