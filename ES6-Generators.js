function *foo() {
    var x = 1
	console.log(x);    
  	yield "foo";
	console.log(x);
}

console.log(foo().next());
console.log(foo().next());
> 1
> Object { value: "foo", done: false }
> 1
> Object { value: "foo", done: false }

var it = foo();
console.log(it.next());
console.log(it.next());
> 1
> Object { value: "foo", done: false }
> 1
> Object { value: undefined, done: true }

function *foo2() {
    yield 1;
    yield 2;
}
var it2 = foo2();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
> Object { value: undefined, done: true }
> Object { value: 1, done: false }
> Object { value: 2, done: false }
> Object { value: undefined, done: true }
