$(document).ready(function () {
  $(document).on('click', '.remove', function () {
    $(this).parent('li').remove()
  })

  //   let newTag = $("<li>My New Tag <span class='remove'>Remove</span></li>")

  //   let newTag = $('<li>', {
  //     text: 'My New Task',
  //     append: '<span class="remove">Remove</span>',
  //   })
  //newTag.appendTo('#list')
  // newTag.prependTo('#list');
  // $('#list').prepend(newTag);
  //   $('#list').append(newTag)
  //   newTag.insertAfter($('li').eq(2))

  $('button').click(function (event) {
    var inputValue = $('#new-task').val()
    if (inputValue) {
      var newTag = $('<li>', {
        text: inputValue,
        append: '<span class="remove">Remove</span>',
      })
      $('#list').append(newTag)
      $('#new-task').val('')
    } else {
      alert('Add new task')
    }
    event.preventDefault()
  })
})
