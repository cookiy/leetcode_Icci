/**
稀疏数组搜索。有个排好序的字符串数组，其中散布着一些空字符串，编写一种方法，找出给定字符串的位置。

示例1:

 输入: words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ta"
 输出：-1
 说明: 不存在返回-1。
示例2:

 输入：words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ball"
 输出：4
提示:

words的长度在[1, 1000000]之间

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sparse-array-search-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function(words, s) {
    let low = 0,
         high = words.length -1,
         ans = -1;
    while(low <= high) {
        while(words[low] === '' && low < high) low++;
        while(words[high] === '' && low < high) high--;
        let mid = low + ( (high - low) >> 1 );
        while (words[mid] === '' && mid < high) mid++;
        if (words[mid] === s) {
            ans = mid;
            break;
        }
        if (s < words[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
};