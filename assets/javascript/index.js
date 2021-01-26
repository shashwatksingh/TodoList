  //Worktype - color pair in object form
  let color={
    Personal : "#d9dab0",
    Work : "#f8f1f1",
    Leisure : "#dddddd",
    Family : "#16697a" ,
    Others : "#d9ecf2"
  };
  let arr= $('.worktype');
  //loading color when the document is loaded. 
$(document).ready(function(){ 
  for(let i=0; i<arr.length ; i++){
    let keyC= color[arr[i].innerText];
    arr[i].style.backgroundColor = keyC ; 
  }
});
