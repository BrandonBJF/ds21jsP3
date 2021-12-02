/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * array-based implementation of trees
 * 
 * write it and make sure it runs
 */
// Creado por Brandon Josué Floriano Rolón

function Node(data, left, right){
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

function show(){
	return this.data;
}

function BST(){
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
}

function insert(data){
    var n = new Node(data, null, null);
    if(this.root == null){
        this.root = n;
    }else{
        var current = this.root;
        var parent;
        while(true){
            parent = current;
            if(data < current.data){
                current = current.left;
                if(current == null){
                    parent.left = n;
                    break;
                }
            }else{
                current = current.right;
                if(current == null){
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function inOrder(node){
	if(!(node == null)){
		inOrder(node.left);
		console.log(node.show() + " ");
		inOrder(node.right);
	}
}

var nums = new BST();
nums.insert(5);
nums.insert(3);
nums.insert(44);
nums.insert(77);
nums.insert(16);
nums.insert(11);
nums.insert(33);
console.log("Inorder: ");
inOrder(nums.root);