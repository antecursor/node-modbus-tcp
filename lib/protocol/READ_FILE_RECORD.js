var Package = require("./tools").Package;
var pack    = require("./tools").pack2uint16;

exports.request = function (transactionId, unitId, subRequests) {
	var buf = new Buffer((subRequests.length * 7) + 1);

	buf.writeUInt8(subRequests.length * 7, 0);

	for (var i = 0; i < subRequests.length; i ++) {
		for (var j = i * 7 + 1; j < subRequests.length * 7; j += 7) {
			buf.writeUInt8(6, j);
			buf.writeUInt16BE(subRequests[i][0], j + 1);
			buf.writeUInt16BE(subRequests[i][1], j + 3);
			buf.writeUInt16BE(subRequests[i][2], j + 5);
		}
	}

	return new Package(transactionId, unitId, "READ_FILE_RECORD", buf);
};