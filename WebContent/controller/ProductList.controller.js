sap.ui.controller("smax.etag.COMPROUTE.controller.ProductList", {

	onItemPress : function(oEvent){
		debugger;
		var prodId =  oEvent.getSource().getTitle();
		 
		var oRouter = this.getOwnerComponent().getRouter();
		
		oRouter.navTo("detailRouteName", {prodID : prodId });
	}
});