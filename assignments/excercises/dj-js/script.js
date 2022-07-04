// var newColor = document.getElementById('square').addEventListener('mouseover', function(){
//     newColor.style.color = "blue";
// })

var newColor = document.getElementById('square'); 

newColor.addEventListener('mouseover', function(){
    newColor.style.backgroundColor = "blue";
});

newColor.addEventListener('mousedown', function(){
    newColor.style.backgroundColor = "red";
});

newColor.addEventListener('mouseup', function(){
    newColor.style.backgroundColor = "yellow";
});

newColor.addEventListener('dblclick', function(){
    newColor.style.backgroundColor = "green";
});

newColor.addEventListener('mouseleave', function(){
    newColor.style.backgroundColor = "orange";
});

onkeydown = function myFunction(event) {
    var x = event.key;
    if (x == "r" || x == "R") { 
      newColor.style.backgroundColor = "red";
        } else if  (x == "b" || x == "B"){
            
            newColor.style.backgroundColor = "blue";
         
        } else if (x == "y" || x == "Y") {
          newColor.style.backgroundColor = "yellow";
        
        } else if  (x == "g" || x == "G") {
            
            newColor.style.backgroundColor = "green";
        
        } else if (x == "o" || x == "O") {
            
            newColor.style.backgroundColor = "orange";
            
        }
    }



    


