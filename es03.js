




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
            cell2.innerHTML = "+";
        break;
        case "-":
            cell4.innerHTML = n1-n2;
            cell2.innerHTML = "-";
        break;
        case "*":
            cell4.innerHTML = n1*n2;
            cell2.innerHTML = "*";
        break;
        case "/":
            cell4.innerHTML = n1/n2;
            cell2.innerHTML = "/";
        break;
        
        }
    } 
                        
        
        $("#btn2").click(function(){
            var  x = document.getElementById('num1').value;
        var y = document.getElementById('num2').value;
     
        var table = document.getElementById('tab');
        
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        cell1.innerHTML = x;
        cell2.innerHTML = "-";
        cell3.innerHTML = y;
        var n1 = parseInt(x);
        var n2 = parseInt(y);

        cell4.innerHTML = n1-n2;
        

          
            });
            $("#btn3").click(function(){
                var  x = document.getElementById('num1').value;
        var y = document.getElementById('num2').value;
     
        var table = document.getElementById('tab');
        
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        cell1.innerHTML = x;
        cell2.innerHTML = "*";
        cell3.innerHTML = y;
        var n1 = parseInt(x);
        var n2 = parseInt(y);

        cell4.innerHTML = n1*n2;
        

                });
                $("#btn4").click(function(){
                    var  x = document.getElementById('num1').value;
                    var y = document.getElementById('num2').value;
                 
                    var table = document.getElementById('tab');
                    
                    var row = table.insertRow();
                    var cell1 = row.insertCell();
                    var cell2 = row.insertCell();
                    var cell3 = row.insertCell();
                    var cell4 = row.insertCell();
                    cell1.innerHTML = x;
                    cell2.innerHTML = "/";
                    cell3.innerHTML = y;
                    var n1 = parseInt(x);
                    var n2 = parseInt(y);
            
                    cell4.innerHTML = n1/n2;

                    });

                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
 
                    
                    
                    
                    
                    
                    
                    
                
            

      