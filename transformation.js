//----------------------------------------------------------------------------------------------------------
// front view//
//----------------------------------------------------------------------------------------------------------

// translate-----------------------------------------------
function fronttranslatex(value) {
    document.getElementById("front_translate").value=value;
    var x = value;
    var y="translateX("+x+"px)";
    document.getElementById("front").style.transform = y;
}
    
function fronttranslatey(value) {
    document.getElementById("front_translate").value=value;
    var x = value;
    var y="translateY("+x+"px)";
    document.getElementById("front").style.transform = y;
}
    
function fronttranslatez(value) {
    document.getElementById("front_translate").value=value;
    var x = value;
    var y="translateZ("+x+"px)";
    document.getElementById("front").style.transform = y;
}

//Rotate------------------------------------------------------
function frontrotatex(value) {
    var i=value+" deg";
    document.getElementById("front_rotate").value=i;
    var x = value;
    var y="rotateX("+x+"deg)";
    document.getElementById("front").style.transform = y;
}
    
function frontrotatey(value) {
    var i=value+" deg";
    document.getElementById("front_rotate").value=i;
    var x = value;
    var y="rotateY("+x+"deg)";
    document.getElementById("front").style.transform = y;
}
    
function frontrotatez(value) {
    var i=value+" deg";
    document.getElementById("front_rotate").value=i;
    var x = value;
    var y="rotateZ("+x+"deg)";
    document.getElementById("front").style.transform = y;
}

//scale------------------------------------------------------
function frontscalex(value) {
    document.getElementById("front_scale").value=value;
    var x = value;
    var y="scaleX("+x+")";
    document.getElementById("front").style.transform = y;
}
    
function frontscaley(value) {
    document.getElementById("front_scale").value=value;
    var x = value;
    var y="scaleY("+x+")";
    document.getElementById("front").style.transform = y;
}
    
function frontscalez(value) {
    document.getElementById("front_scale").value=value;
    var x = value;
    var y="scaleZ("+x+")";
    document.getElementById("front").style.transform = y;
}

//shear------------------------------------------------------
function frontshearx(value) {
    var i=value+" deg";
    document.getElementById("front_shear").value=i;
    var x = value;
    var y="skewX("+x+"deg)";
    document.getElementById("front").style.transform = y;
}
    
function frontsheary(value) {
    var i=value+" deg";
    document.getElementById("front_shear").value=i;
    var x = value;
    var y="skewY("+x+"deg)";
    document.getElementById("front").style.transform = y;
}
    
function frontshearz(value) {
    var i=value+" deg";
    document.getElementById("front_shear").value=i;
    var x = value;
    var y="skewZ("+x+"deg)";
    document.getElementById("front").style.transform = y;
}

//--------------------------------------------------------------------------------------------------------
// side view
//--------------------------------------------------------------------------------------------------------

// translate-----------------------------------------------
function sidetranslatex(value) {
    document.getElementById("side_translate").value=value;
    var x = value;
    var y="translateX("+x+"px)";
    document.getElementById("side").style.transform = y;
}

function sidetranslatey(value) {
    document.getElementById("side_translate").value=value;
    var x = value;
    var y="translateY("+x+"px)";
    document.getElementById("side").style.transform = y;
}

function sidetranslatez(value) {
    document.getElementById("side_translate").value=value;
    var x = value;
    var y="translateZ("+x+"px)";
    document.getElementById("side").style.transform = y;
}

//Rotate------------------------------------------------------
function siderotatex(value) {
    var i=value+" deg";
    document.getElementById("side_rotate").value=i;
    var x = value;
    var y="rotateX("+x+"deg)";
    document.getElementById("side").style.transform = y;
}

function siderotatey(value) {
    var i=value+" deg";
    document.getElementById("side_rotate").value=i;
    var x = value;
    var y="rotateY("+x+"deg)";
    document.getElementById("side").style.transform = y;
}

function siderotatez(value) {
    var i=value+" deg";
    document.getElementById("side_rotate").value=i;
    var x = value;
    var y="rotateZ("+x+"deg)";
    document.getElementById("side").style.transform = y;
}

//scale------------------------------------------------------
function sidescalex(value) {
    document.getElementById("side_scale").value=value;
    var x = value;
    var y="scaleX("+x+")";
    document.getElementById("side").style.transform = y;
}

function sidescaley(value) {
    document.getElementById("side_scale").value=value;
    var x = value;
    var y="scaleY("+x+")";
    document.getElementById("side").style.transform = y;
}
function sidescalez(value) {
    document.getElementById("side_scale").value=value;
    var x = value;
    var y="scaleZ("+x+")";
    document.getElementById("side").style.transform = y;
}

//shear------------------------------------------------------
function sideshearx(value) {
    var i=value+" deg";
    document.getElementById("side_shear").value=i;
    var x = value;
    var y="skewX("+x+"deg)";
    document.getElementById("side").style.transform = y;
}

function sidesheary(value) {
    var i=value+" deg";
    document.getElementById("side_shear").value=i;
    var x = value;
    var y="skewY("+x+"deg)";
    document.getElementById("side").style.transform = y;
}

function sideshearz(value) {
    var i=value+" deg";
    document.getElementById("side_shear").value=i;
    var x = value;
    var y="skewZ("+x+"deg)";
    document.getElementById("side").style.transform = y;
}
    
//-----------------------------------------------------------------------------------------------------------
// top view
//-----------------------------------------------------------------------------------------------------------  

// translate-----------------------------------------------
function toptranslatex(value) {
    document.getElementById("top_translate").value=value;
    var x = value;
    var y="translateX("+x+"px)";
    document.getElementById("top").style.transform = y;
}

function toptranslatey(value) {
    document.getElementById("top_translate").value=value;
    var x = value;
    var y="translateY("+x+"px)";
    document.getElementById("top").style.transform = y;
}

function toptranslatez(value) {
    document.getElementById("top_translate").value=value;
    var x = value;
    var y="translateZ("+x+"px)";
    document.getElementById("top").style.transform = y;
}

//Rotate------------------------------------------------------
function toprotatex(value) {
    var i=value+" deg";
    document.getElementById("top_rotate").value=i;
    var x = value;
    var y="rotateX("+x+"deg)";
    document.getElementById("top").style.transform = y;
}

function toprotatey(value) {
    var i=value+" deg";
    document.getElementById("top_rotate").value=i;
    var x = value;
    var y="rotateY("+x+"deg)";
    document.getElementById("top").style.transform = y;
}

function toprotatez(value) {
    var i=value+" deg";
    document.getElementById("top_rotate").value=i;
    var x = value;
    var y="rotateZ("+x+"deg)";
    document.getElementById("top").style.transform = y;
}

//scale------------------------------------------------------
function topscalex(value) {
    document.getElementById("top_scale").value=value;
    var x = value;
    var y="scaleX("+x+")";
    document.getElementById("top").style.transform = y;
}

function topscaley(value) {
    document.getElementById("top_scale").value=value;
    var x = value;
    var y="scaleY("+x+")";
    document.getElementById("top").style.transform = y;
}

function topscalez(value) {
    document.getElementById("top_scale").value=value;
    var x = value;
    var y="scaleZ("+x+")";
    document.getElementById("top").style.transform = y;
}

//shear------------------------------------------------------
function topshearx(value) {
    var i=value+" deg";
    document.getElementById("top_shear").value=i;
    var x = value;
    var y="skewX("+x+"deg)";
    document.getElementById("top").style.transform = y;
}

function topsheary(value) {
    var i=value+" deg";
    document.getElementById("top_shear").value=i;
    var x = value;
    var y="skewY("+x+"deg)";
    document.getElementById("top").style.transform = y;
}

function topshearz(value) {
    var i=value+" deg";
    document.getElementById("top_shear").value=i;
    var x = value;
    var y="skewZ("+x+"deg)";
    document.getElementById("top").style.transform = y;
}