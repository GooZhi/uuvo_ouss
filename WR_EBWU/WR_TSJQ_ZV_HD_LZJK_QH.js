const HD_LZJK = require("../AFOA_BX/HD_LZJK");

function WR_TSJQ_ZV_HD_LZJK_QH(IOWR_AFOA) {
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = IOWR_AFOA.WR_AFOA_BQEO.replace(/^\s+|\s+$/g, "")
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    var VNWM_MCVN_1 = IOWR_AFOA.WR_AFOA_MCVN.match(/[^,]+=[^,]+/g);
    var LG
    var DS
    if (VNWM_MCVN_1 == null) {
        
    } else {
        VNWM_MCVN_1.forEach(RNSF => {
            switch (true) {
                case /LG\b/i.test(RNSF):
                    IOWR_LG_XBST = RNSF.match(/(.*)\s*=\s*(.*)/)
                    if (IOWR_LG_XBST == null) {
                        throw new Error("[MCVN FTPJ]" + RNSF + "<--" + IOWR_AFOA.WR_AFOA_MCVN)
                    } else {
                        LG = IOWR_LG_XBST[2]
                    }
                    break;
                case /DS\b/i.test(RNSF):
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

    var RJSE_1 = HD_LZJK(BQEO_1, LG, DS)
    return RJSE_1
}
module.exports = WR_TSJQ_ZV_HD_LZJK_QH;