










































$scope.setBackgroundColor = function(message) {
			for (var i = 0; i < message.length; i++) {
				if (message[i].username === message[i - 1].username) {
					console.log("I should be gray" + message[i].username)
				} else {
					console.log("I should be white" + message[i].username)
				}
			}
		}