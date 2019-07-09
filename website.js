/*document.getElementById("button").onmouseover = function() {mouseOver()};
document.getElementById("button").onmouseout = function() {mouseOut()};*/

/*function showHover(img) {
   if(img) {
        img.src = 'https://scontent-lhr3-1.cdninstagram.com/vp/5cd99e9c6fd6090a6dce8c2865b79454/5D871C32/t51.2885-15/e35/60038549_395705191287367_2573679641022085947_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&se=7&ig_cache_key=MjA1MDUxOTAyOTg1MjMzMTU3Ng%3D%3D.2';
   }
}
function showNormal(img) {
   if(img) {
        img.src = 'https://media3.giphy.com/media/9J3zIEVIlrn7VIP3j1/giphy.gif';
   }
}
function init() {
    var ex1 = document.getElementById('button');
    if(ex1.addEventListener) {//trying the standard way
    	ex1.addEventListener('mouseover', function(){showHover(button);}, false);
	ex1.addEventListener('mouseout', function(){showNormal(button);}, false);
    } else {//in case it's an InternetExplorer
	ex1.attachEvent('mouseover', function(){showHover(button);});
	ex1.attachEvent('mouseout', function(){showNormal(button);});
    }

    var ex2 = document.getElementById('ex2');
    var hlink = document.getElementById('hlink');
    if(hlink.addEventListener) {
	hlink.addEventListener('mouseover', function(){showHover(ex2);}, false);
        hlink.addEventListener('mouseout', function(){showNormal(ex2);}, false);
    } else {
	hlink.attachEvent('mouseover', function(){showHover(ex2);});
        hlink.attachEvent('mouseout', function(){showNormal(ex2);});
    }
}
*/

/*var button = document.images["button"];
<a href="#" onMouseOver="return changeImage()" ><img
name="button" src="https://scontent-lhr3-1.cdninstagram.com/vp/5cd99e9c6fd6090a6dce8c2865b79454/5D871C32/t51.2885-15/e35/60038549_395705191287367_2573679641022085947_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&se=7&ig_cache_key=MjA1MDUxOTAyOTg1MjMzMTU3Ng%3D%3D.2" width="110" height="28" border="0"
alt="javascript button"></a>
function changeImage()
{
document.images["button"].src= "https://media3.giphy.com/media/9J3zIEVIlrn7VIP3j1/giphy.gif";
return true;
}



document.getElementById("myBtn").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
/*function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
*/
