  function init() {
    var diagram = [];
    var canvas = $(".canvas");
    $(".tool").draggable({
      helper: "clone",
      cancel: false,
    });
    canvas.droppable({
      drop: function(event, ui) {
        console.log(ui.helper.prop("outerHTML"));
        var new_signature;
        if (ui.helper.is(".ui-resizable")) {
          new_signature = ui.helper;
        } else {
          new_signature = ui.helper.clone();
          new_signature.removeClass("ui-draggable ui-draggable-handle ui-draggable-dragging");
          new_signature.draggable({
            helper: false,
            containment: "parent"
          }).resizable();
        }
        $(this).append(new_signature);
      }
    });
  }

  $(init);

// function exportHtml() {
//     console.log('called');
//     let innerVal = $('.canvas').html();
//     console.log(innerVal, 'innerVal');
//     $('.newPage').text(innerVal);
//     var valueOfHtml =  $('.newPage').text(innerVal);
//     localStorage.setItem("innerValue", valueOfHtml);
//     return valueOfHtml;
//   }

//   function deleteIt() {
//     const canvas = document.getElementById('myCanvas');
//     canvas.innerHTML = '';
//   }

//   function undo() {
//     const canvas = document.getElementById('myCanvas');
//     //canvas.innerHTML = '';
//   }
