sap.ui.define([
    "sap/ui/core/mvc/Controller"
],function (Controller)  {
    "use strict";

    return Controller.extend("com.f4help.projectf4.controller.View1", {
        onInit() {
        },
        Onf4: function() {
            if(this.dialog == undefined) {    
                  this.dialog = sap.ui.xmlfragment(this.getView().getId(), "com.f4help.projectf4.view.f4",this);
                  this.getView().addDependent(this.dialog);
            }
            this.dialog.open();  
        },
        Onclose: function() {
        this.dialog.close();

        },
        onrow: function(oEvent) {
   
        var tid = oEvent.getSource().getBindingContext().getProperty("TravelId");
       this.byId("travelid").setValue(tid);
           this.dialog.close();

        }  
    });
});