sap.ui.define([
    "sap/ui/core/mvc/Controller"
],function (Controller)  {
    "use strict";

    return Controller.extend("com.f4help.projectf4.controller.View1", {
        onInit() {
        },
        Onf4: function() {
            // sap.ui.xmlfragment("ID for fragment", "path for fragment","controller for fragment" );
           this.dialog = sap.ui.xmlfragment(this.getView().getId(), "com.f4help.projectf4.view.f4",this);
          // this is for binding for data 
           this.getView().addDependent(this.dialog);
            this.dialog.open();  
        },
        Onclose: function() {
        this.dialog.close();

        }   






    });
});