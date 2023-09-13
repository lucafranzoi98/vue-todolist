const { createApp } = Vue

createApp({
   data() {
      return {
         todo: "",
         present: false, // To check if a todo is already present
         empty: false, // To check if the input field is empty
         todos: [
            {
               text: "Mangiare",
               done: true
            },
            {
               text: "Bere",
               done: false
            },
            {
               text: "Dormire",
               done: true
            },
            {
               text: "Camminare",
               done: false
            }
         ]
      }
   },
   methods: {
      deleteTodo(i) {
         this.todos.splice(i, 1)
      },

      addTodo(string){
         this.present = false; // set to reset the state
         this.empty = false; // set to reset the state

         // check if input field is empty or with spaces
         if (string.split(" ").join("") == "") {

            this.empty = true;
            // if empty added an element in HTML with v:if="empty"
            
         } else {

            // cycle for each to cycle inside the objects in the array
            // if input is present text propriety set present to true (also with different Uppercase or Lowercase)
            this.todos.forEach(todo => {
               if (todo.text.toLowerCase() === string.toLowerCase()) {
                  this.present = true;
               }         
            });
            
            // if because we get n results because it's a cycle and we want only one answer
            // if not present push an object in the array
            if (this.present == false) {
               this.todos.push({"text": string, "done": false});
            }

            // if present added an element in HTML with v:if="present"
            // if true it appears (that's why we set this.present="false" at the beginning)
         }

         // empty input field
         this.todo = "";
      },

      done(todo){
         todo.done = !todo.done;
      }

   }
}).mount('#app')