const prompt = require('prompt-sync')()

class todoApp{
    constructor(){
        this.listArray = []
        this.item = false
    }

    viewTodo(){
        if(this.listArray.length === 0){
            console.log('')
            console.log(`you have ${this.listArray.length} to do!`)
        }else{
            console.log('')
            console.log('You List Todo: ')
            for(let i = 0; i < this.listArray.length; i++){
                console.log(`${i + 1}. ${this.listArray[i]}`)
            }
        }
    }

    addTodo(){
        const list = prompt('Enter your task: ')
        this.listArray.push(list)
        console.log('')
        console.log(`${list} is added in the todo list`)
    }

    editTodo(){
        const edit = prompt('Enter the todo id you want to edit: ')
        const id = parseInt(edit) - 1
        if(id >= 0 && id < this.listArray.length){
            console.log('')
            const change = prompt('Change the todo item to: ')
            this.listArray[id] = change
        }else{
            console.log('')
            console.log(`${id + 1} is not valid`)
        }
    }

    toggleTodo(){
        let complete = prompt('Enter the todo id you want to toggle complete: ')
        const id = parseInt(complete) - 1
        if(id >= this.listArray.length){
            console.log(`${id + 1} is not valid`)
        }else{
            console.log('')
            this.listArray[id] += ' - completed' 
            console.log(`${this.listArray[id]} marked as completed!`)
        }
    }

    deleteTodo() {
        const deleteTodo = prompt('Enter the task id you want to delete: ');
        const id = parseInt(deleteTodo) - 1;
        if (id >= this.listArray.length) {
            console.log(`${deleteTodo} entered is not valid`);
        } else {
            console.log('')
            const removed = this.listArray.splice(id, 1);
            console.log(`${removed} has been removed from the list.`);
        }
      }
    

    start(){
        // console.log(this.listArray)
        // 1. User list option
        while(!this.item){
            console.log('')
            console.log('-------- TODO APP --------')
            console.log('What would you like to do?')
            console.log('1. View my todo list')
            console.log('2. Add new todo')
            console.log('3. Edit todo item')
            console.log('4. Toggle complete todo')
            console.log('5. Delete a todo')
            console.log('6. Quit app')
            console.log('')

            // 2. Ask for user input
            const option = prompt('Enter (1/2/3/4/5/6): ')

            // 3. Run the task 
            if(option === '1') this.viewTodo()
            if(option === '2') this.addTodo()
            if(option === '3') this.editTodo()
            if(option === '4') this.toggleTodo()
            if(option === '5') this.deleteTodo()
            if(option === '6') break
        }
    }
}

const game = new todoApp()
game.start()

// const prompt = require('prompt-sync')();

// class TodoApp {
//   constructor() {
//     this.listArray = ['eat', 'walk', 'code'];
//     this.item = false;
//   }

//   viewTodo() {
//     if (this.listArray.length === 0) {
//       console.log(`You have ${this.listArray.length} tasks!`);
//     } else {
//       console.log('My Todo List: ');
//       for (let i = 0; i < this.listArray.length; i++) {
//         console.log(`${i + 1}. ${this.listArray[i]}`);
//       }
//     }
//   }

//   addTodo() {
//     const task = prompt('Enter your task: ');
//     this.listArray.push(task);
//     console.log(`"${task}" has been added to the list!`);
//   }

//   editTodo() {
//     const edit = prompt('Enter the task id you want to edit: ');
//     const id = parseInt(edit) - 1;
//     const change = prompt('Change the task to: ');
//     this.listArray[id] = change;
//     console.log(`Task ${id + 1} has been changed to "${change}"!`);
//   }

//   toggleTodo() {
//     const edit = prompt('Enter the task id you want to toggle complete: ');
//     const id = parseInt(edit) - 1;
//     if (id >= this.listArray.length) {
//       console.log(`${id} entered is not valid`);
//     } else {
//       const task = this.listArray[id];
//       if (task.startsWith('✓ ')) {
//         this.listArray[id] = task.slice(2);
//         console.log(`"${task}" has been marked as incomplete.`);
//       } else {
//         this.listArray[id] = `✓ ${task}`;
//         console.log(`"${task}" has been marked as complete.`);
//       }
//     }
//   }

//   deleteTodo() {
//     const deleteTodo = prompt('Enter the task id you want to delete: ');
//     const id = parseInt(deleteTodo) - 1;
//     if (id >= this.listArray.length || id < 0) {
//       console.log(`${deleteTodo} entered is not valid`);
//     } else {
//       const removed = this.listArray.splice(id, 1);
//       console.log(`"${removed}" has been removed from the list.`);
//     }
//   }

//   start() {
//     console.log('-------- TODO APP --------');
//     while (!this.item) {
//       console.log('');
//       console.log('What would you like to do?');
//       console.log('1. View my todo list');
//       console.log('2. Add new task');
//       console.log('3. Edit task item');
//       console.log('4. Toggle complete task');
//       console.log('5. Delete a task');
//       console.log('6. Quit app');
//       console.log('');

//       const option = prompt('Enter (1/2/3/4/5/6): ');
//       console.log('');

//       if (option === '1') this.viewTodo();
//       else if (option === '2') this.addTodo();
//       else if (option === '3') this.editTodo();
//       else if (option === '4') this.toggleTodo();
//       else if (option === '5') this.deleteTodo();
//       else if (option === '6') {
//         console.log('Quitting the app. Goodbye!');
//         break;
//       } else {
//         console.log('Invalid option! Please try again.');
//       }
//     }
//   }
// }

// const game = new TodoApp();
// game.start();












//editTodo(){ 
    // const edit = prompt('Enter the todo id you want to edit: ')
    // const id = parseInt(edit) - 1
    // if (id >= 0 && id < this.listArray.length) {
    //     const change = prompt('Change the todo item to: ')
    //     this.listArray[id] = change
    // } else {
    //     console.log('Invalid todo id')
    // }
//}