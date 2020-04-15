/** 
给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

示例 1：

输入: s1 = "abc", s2 = "bca"
输出: true 
示例 2：

输入: s1 = "abc", s2 = "bad"
输出: false
说明：

0 <= len(s1) <= 100
0 <= len(s2) <= 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/check-permutation-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
    return s1.split('').sort().toString() === s2.split('').sort().toString()
};


var CheckPermutation = function(s1, s2) {
    let hashMap = {};
    for (let i in s1) {
        hashMap[i] = hashMap[i] || 0;
        hashMap[i]++;
    }
    for (let i in s2) {
        if (!hashMap[i]) {
            return false;
        } else {
            hashMap[i] -= 1;
        }
    }
}

var CheckPermutation = function (s1, s2) {
    while (s1.length) {
        let flag = true
        for (let j = 0; j < s2.length; j++) {
            if (s1[0] === s2[j]) {
                s1 = s1.slice(1)
                s2 = s2.slice(0, j) + s2.slice(j + 1)
                flag = false
            }
        }
        if (flag) return false
    }
    return s2.length === 0
};