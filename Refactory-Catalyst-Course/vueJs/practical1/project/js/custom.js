// Exersize 1: Creating Vue Instance
// new Vue({
//     //The Element Selector Property
//     el : "#app",
//     //The Data Property
//     data : {
//       title:"Hello Catalyst!",
//       intro: "My name is Liz Kamugisha"
//     },
//     //The Method Property
//     methods : {
//       greetLiz:function(){
//         alert("Hello Liz!");
//       }
//     }
//   });

// Exersize 2: Using Directives
new Vue({
      //The Element Selector Property
      el : "#app",
      //The Data Property
      data(){
        return {
          signal:false
        }
      },
      //The Method Property
      methods : {
        toggle:function(){
        this.signal = !this.signal;
        }
      }
    });

// Exersize 3: Looping through array
// new Vue({
//   //The Element Selector Property
//   el : "#app",
//   //The Data Property
//   data(){
//     return {
//       signal:false,
//       items:['item1','item2','item3','item4']
//     }
//   },
//   //The Method Property
//   methods : {
//     toggle:function(){
//     this.signal = !this.signal;
//     }
//   }
// });

// Exersize 4: Bidning ?
// new Vue({
//     //The Element Selector Property
//     el : "#app",
//     //The Data Property
//     data : {
//       title:"Hello Catalyst!",
//       message:"What cohort are you in?"
//     },
//     //The Method Property
//     methods : {
//       greetLiz:function(){
//       alert("Hello Liz!");
//       }  
//     }
//   });


// NOTES:
// Creating a vue instance, that takes in an argument with parameters within an object {}
// Properties of the Vue Instance include
// el = DOM element selector 
// # is used to select id's
// data = holds App data variables
//methods = stores a series of statements that determine behaviours / processes 

// Vue Directives = 
