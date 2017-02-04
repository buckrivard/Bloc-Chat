(function() {
	function Message($firebaseArray) {
		var ref = firebase.database().ref().child('messages').orderByChild('roomId');
		var messages = $firebaseArray(ref);

		var getByRoomId = function(roomId) {
			return $firebaseArray(ref.equalTo(roomId));
		};

		return {
			getByRoomId: getByRoomId
			// is this proper naming convention for returning a method like this? What I did here seems stupid and naive
		};
	}

	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();