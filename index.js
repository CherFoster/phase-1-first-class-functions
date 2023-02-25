
function receivesAFunction(callBack){
    return callBack();
  }
  
  function returnsANamedFunction() {
      return function callBack(){
          
      };
  }
  
  function returnsAnAnonymousFunction(){
      return function () {
  
      };
  }