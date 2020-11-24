new Vue(
    {
        el:'#root',

        data(){
            return {
                title:'Catalyst 006 Students:',
                students:[],
                studentToBeAdded:'Liz',
            }},
        methods: {
            addStudent: function(){
                this.students.push(this.studentToBeAdded);
            }
        }
    }
);

// Two Way Data Binding:
// Used in form element to update the model when the user changes the form field value