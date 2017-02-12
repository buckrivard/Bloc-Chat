(function() {
	function Message($firebaseArray, $cookies) {
		var ref = firebase.database().ref().child('messages').orderByChild('roomId');
		var messages = $firebaseArray(ref);

		var getByRoomId = function(roomId) {
			return $firebaseArray(ref.equalTo(roomId));
		};

		var send = function(newMessage, roomId) {
			messages.$add({
				content: newMessage,
				username: $cookies.get('blocChatCurrentUser'),
				sentAt: new Date().getTime(),
				roomId: roomId
			});
		}

		return {
			getByRoomId: getByRoomId,
			send: send
		};
	}

	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', '$cookies', Message]);
})();