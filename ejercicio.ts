type NumbersArray = number[];
type TargetSum = number;
interface SumArrayFunction {
  (nums: NumbersArray, targetSum: TargetSum): boolean;
}
const nums: NumbersArray = [1, 2, 4, 5, 20, 3, 2];
const targetSum: TargetSum = 1;

const sumArray: SumArrayFunction = (nums, targetSum) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i != j) {
        sum = nums[i] + nums[j];
        if (sum === targetSum) {
          return true;
        } else {
          sum = 0;
        }
      }
    }
  }

  return false;
};

const result = sumArray(nums, targetSum);
console.log("LAZY:", result);

const sumArrayEfficient: SumArrayFunction = (nums, targetSum) => {
  const seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    const complement = targetSum - nums[i];
    if (seen.has(complement)) {
      return true;
    }
    seen.add(nums[i]);
  }

  return false;
};

const resultEfficient = sumArrayEfficient(nums, targetSum);
console.log("EFFICIENT:", resultEfficient);
