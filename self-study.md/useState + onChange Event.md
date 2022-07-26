```jsx
import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");

  const onChangeHandler = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  console.log(value);

  return (
    <div>
      <input type="text" onChange={onChangeHandler} value={value} />
    </div>
  );
};

export default App;
```
//먼저 input에 onChange라는 이벤트를 불러내고, 우리가 생성한 이벤트 핸들러 함수를 넣습니다. 
//그리고 **우리는 이벤트 핸들러 안에서 자바스크립트의 event 객체를 꺼내 사용할 수 있습니다.** 사용자가 입력한 **input의 값은 event.target.value** 로 꺼내 사용할 수 있죠.
//마지막으로 state인 **value를 input의 attribute인 value에 넣어주**면 input과 state 연결하기, 끝 입니다!
