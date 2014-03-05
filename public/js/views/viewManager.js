define([
    'backbone'
], function(
    Backbone
){

    var View = Backbone.View.extend({
		currentView: null,
		addView: function(view) {
			view.on('show', this.viewShowed, this);
		},
		viewShowed: function(sender) {
			if (this.currentView != null) {
				this.currentView.hide();
			}
			
			this.currentView = sender;
		}
    });

    return new View();
});
