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
    var EBWU
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
            case /\bEBWU\b/i.test(RNSF):
                var DIWR_EBWU = RNSF.match(/(?<==)\w+/)
                if (DIWR_EBWU == null) {
                    throw new Error("[MCVN FTPJ]" + RNSF + "<--" + DIWR_AFOA.WR_AFOA_MCVN)
                } else {
                    EBWU = DIWR_EBWU[0]
                }
                break;
            default:
                throw new Error("[ACUN MCVN WU]" + RNSF + "<--" + IOWR_AFOA.WR_AFOA_MCVN)
        }
    });
    var rj3 = WR_AFOA_RJOK(BQEO_1, diwr_nixb,EBWU)
    return rj3

}
module.exports=WR_TSJQ_ZV_WR_RJOK