Vue.component('card', {
    props: ['position'],
    methods: {
      left: function(){
        var width = +this.width_of_card().substring(0, 3);
        if(width >= (width_of_map - (this.position.x + 5 * width_of_map / 536))){
          return ((this.position.x - 5 * width_of_map / 536) - width) + 'px';
        }
        else return (this.position.x + 5 * width_of_map / 536) + 'px';
      },
      top: function(){
      return (this.position.y + 5 * height_of_map / 650) + 'px';
    },
    width_of_card: function(){
      if(width_of_map > 1700){
         return '800px';
       }
       else{
         return '500px'
       };
    }
  },
    template:
      `
      <div class="card"
      v-bind:style="{
          width: width_of_card(),
          left: left(), top: top()}">
        <slot></slot>
      </div>
      `
  });
  
  Vue.component('headline', {
    props: ['text'],
    template: '<h1 class="headline card__headline headline_font-size_36px">{{text}}</h1>'
  })
  
  Vue.component('about', {
    props: ['head', 'text'],
    template: '<p v-if="text" class="paragraph card__paragraph"><b>{{head}}:</b> {{text}}</p>'
  });
  
  Vue.component('photo', {
    props: ['photo'],
    methods: {
      show_big_image: function(){
        document.body.style.overflow = 'hidden';
        document.getElementsByClassName('nav')[0].style.display = 'none';
        this.$root.render_image = true;
      }
    },
    template: `<img 
                  v-if="photo"
                  v-bind:src="photo"
                  v-on:click="show_big_image"
                  class="card__photo">`
  });
  
  Vue.component('fulllook', {
    props: ['photo'],
    template:
      `<div class="fullLook map__picture">
        <img class="fulllook__picture" v-bind:src="photo">
        <slot></slot>
      </div>`
  })
  
  Vue.component('close', {
    props: ['object'],
    methods: {
      close: function(){
        if (this.object == 'render_card'){
        this.$root[this.object] = false;
        }
        else {
          this.$root[this.object] = false;
          setTimeout(function(){
            document.body.style.overflow = 'auto';
            document.getElementsByClassName('nav')[0].style.display = 'block';
          }, 300)
        }
      }
    },
    template: '<button v-on:click="close" class="paragraph button card__button">закрыть</button>'
  })
  
  
  
  
  
  var vm = new Vue({
    el: '#root',
    data: {
      rendering: {
        header: null,
        district: null,
        status:null,
        adress: null,
        photo: null
      },
      position: {
        x: null,
        y: null
      },
      render_card: false,
      render_image:false,
    }
  })
  
  function renderCard(){
    vm.rendering.headline = this.header;
    vm.rendering.district = this.district;
    vm.rendering.status = this.status;
    vm.rendering.adress = this.adress;
    vm.rendering.photo = this.photo;
    vm.position.x = Math.round(this.X);
    vm.position.y = Math.round(this.Y);
    if (vm.render_card != true) {
      vm.render_card = true;
    }
    else {
      vm.render_card = false;
      vm.render_card = true;
    }
  }
  