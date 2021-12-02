/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * 
 * PROBLEM 1
 * inorder(n)
 *
 * traverses a tree in INORDER
 * @arg {tree} n - tree
 *
 * @example
 * inorder(root)
 * 
 * 
 */
 //Creado por Brandon Josué Floriano Rolón

function inOrder(n){
  if (n!==null){
    inOrder(n.l)
    console.log(n.d)
    inOrder(n.r)
  }
}

function Node(o){
    this.d=o
    this.l=null
    this.r=null
}

let p = new Node('+')
let o1 = new Node(3)
let o2 = new Node(-1)

p.l = o1
p.r = o2
inOrder(p)