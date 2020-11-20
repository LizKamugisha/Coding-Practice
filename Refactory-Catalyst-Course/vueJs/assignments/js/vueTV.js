new Vue({
    //The Element Selector Property
    el : "#tvBox",
    //The Data Property
    data(){
      return {
        tvScreen:true
      }
    },
    //The Method Property
    methods : {
      toggle:function(){
      this.tvScreen = !this.tvScreen;
      }
    }
  });