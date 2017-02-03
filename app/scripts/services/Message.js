(function() {
	function Message($firebaseArray) {
		var ref = firebase.database().ref().child('messages').orderByChild('roomId');
		var messages = $firebaseArray(ref);

		return {
			allMessages: messages,
			getByRoomId: function(roomId) {
				return $firebaseArray(ref.equalTo(roomId));			
			}
		};
	}

	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();