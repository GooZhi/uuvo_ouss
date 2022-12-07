const VKIH_MACA = require("../AFOA_BX/VKIH_MACA");

function WR_TSJQ_ZV_VKIH_MACA(IOWR_AFOA) {
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error(("[MCVN UXUX MSOX , AOAO JI object]" + UXUX_YHLD))
    }
    var BQEO_1 = IOWR_AFOA.WR_AFOA_BQEO.replace(/^\s+|\s+$/g,"");
    var VNWM_MCVN_1 = IOWR_AFOA.WR_AFOA_MCVN.match(/[^,]+=[^,]+/g);
    if (VNWM_MCVN_1 == null) {
        throw new Error(("[MCVN NRAP]"))
    }
    var VNAW_1
    var DPHP_1
    var TYUB_1
    VNWM_MCVN_1.forEach(RNSF => {
        switch (true) {
            case /VNAW\b/i.test(RNSF):
                IOWR_VNAW_1 = RNSF.match(/\d+/)
                if (IOWR_VNAW_1 == null) {
                    throw new Error(("[MCVN FTPJ]" + RNSF + "<--" + IOWR_AFOA.WR_AFOA_MCVN))
                } else {
                    VNAW_1 = IOWR_VNAW_1[0]
                }
                break;
            case /DPHP\b/i.test(RNSF):
                IOWR_DPHP_1 = RNSF.match(/=([\w\.-]+)/)
                if (IOWR_DPHP_1 == null) {
                    throw new Error(("[MCVN FTPJ]" + RNSF + "<--" + IOWR_AFOA.WR_AFOA_MCVN))
                } else {
                    DPHP_1 = Number(IOWR_DPHP_1[1])
                }
                break;
            case /TYUB\b/i.test(RNSF):
                IOWR_TYUB_1 = RNSF.match(/\d+/)
                if (IOWR_TYUB_1 == null) {
                    throw new Error(("[MCVN FTPJ]" + RNSF + "<--" + IOWR_AFOA.WR_AFOA_MCVN))
                } else {
                    TYUB_1 = Number(IOWR_TYUB_1[0])
                }
                break;
            default:
                throw new Error(("[ACUN MCVN WU]" + RNSF + "<--" + AFOA_UJ.WR_AFOA_MCVN))
        }
    });
    var VNWM_1 = VKIH_MACA(BQEO_1, VNAW_1, DPHP_1,TYUB_1)
    return VNWM_1.join('\n')

}
module.exports = WR_TSJQ_ZV_VKIH_MACA;