var imageNumber = 1;

// function getId(ele){
//    clickedImage(ele.id); 
// }
document.addEventListener('DOMContentLoaded',init,false)
function init(){
    const previousButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');
    const smallImages = document.getElementsByClassName('copy');
    //console.log(smallImages[0])
    if(previousButton && nextButton){
        previousButton.addEventListener('click',getPrev,false);
        nextButton.addEventListener('click',getNext,false);
    }
    if (smallImages) {
        for (let index = 0; index < smallImages.length; index++) {
            smallImages[index].addEventListener('click',getId,false);
        }
    }
    function getId(){
        var number=parseInt(this.id);
        changeImg(number);
        //console.log(parseInt(imagenumber))
    }
    function getPrev(){
        imageNumber -= 1;
        if(imageNumbesAr>6)
            imageNumber=1;
        if(imageNumber<1)
            imageNumber=6;
        changeImg(imageNumber);
    }
    function getNext(){
        imageNumber += 1;
        if(imageNumber>6)
            imageNumber=1;
        if(imageNumber<1)
            imageNumber=6;
        changeImg(imageNumber);
    }
    function changeImg(imageNumber){
         
        switch(imageNumber) {
            case 1:document.getElementsByClassName('carasoul')[0].style.backgroundImage = "url('img1.jpg')";
                    break;
            case 2:document.getElementsByClassName('carasoul')[0].style.backgroundImage = "url('img2.jpg')";
                    break;
            case 3:document.getElementsByClassName('carasoul')[0].style.backgroundImage = "url('img3.jpg')";
                    break;
            case 4:document.getElementsByClassName('carasoul')[0].style.backgroundImage = "url('img4.jpg')";
                    break;
            case 5:document.getElementsByClassName('carasoul')[0].style.backgroundImage = "url('img5.jpg')";
                    break;
            case 6:document.getElementsByClassName('carasoul')[0].style.backgroundImage = "url('img6.jpg')";
                    break;
            default:document.getElementsByClassName('carasoul')[0].style.backgroundImage = "url('img1.jpg')";
        }
    }
}
