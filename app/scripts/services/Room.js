(function(){
	function Room($firebaseArray) {
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);

		var addRoom = function(roomName) {
			if (/\S/.test(roomName)) {
				rooms.$add({room: roomName});
			} else {
				return window.alert("Use your words, please!");	
			}
		};

		return {
			all: rooms,
			addRoom: addRoom
		};
	}

	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();