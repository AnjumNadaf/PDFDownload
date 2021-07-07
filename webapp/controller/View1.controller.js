sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("pdfdownload.controller.View1", {
			onInit: function () {

			},
			onDataExportPDF:function(oEvent){  
                 debugger;
				var columns = ["Country","Profit","Forcast","Target","Revenue"];
				var oModel = this.getOwnerComponent().getModel().getProperty("/Products");
				var data = [];

				for (var i=0; i<oModel.length; i++){
					data[i] = [oModel[i].Country,oModel[i].Profit,oModel[i].Forcast,oModel[i].Target,oModel[i].Revenue]
				}

				var doc = new jsPDF('p','pt');
				//doc.autoTable(columns,data);
				doc.autoTable(columns, data);
				doc.save("Data.pdf");
            }
		});
	});
