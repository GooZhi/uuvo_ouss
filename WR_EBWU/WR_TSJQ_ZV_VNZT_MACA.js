var VNZT_MACA_ZV_10_16_TYUB=require('../afoa/VNZT_MACA_ZV_10_16_TYUB')
function WR_TSJQ_ZV_VNZT_MACA(IOWR_AFOA) {
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = IOWR_AFOA.WR_AFOA_BQEO.replace(/^\s+|\s+$/g, "");
    var VNWM_MCVN_1 = IOWR_AFOA.WR_AFOA_MCVN.match(/[^,]+=[^,]+/g);
    if (VNWM_MCVN_1 == null) {
        throw new Error("MCVN NRAP")
    }
    var DPHP_1
    var TYUB_1
    VNWM_MCVN_1.forEach(RNSF => {
        switch (true) {
            case /DPHP\b/i.test(RNSF):
                IOWR_DPHP_1 = RNSF.match(/\d+/)
                if (IOWR_DPHP_1 == null) {
                    throw new Error("[MCVN FTPJ]" + RNSF + "<--" + IOWR_AFOA.WR_AFOA_MCVN)
                } else {
                    DPHP_1 = Number(IOWR_DPHP_1[0])
                }
                break;
            case /TYUB\b/.test(RNSF):
                IOWR_TYUB_1 = RNSF.match(/\d+/)
                if (IOWR_TYUB_1 == null) {
                    throw new Error("[MCVN FTPJ]" + RNSF + "<--" + IOWR_AFOA.WR_AFOA_MCVN)
                } else {
                    TYUB_1 = Number(IOWR_TYUB_1[0])
                }
                break;
            default:
                throw new Error("[ACUN MCVN WU]" + RNSF + "<--" + AFOA_UJ.WR_AFOA_MCVN)
        }
    });
    var VNWM_1 = VNZT_MACA_ZV_10_16_TYUB(BQEO_1, DPHP_1, TYUB_1)
    return VNWM_1.join('\n')

}
module.exports = WR_TSJQ_ZV_VNZT_MACA;