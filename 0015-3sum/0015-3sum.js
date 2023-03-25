/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let answer = [];
    let sortedNum = nums.sort((a,b)=>a-b);
    console.log(sortedNum);
    if(nums.length < 3) return answer;
    
    for(let i=0; i<sortedNum.length-2; i+=1){
        let first = sortedNum[i];
        if(first > 0) return answer;
        if(first === sortedNum[i-1]) continue;
        
        let left = i+1
        let right = sortedNum.length - 1;
        
        while(left<right){
            let sum = first + sortedNum[left] + sortedNum[right];
            
            if(sum === 0){ 
                answer.push([first, sortedNum[left], sortedNum[right]]);
                while(left<right && sortedNum[left]===sortedNum[left+1]) left+=1;
                while(left<right && sortedNum[right]===sortedNum[right-1]) right-=1;
                left+=1;
                right-=1;
                continue;
            }
            
            else if(sum < 0) left+=1;
            else if(sum > 0) right-=1;
            
        }
    }
    return answer;
};