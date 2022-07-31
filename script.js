function result(){
    var numberInsert = document.getElementById('numberMain').value;
    var result = document.getElementById('resultadoMain');
    result.innerText = "";
    
    for(var i = 1; i <= 10; i++){
        var div = document.createElement('div');
        div.innerText = `${numberInsert} x ${i} = `+numberInsert * i;
        if(numberInsert <= 0){
            result = null;
        }else{
            result.appendChild(div);
        }
    }
}