

var encoding = require('encoding');
var { exec } = require('child_process');
const WR_AFOA_RJOK = require('./WR_EBWU/WR_AFOA_RJOK');
function WLYC_WR_EBWU_ATRS(req, res) {
    var RJSE_KP = req.body.VDZV_1
    var RJOK_SOPC
    RJOK_SOPC = WR_AFOA_RJOK(RJSE_KP, "sopc", "wrvr")
    res.render('WR_EBWU_ATRS', { RJOK_SOPC });
    // exec('clip').stdin.end(encoding.convert(RJOK_SOPC, 'gbk', 'utf8'))
}
module.exports = WLYC_WR_EBWU_ATRS;