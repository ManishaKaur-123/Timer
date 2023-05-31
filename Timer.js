(function() {
'use strict'
for(i=10;i<=0;i-=0.1)
{
    
    setTimeout(function(){ i.value}, 2000);
}
console.log('Timer.js loaded'); // ...and end here
}())