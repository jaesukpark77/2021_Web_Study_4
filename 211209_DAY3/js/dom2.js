$(document).ready(function(){
    // [대상 변경]
    // - text() : 텍스트를 변경 -> 태그를 텍스트로 인식
    // 1. list1의 첫번째 a의 글자를 'HOME'으로 변경


    // - html() : 내용을 변경 -> 태그를 인식
    // 2. list1의 두번째 a의 글자를 '<strong>PROFILE</strong>으로 변경


    // [태그 삽입]
    // - prepend() / append() : 타겟의 안쪽으로 맨앞/맨뒤에 태그를 삽입
    // 3 list1의 맨 앞에 'START'를 삽입



    // 4. list1의 맨 뒤에 'END'를 삽입


    // - before() / after() : 타겟의 앞/뒤에 태그를 삽입
    // 5. list1의 menu3 앞에 'GALLERY'를 삽입


    // 6. list1의 menu3 뒤에 'BOARD'를 삽입


    // [태그 이동]
    //$('선택자').메서드('이동할 위치')
    // - prependTo() / appendTo() : 선택자를 타겟의 안쪽으로 맨앞/맨뒤로 이동
    // 7. list1의 'START'를 list2의 맨 앞으로 이동


    // 8. list1의 'END'를 list2의 맨 뒤로 이동

    // - insertBefore() / insertAfter() : 선택자의 타겟의 앞/뒤로 이동
    // 9. list1의 'GALLERY'를 list2의 menu2 앞으로 이동


    // 10. list1의 'BOARD'를 list2의 menu3 뒤로 이동


    // [태그 삭제]
    // - remove() : 타겟을 삭제
    // - empty() : 타겟의 내용을 지워라/비워라

    // 11. list2의 menu2 삭제


    // 12. list2의 menu4 안에있는 내용을 비워라


    // [wrap - 타겟을 감싸는 태그를 추가]
    // .wrap() / .wrapAll() / .wrapInner()
    // .wrap() : 타겟이 여러개일 경우 따로따로 해당 태그로 감싸진다.
    // 13. list1을 <nav class="nav"></nav>로 감싸지도록 추가


    // 14. wrapAll() : 타겟이 여러개일 경우 한꺼번에 해당 태그로 감싸진다.
    //                  : 중간에 다른 태그가 있는 경우 해당 태그는 뒤로 밀리게 된다.

    // - wrapInner() : 타겟의 안에 있는 내용을 감싸는 태그를 추가
    // 15. body안에 있는 내용을 <div id-"wrap"></div>로 감싸지도록 추가

});


/*
    prepend() / append()
    before() / after()

    $('.list').메서드()


    -- before()
    <ul class="list">
        -- prepend()
        <li><a href="#">list1</a></li>
        <li><a href="#">list2</a></li>
        -- append()
    </ul>
    -- after()

    *** css의 before/after는 타겟의 안쪽으로 인식되지만, 
    제이쿼리에서의  before/after는 타겟의 바깥쪽으로 인식된다.
*/