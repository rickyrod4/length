class Node {
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class SLL {
     // constructor, other methods, removed for brevity
    constructor(){
        this.head = null;
    }
    //Adds Node to Front
     addFront(value) {
     var n1 = new Node(value);
     this.head = n1;
     return this.head
    }
    removeFront(){
        return this.head = null;
    }
    front(){
        return this.head.data;
    }
    contains(value){
        var current = this.head;
        while(current !== null){
            console.log(current.data)
            if(current == value){
                return true;
            }
            current = current.next
        }
        return false;
    }
    length(){
        var count = 0;
        var current = this.head;
        while(current !== null){
            count = count + 1;
            current = current.next;
        }
        return count;
    }
 }
