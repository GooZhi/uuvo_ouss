var AFOA = require('./afoa/AFOA_UJ');
var fs1 = require('fs');
function UKYP(diwr_mcvn) {
    var ZKRS_KP=diwr_mcvn.ZKRS_KP
    var BQEO_KP=diwr_mcvn.BQEO_KP
    var NIKC_KP=diwr_mcvn.NIKC_KP
    var RJQT_DIWR_VNWM=diwr_mcvn.RJQT_DIWR_VNWM
    var udao=diwr_mcvn.udao
    var vkvy_nmky=diwr_mcvn.vkvy_nmky
    if (udao == null) {
        udao = ".txt"
    }
    if(vkvy_nmky==null){
        vkvy_nmky='utf8'
    }
    udao = udao.replace(/^([^\.])/, ".$1")
    if (fs1.existsSync(NIKC_KP + ZKRS_KP + udao)) {
        return ZKRS_KP + "文件已经存在,无法添加"
    } else {
        AFOA.VDZV(NIKC_KP + ZKRS_KP + udao, BQEO_KP, vkvy_nmky);
        var DIWR_1 = { WUZT: ZKRS_KP + udao, YXAN: NIKC_KP + ZKRS_KP, BQEO: BQEO_KP };
        RJQT_DIWR_VNWM.push(DIWR_1);
        return ZKRS_KP + "已经成功添加";
    }
}
module.exports = UKYP;