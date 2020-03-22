function getHistory(){
    return document.getElementById('history-values').innerText;
}

function printHistory(num){
    document.getElementById('history-values').innerText = num;
}

function getOutput(){
    return document.getElementById('output-values').innerText;
}

function printOutput(num){

    document.getElementById('output-values').innerText = num;
}

let number = document.getElementsByClassName('number');
for(let i = 0; i<number.length; i++){
    number[i].addEventListener('click', function(){

        if(getOutput() !=NaN){
            let output = getOutput()+ this.id;
            printOutput(output);
            
        }else{
            output = this.id;
            printOutput(output)
        
        }
        
        printOutput(num)
       
    }) 
    
}
let operator = document.getElementsByClassName('operator');
for(let i = 0; i<operator.length; i++){
    operator[i].addEventListener('click', function(){
        
        
        if(this.id === "clear"){
            printHistory('');
            printOutput('');
        }
        else if(this.id === "backspace"){
            var output = getOutput().toString();
            var history = getHistory().toString();
            if(output != ""){
                output = output.substr(0, output.length - 1);
                printOutput( output);
            }else{
                history = history.substr(0, history.length -1);
                printHistory(history);
            }
            
        }else{
            var output = getOutput();
            var history = getHistory();
            if(output === "" && history != ""){
                if(isNaN(history[history.length - 1])){
                    history = history.substr(0, history[history.length - 1]);
                }
            }

            if(output != "" || history != ""){
                output = output==""?output:output;  //condition?true:false
                                                    //let result = condition ? value1 : value2;
                                                    //let accessAllowed = age > 18 ? true : false;
                                                    //https://javascript.info/ifelse        
                history = history + output;
               if(this.id === "="){
                   var result =eval(history);
                   printOutput(result);
                   printHistory(''); 
               }else{
                   history = history + this.id;
                   printHistory(history);
                   printOutput("");
               }
            }else{
                history = history;
                if(this.id === "="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }else{
                    output = output;
                    history = history + this.id;
                    printOutput("")
                }
            }
        }

           
        
     


    })

  
}





