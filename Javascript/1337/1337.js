/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

var kWeakestRows = function(mat, k) {
    var countSolCount = new Array(mat.length).fill('');
    for (let count = 0; count < mat.length; count++){
        var solCount = mat[count].reduce((partialSum, a) => partialSum + a, 0);
        while(solCount + 1 > countSolCount.length){
            countSolCount.push('')
        }
        countSolCount[solCount] = countSolCount[solCount] + count + " ";
    }
    
    var toReturn = new Array();

    while (k > 0){
        for ( var i = 0; i < countSolCount.length; i++){
            if( countSolCount[i] != '' ){
                var int_Array = countSolCount[i].split(" ")
                for ( var j = 0; j < int_Array.length; j++){
                    if(int_Array[j] != ''){
                        toReturn.push(int_Array[j]);
                        if(toReturn.length == k ){
                            return toReturn;
                        }
                    }
                }
            }      
        }
    }
    return toReturn;
};

var addSolCount = function(cSolCount,solCount,count){
    if(solCount == 'undefined')
    {
        solCount = 0;
    }
    if(cSolCount[solCount].length > cSolCount.length){
        cSolCount.concat(new Array(cSolCount[solCount].length - cSolCount.length).fill(''))
    }
    if(cSolCount[solCount] === ''){
        if(count === 0){

        }

    }

}

let mathe = [[1,1,1],[1,1,0],[1,1,1,1]];
console.log(kWeakestRows(mathe,3));

/*
var kWeakestRows = function(mat, k) {
    var klow = new Array(mat.length).fill(mat[0].length - 1);
//    var klown = new Array(mat.length).fill(0);
    for (let count = 0; count < mat.length; count++){
//        for (let count2 = mat[count].length - 1; count2 > -1; count2--){
//            if(mat[count][count2] === 0){
//                klow[count] = count2 - 1;
//            }
//        }
        klow[count] = mat[count].reduce((partialSum, a) => partialSum + a, 0) - 1;m
    }
    let klown = klow.slice().sort();
    klown.sort(function(a, b){  
        return klow.indexOf(a) - klow.indexOf(b);
      });
    //console.log(klow);
    return(klown);
};
let mathe = [[1,1,1,0],[1,0,0,0],[1,1,1,0],[1,1,1,1]];
//test = kWeakestRows(mathe,3).prototype.sort();
console.log(kWeakestRows(mathe,3));

//console.log(test);

    //let matpe = new Map();
        //matpe.set(count, solCount);

*/