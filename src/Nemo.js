import React from "react";


const Nemo = () => {
    // count에는 state 값이, setCount는 count라는 state 값을 수정하는 함수가 될거예요.
    // useState(초기값): () 안에 초기값을 넣어줍니다.
    const [count, setCount] = React.useState(3);
    console.log(count);
    const nemo_count = Array.from({length: count}, (v,i)=> i);

    const addNemo = () => {
        setCount(count+1);
    };

    const removeNemo = () => {
        // setCount를 통해 count에 저장된 값을 - 1 해줍니다.
        // 이번엔 if문 대신 삼항 연산자로 해볼거예요!
        setCount(count > 0 ? count - 1 : window.alert("뺄 게 없어요!"));
      };

    return (
        <div>
            {nemo_count.map((n,i)=>{
          return (
            <div 
            key = {i}
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "#ddd",
              margin: "10px",
            }}>
              nemo
            </div>
          )
        
        })}

        <div>
          <button onClick={addNemo}>하나 추가</button> 
            {/* 화살표 함수를 써도 되고, onClick={this.addNemo} 써도 된다. 여기서 addNemo뒤에 ()붙이면안댐
          그러면 즉시실행되어버림() */}
          <button onClick={removeNemo}>하나 빼기</button>
        </div>

        </div>
    );
}

export default Nemo;