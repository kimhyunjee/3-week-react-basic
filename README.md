# teamproject-3weeks
### 항해 3주차- react 입문

react로 프로젝트를 만들어 페이지를 완성한다 !

![image](https://user-images.githubusercontent.com/107829027/181253411-7c82374b-2b69-4b7a-80cc-f45259d5dd70.png)

<aside>
⚙ **features : 구현해야 할 기능이에요.**

</aside>

- UI 구현하기
- Todo 추가 하기
- Todo 삭제 하기
- Todo 완료 상태 변경하기 (완료 ↔ 진행중)

<aside>
📌 **Requirement : 과제에 요구되는 사항이에요.**

</aside>

- 디자인은 취향대로 해도 되나 화면 구성은 동일하게 해주세요. ✨
1. 제목과 내용을 입력하고, [추가하기] 버튼을 클릭하면 Working에 새로운 Todo가 추가되고 제목 input과 내용 input은 다시 빈 값으로 바뀌도록 구성해주세요.
    - 예시 영상 보기
        
        [화면 기록 2022-06-27 오후 8.16.44.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b6c4b646-58d7-43ee-b942-15046363cb1c/화면_기록_2022-06-27_오후_8.16.44.mov)
        
2. Todo의 **isDone 상태가 true이면, 상태 버튼의 라벨을 `취소`, isDone이 false 이면 라벨을 `완료`** 로 조건부 렌더링 해주세요. 위 영상을 보면 버튼 내 라벨이 다른 걸 볼 수 있죠?
3. Todo의 상태가 `Working` 이면 위쪽에 위치하고, `Done`이면 아래쪽에 위치하도록 구현합니다.
    - 예시 영상 보기
        
        [화면 기록 2022-06-27 오후 8.20.14.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a7d5a8f8-6e73-41e3-a7c8-0f83e2cdb16e/화면_기록_2022-06-27_오후_8.20.14.mov)
        
4. Layout의 최대 넓이는 `1200px`, 최소 넓이는 `800px`로 제한하고, 전체 화면의 가운데로 정렬해주세요.
    - 예시 이미지 보기
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2c7c1361-f01d-415e-8722-a40931b1edb5/Untitled.png)
        
5. 아래 이미지의 **폴더 구조**와 동일하게 구현하고 **컴포넌트 구성**도 똑같이 나눠서 구현해주세요.
    - 이미지 보기
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/533e8a8e-a4a5-41c7-9d40-b26a285afbd2/Untitled.png)
        
    

<aside>
📌 **Hint : 과제가 어려우신가요?**

</aside>

- 눌러서 보기
    - 사용한 hook은 오직 useState
    - 기능 구현을 위해 생성한 함수는 2개 입니다. `onChangeHandler` , `onSubmitHandler`
    - 사용한 javascript 내장 메서드는 `map`, `filter` 입니다.
    - todo의 initial state는 `{id: 0, title: “”, body: “”, isDone: false}` 입니다.
- 예시 사이트 : [http://todolistassignment.s3-website.ap-northeast-2.amazonaws.com/](http://todolistassignment.s3-website.ap-northeast-2.amazonaws.com/)
