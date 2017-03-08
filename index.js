function add(x, y) {
	return x + y;
}

const increment = x => x + 1;

console.log(add(increment(1), increment(1)));
