/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // greedly shrink while saving the longer part
    let answer = 0;
    let left = 0;
    let right = height.length - 1;
    while(left !== right){
        if(height[left] > height[right]){
            let temp = (right - left) * height[right]
            answer = answer > temp ? answer : temp;
            right -= 1;
        } 
        else{
            let temp = (right - left) * height[left]
            answer = answer > temp ? answer : temp;
            left += 1;
        }
    }
    return answer;
};