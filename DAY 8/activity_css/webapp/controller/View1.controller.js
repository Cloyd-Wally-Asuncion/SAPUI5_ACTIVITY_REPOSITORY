sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("sapips.training.activitycss.controller.View1", {
        onInit() {
        },
        onInfoPress: function () {
            MessageBox.information("Hello! Hope you're having a great day.", {
                title: "Sample Message",
                styleClass: "customMessageBox"
            });
        },
 
        onThanksPress: function () {
            MessageBox.success("Thank you for visiting! See you again soon 👋!", {
                title: "Session Complete",
                styleClass: "customMessageBox"
            });
        },
 
        onPage1ToPage2: function () {
            MessageBox.confirm("Do you wish to proceed to Page 2?", {
                title: "Info",
                styleClass: "customMessageBox",
                actions: [MessageBox.Action.OK],
                onClose: function (oAction) {
                    if (oAction === MessageBox.Action.OK) {
                        this.getRouter().navTo("RouteView2");
                    }
                }.bind(this)
            });
        },
 
        onPage2ToPage1: function () {
            MessageBox.confirm("Would you like to return to Page 1?", {
                title: "Info",
                styleClass: "customMessageBox",
                actions: [MessageBox.Action.OK],
                onClose: function (oAction) {
                    if (oAction === MessageBox.Action.OK) {
                        this.getRouter().navTo("RouteView1");
                    }
                }.bind(this)
            });
        },
 
        getRouter: function () {
            return this.getOwnerComponent().getRouter();
        }
    });
});