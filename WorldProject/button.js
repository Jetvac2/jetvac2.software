const evilButton = document.getElementById('evil-button')
console.log(evilButton);
evilButton.style.left = (document.body.scrollWidth/2 - evilButton.scrollWidth/2) + "px";
evilButton.style.top = (document.body.scrollHeight + 50) +"px";
const XOFFSET = 350;
const YOFFSET = 200;
var isLastFromLeft = false;

evilButton.addEventListener('click', () => {
    alert('Good Job')
})

document.addEventListener('mousemove', moveButton);
document.addEventListener('scroll', moveButton);

function moveButton(e) {
  const x = e.pageX;
    const y = e.pageY;
 // console.log(x + " " + y);
    const buttonBox = evilButton.getBoundingClientRect()
    
    const centerX = buttonBox.width / 2 + removeSuffix(evilButton.style.left);
    const centerY = buttonBox.height / 2 + removeSuffix(evilButton.style.top);

  //console.log("MX: " + x + " MY: " + y + " BX: " + centerX + " BY: " + centerY);
  
    if (x >= centerX - XOFFSET && x <= centerX + XOFFSET) {
      if (y >= centerY - YOFFSET && y <= centerY + YOFFSET) {
        evilButton.style.left = (removeSuffix(evilButton.style.left) + (centerX - x)) + "px";
        evilButton.style.top = (removeSuffix(evilButton.style.top) + (centerY - y)) + "px";

        if (removeSuffix(evilButton.style.left) < 0) {
          
          evilButton.style.left = (document.body.scrollWidth - buttonBox.width) + "px"
          console.log(evilButton.style.left);
          isLastFromLeft = true;
        } else {
          isLastFromLeft = false;
        }
  //Make it so that 
        //if (isLastFromLeft && (removeSuffix(evilButton.style.left) + buttonBox.width) >= document.body.scrollWidth - 3)
        //{
          //isLastFromLeft = false;
        //}
        
        if (removeSuffix(evilButton.style.top) < 0) {evilButton.style.top = "0px"};
    

        // Teleport bottom to top
        if ((removeSuffix(evilButton.style.top) + buttonBox.height) >= document.body.scrollHeight - 5) {
          
          evilButton.style.top = "0px"
          
        };
        
        if (removeSuffix(evilButton.style.left) + buttonBox.width >= document.body.scrollWidth - 5 && !isLastFromLeft) {
          //evilButton.style.left = (document.body.scrollWidth - buttonBox.width) + "px"
          evilButton.style.left = "0px"
          console.log("m");
        };
      }
    }
}

var removeSuffix = (val) => {return parseInt(val, 10);}