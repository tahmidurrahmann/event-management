<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div> 

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A : `{}`

<i>There are two variables, greeting and greetign. Greeting remains undefined and greetign holds an empty object {}. When i console log greetign, it holds an empty object that's why it will print empty object {}.  </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C : `"12"`

<i>When i call sum function, i give two arguments, a number (1) and another one is a string ("2"). Then sum function added 1 + "2". We know javascript cannot add string and number. so it will return the string "12".  </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>There is an array named food and an object named info. Info has a property named favoriteFood,this property set to the first element of the food array, then i change info property value. this change will affect the info object not food. that's why when i console.log food it remains unChanged.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>When i call sayHi function, i don't provide an argument but sayHi function has a parameter named name. For not providing argument, name parameter has no value. when sayHi function returns `Hi there, ${name}`. Dynamic name will show undefined for not providing argument. so it prints Hi there, undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>There are a variable named count and an array named nums. Count initial value is 0 and nums array length is 4. when i use forEach method on nums, it will give me their values one by one. and i will take that values on num. I use if condition on num. if num value is true then it will be truthy otherwise falsy. If a value is truthy, i increase the count variable by 1. num is initially 0, which is falsy. that's why count value is 0. when num is 1,a truthy value, so count becomes 1. when num is 2, a truthy value, so count becomes 2. when num is 3, a truthy value, so count becomes 3. </i>

</p>
</details>
