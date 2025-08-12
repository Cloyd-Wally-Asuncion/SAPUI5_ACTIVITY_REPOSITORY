sap.ui.define([
    "sap/m/library",
    "sap/ui/model/type/Currency"
],
    function (mobileLibrary, Currency) {
        "use strict";
 
        return {
            formatMail: function (sEid, sDomain, sSubject, sBody) {
                return mobileLibrary.URLHelper.normalizeEmail(
                    sEid + sDomain,
                    sSubject + " " + sEid,
                    sBody
                );
            },
 
            formatStockValue: function (fUnitPrice, iStockLevel, sCurrCode) {
                var oCurrency = new Currency();
                return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");
            }
        }
    });
 