            var output = getOutput();
            var history = getHistory();
            if(output != ""){
                output = output;
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
            }