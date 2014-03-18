sap.ui.controller("sap.ui.demo.myFiori.view.Master", {

	handleListItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("Detail", context);
	},
	
	goToMaps : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("Maps", context);
	},
	goToContacts : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("Contacts", context);
	}

});