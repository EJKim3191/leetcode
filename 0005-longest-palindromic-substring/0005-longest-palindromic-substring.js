/**
 * @param {string} s
 * @return {string}
 */
let isPalindrome = function(s){
    let isTrue = true;
    let front = 0;
    let back = s.length - 1;
    while(true){
        if(front > back) break;
        if(s[front] !== s[back]){
            isTrue = false;
            break;
        }
        front += 1;
        back -= 1;
    }
    return isTrue;
}
var longestPalindrome = function(s) {
    //1st try - from longest, search for palindrome
    let length = s.length;
    let answer = '';
    for(let i=0; i<=length; i+=1){

        for(let j=0; j<=i; j+=1){
            let front = 0;
            let back = length - i;
            front += j;
            back += j;
            let palindrome = s.slice(front, back);
            if(isPalindrome(palindrome)){
                answer = palindrome;
                break;
            } 
        }
        if(answer !== '') break;
    }
    return answer;
};
