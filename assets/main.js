// 아이디 비밀번호 입력창에 대소문자와 숫자만 입력가능한 정규 표현식 사용
function Alphanum(alnum){
    alnum.value = alnum.value.replace(/[^A-Za-z0-9]/gi, ''); //영어 대소문자와 숫자가 아닌 문자를 입력했을 때 공백으로 나타냄
}

function addTodo(){ //'➕'버튼을 눌렀을 때
    const todotext = document.querySelector('#input'); //할 일 입력창
    const todolist = document.querySelector('#todolist'); //checkbox, li, button이 들어갈 div
    const checkbox = document.createElement('input'); //체크박스를 가지는 input 생성
    const listElement = document.createElement('li'); // 리스트 생성
    const delbtn = document.createElement('button'); //삭제버튼 생성

    todotext.focus(); //입력창에 포커스

    if(todotext.value == ""){ //입력창에 아무것도 입력되지 않았을 경우
        alert("할 일을 입력해주세요.");
    }
    else{ //입력창에 할 일을 입력했을 경우
        listElement.id = 'createlist'; //css에서 사용할 id 설정

        checkbox.type = 'checkbox'; //체크박스 타입 설정
        checkbox.className = 'checkbox'; //css에서 사용할 클래스명 설정
        
        delbtn.type = 'button'; //버튼 타입 설정
        delbtn.textContent = '❌'; //버튼위에 쓰일 텍스트 설정
        delbtn.className = 'delbtn'; //css에서 사용할 클래스명 설정

        listElement.innerHTML = todotext.value; //li안에 할 일 입력창에서 받아온 텍스트 출력
        
        todolist.appendChild(checkbox);
        todolist.appendChild(listElement);
        todolist.appendChild(delbtn);

        todotext.value = null; //할 일 입력창 초기화

        delbtn.addEventListener('click', (event) => { //삭제 버튼을 눌렀을 경우
            if(confirm("정말 삭제하시겠습니까?")==true){   //취소메시지가 true(ok)일때
                todolist.removeChild(listElement);
                todolist.removeChild(checkbox);
                todolist.removeChild(delbtn);
            }
            else{ //취소메시지가 false(no)일때
                return false; //삭제 취소
            }
        });
    }

    checkbox.addEventListener('click', (event) => { //체크박스를 눌렀을 경우
        if(listElement.style.textDecoration == "line-through"){ //할 일이 완료된 상태에서 체크박스를 눌렀을 경우
            listElement.style.textDecoration = "none";
            listElement.style.color = "black";checkbox
        }
        else{ //할 일이 완료되지 않은 상태에서 체크박스를 눌렀을 경우 
            listElement.style.textDecoration = "line-through";
            listElement.style.color = "gray";
        }
    });
}

 

// 회원가입 이벤트

//아이디와 패스워드가 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4~12자리인지 확인할 정규 표현식
var regexIDPW = /^[A-Za-z0-9]{4,12}$/;
var id = []; //아이디를 저장할 배열
var pw = []; //비밀번호를 저장할 배열

function finjoin() {
    var getID = document.querySelector('#joinid');
    var getPW = document.querySelector('#joinpw');
    var checkPW = document.querySelector('#checkpw');
    const iderrormsg = document.querySelector('#iderrormsg');
    const pwerrormsg = document.querySelector('#pwerrormsg');
    const checkpwerrormsg = document.querySelector('#checkpwerrormsg');

    //아이디 입력 확인
    if(getID.value == ""){
        alert("아이디 혹은 비밀번호를 입력해주세요.");
        iderrormsg.innerHTML = '아이디를 입력해주세요.'; //아이디 입력 경고 메세지
        getID.focus();
    }
    //아이디 영어, 숫자 확인
    else if(!regexIDPW.test(getID.value)){
        iderrormsg.innerHTML = '대소문자, 숫자를 사용한 4~12자리의 아이디를 입력해주세요.'; //아이디 입력 경고 메세지
        pwerrormsg.innerHTML = '';
        getID.focus();
    }
    //영어, 숫자를 포함한 4~12자리의 아이디가 입력되어 있을 경우
    else{
        iderrormsg.innerHTML = ''; //아이디 입력 경고 메세지 초기화
    }
    

    //비밀번호 입력 확인
    if(getPW.value == ""){
        alert("아이디 혹은 비밀번호를 입력해주세요.");
        pwerrormsg.innerHTML = '비밀번호를 입력해주세요.'; //비밀번호 입력 경고 메세지 
        getPW.focus();
    }
    //비밀번호 영어, 숫자 확인
    else if(!regexIDPW.test(getPW.value)){
        iderrormsg.innerHTML = '';
        pwerrormsg.innerHTML = '대소문자, 숫자를 사용한 4~12자리의 비밀번호를 입력해주세요.'; //비밀번호 입력 경고 메세지 
        getPW.focus();
    }
    //영어, 숫자를 사용한 4~12자리의 비밀번호가 입력되어 있을 경우
    else{
        pwerrormsg.innerHTML = ''; //비밀번호 입력 경고 메세지 초기화
    }
    
    //비밀번호 재입력시 일치하는지 확인
    if(checkPW.value == getPW.value && regexIDPW.test(getPW)){
        checkpwerrormsg.innerHTML = '';
        pw.push(getPW.value); //비밀번호가 일치할 경우 비밀번호를 배열에 저장
    }
    else{
        checkpwerrormsg.innerHTML = '비밀번호가 일치하지 않습니다.';
        checkPW.focus();
    }

    //아이디, 비밀번호, 비밀번호 확인 창에 올바르게 입력되었을 경우
    if(getID.value != "" && regexIDPW.test(getID.value) && getPW.value != "" && regexIDPW.test(getPW.value) && checkPW.value == getPW.value){
        id.push(getID.value); //아이디를 배열에 저장
        window.location.href = "todo.html"; //투두리스트 화면으로 전환
    }
}

//아이디 중복확인
function idCheck() {
    var getID = document.querySelector('#joinid');
    const iderrormsg = document.querySelector('#iderrormsg');

    //배열에 저장된 아이디와 아이디 입력창에 입력한 아이디가 같을 경우
    if(getID.value != ""&& getID.value == id){
        iderrormsg.innerHTML = '중복된 아이디 입니다.'
    }
    //정규 표현식을 지키지 않고 아이디를 입력했거나 아이디 입력창이 공백일 경우
    else if(!regexIDPW.test(getID.value)){
        iderrormsg.innerHTML = '대소문자, 숫자를 사용한 4~12자리의 아이디를 입력해주세요.';
        getID.focus();
    }
    //아이디를 올바르게 입력한 경우
    else{
        iderrormsg.innerHTML = '사용 가능한 아이디 입니다.';
    }
}
