const MinStack = function() {
    this.stack = []
    this.min_stack = []
 };
 
 /** 
  * @param {number} val
  * @return {void}
  */
 MinStack.prototype.push = function(val) {
   this.stack.push(val)
   if(this.min_stack.length === 0){
       this.min_stack.push(val)
   }else{
       this.min_stack.push(Math.min(this.min_stack[this.min_stack.length-1],val))
   }
 };
 
 /**
  * @return {void}
  */
 MinStack.prototype.pop = function() {
   if(this.stack.length > 0){
     this.stack.pop()
     this.min_stack.pop()   
   }
 };
 
 /**
  * @return {number}
  */
 MinStack.prototype.top = function() {
   return this.stack[this.stack.length-1]
 };
 
 /**
  * @return {number}
  */
 MinStack.prototype.getMin = function() {
    return this.min_stack[this.min_stack.length-1]
 };