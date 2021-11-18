function like(element){
    var str = element.innerText
    var numOfLikes = str.match(/\d+/g);
    element.innerText = parseInt(numOfLikes) + 1 + " Likes"
}