var msg; 

msg="<p><code>The script is located in external script file called math.js</code></p>"; 

function addTwoNumbers(textBox1, textBox2){
    var x=document.getElementById(textBox1).value;
    var y=document.getElementById(textBox2).value;
    var sum=0;
    sum=Number(x)+Number(y);
    alert("SUM of"+x+" and "+y+" is " + sum);
}