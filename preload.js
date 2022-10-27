function isOnline(user_callback){
  /**
   * Show a warning to the user.
   * You can retry in the dialog until a internet connection
   * is active.
   */
  var message = function() {
      const {dialog} = require('electron').remote;

      return dialog.showMessageBox({
          title:"There's no internet",
          message:"No internet available, do you want to try again?",
          type:'warning',
          buttons:["Try again please","Nope"],
          defaultId: 0
      }, function(index){
          // if clicked "Try again please"
          if(index == 0){
              execute();
          }
      })
  };

  var execute = function(){
      if(navigator.onLine){
          // Execute action if internet available.
          user_callback();
      } else {
          // Show warning to user
          // And "retry" to connect
          message();
      }
  };

  // Verify for first time
  execute();
}

// Use it, the alert("Hello world"); will be executed only if there's an active internet connection.
// isOnline(function(){
//   alert("Hello world !");
// });
