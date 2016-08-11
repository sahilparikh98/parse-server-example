Parse.Cloud.afterSave("Bet", function(request) {
  if(!request.object.get("accepted") && !request.object.get("rejected"))
  {
    query = new Parse.Query(Parse.Installation);
    query.equalTo("user", request.object.get("receivingUser"));
    Parse.Push.send({
      where: query,
      data: {
        alert: "You have a bet request from" + request.object.get("receivingUser").username + "!",
        badge: "Increment"
      }
    }, {
      success: function () {
        response.sucess("Hello world");
      },
      error: function (error) {
        response.error(error);
      }
    });
  }
});
