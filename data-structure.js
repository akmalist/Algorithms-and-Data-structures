///////////////Singly Linked List data structure////////////////
class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
// const first = new Node("hey");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you?");

class SinglyLinkedList{
  constructor(){
      this.head = null;
      this.tail = null;
      this.length= 0;
    }
    push(val){
      const newNode = new Node(val)
      if(!this.head) {
        this.head = newNode;
        this.tail = this.head;
       }else{
         this.tail.next= newNode;
         this.tail = newNode; 
       }
        this.length++
        return this;
     }

}

const list = new SinglyLinkedList();
list.push("hello");
list.push("how are you?")
 



