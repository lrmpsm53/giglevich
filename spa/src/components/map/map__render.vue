<template>
    <div id="container"></div>
</template>

<script>
import Konva from 'konva' 
export default {
    data() {
        return {
            height_of_map: Math.round(650*this.width_of_map/536),
            objects_list: null
        }
    },
    computed: {
        width_of_map: function() {
            var number = window.innerWidth
            return number
        }
    },
    beforeCreate() {
        console.log(this.width_of_map)
        var request_of_objects_list = new XMLHttpRequest();
        request_of_objects_list.open('GET', './objects_list.json');
        request_of_objects_list.responseType = 'json';
        request_of_objects_list.send();
        this.objects_list = request_of_objects_list.response;
    },
    mounted() {
        var canvas = new Konva.Stage({
        width: this.width_of_map,
        height:this. height_of_map,
        container: 'container'
        })

        var canvas_layer = new Konva.Layer();
        canvas.add(canvas_layer)

        var map_objects = new Konva.Group({
        width: this.width_of_map,
        height: this.height_of_map
        })

        var map_image = new Image();
        map_image.src = '../pictures/map.jpg';
        function addMapBackground(){
        var map_background = new Konva.Image({
        image: map_image,
        width: this.width_of_map,
        height: this.height_of_map,
        x: 0,
        y: 0
        })
        map_objects.add(map_background);
        canvas_layer.batchDraw();

        }


        window.onload = function() {
        addMapBackground()
        var points_list = [];
        for(var i = 0; i < this.objects_list.length; i++){
        points_list[i] = new Konva.Circle({
            radius: 8 *  this.width_of_map / 536,
            fill: 'white',
            stroke: 'darkgray',
            strokeWidth: 2 *  this.width_of_map / 536,
            x: this.objects_list[i].x * this.width_of_map / 536,
            y: this.objects_list[i].y * this.height_of_map / 650,
            opacity: 0.5
        });

        map_objects.add(points_list[i]);

        points_list[i].header = this.objects_list[i].header;
        points_list[i].district = this.objects_list[i].district;
        points_list[i].status = this.objects_list[i].status;
        points_list[i].adress = this.objects_list[i].adress;
        points_list[i].photo = this.objects_list[i].photo;

        points_list[i].X = this.objects_list[i].x * this.width_of_map / 536;
        points_list[i].Y = this.objects_list[i].y * this.height_of_map / 650;

        //points_list[i].on('click', renderCard);
        points_list[i].on('mouseenter', function(){
            canvas.container().style.cursor = 'pointer';
        })
        points_list[i].on('mouseleave', function(){
            canvas.container().style.cursor = 'default';
        })

        points_list[i].zIndex(i+1);
        }
        }
        canvas_layer.add(map_objects)
    }
}
</script>