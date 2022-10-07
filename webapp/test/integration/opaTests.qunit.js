/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zhrbe/ebpchange/ZHRBE_EBP_CHG/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});