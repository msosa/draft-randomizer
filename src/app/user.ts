export class User {
    id: number;
    name: string;
    numberOfPicks: number;
    constructor(name: string, numberOfPicks: number) {
        this.id = identifier++;
        this.name = name;
        this.numberOfPicks = numberOfPicks;
    }
}
let identifier = 0;