var count = 0;
   function doit_onkeypress(event){
                if (event.keyCode == 13 || event.which == 13){
                    printMessage();
                }
            }
    function printMessage(){
        count++;
        var msg = document.getElementById("textmessage").value;
        var textview = document.getElementById("contents");
        textview.innerHTML = textview.innerHTML + count +"> " + msg + "<br>";
        document.getElementById("textmessage").value = ""
    }