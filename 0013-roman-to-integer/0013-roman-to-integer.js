/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let answer = 0;
    for(let i=0; i<s.length; i++){
        let roman = s[i];

        switch(roman){
            case 'I':
                answer += 1;
                break;
            case 'V':
                if(i>0 && s[i-1] === 'I') answer+=3;
                else answer += 5;
                break;
            case 'X':
                if(i>0 && s[i-1] === 'I') answer+=8;
                else answer += 10;
                break;
            case 'L':
                if(i>0 && s[i-1] === 'X') answer+=30;
                else answer += 50;
                break;
            case 'C':
                if(i>0 && s[i-1] === 'X') answer+=80;
                else answer += 100;
                break;
            case 'D':
                if(i>0 && s[i-1] === 'C') answer+=300;
                else answer += 500;
                break;
            case 'M':
                if(i>0 && s[i-1] === 'C') answer+=800;
                else answer += 1000;
                break;
        }
    }
    return answer;
};