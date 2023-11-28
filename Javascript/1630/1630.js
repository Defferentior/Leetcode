/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */

var checkArithmeticSubarrays = function(nums, l, r) {
    let answer = [];
    for (let i = 0; i < l.length; i++){
        let subArr = nums.slice(l[i],r[i])
        subArr = subArr.sort((a,b) => a - b);
        console.log((subArr[subArr.length-1]-subArr[0])%(r[i] - l[i]))
        if ( ((subArr[subArr.length-1]-subArr[0])%(r[i] - l[i])) !== 0 ){
            answer.push(false)
            console.log('leaving remainder')
            break
        }
        let tes = subArr[l+1]-subArr[l]
        let arithmetic = true
        for (let j = l[i]; j < r[i]; j++)
        {
            console.log(r[j]-l[j])
            if(r[j]-l[j] !== tes){
                arithmetic = false
                break
            }
        }
        answer.push(arithmetic)
    }
    return answer
};

console.log([4,6,5,9,3,7].sort((a,b)=>a-b))
console.log(checkArithmeticSubarrays([4,6,5,9,3,7],[0,0,2],[2,3,5]))

//[-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10],[0,1,6,4,8,7],[4,4,9,7,9,10],[false,true,false,false,true,true]
