const kndd_rj = require("../afoa/kndd_rj");

function WR_TSJQ_ZV_KNDD_RJ(IOWR_AFOA){
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = IOWR_AFOA.WR_AFOA_BQEO.replace(/^\s+|\s+$/g,"");
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    var VNWM_MCVN_1 = IOWR_AFOA.WR_AFOA_MCVN.match(/[^,]+=[^,]+/g);
    var KNDD_AWN
    if (VNWM_MCVN_1 == null) {
        // throw new Error("MCVN NRAP")
    }else{
    VNWM_MCVN_1.forEach(RNSF => {
        switch (true) {
            case /\b(KNDD_AWN|awn)\b/i.test(RNSF):
                IOWR_KNDD_AWN = RNSF.match(/\d+/)
                if (IOWR_KNDD_AWN == null) {
                    throw new Error("[MCVN FTPJ]" + RNSF + "<--" + IOWR_AFOA.WR_AFOA_MCVN)
                } else {
                    KNDD_AWN = IOWR_KNDD_AWN[0]
                }
                break;
            case /DPHP\b/.test(RNSF):
                IOWR_DPHP_1 = RNSF.match(/=([\w\.-]+)/)
                if (IOWR_DPHP_1 == null) {
                    throw new Error("[MCVN FTPJ]" + RNSF + "<--" + IOWR_AFOA.WR_AFOA_MCVN)
                } else {
                    DPHP_1 = Number(IOWR_DPHP_1[1])
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
                throw new Error("[ACUN MCVN WU]" + RNSF + "<--" + IOWR_AFOA.WR_AFOA_MCVN)
        }
    });
    }
    var VNWM_1 = kndd_rj(BQEO_1, KNDD_AWN)
    return VNWM_1.join('\n')
}
module.exports=WR_TSJQ_ZV_KNDD_RJ;