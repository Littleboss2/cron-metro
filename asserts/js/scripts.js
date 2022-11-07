window.onload = function () {
  
    var segundos = 00; 
    var tempo = 00; 
    var appendTens = document.getElementById("tempo")
    var appendSeconds = document.getElementById("segundos")
    var buttonStart = document.getElementById('inicio');
    var buttonStop = document.getElementById('parar');
    var buttonReset = document.getElementById('resetar');
    var Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
       tempo = "00";
       segundos = "00";
      appendTens.innerHTML = tempo;
        appendSeconds.innerHTML = segundos;
    }
    
     
    
    function startTimer () {
        tempo++; 
      
      if(tempo <= 9){
        appendTens.innerHTML = "0" + tempo;
      }
      
      if (tempo > 9){
        appendTens.innerHTML = tempo;
        
      } 
      
      if (tempo > 99) {
        console.log("segundos");
        segundos++;
        appendSeconds.innerHTML = "0" + segundos;
        tempo = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (segundos > 9){
        appendSeconds.innerHTML = segundos;
      }
    
    }
    
  
  }