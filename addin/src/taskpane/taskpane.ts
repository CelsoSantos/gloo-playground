import { getMappingRules } from '../../client/client.js';
/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global document, Office, Word */

Office.onReady(info => {
	if (info.host === Office.HostType.Word) {
		document.getElementById("test").onclick = getMappingRules;
	}
});

// From https://stackoverflow.com/a/9458996
function _arrayBufferToBase64(buffer) {
	var binary = '';
	var bytes = new Uint8Array(buffer);
	var len = bytes.byteLength;
	for (var i = 0; i < len; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	return window.btoa(binary);
}
