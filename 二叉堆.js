const defaultCmp = (a, b) => a > b;
const exchange = (x, y) => {
    [x, y] = [y, x]
}
class Heap {
    constructor(container, cmp=defaultCmp) {
        this.container = container
        this.cmp = cmp
    }
    insert (x) {
        let { container, cmp } = this
        container.push(x);
        let self = container.length-1
        let parent = Math.floor(self / 2)
        while(self > 0) {
            if(!cmp(container[parent], container[self])) {
                exchange(container[parent], container[self])
            }
            parent = Math.floor(self / 2)
            self = parent
        }
    }
    extract () {
        let { container, cmp } = this
        exchange(container[0], container[container.length - 1])
        let res = container.pop()
        let self = 0
        let left = self*2 + 1
        let right = self*2 + 2
        while(right < container.length) {
            
        }
        return res
    }

}