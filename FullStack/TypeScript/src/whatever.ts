function printStrings(array: string[]): void {
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

function printNumbers(array: number[]): void {
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

function printWhatever<T>(array: T[]) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

printWhatever<string>(['one', 'two', 'three']);
printWhatever<number>([1, 2, 3]);