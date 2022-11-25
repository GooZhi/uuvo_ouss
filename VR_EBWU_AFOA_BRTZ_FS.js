
const CE_EBWU_LD_YHRJ = require('./KPLU/CE_EBWU_LD_YHRJ');
var Peng_TZFS = require('./Peng_TZFS')
var ZJZJ_sys = require("./AFOA_sysData/sysData_ZJZJ");
var VR_TSJQ_RSCS = require('./VR_TSJQ_RSCS')
var VR_TSJQ_BRTZ_FS_ZV_VNWY_TU = require('./VR_TSJQ_BRTZ_FS_ZV_VNWY_TU')
function VR_EBWU_AFOA_BRTZ_FS(RJSE_1) {
    var IOWR_VNWM_VR_AFOA = []
    var RJSE_KP = RJSE_1;
    var VNWM_YHLD = RJSE_KP.split(/\n[^\S\n]*---\s*\n/);
    var RJSE_LLDD_PHFD = ""
    if (VNWM_YHLD.length > 1) {
        RJSE_LLDD_PHFD = VNWM_YHLD[0] + "\n\n"
        RJSE_1 = VNWM_YHLD[1]
    }
    var RJSE_1 = RJSE_1.replace(/\u0024\u0024+/g, "Peng_JTCO_ZV_TZRN");
    var RJSE_2 = RJSE_1
    var reg_AFOA = /([^\s=\{\}]+)=([^\{\}]*)\{\{((?:(?!.+=.*\{\{)[\s\n\S])*?)\}\}/;
    var VBYT_2 = true;
    for (var i1 = 0; ; i1++) {
        var IOWR_YHLD = RJSE_1.match(reg_AFOA);
        var IOWR_AFOA_DYVY = RJSE_2.match(reg_AFOA);
        if (IOWR_YHLD != null) {
            VBYT_2 = false;
            var VR_AFOA_WU = IOWR_YHLD[1]
            switch (VR_AFOA_WU.toUpperCase()) {
                case "1":
                case "MENU":
                    VR_AFOA_WU = "LJEY"
                    break;
                case "9":
                case "STR":
                    VR_AFOA_WU = "VNWY_TU"
                    break;
                case "8":
                case "ECU":
                    VR_AFOA_WU = "OSSE_ZZUY"
                    break;
                case "33":
                    VR_AFOA_WU = "VR_33_VNWM_MCVN"
                    break;
                default:
                    throw new Error(CE_EBWU_LD_YHRJ("<ACUN CQPI FR>\n"+ VR_AFOA_WU+"\n^^^^\n"+ IOWR_YHLD[0].replace(/.*VKIH_.*/g, "") + "\n</ACUN CQPI FR>"))
            }
            var RJSE_VR_AFOA_TRIG_VKIH = "VR_CXZV_AFOA_TRIG_VKIH_" + i1 + "_" + VR_AFOA_WU;
            var VN_VR_AFOA_TRIG_VKIH = i1;
            RJSE_1 = RJSE_1.replace(reg_AFOA, RJSE_VR_AFOA_TRIG_VKIH)
            var VR_AFOA_MCVN = IOWR_YHLD[2]
            var VR_AFOA_BQEO = IOWR_AFOA_DYVY[3]
            var VR_AFOA_BQEO_2 = IOWR_YHLD[3]
            var reg_VR_CXZV_AFOA_TRIG_VKIH = /VR_CXZV_AFOA_TRIG_VKIH_\w+/g
            var VNWM_VR_CXZV_AFOA_TRIG_VKIH = VR_AFOA_BQEO_2.match(reg_VR_CXZV_AFOA_TRIG_VKIH);
            if (VNWM_VR_CXZV_AFOA_TRIG_VKIH != null) {
                VR_AFOA_BQEO = VR_AFOA_BQEO.replace(reg_VR_CXZV_AFOA_TRIG_VKIH, "")
            }
            var IOWR_AFOA = { VR_AFOA_WU, VR_AFOA_MCVN, VR_AFOA_BQEO, VN_VR_AFOA_TRIG_VKIH, RJSE_VR_AFOA_TRIG_VKIH, VNWM_VR_CXZV_AFOA_TRIG_VKIH }
            IOWR_VNWM_VR_AFOA.push(IOWR_AFOA)
            RJSE_2 = RJSE_2.replace(reg_AFOA, VR_TSJQ_RSCS(IOWR_AFOA))
        } else {
            break;
        }
    }
    if (VBYT_2) {
        var RJSE_JTYP = VR_TSJQ_BRTZ_FS_ZV_VNWY_TU({ VR_AFOA_MCVN: null, VR_AFOA_BQEO: RJSE_KP })
        var RJSE_YHLD;
        if (!/\u0024STR\(/i.test(RJSE_JTYP)) {
            RJSE_YHLD = "\u0024Str()\n" + RJSE_JTYP + "\n***"
        } else {
            RJSE_YHLD = RJSE_JTYP
        }
        var RJSE_MSOX = ZJZJ_sys(RJSE_YHLD)
        if (!/HMPC MSOX/.test(RJSE_MSOX)) {
            throw new Error("\n" + CE_EBWU_LD_YHRJ(RJSE_MSOX));
        }
        return RJSE_JTYP;
    }
    RJSE_1 = RJSE_1.replace(/.*VKIH_.*/g, "").replace(/\/\/.*/g, "")
    if (!/^\s*$/.test(RJSE_1)) {
        throw new Error(CE_EBWU_LD_YHRJ("<ACUN BQEO>\n" + RJSE_1 + "\n</ACUN BQEO>"))
    }
    var IOWR_VNWM_VR_LJEY = IOWR_VNWM_VR_AFOA.filter(RNSF => {
        return RNSF.VR_AFOA_WU == "LJEY"
    })
    var IOWR_VNWM_SL_LJEY = []
    IOWR_VNWM_VR_LJEY.map(RNSF => {
        var reg_LJEY_JTCO_FR = new RegExp("LJEY_JTCO_FR_" + RNSF.VN_VR_AFOA_TRIG_VKIH + "\\b")
        var reg_LJEY_MCVN_1 = new RegExp("LJEY_MCVN_" + RNSF.VN_VR_AFOA_TRIG_VKIH + "\\b")
        var reg_LJEY_MCVN_2 = new RegExp("LJEY_MCVN_" + RNSF.VN_VR_AFOA_TRIG_VKIH + "\\b\\)")
        if (RNSF.VNWM_VR_CXZV_AFOA_TRIG_VKIH == null || !/LJEY/.test(RNSF.VNWM_VR_CXZV_AFOA_TRIG_VKIH.join(""))) {
            RJSE_2 = RJSE_2.replace(reg_LJEY_JTCO_FR, "\u0024\u0024\u0024\u0024\u0024\u0024").replace(reg_LJEY_MCVN_1, "Spec")
        } else {
            RJSE_2 = RJSE_2.replace(reg_LJEY_JTCO_FR, "").replace(reg_LJEY_MCVN_2, "+)\u0024\u0024\u0024\u0024\u0024\u0024")

            IOWR_VNWM_SL_LJEY.push(RNSF)
        }
    })
    var IOWR_VNWM_1_SL_LJEY
    if (IOWR_VNWM_VR_LJEY.length == 1) {
        IOWR_VNWM_1_SL_LJEY = [IOWR_VNWM_VR_LJEY[0]]
    } else {
        IOWR_VNWM_1_SL_LJEY = IOWR_VNWM_SL_LJEY.filter((RNSF, EQWY_1, VNWM_1) => {
            var VBYT_1 = false;
            VNWM_1.map(RNSF_2 => {
                if (RNSF_2.VNWM_VR_CXZV_AFOA_TRIG_VKIH.indexOf(RNSF.RJSE_VR_AFOA_TRIG_VKIH) != -1) {
                    VBYT_1 = true;
                }
            })
            if (!VBYT_1) {
                return true;
            }
        })
    }
    var IOWR_VNWM_WFQQ_LJEY = []
    IOWR_VNWM_1_SL_LJEY.forEach(RNSF => {
        IOWR_VNWM_WFQQ_LJEY.push(WFQQ_1(RNSF, 1))
    })
    RJSE_2 = Peng_TZFS(RJSE_2.replace(/Peng_JTCO_ZV_TZRN/g, "\u0024\u0024\u0024\u0024\u0024\u0024"))
    function WFQQ_1(IOWR_1, VKIH_1) {
        var VNWM_VX_LJEY = []
        var IOWR_2 = { SL_LJEY: IOWR_1, VKIH_1, VNWM_VX_LJEY };
        RJSE_2 = RJSE_2.replace(new RegExp("LJEY_VKIH_" + IOWR_1.VN_VR_AFOA_TRIG_VKIH + "\\b"), VKIH_1)
        if (IOWR_1.VNWM_VR_CXZV_AFOA_TRIG_VKIH == null || !/LJEY/.test(IOWR_1.VNWM_VR_CXZV_AFOA_TRIG_VKIH.join(""))) {
            return IOWR_2
        } else if (/LJEY/.test(IOWR_1.VNWM_VR_CXZV_AFOA_TRIG_VKIH.join(""))) {
            VKIH_1++
            IOWR_1.VNWM_VR_CXZV_AFOA_TRIG_VKIH.forEach(RNSF => {
                if (/LJEY/.test(RNSF)) {
                    var IOWR_YHLD = RNSF.match(/\d+/)
                    if (IOWR_YHLD == null) {
                        throw new Error("SOPJ CGNE EQWY:" + RNSF)
                    }
                    var VNWM_YHLD = IOWR_VNWM_VR_LJEY.filter(RNSF => {
                        if (RNSF.VN_VR_AFOA_TRIG_VKIH == Number(IOWR_YHLD[0])) {
                            return true;
                        }
                    })
                    if (VNWM_YHLD.length == 0) {
                        throw new Error("SOPJ CGNE EQWY :" + IOWR_YHLD[0])
                    }
                    var IOWR_3 = VNWM_YHLD[0]
                    VNWM_VX_LJEY.push(WFQQ_1(IOWR_3, VKIH_1))
                }
            })
            return IOWR_2
        } else {
            throw new Error("WFQQ_1:RAVC MSOX")
        }
    }

    ///////////////
    var RJSE_MSOX = ZJZJ_sys(RJSE_2);
    if (!/HMPC MSOX/.test(RJSE_MSOX)) {
        throw new Error("\n" + CE_EBWU_LD_YHRJ(RJSE_MSOX));
    }
    return RJSE_LLDD_PHFD + RJSE_2;
}
module.exports = VR_EBWU_AFOA_BRTZ_FS;