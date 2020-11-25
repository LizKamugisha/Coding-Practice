new Vue({
    //The Element Selector Property
    el : "#tvBox",
    //The Data Property
    data(){
      return {
        tv: "../images/vueLogo.gif",
        tvScreen:false,
      }
    },
    //The Method Property
    methods : {
      toggle:function(){
      this.tvScreen = !this.tvScreen;
      }
    }
  });