var minRemoveToMakeValid = function(s) {
  let result = [...s];
  let open = [];
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") open.push(i);
    else if (s[i] === ")") {
      if (open.length > 0) open.pop();
      else result[i] = "";
    }
  }

  while (open.length > 0) result[open.pop()] = "";
  
  return result.join("");
};