export class User {
    id: number;
    name: string;
    numberOfPicks: number;
    constructor(name: string, numberOfPicks: number, id?: number) {
        this.id = id == null ? identifier++ : id;
        this.name = name;
        this.numberOfPicks = numberOfPicks;
    }
}
let identifier = 0;