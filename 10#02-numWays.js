/**
面试题10- II. 青蛙跳台阶问题
一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：

输入：n = 2
输出：2
示例 2：

输入：n = 7
输出：21
提示：

0 <= n <= 100
注意：本题与主站 70 题相同：https://leetcode-cn.com/problems/climbing-stairs/

 
 */
/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    var func = function (x, a = 1, b = 1) {
      if (x < 2) {
        return b
      }
  
      return func(x - 1, b, (a + b) % 1000000007)
    }
  
    return func(n)
}


/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    if(n == 1 || n == 0)return 1;
   if(n == 2) return 2;

   let dp = [];
   dp[1]  = 1;
   dp[2] = 2;
  
  for(let i =3;i<=n;i++){
    dp[i] = (dp[i-1] + dp[i-2])%(1e9+7);
  }
   return dp[n];
};