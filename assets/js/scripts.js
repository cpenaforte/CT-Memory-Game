const CARDS = document.querySelectorAll('.card');
const PATHS = ['./assets/img/crono.png','./assets/img/crono.png','./assets/img/marle.png','./assets/img/marle.png','./assets/img/robo.png','./assets/img/robo.png','./assets/img/magus.png','./assets/img/magus.png','./assets/img/lucca.png','./assets/img/lucca.png','./assets/img/frog.png','./assets/img/frog.png']

/*Create img elements*/
var img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12;
let frontImages = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12];
for(let i=0;i<frontImages.length;i++){
    frontImages[i] = document.createElement('img');
    frontImages[i].classList.add('.front-image');
    frontImages[i].setAttribute('src',PATHS[i]);
}

/*Randomize img list*/
let randomFrontImg = frontImages
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

/*Insert img's in HTML*/
for(let i=0;i<randomFrontImg.length;i++){
    CARDS[i].insertBefore(randomFrontImg[i],CARDS[i].firstChild);
}

/*Game Logic*/
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let counter = 0;

function unflipCards(){
    lockBoard=true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetBoard();
    }, 1000);
}

function disableCards(){
    firstCard.removeEventListener("click",flipCard);
    secondCard.removeEventListener("click",flipCard);

    resetBoard();
}

function checkForMath(){
    if(firstCard.firstChild.src === secondCard.firstChild.src){
        disableCards();
        counter++;
        if(counter===6){
            setTimeout(() => {
                window.location.reload();
            }, 1000);
            counter = 0;
        }
        return;
    }

    unflipCards();
}

/*Add flip class and store the flipped card*/
function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add("flip");
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    hasFlippedCard = false;
    secondCard = this;
    checkForMath();
}

function resetBoard(){
    [hasFlippedCard,lockBoard] = [false,false];
    [firstCard,secondCard] = [null,null];
}

/*Add click Event*/
CARDS.forEach((element) => {
    element.addEventListener("click",flipCard,false);
});

