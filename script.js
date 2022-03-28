/*
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa,
 il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi":
 cliccando sul pulsante, il testo digitato viene letto 
 e utilizzato per creare un nuovo todo, 
 che quindi viene aggiunto alla lista dei todo esistenti.
BONUS:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, 
invertire il valore della proprietà done del todo corrispondente 
(se done era uguale a false, impostare true e viceversa)
 */

const app = new Vue({
    el:'#todo',
    data:{
        todoList: [
            {text : 'Andare a fare la spesa',done:true},
            {text : 'Giocare con il pc',done:false},
            {text : 'Andare in palestra',done:true},
            {text : 'Portare fuori il cane',done:false},
            {text : 'Scrivere alla ragazza',done:true},
        ],

        addList:'',
    },

    methods: {
        isDone(index){
            if(this.todoList[index].done === true){
                return 'line-through'
            } 
            
        },

        deleteList(index){
            this.todoList.splice(index, 1);
        },

        addNewList(){
            const object ={
                text: this.addList,
                done:false,
            }
            if(this.addList.length > 0){
                this.todoList.push(object)
            }
            this.addList='';
        },

    },
})