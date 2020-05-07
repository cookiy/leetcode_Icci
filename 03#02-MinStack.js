/**
请设计一个栈，除了常规栈支持的pop与push函数以外，还支持min函数，该函数返回栈元素中的最小值。执行push、pop和min操作的时间复杂度必须为O(1)。


示例：

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/min-stack-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.helpStack = []
    this.length = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    const len = this.length;
    this.stack[len] = x;
    if(!len || this.helpStack[len - 1] > x){
        this.helpStack[len] = x;
    }else{
        this.helpStack[len] = (this.helpStack[len-1]);
    }
    this.length = len + 1;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const len = this.length;
    this.length = len -1;
    return this.stack[len-1];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.helpStack[this.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */