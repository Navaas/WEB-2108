const title: string = '';
const pages: number = 1;
const isSold: boolean = true;
const updatedAt: Date = new Date();

const tags: string[] = ['', '',];

interface IObject {
    id: number;
    name: string;
}

const object: IObject = {
    id: 1,
    name: 'Alex',
};

const myFunction = (message: string): void => {
    console.log(message);
}

function myFunction2(message: string): void {}

const add = (a: number, b: number): number| undefined => {
    return a + b;
};

const logger = (message: string): void => console.log(message);
logger('One');

const array: (string[] | number[]) = [];


interface iUser {
    id: number;
    name: string;
    printName: () => void;
    setName: (name: string) => void;
}

export const user = {
    id: 1,
    name: 'Alex',
    printName: function (): void {
        console.log(`${this.name}`)
    },
    setName: function (name: string): void {
        this.name = name;
    }
};