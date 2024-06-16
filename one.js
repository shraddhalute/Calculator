let theme=true

    function fn(inp){
      
      if(document.getElementById("typed").innerHTML=='0' && document.getElementById("typing").innerHTML=='0' ){ 
        document.getElementById("typed").innerHTML=inp
        document.getElementById("typing").innerHTML=inp
      }
     
      else if(inp=='%' || inp=='/' ||inp=='*' || inp=='+'  ||inp=='-'){
          document.getElementById("typed").innerHTML+=inp
          document.getElementById("typing").innerHTML=" "
          
      }
      else{
        document.getElementById("typed").innerHTML+=inp
        document.getElementById("typing").innerHTML+=inp
      }
    }
    function result(){
      let value=eval(document.getElementById("typed").innerHTML)
      console.log(document.getElementById("typed").innerHTML)
      document.getElementById("typing").innerHTML=value
    }
    function c(){
       document.getElementById("typing").innerHTML="0"
    }
    function  ce(){
       document.getElementById("typing").innerHTML="0"
       document.getElementById("typed").innerHTML="0"

    }
    function dark(){
      document.getElementById("box").style.backgroundColor='rgb(24, 122, 114)';
      document.getElementById("typing").style.color='white'
      document.getElementById("typed").style.color='white'
      document.getElementById("dot").style.backgroundColor='white'
      theme=false;
    }
    function light(){
      document.getElementById("box").style.backgroundColor='white';
      document.getElementById("typing").style.color='black'
      document.getElementById("typed").style.color='black'
      document.getElementById("dot").style.backgroundColor='rgb(24, 122, 114)'
      theme=true;

    }
    function toggle(){
      theme?dark():light()
    }
    
