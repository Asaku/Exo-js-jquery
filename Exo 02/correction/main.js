function getAllLocal() {
  var keys = new Array;
  for (var i = 0; i < localStorage.length; i++) {
    keys[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
  }

  return keys;
}

function listing() {
  var datas = getAllLocal();
  for (var variable in datas) {
    if (datas.hasOwnProperty(variable)) {
      $('.listing').append('<li><label>'+datas[variable]+'</label><input type="button" data-id="'+variable+'" name="name" class="btn delete btn-danger" value="Remove"></li>');
    }
  }
};
listing();

$('#checkAll').click( function() {
  var newTodo = $('.add-todo').val();
  localStorage.setItem(new Date().valueOf(), newTodo);
  $('.add-todo').val('');
  window.location.reload();
});

$('.delete').click( function(){
  var idTodo = $(this).attr('data-id');
  console.log(idTodo);
  localStorage.removeItem(idTodo);
  $(".listing").find("[data-id='" + idTodo + "']").parent('li').remove();
});
