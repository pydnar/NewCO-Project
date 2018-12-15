$("#mysites").click(function(){
    $.ajax("/api/getuser/" + localStorage.getItem("uid"), {
    method: "GET",
    async: false,
    //Init values are coming from the login
  }).then(function (res) {
    console.log("Data should be above!");
  }); //End of ajax call
});