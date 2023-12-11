/**
 * @param {number[][]} nums
 * @return {number[]}
 */


/* Old Versioon
var compare = function(a, b){
    return a.size - b.size;
}

var findDiagonalOrder = function(nums) {
var toReturn = [];

for (var i = nums.length - 1; i > -1; i--){
    for (var j = nums[i].length - 1; j > -1; j--){
        if(nums[i][j] != 'undefined'){
            toReturn.push({size:(i+j),location:nums[i][j]});
        }
    }
}

return toReturn.sort(compare).map(function(a){return a.location});

}; */

var findDiagonalOrder = function(nums) {
    let answer = [];
    let len = nums.length;
    let queue = [[0,0]];
    while(queue.length>0){
        let [row, col] = queue.shift();
        answer.push(nums[row][col]);
        // push puts it at the back, so moving down row first is appropriate
        if (col == 0 && row + 1 < len){
            queue.push([row + 1, col])
        }

         if (col + 1 < nums[row].length){
            queue.push([row, col + 1])
         }
         
    }
    return answer
};


let mathe = [[1,2,3],[4,5,6],[7,8,9]];
//let mathe = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]
console.log(findDiagonalOrder(mathe));
            //console.log(toReturn[toReturn.length-1]);


//console.log(toReturn.sort(compare));

//toReturn = toReturn.sort(compare);

//console.log("After Sorting, ",toReturn);

/*
function sort() {
    var ary = [2, 1, 0.4, 2, 0.4, 0.2, 1.5, 1, 1.1, 1.3, 1.2, 0.2, 0.4, 0.9];
    return ary.sort(function(a, b) {return a - b;});
}

console.log(sort());
*/