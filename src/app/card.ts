export class Card {
    fistname: string;
    lastname: string;
    vote: number;
    constructor(
        firstname: string,
        lastname: string,
        vote: number
    ){
        this.fistname = firstname;
        this.lastname = lastname;
        this.vote = vote;

    }
}