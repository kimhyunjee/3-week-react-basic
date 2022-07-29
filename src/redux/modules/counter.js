
// Action Value
const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER"

// Action Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    // payload: payload,
    payload, //ES6에서는 객체의 key와 value가 같으면 이렇게 쓸수있음
  };
};
export const minusNumber = (payload) => {
  return {
    type: MINUS_NUMBER,
    payload,
  };
};


// Initial State

const initialState = {
  number: 0,
};

// Reducer 기본형태
//리듀서
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        //state.number (기존의 number)에 action.paylaod(사용자가 더하고싶은값)을 덯나다
        number: state.number + action.payload,
      };
    default:
      return state;

      case MINUS_NUMBER:
        return {
          number: state.number - action.payload,
        };
  }
};

// export default reducer
export default counter;









// 리액트 숙련과제 5~8
// // 추가된 코드 👇 - 액션 value를 상수들로 만들어 줍니다. 보통 이렇게 한곳에 모여있습니다.
// const PLUS_ONE = "PLUS_ONE";
// const MINUS_ONE = "MINUS_ONE";

// // 추가된 코드 👇 - Action Creator를 만들어 줍니다. 
// export const plusOne = () => {
//   return {
//     type: PLUS_ONE,
//   };
// };

// export const MinusOne = () => {
//   return {
//     type: MINUS_ONE,
//   }
// }

// // 초기 상태값
// const initialState = {
//     number: 0,
//   };
  
//   // 리듀서
//   const counter = (state = initialState, action) => {
//     // console.log(action);
//     switch (action.type) {
//       // PLUS_ONE이라는 case를 추가한다.
// 		// 여기서 말하는 case란, action.type을 의미한다.
// 		// dispatch로부터 전달받은 action의 type이 "PLUS_ONE" 일 때
// 		// 아래 return 절이 실행된다. 
//     case "PLUS_ONE": //case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다.
//       return {
//         //기준 state에 있던 number에 +1을 더한다.
//         number : state.number +1,
//       };

//       case "MINUS_ONE":
//         return {
//           number: state.number -1,
//         }
//       default:
//         return state;
//     }
//   };
  
//   // 모듈파일에서는 리듀서를 export default 한다.
//   export default counter;