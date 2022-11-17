var CQueue = function() {
    this.main = new Array()
    this.supp = new Array()
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.main.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (this.supp.length == 0) {
        if (this.main.length == 0) {
            return -1
        } else {
            while (this.main.length > 0) {
                this.supp.push(this.main.pop())
            }
        }
    }
    return this.supp.pop()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */