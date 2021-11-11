

 var x =0;


    $("#btn1").click(function(){
        calcolo("+");
    });
   
   
   
    var calcolo = function(segno){
        var  x = document.getElementById('num1').value;
        var y = document.getElementById('num2').value;
        var table = document.getElementById('tab');
                            
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        cell1.innerHTML = x;
        
        cell3.innerHTML = y;
        var n1 = parseInt(x);
        var n2 = parseInt(y);
        switch(segno){
        case "+":
            cell4.innerHTML = n1+n2;
            risultato = n1+n2;
            var riga = n1 +"/"+segno+"/"+n2+"/"+risultato;
           localStorage.setItem(x, riga)
            localStorage.setItem('n1', n1);
            localStorage.setItem('n2', n2);
            localStorage.setItem('segno', "+");
            localStorage.setItem('risultato', risultato);
            cell2.innerHTML = "+";
        break;
        case "-":
            cell4.innerHTML = n1-n2;
            cell2.innerHTML = "-";
            localStorage.setItem('riga', n1, n2, segno, "-")
        break;
        case "*":
            cell4.innerHTML = n1*n2;
            cell2.innerHTML = "*";
            localStorage.setItem('riga', n1, n2, segno, "*")
        break;
        case "/":
            cell4.innerHTML = n1/n2;
            cell2.innerHTML = "/";
            localStorage.setItem('riga', n1, n2, segno, "/")
        break;
        
        }
       
    } 
                        
        
        $("#btn2").click(function(){
          calcolo("-");
            });
            $("#btn3").click(function(){
                calcolo("*");

                });
                $("#btn4").click(function(){    
                    calcolo("/");

                    });

                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
 
                    
                    
                    
                    
                    
                    
                    
                
            

      