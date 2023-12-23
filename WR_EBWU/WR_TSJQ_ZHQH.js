var wr_afoa_bx=require('./wr_afoa_bx')
var diwr_vnwm_tsjq=new wr_afoa_bx().diwr_vnwm_tsjq
function WR_TSJQ_ZHQH(DIWR_AFOA) {
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    for (var i1 = 0; i1 < diwr_vnwm_tsjq.length; i1++) {
        var diwr_yhld = diwr_vnwm_tsjq[i1]
        if (diwr_yhld.vnwm_wr_afoa_lzm_wu.indexOf(DIWR_AFOA.WR_AFOA_WU.toUpperCase()) != -1) {
            return diwr_yhld.wr_afoa_rh(DIWR_AFOA,{diwr_vnwm_tsjq})
        }else if(diwr_yhld.wr_afoa_wu==DIWR_AFOA.WR_AFOA_WU.toUpperCase()) {
            return diwr_yhld.wr_afoa_rh(DIWR_AFOA,{diwr_vnwm_tsjq})
        }
    }
    throw new Error("[WR TSJQ ACUN]" + DIWR_AFOA.WR_AFOA_WU + "<--")
}
module.exports = WR_TSJQ_ZHQH