Parse.Cloud.afterSave("Bet", function(request) {
  if(!request.object.get("accepted") && !request.object.get("rejected"))
  {
    var query = new Parse.Query(Parse.User);
    query.equalTo("objectId", request.object.get("receivingUser").id);
    var pushQuery = new Parse.Query(Parse.Installation);
    pushQuery.matchesQuery('user', query);
    Parse.Push.send({
      where: pushQuery,
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
