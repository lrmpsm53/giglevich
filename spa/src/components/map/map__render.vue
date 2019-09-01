<template>
    <section id="root">
        <card v-if="render_card" 
        v-bind:rendering="rendering" 
        v-bind:position="position"
        v-bind:card="render_card">
        </card>
        <big-image v-if="render_image" v-bind:photo="rendering.photo"></big-image>
        <div id="container"></div>
    </section>
</template>

<style lang="sass" scoped>
    #root
        position: relative
</style>

<script>
import Konva from 'konva' 
import axios from 'axios'
import store from '../../store.js'

import card from '../card/card.vue'
import big_image from '../big-image/big-image.vue'

export default {
    components: {
        'card': card,
        'big-image': big_image
    },
    computed: {
        render_card: function() { return this.$store.state.render_card},
        render_image: function() {return this.$store.state.render_image}
    },
    data: () => {
        return{
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
        }
    },
    methods: {
        renderCard: function(event){
            this.rendering.header = event.target.header
            this.rendering.district = event.target.district;
            this.rendering.status = event.target.status;
            this.rendering.adress = event.target.adress;
            this.rendering.photo = event.target.photo;
            this.position.x = Math.round(event.target.X);
            this.position.y = Math.round(event.target.Y);
            if (this.render_card != true) {
                store.commit('card')
            }
        }
    },
    mounted() {
        var renderCard = this.renderCard

        var width_of_map = window.innerWidth
        var height_of_map = Math.round(650*width_of_map/536)

        var map_image = new Image();
        map_image.src = './map.jpg';
        var map_background = new Konva.Image({
            image: map_image,
            width: width_of_map,
            height: height_of_map,
            x: 0,
            y: 0
        })

        var canvas = new Konva.Stage({
            width: width_of_map,
            height: height_of_map,
            container: 'container'
        })
        canvas.container().style.position = 'static'

        var canvas_layer = new Konva.Layer();
        canvas.add(canvas_layer)

        var map_objects = new Konva.Group({
            width: width_of_map,
            height: height_of_map
        })

        axios.get('./objects_list.json').then(response => {
            parse_objects_list(response.data)})

        function parse_objects_list(objects_list) {

            map_objects.add(map_background);
            canvas_layer.batchDraw();

            var points_list = [];

            for(var i = 0; i < objects_list.length; i++){
            points_list[i] = new Konva.Circle({
                radius: 8 *  width_of_map / 536,
                fill: 'white',
                stroke: 'darkgray',
                strokeWidth: 2 *  width_of_map / 536,
                x: objects_list[i].x * width_of_map / 536,
                y: objects_list[i].y * height_of_map / 650,
                opacity: 0.5
            });

            map_objects.add(points_list[i]);

            points_list[i].header = objects_list[i].header;
            points_list[i].district = objects_list[i].district;
            points_list[i].status = objects_list[i].status;
            points_list[i].adress = objects_list[i].adress;
            points_list[i].photo = objects_list[i].photo;

            points_list[i].X = objects_list[i].x * width_of_map / 536;
            points_list[i].Y = objects_list[i].y * height_of_map / 650;

            points_list[i].on('click', renderCard);
            points_list[i].on('mouseenter', function(){
                canvas.container().style.cursor = 'pointer';
            })
            points_list[i].on('mouseleave', function(){
                canvas.container().style.cursor = 'default';
            })

            points_list[i].zIndex(i+1);
            }
            canvas_layer.add(map_objects)
            }
        }

    }
</script>