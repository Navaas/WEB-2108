interface ITodo {
    id: number;
    name: string;
    todo: string;
    printName: () => void;
}

export const michaTodo: ITodo = {
    id: 1,
    name: 'Michaela',
    todo: 'Handla mat',
    printName: function (): void {
        console.log(`${this.name}, ${this.todo}`)
    },
};


const todos: ITodo[] = []
todos.push(michaTodo)