

edges = [[0,1],[2,3],[0,2],[1,3],[4,5],[6,7],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]]
x_coords = [50,190,50,190,50,190,50,190];
y_coords = [50,50,190,190,50,50,190,190];
z_coords = [50,50,50,50,190,190,190,190];

centre_x = 120;
centre_y = 120;
centre_z = 120;

function init(evt)
{
    if ( window.svgDocument == null )
    {
        svgDocument = evt.target.ownerDocument;
    }
    drawBox();
}

function drawBox()
{
    for(var i=0; i<edges.length; i++)
    {
        edge = svgDocument.getElementById('edge-'+i);
        edge.setAttributeNS(null, 'x1', x_coords[edges[i][0]]);
        edge.setAttributeNS(null, 'x2', x_coords[edges[i][1]]);
        edge.setAttributeNS(null, 'y1', y_coords[edges[i][0]]);
        edge.setAttributeNS(null, 'y2', y_coords[edges[i][1]]);
    }
}

function rotateAboutX(radians)
{
    for(var i=0; i<x_coords.length; i++)
    {
        y = y_coords[i] - centre_y;
        z = z_coords[i] - centre_z;
        d = Math.sqrt(y*y + z*z);
        theta  = Math.atan2(y, z) + radians;
        y_coords[i] = centre_y + d * Math.sin(theta);
        z_coords[i] = centre_z + d * Math.cos(theta);
    }
    drawBox();
}

function rotateAboutY(radians)
{
    for(var i=0; i<x_coords.length; i++)
    {
        x = x_coords[i] - centre_x;
        z = z_coords[i] - centre_z;
        d = Math.sqrt(x*x + z*z);
        theta  = Math.atan2(x, z) + radians;
        x_coords[i] = centre_x + d * Math.sin(theta);
        z_coords[i] = centre_z + d * Math.cos(theta);
    }
    drawBox();
}

function beginRotateX(radians)
{
    rotateAboutX(radians);
    rotateX_timeout = setInterval("rotateAboutX(" + radians + ")", 20);
}

function endRotateX()
{
    if (typeof(rotateX_timeout) != "undefined")
    {
        clearTimeout(rotateX_timeout);
    }
}

function beginRotateY(radians)
{
    rotateAboutY(radians);
    rotateY_timeout = setInterval("rotateAboutY(" + radians + ")", 20);
}

function endRotateY()
{
    if (typeof(rotateY_timeout) != "undefined")
    {
        clearTimeout(rotateY_timeout);
    }
}
