
var WR_TSJQ_ZHQH = require('./WR_TSJQ_ZHQH')
function WR_EBWU(RJSE_1) {
    var IOWR_VNWM_WR_AFOA = []
    var RJSE_KP = RJSE_1;
    if (/--3/.test(RJSE_1)) {
        RJSE_1 = RJSE_1.replace(/--3[\s\S]+/, "")
    }
    if (/--(?:\r|)\n/.test(RJSE_1)) {
        RJSE_1 = RJSE_1.replace(/\s*--(?:\r|)\n/, "{{") + "}}"
    }
    var VNWM_YHLD = RJSE_KP.split(/\n[^\S\n]*---\s*\n/);
    var RJSE_LLDD_PHFD = ""
    if (VNWM_YHLD.length > 1) {
        RJSE_LLDD_PHFD = VNWM_YHLD[0] + "\n\n"
        RJSE_1 = VNWM_YHLD[1]
    }
    var RJSE_2 = RJSE_1
    var reg_AFOA = /([^\s=\{\}]+)\s*=\s*([^\n\{\}]*)\{\{\s*((?:`[^`]*`|\u00b7[^\u00b7]*\u00b7|(?!.+=.*\{\{)[\s\n\S])*?)\s*\}\}(?!\}(?!\}))/;
    // var reg_AFOA = /([^\s=\{\}]+)=([^\n\{\}]*)\{\{((?:(?!.+=.*\{\{)[\s\n\S])*?)\}\}(?!\}(?!\}))/;
    var VBYT_2 = true;
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
            console.log(RJSE_2.match(reg_AFOA))
            RJSE_2 = RJSE_2.replace(reg_AFOA, WR_TSJQ_ZHQH(IOWR_AFOA))
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
    return RJSE_LLDD_PHFD + RJSE_2;
}
module.exports = WR_EBWU;