
  $(document).ready(function(){
    // This is the simple bit of jquery to duplicate the hidden field to subfile
    $('#file').change(function(){
      $('#subfile').val($(this).val());
    });
  });

$('#upload').click(function(){
  var file = document.getElementById('file').files[0]; //Files[0] = 1st file
  var reader = new FileReader();
  reader.readAsText(file, 'UTF-8');
  reader.onload = shipOff;
  //reader.onloadstart = ...
  //reader.onprogress = ... <-- Allows you to update a progress bar.
  //reader.onabort = ...
  //reader.onerror = ...
  //reader.onloadend = ...
});

function shipOff(event) {
    var result = event.target.result;
    var fileName = document.getElementById('file').files[0].name; //Should be 'picture.jpg'
    $.post('/submit', { data: result, name: fileName }, continueSubmission);
  }