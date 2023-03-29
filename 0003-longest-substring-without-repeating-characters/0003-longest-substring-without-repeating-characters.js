/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let length = s.length;
    let answer = 0;
    let map = new Map();
    let hasSpace = false;
    for(let i=0; i<length; i++){
        let char = s[i];
        // space일 때
        if(char === ' '){
            char = 'space';
        }
        // map에 있을 때
        if(map.has(char)){
            let num = map.get(char);
            answer = answer < map.size ? map.size : answer;
            
            i = num + 1;
            char = s[i];
            if(char === ' '){
                char = 'space';
            }
            map = new Map();
            
            map.set(char, i);
        }
        
        // map에 없을 때
        else{
            map.set(char, i);
        }
    }
    answer = answer < map.size ? map.size : answer;
    return answer;
};