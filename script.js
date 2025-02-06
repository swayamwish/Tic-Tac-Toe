let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');

let turn = 0;

let winPattern = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

let mp = new Map();

function reset(){
  boxes.forEach((box)=>{
    box.innerHTML = '';
  });
  mp.clear();
  cnt = 0;
}

let cnt = 0;

resetBtn.addEventListener('click',()=>{
  reset();

});

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.innerHTML) {
            alert('Box is Filled');
        } else {
            let pos = Number(box.id);
            console.log(box.id);
            let playerSymbol = turn ? 'X' : 'O';
            box.innerHTML = playerSymbol;
            mp.set(pos, playerSymbol);

            let isWin = false;
            winPattern.forEach((p) => {
                if (mp.has(p[0]) && mp.has(p[1]) && mp.has(p[2])) {
                    if (mp.get(p[0]) === mp.get(p[1]) && mp.get(p[1]) === mp.get(p[2])) {
                        isWin = true;
                    }
                }
            });

            if (isWin) {
                setTimeout(()=>{
                  alert(`Player ${playerSymbol} has Won`);
                  reset();
                },500);
                
                mp.clear();
                return; 
            }
            cnt++;
            turn = 1 - turn; 
            if(cnt == 9){
              setTimeout(()=>{
                alert('It is or Draw');
                reset();
              },500);
            }
        }
    });
});
