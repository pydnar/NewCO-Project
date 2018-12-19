$("#assetcheck").click(function () {

  alert("you are checking the assets type!");
  var newbarcode = $("#isbn_input").val().trim();

  event.preventDefault();
  console.log(newbarcode);

  $.ajax("/api/scanner/" + newbarcode, {
    type: "GET"
  }).then(function (r) {
    console.log(r);
    alert(r);
    var rshow = JSON.stringify(r);
    var rshowonpage = JSON.parse(rshow);
    console.log(rshow);
    $('#barcodetyperesultp').html(rshow);
    //
    //$('#barcodetyperesult').append(rshow);
    //location.reload();
  });
});

$("#mysites").click(function () {
  var uuid = localStorage.getItem("uuid");
  window.location.href = "/mysites/" + uuid;
});