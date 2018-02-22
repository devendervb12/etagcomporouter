sap.ui.controller("smax.etag.COMPROUTE.controller.ProductDetail", {

	onInit : function(){
		
		var oRouter = this.getOwnerComponent().getRouter();
		
		
		oRouter.getRoute("detailRouteName").attachPatternMatched(function(oEvent){
			//oEvent - pattern matched
			debugger;
			//this.prodID = oEvent.getParameters().argument.prodID;
			this.prodID = oEvent.getParameters().arguments.prodID;
			
			this.getView().bindElement("/ProductSet('"+this.prodID+"')");
			debugger;
		}, this);
		
		
		
	}
	
});