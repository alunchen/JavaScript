function defaultEquals(a, b) {
    return a === b
}

class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined
    }
}
class Linked {
    constructor(equalsFn = defaultEquals) {
        this.count = 0
        this.head = undefined
        this.equalsFn = equalsFn
    }
    push(element) {
        const node = new Node(element)
        let current;
        if(this.head == null) {
            this.head = node
        } else {
            current = this.head
            while(current.next != null) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }
    removeAt(index) {
        if(index >=0 && index < this.count) {
            let current = this.head
            if(index === 0) {
                this.head = current.next
            } else {
                let pervious;
                for(let i = 0; i < index; i++) {
                    pervious = current;
                    current = current.next
                }
                pervious.next = current.next
            }
            this.count--
            return current.element
        }
        return undefined
    }
}

const list = new Linked();
list.push({name: 'v_alunchen', age: '25'})
list.push(1)
list.push(2)
list.removeAt(1)
console.log(list)