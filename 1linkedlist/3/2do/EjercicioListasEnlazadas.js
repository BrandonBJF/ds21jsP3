class LinkedList2{
	constructor(){
		this.head = null;
	}

	prepend(value){
		const newItem = new LinkedList(value,this.head);
		this.head = newItem;
	}
}

class LinkedList{
	constructor(value,next){
		this.value = value;
		this.next = next;
	}
}

function Stack(){
	this.dataStore = [];
	this.top = 0;
	this.push = push;
}

function push(element){
	this.dataStore[this.top++] = element;
}

var lista = new Stack();
console.time("TiempoDelArreglo");
for(var i=0; i<10000;i++){
	lista.push(Math.round(Math.random()*10000));
}
console.log(lista);
console.timeEnd("TiempoDelArreglo");

lista = new LinkedList2();
console.time("TiempoDeLista");
for(var i=0; i<10000;i++){
	lista.prepend(Math.round(Math.random()*10000));
}
console.log(lista);
console.timeEnd("TiempoDeLista");
//Creado por Brandon Josué Floriano Rolón