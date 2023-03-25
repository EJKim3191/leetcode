/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    let answer = 0;
    for(let i=0; i<nums.length-2; i+=1){
        for(let j=i+1; j<nums.length-1; j+=1){
            if(nums[i]===nums[j]) continue;
            for(let k=j+1; k<nums.length; k+=1){
                if(nums[i]===nums[j] || nums[j]===nums[k] || nums[k]===nums[i]) continue;
                answer += 1;
            }
        }
    }
    return answer;
};