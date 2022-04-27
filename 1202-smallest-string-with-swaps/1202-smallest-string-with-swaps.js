var smallestStringWithSwaps = function(s, pairs) {
    let n=s.length
    let adj=new Array(n)
    for(let i=0;i<n;i++) adj[i]=[]
    for(let [a,b] of pairs){
        adj[a].push(b)
        adj[b].push(a)
    }
    let visited=new Array(n).fill(false)
    let ans=new Array(n)
    let str, idx
    let dfs=(node)=>{
        visited[node]=true
        idx.push(node)
        str.push(s[node])
        for(let next of adj[node]){
            if(!visited[next]) dfs(next)
        }
    }
    for(let i=0;i<n;i++){
        if(!visited[i]){
            str=[]
            idx=[]
            dfs(i)
            idx.sort((a,b)=>a-b)
            str.sort()
            for(let j=0;j<str.length;j++){
                ans[idx[j]]=str[j]
            }
        }
    }
    return ans.join('')
};