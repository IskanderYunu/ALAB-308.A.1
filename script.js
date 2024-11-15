//308A.1.1
//Part 1: Stack Overflow

let i = 0;

function recursiveFunction() {
  i++;
  recursiveFunction();
}

try {
  recursiveFunction();
} catch {
  console.log("failed");
  console.log(i);
}
