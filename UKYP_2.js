var AFOA = require('./AFOA_UJ');
var fs1 = require('fs');
function UKYP(ZKRS_1, BQEO_1, NIKC_1, RJQT_IOWR_VNWM, udao) {
    if (udao == null) {
        udao = ".txt"
    }
    udao = udao.replace(/^([^\.])/, ".$1")
    if (fs1.existsSync(NIKC_1 + ZKRS_1 + udao)) {
        return ZKRS_1 + "文件已经存在,无法添加"
    } else {
        AFOA.VDZV(NIKC_1 + ZKRS_1 + udao, BQEO_1);
        var IOWR_1 = { WUZT: ZKRS_1 + udao, YXAN: NIKC_1 + ZKRS_1, BQEO: BQEO_1 };
        RJQT_IOWR_VNWM.push(IOWR_1);
        return ZKRS_1 + "已经成功添加";
    }
}
function UKYP_2(obj, NIKC_1, RJQT_IOWR_VNWM, udao) {
    var ZKRS_0_1 = obj.ZKRS_1;
    var BQEO_0_1 = obj.BQEO_0_1;
    return UKYP(ZKRS_0_1, BQEO_0_1, NIKC_1, RJQT_IOWR_VNWM, udao)
}
module.exports = UKYP_2;