

sap.ui.core.UIComponent.extend("smax.etag.COMPROUTE.Component", {
	metadata : {
      manifest : "json"
	},
	init : function(){
		
		// will create a Router for smax.etag.COMRPUTE
		sap.ui.core.UIComponent.prototype.init.apply(this);
		this.getRouter().initialize();
		
	}
});








