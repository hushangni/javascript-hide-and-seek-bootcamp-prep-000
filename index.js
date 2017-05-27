function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n){
  var lis = document.querySelectorAll(".ranked-list");
  var first = lis[0];
  var second = lis[1];

  var children = first.children;

  for (let i = 0; i< children.length; i++) {

    children[i].innerHTML = parseInt(children[i].innerHTML) + n;
  }

  children = second.children;

  for (var i = 0; i< children.length; i++){
    children[i].innerHTML = parseInt(children[i].innerHTML) + n;
  }


}
