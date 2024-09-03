const CharacterFrequency = (string) => {
  let map = new Map();
  let result = [];

  for (let char of string) {
    if (map.has(char)) map.set(char, map.get(char) + 1);
    else map.set(char, 1);
  }

  // console.log(key, key[0], key[1]);
  for (const key of map) result.push(key);

  console.log(result.sort((a, b) => b[1] - a[1]));
};

let str = "hello";

CharacterFrequency("hello");
CharacterFrequency("testcase");
