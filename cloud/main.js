Parse.Cloud.afterSave("Bet", function(request) {
 if(!request.object.get("accepted") && !request.object.get("rejected") && !request.object.get("finished"))
 {
   query = new Parse.Query(Parse.Installation);
   query.equalTo("user", request.object.get("receivingUser"));
   Parse.Cloud.useMasterKey();
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
Parse.Cloud.afterSave("Bet", function(request) {
 if(request.object.get("accepted") && !request.object.get("rejected") && !request.object.get("finished"))
 {
   query = new Parse.Query(Parse.Installation);
   query.equalTo("user", request.object.get("creatingUser"));
   Parse.Cloud.useMasterKey();
   Parse.Push.send({
     where: query,
     data: { alert: "" + request.object.get("receiverName") + " has accepted your bet!", badge: "Increment"
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
   Parse.Cloud.useMasterKey();
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

Parse.Cloud.afterSave("FriendRequest", function(request) {
 if(request.object.get("accepted") && !request.object.get("rejected"))
 {
   query = new Parse.Query(Parse.Installation);
   query.equalTo("user", request.object.get("creatingUser"));
   Parse.Cloud.useMasterKey();
   Parse.Push.send({
     where: query,
     data: { alert: "" + request.object.get("receiverName") + " has accepted your friend request!!", badge: "Increment"
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

Parse.Cloud.afterSave("Result", function(request) {
 if(!request.object.get("accepted") && !request.object.get("rejected"))
 {
   query = new Parse.Query(Parse.Installation);
   query.equalTo("user", request.object.get("receivingUser"));
   Parse.Cloud.useMasterKey();
   Parse.Push.send({
     where: query,
     data: { alert: "New result request from " + request.object.get("senderName") + "!", badge: "Increment"
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

Parse.Cloud.afterSave("Result", function(request) {
 if(request.object.get("accepted") && !request.object.get("rejected"))
 {
   query = new Parse.Query(Parse.Installation);
   query.equalTo("user", request.object.get("creatingUser"));
   Parse.Cloud.useMasterKey();
   Parse.Push.send({
     where: query,
     data: { alert: "" + request.object.get("receiverName") + " has accepted your result!", badge: "Increment"
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

Parse.Cloud.afterSave("Result", function(request) {
 if(!request.object.get("accepted") && request.object.get("rejected"))
 {
   query = new Parse.Query(Parse.Installation);
   query.equalTo("user", request.object.get("receivingUser"));
   Parse.Cloud.useMasterKey();
   Parse.Push.send({
     where: query,
     data: { alert: "" + request.object.get("receiverName") + " has rejected your result!", badge: "Increment"
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
