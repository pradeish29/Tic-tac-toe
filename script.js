let boxes = document.querySelectorAll('.mbox');
let turn ='X';
let isgameover = false;

boxes.forEach(e =>{
    e.innerHTML=''
    e.addEventListener('click', ()=>{
        if(!isgameover && e.innerHTML ===''){
            e.innerHTML= turn;
            checkdraw();
            checkwin();
            changeturn();
        }
    })
})
function changeturn(){
    if(turn == 'X'){
        turn='O';
        document.querySelector('.bg').style.left ='90px';
        document.querySelector('.bg').style.backgroundColor ='#08D9D6';
    }
    else{
        turn='X';
        document.querySelector('.bg').style.left ='0px';
        document.querySelector('.bg').style.backgroundColor ='#ff2E63';
    }

}
function checkwin(){
    let wincond =[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    for (let i=0; i<wincond.length; i++){
        let v0= boxes[wincond[i][0]].innerHTML;
        let v1= boxes[wincond[i][1]].innerHTML;
        let v2= boxes[wincond[i][2]].innerHTML;

        if(v0 !='' && v0=== v1 && v0===v2){
            isgameover= true;
            document.querySelector('.win').innerHTML= turn+ ' Win';
            for(j=0;j<3;j++){
                boxes[wincond[i][j]].style.backgroundColor ='#08D9D6';
            }
        }
    }
}
function checkdraw(){
    if(!isgameover){
        let draw= true;
        boxes.forEach(e =>{
            if(e.innerHTML==='') draw=false;
        })
        if(draw){
            document.querySelector('.win').innerHTML='Draw';
            
        }
    }

}