// Create an object
var obj = {
  formula: ""
};

// Assign a new value to the formula property
var newFormula = "=SUM(A1:A10)";
obj.formula = newFormula;

// Access the formula property
console.log(obj.formula); // Output: "=SUM(A1:A10)"
