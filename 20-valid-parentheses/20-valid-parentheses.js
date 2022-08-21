/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    if (s.length==1 || s.length==0) return false;
   
    for(let i=0;i<s.length;i++){
        
        if(s[i]== "(" || s[i]== "{" || s[i]== "[" ){  stack.push(s[i]) }
        
        if(stack.length==0){
            return false;
        }
        let char="";
        switch(s[i]){
            case ")":
                char= stack.pop()
                if (char == "{" || char =="[") return false;
                break;
            case "}":
                char= stack.pop();
                if (char == "(" || char =="[") return false;
                break;
            case "]":
                char= stack.pop();
                if (char == "{" || char =="(") return false;
                break;
        }
    }
    return stack.length==0
}
        
    
