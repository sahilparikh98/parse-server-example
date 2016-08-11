Parse.Cloud.afterSave("Bet", function(request) {
 if(!request.object.get("accepted") && !request.object.get("rejected"))
 {
   query = new Parse.Query(Parse.Installation);
   query.equalTo("user", request.object.get("receivingUser"));
   Parse.Cloud.useMasterKey()
   Parse.Push.send({
     where: query,
     data: { alert: "New bet request from " + request.object.get("senderName") + "!", badge: "Increment"
           }
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
Parse.Cloud.afterSave("FriendRequest", function(request) {
 if(!request.object.get("accepted") && !request.object.get("rejected"))
 {
   query = new Parse.Query(Parse.Installation);
   query.equalTo("user", request.object.get("receivingUser"));
   Parse.Cloud.useMasterKey()
   Parse.Push.send({
     where: query,
     data: { alert: "New friend request from " + request.object.get("senderName") + "!", badge: "Increment"
           }
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
