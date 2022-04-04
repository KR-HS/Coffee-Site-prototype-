// inputId, inputPw는 로그인창에서 입력받은 값
let inputId = document.querySelector('#loginId');
let inputPw = document.querySelector('#loginPw');


function loginCheck(inputLoginId,inputLoginPw){
        if((inputId.value == inputLoginId) && (inputPw.value == inputLoginPw)){
            location.href='TP_coffee_main2.html';
        }else if((inputId.value == inputLoginId) && (inputPw.value != inputLoginPw)){
            document.getElementById('answer').innerText ='비밀번호가 틀렸습니다';
        }else if((inputId.value != inputLoginId) && (inputPw.value == inputLoginPw)){
            document.getElementById('answer').innerText ='아이디가 틀렸습니다';
        }else{
            document.getElementById('answer').innerText ='아이디가 존재하지 않습니다';
        }

    let num=0;
    // userId, userPw, user 
    let id = localStorage.getItem('user.inputid'); //회원가입 페이지에서 가져온 아이디 배열
    let pw = localStorage.getItem(`user.inputpassword`)
    for(let i=0;i<id.length;i++){
        if(inputId.value==id[i] && inputPw.value==pw[i]){
            num=i;
        }
    }

    
    let userId = localStorage.getItem(`user.inputid[${num}]`); //회원가입 페이지에서 가져온 아이디
    let userPw = localStorage.getItem(`user.inputpassword[${num}]`);//회원가입 페이지에서 가져온 비밀번호
    let username = localStorage.getItem(`user.inputname[${num}]`);//회원가입 페이지에서 가져온 사용자 이름
    
    }