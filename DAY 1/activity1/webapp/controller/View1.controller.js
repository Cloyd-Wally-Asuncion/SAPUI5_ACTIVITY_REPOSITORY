sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
 
    return Controller.extend("com.ui5.trng.project1.controller.View1", {
        onInit: function () {
            // Nothing needed here for now
        },
 
        onClickClear: function () {
            var oView = this.getView();
 
            oView.byId("name_inpt").setValue(null);
            oView.byId("strtNo_inpt1").setValue(null);
            oView.byId("strtNo_inpt2").setValue(null);
            oView.byId("zCode_inpt").setValue(null);
            oView.byId("city_inpt").setValue(null);
        }
    });
});