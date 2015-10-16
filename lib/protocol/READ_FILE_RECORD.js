var Package = require("./tools").Package;
var pack    = require("./tools").pack2uint16;

exports.request = function (transactionId, unitId, subRequests) {
	var buf = new Buffer((subRequests.length * 7) + 1);

	buf.writeUInt8(subRequests.length * 7, 0);

	for (var i = 1; i < subRequests.length * 7; i += 7) {
		buf.writeUInt8(6, i);
		buf.writeUInt16BE(subRequests[0][0], i + 1);
		buf.writeUInt16BE(subRequests[0][1], i + 3);
		buf.writeUInt16BE(subRequests[0][2], i + 5);
	}

	return new Package(transactionId, unitId, "READ_FILE_RECORD", buf);
};

exports.response = function (transactionId, unitId, subRequests) {
	if (typeof subrequests === 'Object') {
		
	} else {
		
	}
	var dataLength = 0;
	for (var i = 0; i < subRequests.length; i++) {
		var buf = new Buffer((subRequests.length * 2) + 1);
		subRequests[i].copy(buf, (i * 2) + 1, 0, 2);
	};

	buf.writeUInt8(subRequests.length * dataLength, 0);

	return new Package(transactionId, unitId, "READ_FILE_RECORD", buf);
};
