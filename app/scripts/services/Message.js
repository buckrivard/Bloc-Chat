(function() {
	function Message($firebaseArray) {
		var ref = firebase.database().ref().child("messages");
		var messages = $firebaseArray(ref);

		return {
			getByRoomId: function(roomId) {
				console.log("roomId:" + roomId);
				return messages.orderByChild('roomId').equalTo(roomId);
			}
		};
	}

	angular
		.module('blocChat')
		.factory('Message', [$firebaseArray, Message]);
})();