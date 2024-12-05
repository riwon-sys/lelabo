//[1] 예제
let 할일목록 =[할일 코드 : 할일내용: 할일상태]

let 식별번호= 3;

//[2] 등록함수

function 등록함수(){

}

let content =document.querySelector('.conI').V
let 할일 ={ 
    할일코드
    할일내용
    할일상태 :false

}
할일목록.push
식별번호++;

console.log( 할일목록 )
전체출력함수();

// +
alert('[.]')
document.querySelector('.').value = ``;
return;

//[3] 전체출력
전체출력함수();
function 전체출력함수(){
    let todoB = document.querySelector('#');
    
    let html = ``
    for( let index=0; index<=할일목록.length-1; index++){
        let info = 할일목록[index];

        html+=`<div> ${info.할일상태 == true ? 'succes' : ''}
                     ${info.할일내용}
                                       (${ info.할일코드})
                                       (${ info.할일코드})
             
               <div>`
    }
    todoB.innerHTML = html;
    return;

}

//[4] 상태수정함수

function 수정함수 ( 수정할일코드 ){
    for( let index=0; index<=할일목록.length-1; index++){
        if( 할일목록[index].할일코드== 수정할일코드){
            let 할일상태=할인목록[index].할일상태
            할일목록[index].할일상태 = ! 할일상태
            break;
        }
}
전체출력함수();
return;
//[5] 삭제함수
function 삭제함수 ( 삭제할일코드 ){
    for( let index=0; index<=할일목록.length-1; index++){
        if( 할일목록[index].할일코드== 삭제할일코드){
            할일목록.splice( index , 1);
            break;
        }
}
전체출력함수();
return;