function changePerson(newPerson) {
    let I = document.getElementById('Image');
    let N = document.getElementById('Name');
    let C = document.getElementById('College');
    let SN = document.getElementById('StudentNumber');
    let M = document.getElementById('Major');

    if(newPerson == '임효진'){
        I.src="./img/Steve-Jobs.jpg";
        N.innerHTML = "이름: "+newPerson;
        C.innerHTML = "학교: 가톨릭대학교";
        SN.innerHTML = "학번: 201712345";
        M.innerHTML = "전공: 컴퓨터정보공학부";
    }
    else if(newPerson == '김동건'){
        I.src="./img/Steve-Jobs2.jpg";
        N.innerHTML = "이름: "+newPerson;
        C.innerHTML = "학교: 가톨릭대학교";
        SN.innerHTML = "학번: 201620162";
        M.innerHTML = "전공: 컴퓨터정보공학부";
    }
    else if(newPerson == '한주연'){
        I.src="./img/Steve-Jobs3.jpg";
        N.innerHTML = "이름: "+newPerson;
        C.innerHTML = "학교: 가톨릭대학교";
        SN.innerHTML = "학번: 201812345";
        M.innerHTML = "전공: 컴퓨터정보공학부";
    }
    else if(newPerson == '안승현'){
        I.src="./img/Steve-Jobs4.jpg";
        N.innerHTML = "이름: "+newPerson;
        C.innerHTML = "학교: 가톨릭대학교";
        SN.innerHTML = "학번: 202012345";
        M.innerHTML = "전공: 컴퓨터정보공학부";
    }
    else{
        I.src="./img/Steve-Jobs0.jpg";
        N.innerHTML = "이름: 오선식";
        C.innerHTML = "학교: 가톨릭대학교";
        SN.innerHTML = "학번: 2016王子王子王";
        M.innerHTML = "전공: 심리학과";
    }
}