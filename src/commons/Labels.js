export class Label {

    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;
    }
}


export const Labels = {
    FIRE : new Label('fire', '#fd7d24'),
    POISON : new Label('poison', '#b97fc9'),
    WATER : new Label('water', '#4592c4'),
    BUG : new Label('bug', '#729f3f'),
    GRASS : new Label('grass', '#9bcc50'),
    FAIRY : new Label('fairy', '#EE99AC'),
    FLYING : new Label('flying', '#3dc7ef'),
    NORMAL : new Label('normal', '#a4acaf'),
    GROUND : new Label('ground', '#f7de3f'),
    ELECTRIC : new Label('electric', '#eed535'),
    FIGHTING : new Label('fighting', '#d56723'),
    ICE : new Label('ice', '#51c4e7'),
    PSYCHIC : new Label('rock', '#a38c21'),
    ROCK : new Label('psychic', '#f366b9'),
    GHOST : new Label('ghost', '#7b62a3'),
    DRAGON : new Label('dragon', '#53a4cf')
};
