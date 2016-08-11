Parse.Cloud.afterSave("Bet", function(request) {
 if(!request.object.get("accepted") && !request.object.get("rejected"))
 {
   query = new Parse.Query(Parse.Installation);
   query.equalTo("user", request.object.get("toUser"));

   Parse.Push.send({
     where: query,
     data: { alert: request.object.get("fromUser") + ': ' + request.object.get("messageText") }
   }, { useMasterKey: true })
   .then(function() {
     // Push sent!
     console.log(request.params);
     response.success();
   }, function(error) {
     // There was a problem :(
   });
 }
});
