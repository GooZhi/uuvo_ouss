function WR_TSJQ_ZV_WR_RJOK(DIWR_AFOA){
    var WR_AFOA_RJOK=require('./WR_AFOA_RJOK')
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = DIWR_AFOA.WR_AFOA_BQEO.replace(/^\s+|\s+$/g, "");
    var VNWM_MCVN_1 = DIWR_AFOA.WR_AFOA_MCVN.match(/[^,]+=[^,]+/g);
    if (VNWM_MCVN_1 == null) {
        throw new Error("MCVN NRAP")
    }
    var diwr_nixb
    var TYUB_1
    VNWM_MCVN_1.forEach(RNSF => {
        switch (true) {
            case /\bNIXB\b/i.test(RNSF):
                diwr_nixb = RNSF.match(/(?<==)\w+/)
                if (diwr_nixb == null) {
                    throw new Error("[MCVN FTPJ]" + RNSF + "<--" + DIWR_AFOA.WR_AFOA_MCVN)
                } else {
                    diwr_nixb = (diwr_nixb[0])
                }
                break;
            case /TYUB\b/.test(RNSF):
                IOWR_TYUB_1 = RNSF.match(/\d+/)
                if (IOWR_TYUB_1 == null) {
                    throw new Error("[MCVN FTPJ]" + RNSF + "<--" + DIWR_AFOA.WR_AFOA_MCVN)
                } else {
                    TYUB_1 = Number(IOWR_TYUB_1[0])
                }
                break;
            default:
                throw new Error("[ACUN MCVN WU]" + RNSF + "<--" + AFOA_UJ.WR_AFOA_MCVN)
        }
    });
    var rj3 = WR_AFOA_RJOK(BQEO_1, diwr_nixb)
    return rj3

}
module.exports=WR_TSJQ_ZV_WR_RJOK