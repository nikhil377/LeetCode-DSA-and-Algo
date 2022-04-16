var convertBST = function(root) {
    let sum = 0, prev = 0;
    function rec(root){
        if(root){
            rec(root.right);
            sum += root.val;
            root.val += prev;
            prev = sum;
            rec(root.left);
        }
    }
    
    rec(root);
    return root;
}