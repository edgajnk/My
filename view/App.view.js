sap.ui.jsview("sap.ui.demo.myFiori.view.App", {

	getControllerName: function () {
		return "sap.ui.demo.myFiori.view.App";
	},
	
	createContent: function (oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
		this.app = new sap.m.SplitApp();
		
		// load the master page
		var master = sap.ui.xmlview("Master", "sap.ui.demo.myFiori.view.Master");
		master.getController().nav = this.getController();
		this.app.addPage(master, true);
		
		// load the detail page
		var detail = sap.ui.xmlview("Detail", "sap.ui.demo.myFiori.view.Detail");
		detail.getController().nav = this.getController();
		this.app.addPage(detail, false);
		
		// load the maps page
		var maps = sap.ui.xmlview("Maps", "sap.ui.demo.myFiori.view.Maps");
		maps.getController().nav = this.getController();
		this.app.addPage(maps, false);
		
		// load the detail contacts
		var contacts = sap.ui.xmlview("Contacts", "sap.ui.demo.myFiori.view.Contacts");
		contacts.getController().nav = this.getController();
		this.app.addPage(contacts, false);
		
		// load the empty page 
		 var empty = sap.ui.xmlview("Empty", "sap.ui.demo.myFiori.view.Empty"); 
		 this.app.addPage(empty, false); 

		
		// done
		return this.app;
	}
});