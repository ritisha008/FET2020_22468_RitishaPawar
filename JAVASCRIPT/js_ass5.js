function myloop(){



    var i;
     for(i=0;i<102;++i){
         document.write(i + ' ');
         if(i %10 ==0){
             document.write("<br>");
         }
     }
}
myloop();