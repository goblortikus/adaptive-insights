
// by Monir Mamoun for Adaptive Insights
// run this script using node

// function 1
function smallestDiffWith1000 (a,b) {
	return (Math.abs(1000-a) < Math.abs(1000-b)) ? a : b;
}
 
// function 2 and function 4 are identical. Recursively doubles characters by default, or add optional second tweener character for tweening. Bonus: handles empty string and numbers.
function tweeny(s, tween) {
    return ( (s = '' + s) ?  s[0] + (tween ? (s.length > 1 ? tween : '' ) : s[0]) + tweeny(s.substring(1, s.length), tween) : '');
}

// function 3
function splitter(arr) {
    return arr.length > 1 && !((this.sum = arr.reduce(function(p,c){return p+c}, 0))%2) && arr.slice(0,-1).some(function(x,i,a){return (this.acc+=x) == sum/2}, {acc: 0});   
}


// function 4 - recursive
// IDENTICAL to function 2 (which is already recursive); just add optional second param to serve as "tween" character.


console.log('---------\nFunction 1 examples');
// examples function 1
console.log(smallestDiffWith1000(0,0));
console.log(smallestDiffWith1000(1000,1000));
console.log(smallestDiffWith1000(500,900));
console.log(smallestDiffWith1000(1400,900));
console.log(smallestDiffWith1000(1001,999));
console.log(smallestDiffWith1000(-1000,999));
console.log(smallestDiffWith1000(-1000,-999));
console.log(smallestDiffWith1000(-500,-900));
console.log('\n\n---------');

// examples funcs 2 
console.log('Function 2 examples');
console.log(tweeny(''));
console.log(tweeny('a'));
console.log(tweeny(0));
console.log(tweeny(1));
console.log(tweeny(123));
console.log(tweeny('hi'));
console.log(tweeny('you'));
console.log(tweeny('BOOOOOOM'));
console.log('\n\n---------');


// examples func 3
// first three functions short circuit to false before complete analysis because they cannot evaluate to true
console.log('Function 3 examples');
console.log(splitter([])); // short circuit false because too short
console.log(splitter([1])); // short circuit false because too short
console.log(splitter([1,2,3,4,5,6,6])); // short circuit false because sum is odd
console.log(splitter([2,-2]));
console.log(splitter([5,2,1,1,1,2]));
console.log(splitter([1,2,3]));
console.log(splitter([1,2,3,4,2,0,0]));
console.log(splitter([5,1,1,1,1,1]));
console.log(splitter([1,2,-3,0]));
console.log('\n\n---------');

// examples func 4 -- same as func 2 (with '*' second param)
console.log('Function 4 examples');
console.log(tweeny('','*'));
console.log(tweeny('a','*'));
console.log(tweeny(0,'*'));
console.log(tweeny(1,'*'));
console.log(tweeny(123,'*'));
console.log(tweeny('hi','*'));
console.log(tweeny('you','*'));
console.log(tweeny('BOOOOOOM','*'))
