sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sapips/training/jsonbinding/model/formatter",
  "sap/m/library"
], function (Controller, JSONModel, formatter, mobileLibrary) {
  "use strict";
 
  return Controller.extend("sapips.training.jsonbinding.controller.View", {
    formatter: formatter,
 
    onInit: function () {
      var oData = new JSONModel({
        EID: " ",
        Enabled: true,
        Address: {
          Street: " 33-A ",
          City: " Laoag City,",
          Zip: " 2900, ",
          Country: "Philippines"
        },
        SalesAmount: "1000",
        CurrencyCode: "PHP"
      });
      this.getView().setModel(oEmployeeData, "DataModel");
 
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