app.controller('SuggestionController', ['$scope','$routeParams','suggestions',
	function ($scope, $routeParams, suggestions) {
		$scope.post = suggestions.posts[$routeParams.id];
		$scope.comments = $scope.post.comments;
		$scope.addComment = function () {
			if (!$scope.comment || $scope.comment === "") {
				return;
			}
			$scope.comments.push({
				body: $scope.comment,
				upvotes: 0
			});
			$scope.comment = '';
		};
		
		$scope.upVoteComment = function (comment) {
			comment.upvotes += 1;
		};
	}
]);