function getAllLocal() {
  var keys = new Array;
  for (var i = 0; i < localStorage.length; i++) {
    console.log(i);
    keys[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
  }

  return keys;
}

console.log(localStorage);

(function listing(){
  var datas = getAllLocal();
  for (var variable in datas) {
    console.log(variable);
    if (datas.hasOwnProperty(variable)) {
      document.getElementById("listing").innerHTML += '<li class="list-group-item"><label>'+datas[variable]+'</label>' +
          '<input type="button" onclick="deleteAction('+variable+')" name="name" class="btn delete btn-danger pull-right" value="Remove"></li>';
    }
  }
})();

document.getElementById("checkAll").onsubmit = function(e){
  e.stopPropagation();
  e.preventDefault();
  var newTodo = document.getElementById("todo").value;
  console.log(newTodo);
  localStorage.setItem(new Date().valueOf(), newTodo);
  document.getElementById("todo").value = null;
  window.location.reload();
};


function deleteAction(idTodo){
  localStorage.removeItem(idTodo);
  window.location.reload()
}
