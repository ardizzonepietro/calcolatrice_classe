


//localStorage.setItem("", "<tr><td>1</td><td style = 'text-align:center'>-</td><td>0</td><td>1</td></tr>");
//console.log("nome: "+ localStorage.getItem("nome"));
$('#tab').append(localStorage.getItem('tabella'));


     var x=0;

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
           var String = "<tr><td>"+n1+"</td><td style = 'text-align:center'>+</td><td>"+n2+"</td><td>"+risultato+"</td></tr>";
           var tab = localStorage.getItem("tabella");
           localStorage.clear();
           localStorage.setItem("tabella", tab+String);
         
            cell2.innerHTML = "+";
        break;
        case "-":
            cell4.innerHTML = n1-n2;
            risultato = n1-n2;
            cell2.innerHTML = "-";
            var String = "<tr><td>"+n1+"</td><td style = 'text-align:center'>-</td><td>"+n2+"</td><td>"+risultato+"</td></tr>";
            var tab = localStorage.getItem("tabella");
           localStorage.setItem("tabella", tab+String);
        break;
        case "*":
            cell4.innerHTML = n1*n2;
            risultato = n1*n2;
            cell2.innerHTML = "*";
            var String = "<tr><td>"+n1+"</td><td style = 'text-align:center'>*</td><td>"+n2+"</td><td>"+risultato+"</td></tr>";
            var tab = localStorage.getItem("tabella");
            localStorage.setItem("tabella", tab+String);
        break;
        case "/":
            cell4.innerHTML = n1/n2;
            risultato = n1/n2;
            cell2.innerHTML = "/";
            var String = "<tr><td>"+n1+"</td><td style = 'text-align:center'>/</td><td>"+n2+"</td><td>"+risultato+"</td></tr>";
            var tab = localStorage.getItem("tabella");
           localStorage.setItem("tabella", tab+String);
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
