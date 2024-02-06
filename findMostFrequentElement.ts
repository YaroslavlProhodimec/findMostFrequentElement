

const findMostFrequentElement = (input) => {
  let hashMap = {};

  for (const char of input) {
    hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
  }

  let index = 0;
  let maxCount = 0;

  for (const [key, count] of Object.entries(hashMap)) {
    if (maxCount < count) {
      maxCount = count;
      index = key;
    }
  }
  return index;
};

console.log(findMostFrequentElement([1, 2, 3, 2, 2, 3, 4, 5, 2])); // Вернет 2, так как он встречается 4 раза
console.log(findMostFrequentElement([3, 3, 1, 2, 2, 3, 4, 5, 2])); // Вернет 3, так как он встречается 3 раза, как и число 2
console.log(findMostFrequentElement([1, 2, 3, 4, 5])); // Вернет любое число из массива, так как все числа встречаются по одному разу
