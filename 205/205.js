/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map = {};
    let set = {};

    if (s.length != t.length){
        return false
    }
    for ( i in s ) {
        //console.log(s[i])
        //console.log(t[i])
        if (!map[s[i]]){
            if (!set[t[i]]){
                map[s[i]] = t[i] 
                set[t[i]] = s[i]
            }
        }
        if (map[s[i]] != t[i]){
            return false
        }
        if (set[t[i]] != s[i]) {
            return false
        }
        //console.log(set)
        //console.log(map)
    }
    return true
};

console.log(isIsomorphic('badc','bada'))