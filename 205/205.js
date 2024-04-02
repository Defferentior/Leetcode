/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map = new Map();
    let set = new Set();

    for ( i in s ) {
        if (!map[s[i]]){
            map[s[i]] = t[i] 
        }
        else {
            if (map[s[i]] != t[i]){
                return false
            }
        }
    }
    console.log(map)
    return true
};

console.log(isIsomorphic('egg','ads'))