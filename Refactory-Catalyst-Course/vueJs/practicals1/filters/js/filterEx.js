new Vue({
    //The Element Selector Property
    el : "#root",
    //The Data Property
    data(){
        return {
            name: 'Liz'
        }
    },
    //The Filter Property
    filters: {
        fallback: function(name) {
        return name ? name : 'there'
        }
      }
  });