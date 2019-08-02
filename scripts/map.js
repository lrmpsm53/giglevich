var width_of_map = window.innerWidth;
var height_of_map = Math.round(650*width_of_map/536);


var canvas = new Konva.Stage({
  width: width_of_map,
  height: height_of_map,
  container: 'container'
})

var canvas_layer = new Konva.Layer();
canvas.add(canvas_layer)

var map_objects = new Konva.Group({
  width: width_of_map,
  height: height_of_map
})

var map_image = new Image();
map_image.src = 'map.jpg';
function addMapBackground(){
var map_background = new Konva.Image({
  image: map_image,
  width: width_of_map,
  height: height_of_map,
  x: 0,
  y: 0
})
map_objects.add(map_background);
canvas_layer.batchDraw();

}


window.onload = function() {
  addMapBackground()
  var points_list = [];
  var objects_list = request_of_objects_list.response;
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
}
canvas_layer.add(map_objects)

//
function renderCard(){
  console.log(this)
  ReactDOM.render(
    Card(this),
    document.getElementById('root')
  )
  var card = document.getElementById('card')
  position_and_size_of_card(card, this)
}
  //
  function position_and_size_of_card(card, position){
    card.style.top = (position.Y + 5 * height_of_map / 650) + 'px';
   if(width_of_map > 1700){
      card.style.width = '800px';
    }
    else{
      card.style.width = '500px'
    };
    var width_of_card = +card.style.width.substring(0, 3)
    if(width_of_card >= (width_of_map - (position.X + 5 * width_of_map / 536))){
        card.style.left = ((position.X - 5 * width_of_map / 536) - width_of_card) + 'px';
    }
    else{
      card.style.left = (position.X + 5 * width_of_map / 536) + 'px';
    }
  }
  //
//


if(width_of_map < 760){
  document.getElementById('container').style.display = 'none';
}

