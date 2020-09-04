function show (){
  (function (window) {
 


  var names = document.getElementById("fieldname").value;
  
  var firstLetter = names.charAt(0).toLowerCase();
 
  if (firstLetter == 'j') {
    window.bye.speak(names);
  } else {
    window.hello.speak(names);
  }


})(window);
};
