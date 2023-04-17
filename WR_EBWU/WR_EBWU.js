
var WR_TSJQ_ZHQH = require('./WR_TSJQ_ZHQH')
async function WR_EBWU(RJSE_1) {
    var IOWR_VNWM_WR_AFOA = []
    var RJSE_KP = RJSE_1;
    var RJSE_2 = RJSE_1
    var reg_AFOA = /([^\s=\{\}]+)\s*=\s*([^\n\{\}]*)\{\{\s*((?:`[^`]*`|\u00b7[^\u00b7]*\u00b7|(?!.+=.*\{\{)[\s\n\S])*?)\s*\}\}(?!\}(?!\}))/;
    // var reg_AFOA = /([^\s=\{\}]+)=([^\n\{\}]*)\{\{((?:(?!.+=.*\{\{)[\s\n\S])*?)\}\}(?!\}(?!\}))/;
    var VBYT_2 = true;
    var vnwm_usni = []
    for (var i1 = 0; ; i1++) {
        var IOWR_YHLD = RJSE_1.match(reg_AFOA);
        var IOWR_AFOA_DYVY = RJSE_2.match(reg_AFOA);
        if (IOWR_YHLD != null) {
            VBYT_2 = false;
            var WR_AFOA_WU = IOWR_YHLD[1]
            var RJSE_WR_AFOA_TRIG_VKIH = "WR_CXZV_AFOA_TRIG_VKIH_" + i1 + "_" + WR_AFOA_WU;
            var VN_WR_AFOA_TRIG_VKIH = i1;
            RJSE_1 = RJSE_1.replace(reg_AFOA, RJSE_WR_AFOA_TRIG_VKIH)
            var WR_AFOA_MCVN = IOWR_YHLD[2]
            var WR_AFOA_BQEO = IOWR_AFOA_DYVY[3]
            var WR_AFOA_BQEO_2 = IOWR_YHLD[3]
            var reg_WR_CXZV_AFOA_TRIG_VKIH = /WR_CXZV_AFOA_TRIG_VKIH_\w+/g
            var VNWM_WR_CXZV_AFOA_TRIG_VKIH = WR_AFOA_BQEO_2.match(reg_WR_CXZV_AFOA_TRIG_VKIH);
            if (VNWM_WR_CXZV_AFOA_TRIG_VKIH != null) {
                WR_AFOA_BQEO = WR_AFOA_BQEO.replace(reg_WR_CXZV_AFOA_TRIG_VKIH, "")
            }
            var IOWR_AFOA = { WR_AFOA_WU, WR_AFOA_MCVN, WR_AFOA_BQEO, VN_WR_AFOA_TRIG_VKIH, RJSE_WR_AFOA_TRIG_VKIH, VNWM_WR_CXZV_AFOA_TRIG_VKIH }
            IOWR_VNWM_WR_AFOA.push(IOWR_AFOA)
            var JTYJ_YHLD = WR_TSJQ_ZHQH(IOWR_AFOA)
            if (/string|number/.test(typeof (JTYJ_YHLD))) {
                RJSE_2 = RJSE_2.replace(reg_AFOA, JTYJ_YHLD)
            } else {
                if (typeof (JTYJ_YHLD) == 'object') {
                    vnwm_usni.push(JTYJ_YHLD)
                } else {
                    uz_ms('csrf-eowl uxux ftpj-')
                }
                RJSE_2 = RJSE_2.replace(reg_AFOA, "")
            }

        } else {
            break
        }
    }
    if (VBYT_2) {
        RJSE_JTYP = false
        return RJSE_JTYP;
    }
    RJSE_1 = RJSE_1.replace(/.*VKIH_.*/g, "").replace(/\/\/.*/g, "")
    if (!/^\s*$/.test(RJSE_1)) {
        throw new Error("<ACUN BQEO>\n" + RJSE_1 + "\n</ACUN BQEO>")
    }
    ///////////////
    rj_jtyj = RJSE_2
    return { rj_jtyj, vnwm_usni };
}
module.exports = WR_EBWU;