var range = document.getElementsByTagName('input')[0];
var h4  = document.getElementsByTagName('h4')[0];
var span = document.getElementsByTagName('span')[0];
range.oninput=function(){
    var rangePercent = range.value;
    h4.innerHTML = rangePercent + '<span></span>'
    h4.style.transform = 'translateX(-50%)';
    h4.style.left = rangePercent +'%'
    console.log(h4.style);
}