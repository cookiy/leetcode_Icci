

/**
如果数组中多一半的数都是同一个，则称之为主要元素。给定一个整数数组，找到它的主要元素。若没有，返回-1。

示例 1：

输入：[1,2,5,9,5,9,5,5,5]
输出：5
 

示例 2：

输入：[3,2]
输出：-1
 

示例 3：

输入：[2,2,1,1,1,2,2]
输出：2
 

说明：
你有办法在时间复杂度为 O(N)，空间复杂度为 O(1) 内完成吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-majority-element-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    return nums[parseInt(nums.sort().length / 2)];
};




/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let len = nums.length / 2, m = new Map(), res = -1, max = Number.MIN_SAFE_INTEGER
    for (let num of nums) {
        m.set(num, m.has(num) ? m.get(num) + 1 : 1)
        max = Math.max(max, m.get(num))
        if (max > len) {
            return num
        }
    }
    return res
};