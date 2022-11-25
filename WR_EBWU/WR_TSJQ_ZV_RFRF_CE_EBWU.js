const CEGGEBWU_ZJQT = require("../AFOA_BX/CEGGEBWU_ZJQT");

function WR_TSJQ_ZV_RFRF_CE_EBWU(IOWR_AFOA){
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = IOWR_AFOA.WR_AFOA_BQEO.replace(/^\s+|\s+$/g,"");
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    var VNWM_MCVN_1 = IOWR_AFOA.WR_AFOA_MCVN.match(/\w+/g);
    var YHRJ=""
    var CE_EBWU=""
    if (VNWM_MCVN_1 == null) {
         throw new Error("MCVN NRAP")
    }else{
        if(VNWM_MCVN_1[0].toUpperCase()=="YHRJ"){
            CE_EBWU=BQEO_1
        }else if(VNWM_MCVN_1[0].toUpperCase()=="WRVR"){
            YHRJ=BQEO_1
        }else{
            throw new Error("[VNWM_MCVN_1 MCVN FTPJ]"+VNWM_MCVN_1+"<--")
        }    
    }
    var VNWM_1 = CEGGEBWU_ZJQT(YHRJ,CE_EBWU.toUpperCase())
    return VNWM_1.join('\n')
}
module.exports=WR_TSJQ_ZV_RFRF_CE_EBWU;