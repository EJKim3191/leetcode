/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let answer = 0;
    for(let i=0; i<nums.length-2; i+=1){
        for(let j=i+1; j<nums.length-1; j+=1){
            if(nums[j]-nums[i]>diff) break;
            if(nums[j]-nums[i]!==diff) continue;
            for(let k=j+1; k<nums.length; k+=1){
                if(nums[k]-nums[j]>diff) break;
                if(nums[k]-nums[j]!==diff) continue;
                answer+=1;
            }
        }
    }
    return answer;
};