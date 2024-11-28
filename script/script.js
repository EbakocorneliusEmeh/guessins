let random = Math.floor(Math.random()*100 + 1);
console.log(random)

const tonic = document.getElementById("boy")
const work = document.getElementById("girl")
const meet = document.getElementById("result")


work. addEventListener('click', ()=>{
    const guess = tonic.value;

    if (guess === random) {
        meet.textContent="you guess it correct"
    }else{
        meet.textContent="you failed"
    }
}
)