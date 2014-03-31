define([
	'backbone',
	'underscore',
	'views/viewManager',
	'views/main',
	'views/game',
	'views/scoreboard'
], function(
	Backbone,
	underscore,
	viewManager,
	mainView,
	gameView,
	scoreboardView
){

    var Router = Backbone.Router.extend({
        routes: {
            'scoreboard': 'scoreboardAction',
            'scoreboard?limit=:limit': 'scoreboardAction',
            'game': 'gameAction',
            '*default': 'defaultActions'
        },
		initialize: function () {
			viewManager.addView(mainView);
			viewManager.addView(gameView);
			viewManager.addView(scoreboardView);
        },
        defaultActions: function () {
			mainView.show();
        },
        gameAction: function () {
            gameView.show();
        },
		scoreboardAction: function (limit) {
      		scoreboardView.show(limit);
        }
    });

    return new Router();
});
