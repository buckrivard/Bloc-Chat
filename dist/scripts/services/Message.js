(function() {
	function Message($firebaseArray) {
		var ref = firebase.database().ref().child('messages').orderByChild('roomId');
		var messages = $firebaseArray(ref);

		var getByRoomId = function(roomId) {
			return $firebaseArray(ref.equalTo(roomId));
		};

		var send = function(newMessage) {
			messages.$add({
				content: newMessage,
				username: username,
				room: roomId
			});
		}

		return {
			getByRoomId: getByRoomId,
			send: send
		};
	}

	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();