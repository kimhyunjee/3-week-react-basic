### [실습] Counter 만들기

```jsx
import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  function onClickHandler() {
    setNum(num +1);
  }
  function onClickHandler2() {
    setNum(num -1);
  }

  return (
    <div>
      {num}
      <button onClick={onClickHandler}>+1</button>
      <button onClick={onClickHandler2}>-1</button>
    </div>
  );
}

export default App;
```
- `+ 1` 버튼을 누를 때마다 숫자가 + 1 증가 합니다.
- `- 1` 버튼을 누를 때마다 숫자가 - 1 감소 합니다.
