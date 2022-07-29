<aside>
💡 **Goal : My Todo List 만들기**

</aside>

- [React 입문 주차 개인 과제](https://www.notion.so/React-f8cb108d179d4c06978bc4d8579e1fec) 를 `react-router-dom`, `styled-components`, `redux`를 사용해서 My Todo List 를 다시 만들어봅니다.

<aside>
⚙ **features : 구현해야 할 기능이에요.**

</aside>

- Create Todo
- Read Todos, Todo
- Update Todo
- Delete Todo

<aside>
📌 **Requirement : 과제에 요구되는 사항이에요.**

</aside>

- **공통**
    - **todos 데이터는 리덕스를 사용해서 전역으로 상태를 관리합니다.**
    - todos 모듈은 `**Ducks 패턴**`으로 구현합니다.
    - **컴포넌트 구조는 자유롭게 구현**하되, 본인이 그렇게 나눈 이유에 대해서 `README`에 작성합니다.
- **메인 페이지**
    - **디자인과 화면 구성은 자유롭게 구현합니다.**
    - **Todo의 상태에 “완료” 그룹과 “진행중" 그룹을 나뉘어서 보이도록 구현**합니다. 예시 영상 꼭 위, 아래가 아니어도 되며 창의적으로 구현해도 됩니다.
        - 예시 영상 보기
            
            [화면 기록 2022-06-27 오후 8.20.14.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a7d5a8f8-6e73-41e3-a7c8-0f83e2cdb16e/화면_기록_2022-06-27_오후_8.20.14.mov)
            
    - **Todo를 추가하면  제목 `input`과 내용 `input`은 다시 빈 값이 되도록 구현**합니다.
        - 예시 영상 보기
            
            [화면 기록 2022-06-27 오후 8.16.44.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b6c4b646-58d7-43ee-b942-15046363cb1c/화면_기록_2022-06-27_오후_8.16.44.mov)
            
    - **input에 값이 있는 상태에서 상세페이지로 이동하는 경우, input의 value가 초기화** 되도록 구현합니다.
        - 예시 영상 보기
            
            [화면 기록 2022-07-27 오전 1.15.52.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f6bc8bc8-96d0-46d1-9070-f5e030495cab/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2022-07-27_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.15.52.mov)
            
    - Todo의 완료상태**가 `true`**이면**,** 상태 버튼의 라벨을 **“취소”,  `false`** 이면 라벨을 “**완료”** 로 보이도록 구현합니다.
    - 전체 화면의 **최대 넓이는 `1200px`, 최소 넓이는 `800px`로 제한**하고, **컨텐츠를 화면의 가운데로 배치** 합니다.
        - 예시 이미지 보기
            
            ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2c7c1361-f01d-415e-8722-a40931b1edb5/Untitled.png)
            
    - `상세보기` 클릭하면 **Todo의 상세 페이지로 이동**합니다. 상세 페이지에서 보여야 하는 내용은 아래 토글에서 별도 안내합니다.
        - 예시 영상 보기
            
            [화면 기록 2022-07-03 오후 11.33.01.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/061877e5-7299-4c29-8c92-6279f079814c/화면_기록_2022-07-03_오후_11.33.01.mov)
            
- **상세 페이지**
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/11df8fd7-1e34-4449-a10e-4985b7daa35c/Untitled.png)
    
    - 상세 페이지의 디자인과 화면 구성은 자유롭게 구현하되, 아래 요소들은 보여야 합니다.
        - Todo의 ID
        - Todo의 제목
        - Todo의 내용
        - `이전으로` 버튼
            - `이전으로` 버튼을 구현하고, `이전으로` 버튼을 클릭하면 리스트 화면으로 되돌아 갑니다.
- **제한사항**
    - map을 사용할 때 **반드시 key**을 넣어야 하며, `map` 의 **index를 사용을 금지**합니다. 이것을 금지하는 이유는 강의에 다루었습니다.
    - Todo Id 생성 시 `todos.length` 사용해서 생성하지 않습니다. `todos.length` 을 사용해서 id 생성 시 **발생할 수 있는 문제점에 대해 고민**해보시길 바랍니다.

<aside>
🔔 **notice: 과제와 관련된 안내 사항이에요.**

</aside>

- todos 모듈의 `initialState` 는 있어도 되고, 없어도 됩니다. **예시 영상에서는 예시의 편의상 Todo가 `initialState`로 존재합니다.**
    
    ```jsx
    const initialState = [
    	{
    		id: 1, // id는 모두 고유값이어야 합니다.
    		title: "리액트 강의보기",
    		body: "챕터 1부터 챕터 12까지 학습",
    		isDone: false
    	},
    	{
    		id: 2, // id는 모두 고유값이어야 합니다.
    		title: "점심 먹기",
    		body: "점심 뭐먹지..?",
    		isDone: false
    	}
    ]
    ```
    

<aside>
📌 **Hint : 과제가 어려우신가요?**

</aside>

- 힌트
    - 예시에서 생성한 action creator는 총 4개 입니다.
        - `addTodo`, `deleteTodo`, `toggleStatusTodo`, `getTodoById`
    - 중앙 정렬은 flex를 사용했습니다.
    
- 예시 사이트 : [http://todolistwithreduxassignment.s3-website.ap-northeast-2.amazonaws.com/](http://todolistwithreduxassignment.s3-website.ap-northeast-2.amazonaws.com/)

<aside>
☝ **제출방식 : GitHub 링크로 제출해주세요.**

</aside>
