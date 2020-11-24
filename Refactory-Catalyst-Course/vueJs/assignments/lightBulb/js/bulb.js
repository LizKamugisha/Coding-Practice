new Vue({
    //The Element Selector Property
    el : "#root",
    //The Data Property
    data(){
        return {
            title: "Code the Light Bulb",
            bulbOff: "../images/pic_bulboff.gif",
            bulbOn: "../images/pic_bulbon.gif",
            switchLight: false,
        }
    },
    //The Method Property
    methods : {
      toggle:function(){
      this.switchLight = !this.switchLight;
      }
    }
  });