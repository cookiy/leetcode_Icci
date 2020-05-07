/**
面试题 03.06. 动物收容所
动物收容所。有家动物收容所只收容狗与猫，且严格遵守“先进先出”的原则。在收养该收容所的动物时，收养人只能收养所有动物中“最老”（由其进入收容所的时间长短而定）的动物，或者可以挑选猫或狗（同时必须收养此类动物中“最老”的）。换言之，收养人不能自由挑选想收养的对象。请创建适用于这个系统的数据结构，实现各种操作方法，比如enqueue、dequeueAny、dequeueDog和dequeueCat。允许使用Java内置的LinkedList数据结构。

enqueue方法有一个animal参数，animal[0]代表动物编号，animal[1]代表动物种类，其中 0 代表猫，1 代表狗。

dequeue*方法返回一个列表[动物编号, 动物种类]，若没有可以收养的动物，则返回[-1,-1]。

示例1:

 输入：
["AnimalShelf", "enqueue", "enqueue", "dequeueCat", "dequeueDog", "dequeueAny"]
[[], [[0, 0]], [[1, 0]], [], [], []]
 输出：
[null,null,null,[0,0],[-1,-1],[1,0]]
示例2:

 输入：
["AnimalShelf", "enqueue", "enqueue", "enqueue", "dequeueDog", "dequeueCat", "dequeueAny"]
[[], [[0, 0]], [[1, 0]], [[2, 1]], [], [], []]
 输出：
[null,null,null,null,[2,1],[0,0],[1,0]]
说明:

收纳所的最大容量为20000
 */
var AnimalShelf = function() {
    this.data = [];
  };
  
  /** 
   * @param {number[]} animal
   * @return {void}
   */
  AnimalShelf.prototype.enqueue = function(animal) {
    this.data.push(animal);
  };
  
  /**
   * @return {number[]}
   */
  AnimalShelf.prototype.dequeueAny = function() {
    if (this.data.length === 0) return [-1,-1];
    return this.data.shift(); 
  };
  
  /**
   * @return {number[]}
   */
  AnimalShelf.prototype.dequeueDog = function() {
    if (this.data.length === 0) return [-1,-1];
    for (let i=0;i<this.data.length;i++) {
      if (this.data[i][1] === 1) {
        return this.data.splice(i,1)[0];
      }
    }
    return [-1,-1];
  };
  
  /**
   * @return {number[]}
   */
  AnimalShelf.prototype.dequeueCat = function() {
    if (this.data.length === 0) return [-1,-1];
    for (let i=0;i<this.data.length;i++) {
      if (this.data[i][1] === 0) {
        return this.data.splice(i,1)[0];
      }
    }
    return [-1,-1];
  };
  
  /**
   * Your AnimalShelf object will be instantiated and called as such:
   * var obj = new AnimalShelf()
   * obj.enqueue(animal)
   * var param_2 = obj.dequeueAny()
   * var param_3 = obj.dequeueDog()
   * var param_4 = obj.dequeueCat()
   */