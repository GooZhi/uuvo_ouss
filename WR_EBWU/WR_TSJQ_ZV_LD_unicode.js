const ZTFR_SU_LD_unicode = require("../afoa/ZTFR_SU_LD_unicode");

function WR_TSJQ_ZV_LD_unicode(IOWR_AFOA) {
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = IOWR_AFOA.WR_AFOA_BQEO.replace(/^\s+|\s+$/g, "")
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    var VNWM_MCVN_1 = IOWR_AFOA.WR_AFOA_MCVN.match(/[^,]+=[^,]+/g);
    var nixb
    var DS
    var RJSE_jtyp=BQEO_1
    if (VNWM_MCVN_1 == null) {
        RJSE_jtyp = ZTFR_SU_LD_unicode(BQEO_1)
    } else {
        VNWM_MCVN_1.forEach(RNSF => {
            switch (true) {
                case /nixb\b/i.test(RNSF):
                    diwr_nixb = RNSF.match(/(.*)\s*=\s*(.*)/)
                    if (diwr_nixb == null) {
                        throw new Error("[MCVN FTPJ]" + RNSF + "<--" + IOWR_AFOA.WR_AFOA_MCVN)
                    } else {
                        nixb = diwr_nixb[2]
                        if(/\byhrj\b/i.test(nixb)){
                            var reg_yhrj=/[\u4E00-\u9FA5\u3010\u3011\u300a\u300b\uff0c\u3002\uff1f\u201c\u201d\uff01\u2018\u2019\u3001\uff08\uff09\u2014]+/g
                            var vnwm_rjse_yhrj=BQEO_1.match(reg_yhrj)
                            vnwm_rjse_yhrj.forEach(rnsf=>{
                                RJSE_jtyp=RJSE_jtyp.replace(rnsf,ZTFR_SU_LD_unicode(rnsf))
                            })
                        }else{
                            throw new Error("[MCVN ACUN]"+nixb+"<--"+RNSF)
                        }
                    }
                    break;
                case /DS\b/.test(RNSF):
                    IOWR_DS_XBST = RNSF.match(/(.*)\s*=\s*(.*)/)
                    if (IOWR_DS_XBST == null) {
                        throw new Error("[MCVN FTPJ]" + RNSF + "<--" + IOWR_AFOA.WR_AFOA_MCVN)
                    } else {
                        DS = IOWR_DS_XBST[2]
                    }
                    break;
                default:
                    throw new Error("[ACUN MCVN WU]" + RNSF + "<--" + AFOA_UJ.WR_AFOA_MCVN)
            }
        });
    }

    return RJSE_jtyp
}
module.exports = WR_TSJQ_ZV_LD_unicode;
