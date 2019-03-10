function *foo() {
    var x = 1
	console.log(x);    
  	yield "foo";
	console.log(x);
}
console.log(foo().next()); // 1, // Object { value: "foo", done: false }
console.log(foo().next()); // 1, // Object { value: "foo", done: false }

var it = foo();
console.log(it.next()); // 1, // Object { value: "foo", done: false }
console.log(it.next()); // 1, // Object { value: undefined, done: true }

function *foo2() {
    yield 1;
    yield 2;
}
var it2 = foo2();
console.log(it2.next()); // Object { value: 1, done: false }
console.log(it2.next()); // Object { value: 2, done: false }
console.log(it2.next()); // Object { value: undefined, done: true }

for (var v of foo2()) {
    console.log( v ); // 1, // 2
}

function *foo3(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}
var it = foo3( 5 );
console.log( it.next() );       // { value:6, done:false }
console.log( it.next( 12 ) );   // { value:8, done:false }
console.log( it.next( 13 ) );   // { value:42, done:true }
