function exportHtml() {
    let innerValue = $('.canvas').html();
    var test = innerValue.toString();

    $('.newPage').text(innerValue);
     valueOfHtml =  $('.newPage').text(innerValue);
    localStorage.setItem("innerValue", test);
    window.open(location.origin +"/index3.html");
  }

  function deleteIt() {
    const canvas = document.getElementById('myCanvas');
    canvas.innerHTML = '';
     localStorage.setItem("innerValue", "");
  }

  // function undo() {
  //   const canvas = document.getElementById('myCanvas');
  //   //canvas.innerHTML = '';
  // }
