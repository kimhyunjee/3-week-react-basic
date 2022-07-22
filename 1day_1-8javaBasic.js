//1. map map은 배열에 속한 항목을 변환할 때 많이 사용합니다.
// 어떤 배열에 속한 항목을 원하는 대로 변환하고, 변환한 값을 새로운 배열로 만들어줍니다.
// 즉, 원본 배열은 값이 변하지 않아요!
const array_num = [0, 1, 2, 3, 4, 5];

const new_array = array_num.map((array_item) => {
  return array_item + 1;
});
// 새 배열의 값은 원본 배열 원소에 +1 한 값입니다.
console.log(new_array);
// 원본 배열은 그대로 있죠!
console.log(array_num);

//2.ilter는 어떤 조건을 만족하는 항목들만 골라서 새 배열로 만들어주는 함수입니다.
//원본 배열은 변하지 않고, 원하는 배열을 하나 더 만들 수 있다니 (최고)죠!

const array_num = [0, 1, 2, 3, 4, 5];

// forEach(콜백함수)
const new_array = array_num.filter((array_item) => {
  // 특정 조건을 만족할 때만 return 하면 됩니다!
  // return에는 true 혹은 false가 들어가야 해요.
  return array_item > 3;
});

console.log(new_array);

// 3.concat은 배열과 배열을 합치거나 배열에 특정 값을 추가해주는 함수입니다!
//원본 배열은 변하지 않아요!

const array_num01 = [0, 1, 2, 3];
const array_num02 = [3, 4, 5];

const merge = array_num01.concat(array_num02);

// 중복 항목(숫자 3)이 제거되었나요? 아니면 그대로 있나요? :)
console.log(merge);

// concat은 중복 항목을 제거해주지 않아요!
// 다른 내장함수와 함께 사용해서 제거해야 합니다!

// 자바스크립트를 조금 다룰 줄 아는 분들을 위한 팁으로 제가 자주 사용하는 방법을 살짝 남겨둘게요. 😇
// 아직 자바스크립트에 익숙하지 않으신 분들은 그냥 이런게 있구나 하고 넘어가도 됩니다!

const array_num01 = [0, 1, 2, 3];
const array_num02 = [3, 4, 5];
// Set은 자바스크립트의 자료형 중 하나로,
// 중복되지 않는 값을 가지는 리스트입니다. :)!
// ... <- 이 점 3개는 스프레드 문법이라고 불러요.
// 배열 안에 있는 항목들(요소들)을 전부 꺼내준다는 뜻입니다.
// 즉 [...array_num01]은 array_num01에 있는 항목을 전부 꺼내
// 새로운 배열([] 이 껍데기가 새로운 배열을 뜻하죠!)에 넣어주겠단 말입니다!
const merge = [...new Set([...array_num01, ...array_num02])];

// 중복 항목(숫자 3)이 제거되었나요? 아니면 그대로 있나요? :)
console.log(merge);

//4. from은 쓰임새가 다양한 친구입니다. 🙂
//  -1) 배열로 만들고자 하는 것이나 유사배열을 복사해서 새로운 배열로 만들 때
//  -2) 새로운 배열을 만들 때 (초기화한다고도 표현해요.)
// 주로 사용합니다!

// 유사배열이 뭘까?
// [ 어떤 값들... ] 이 모양으로 생겼지만 배열의 내장 함수를 사용하지 못하는 친구들입니다. DOM nodelist같은 게 유사배열이에요.

// 배열화 하자!
const my_name = "mean0";
const my_name_array = Array.from(my_name);
console.log(my_name_array);

// 길이가 문자열과 같고, 0부터 4까지 숫자를 요소로 갖는 배열을 만들어볼거예요.
const text_array = Array.from("hello", (item, idx) => {
  return idx;
});

console.log(text_array);

// 새 배열을 만들어 보자!(=> 빈 배열을 초기화한다고도 해요.)
// 길이가 4고, 0부터 3까지 숫자를 요소로 갖는 배열을 만들어볼거예요.
const new_array = Array.from({ length: 4 }, (item, idx) => {
  return idx;
});

console.log(new_array);

// 강의보면서 예문1
const my_name = "hyunjee";
const my_name_array = Array.from(my_name);
//console.log(my_name_array);  (7) ['h', 'y', 'u', 'n', 'j', 'e', 'e']
const nym_array = Array.from("my_name", (i, index) => {
  return index;
}); //my_name 의 item( 각 요소들 가져와라), index도 가져와라)
// => {index 만 리턴해줘라}
//console.log(nym_array);    (7) [0, 1, 2, 3, 4, 5, 6]  인덱스 몇갠지만 짠~~

//from 예문2
const new_array = Array.from({ length: 4 }, (i, index) => {
  return index;
});
// console.log(new_array);   (4) [0, 1, 2, 3]  -> from함수는 앞에요소를 가져오는 곳에 속성을 넣어도 되는구나!!

// Quiz1. 고양이가 몇마리인지 세기

const animals = [
  "강아지",
  "고양이",
  "햄스터",
  "강아지",
  "고양이",
  "고양이",
  "토끼",
];

let count = 0;
for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];
  if (animal === "고양이") {
    count += 1;
  }
}
console.log(count);
//요걸 map을 써서 고양이를 세보자

const animals = [
  "강아지",
  "고양이",
  "햄스터",
  "강아지",
  "고양이",
  "고양이",
  "토끼",
];

let count = 0;
// const new_animals = animals.map((i ==="고양이") => {
//     return count += 1;
//   });  //실패한코드

const new_animals = animals.map((i) => {
  if (i === "고양이") {
    return (count += 1);
  }
});
// console.log(count); //3

//Quiz2. 아래 for문을 보고 filter로 바꿔봐요!
const animals = [
  "복슬 강아지",
  "검정 고양이",
  "노란 햄스터",
  "강아지",
  "노랑 고양이",
  "고양이",
  "흰 토끼",
];

let cats = [];
for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];
  // indexOf는 파라미터로 넘겨준 텍스트가 몇 번째 위치에 있는 지 알려주는 친구입니다.
  // 파라미터로 넘겨준 텍스트가 없으면 -1을 반환해요!
  // 즉 아래 구문은 고양이라는 단어를 포함하고 있니? 라고 묻는 구문이죠!
  if (animal.indexOf("고양이") !== -1) {
    cats.push(animal);
  }
}
console.log(cats);
//filter사용하여 바꿔보기

const animal = animals.filter((i) => {
  if (i == "고양이") {
    return cats.push(animal);
  }
});
//응 바로실패

const animals = [
  "복슬 강아지",
  "검정 고양이",
  "노란 햄스터",
  "강아지",
  "노랑 고양이",
  "고양이",
  "흰 토끼",
];

let cats = animals.filter((i) => {
  return i.indexOf("고양이") !== -1;
});
console.log(cats);
//아직도어렵네;;
