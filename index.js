function justInvoke(fn) { 
  const result = fn(); 
  return result; 
}

function setThisWithCall(fn, thisValue, arg) { 
  const result = fn.call(thisValue, arg); 
  return result; 
}
  
function setThisWithApply(fn)