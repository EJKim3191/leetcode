/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const stringfyNum = String(num);
    const one = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const ten = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hundred = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const thousand = ["", "M", "MM", "MMM"];
    
    return thousand[Math.floor(num / 1000)] + hundred[Math.floor(num % 1000 / 100)] + ten[Math.floor(num % 100 / 10)] + one[Math.floor(num % 10 )];
};