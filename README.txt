
1. Folder contains these html files. 
	     1. index.html 
	     2. 3d.html
	     3. mapping.html
	     4. transformation.html
2. index.html contains the html, svg and java script code to shows 8 different projection types of an object cube.
	i.e. 1. Multiview Orthographic 
	     2.Isometric 
	     3.Dimetric 
	     4.Trimetric 
	     5.Oblique 
	     6.One Point 
	     7.Two Point 
	     8.Three Point.
3. svg provides different functions to draw lines, rectangles, circles, paths, polygons etc. I have passed the required
   co-ordinates to draw these functions.
4. 3d.html page shows 3D transformation manipulation abilities (extending those from HW3 to 3D and applying them here).	
3. I have basic transformation functions to perform translation, rotation, scaling and shearing.
	     translation : X axis : translateX(x) ; Y axis : translateY(y); Z axis : translateZ(z)
	     rotation : rotateX(angle) ; rotateY(angle) ; rotateZ(angle)
	     scaling : X axis : scaleX(x) ; Y axis : scaleY(y) ; Z axis : scaleZ(z)
	     shearing : X axis : shearX(x) ; Y axis : shearY(y) ; Z axis : shearZ(z)
4. Slider input is used to take interactive input from user. It provides direct manipulation abilitiy.
   onchange="function(this.value)" is used to pass the input values to javascript.
5. Javascript function modifies (tranforms) the svg objects using DOM functions.
	     -- DOM gets the id of object using document.getElementById() function.
	     -- DOM manipulates object by using .style.transform attributes.
6. Angles of different oblique projections are created in index.html page to see their influence on the result.



Creating texture/bump/environmental mappings for the object.

1. I have tried to get the desired result using WebGL.
2. I have choosen Inkscape tool to design 3d object (house).
3. I have added bumpiness to walls using bricks and other textures (Bump Mapping).
4. I have made roof look shiny using tiles (Environment Mapping).
5. I have applied textures mapping for other parts of house like Windows, chimney etc.

I have choosen InkScape tool since it is easy to use and it creates objects in SVG. It has a drawback of not having rotation feature
but I felt rotation is not necessary since main aim to the assignment is to create texture mapping. It provides a good features to create
different textures.
