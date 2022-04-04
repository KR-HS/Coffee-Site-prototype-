


function seoulLocation(self) {
    // 서울지역체크시
    if(self.value == 'checkoff') {
        // 만약 경기지역 체크가 되었을 경우(전체 화면이 보임)
        if(document.querySelector('#gyeonggiCheck').checked == true) {
            document.querySelector('#gyeonggiBox').style.display='block';
            document.querySelector('#seoulBox').style.display='block';
        // 만약 경기지역 체그가 안되었을 경우(서울지역 화면만 보임)
        } else{
            document.querySelector('#gyeonggiBox').style.display='none';
        }
        self.value = 'checkon'; //체크온으로 변경
    // 서울지역체크 해제시
    } else{
        // 만약 경기지역이 체크가 되었을 경우(경기지역 화면만 보임)
        if(document.querySelector('#gyeonggiCheck').checked == true) {
            document.querySelector('#gyeonggiBox').style.display='block';
            document.querySelector('#seoulBox').style.display='none';
        // 만약 경기지역이 체크가 안되었을 경우(전체 화면이 보임)
        } else {
            document.querySelector('#gyeonggiBox').style.display='block';
            document.querySelector('#seoulBox').style.display='block';
        }
        self.value = 'checkoff';  //체크아웃으로 변경
    }
}

function gyeonggiLocation(self) {
            // 경기지역 체크시
    if(self.value == 'checkoff') {
        // 만약 서울지역 체크가 되었을 경우(전체 화면이 보임)
        if(document.querySelector('#seoulCheck').checked == true) {
            document.querySelector('#gyeonggiBox').style.display='block';
            document.querySelector('#seoulBox').style.display='block';
        // 만약 서울지역 체그가 안되었을 경우(경기지역 화면만 보임)
        } else {
            document.querySelector('#seoulBox').style.display='none';
        }
        self.value = 'checkon'; //체크온으로 변경
    // 경기지역체크 해제시
    } else{
        // 만약 서울지역이 체크가 되었을 경우(서울지역 화면만 보임)
        if(document.querySelector('#seoulCheck').checked == true) {
            document.querySelector('#seoulBox').style.display='block';
            document.querySelector('#gyeonggiBox').style.display='none';
        } else {
        // 만약 서울지역이 체크가 안되었을 경우(전체 화면이 보임)
            document.querySelector('#gyeonggiBox').style.display='block';
            document.querySelector('#seoulBox').style.display='block';
        }
        self.value = 'checkoff'; //체크아웃으로 변경
    }
}


