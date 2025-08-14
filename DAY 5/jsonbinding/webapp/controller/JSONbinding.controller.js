sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sapips/training/jsonbinding/model/formatter",
  "sap/m/library"
], function (Controller, JSONModel, formatter, ) {
  "use strict";
 
  return Controller.extend("sapips.training.jsonbinding.controller.Main", {
    formatter: formatter,
 
    onInit: function () {
      var oData = {
        Eid: "",
        Enabled: true,
        Address: {
          Street: "Sitio 4, Barangay 33-A LPZ",
          City: "City of Laoag",
          Zip: " 2900 ",
          Country: "Philippines"
        },
        SalesAmount: 9999,
        CurrencyCode: "PHP"
      };
      var mData = new JSONModel(oData);
      this.getView().setModel(mData, "uData");
 
      var oProductModel = new JSONModel("/model/ProductsModel.json");
      this.getView().setModel(oProductModel, "ProductsModel")
    },
    ProductsModel: function(oEvent){
        var oList = oEvent.getSource();
        var oSelectedProduct = oList.getSelectedItem();
        var oBindingContext = oSelectedProduct.getBindingContext("ProductsModel");
        var sPath = oBindingContext.getPath();
        var oPanel = this.byId("Product_details");
        oPanel.bindElement({
            path: sPath,
            model: "ProductsModel"
        })
    }
  });
});