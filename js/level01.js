(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("level01",
{ "height":8,
 "infinite":false,
 "layers":[
        {
         "data":[3, 3, 3, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         "height":8,
         "id":1,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":8,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":2,
         "name":"object_layer",
         "objects":[],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":4,
 "nextobjectid":1,
 "orientation":"isometric",
 "renderorder":"right-down",
 "tiledversion":"1.2.3",
 "tileheight":64,
 "tilesets":[
        {
         "columns":0,
         "firstgid":1,
         "grid":
            {
             "height":1,
             "orientation":"orthogonal",
             "width":1
            },
         "margin":0,
         "name":"ground",
         "spacing":0,
         "tilecount":3,
         "tileheight":64,
         "tiles":[
                {
                 "id":0,
                 "image":"..\/img\/grass01.png",
                 "imageheight":64,
                 "imagewidth":128
                }, 
                {
                 "id":1,
                 "image":"..\/img\/test3.png",
                 "imageheight":64,
                 "imagewidth":128
                }, 
                {
                 "id":2,
                 "image":"..\/img\/grass02.png",
                 "imageheight":64,
                 "imagewidth":128
                }],
         "tilewidth":128
        }],
 "tilewidth":128,
 "type":"map",
 "version":1.2,
 "width":8
});