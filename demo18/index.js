var radios = document.getElementsByName('radioName');
console.log(radios)
for(var i = 0;i<radios.length;i++){
    radios[i].onclick = (function(j){
        return function(){
            console.log(radios[j].value)
        };
        
    })(i)
}
