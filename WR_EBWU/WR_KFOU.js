const wr_afoa_bx = require('./wr_afoa_bx')
function WR_KFOU(DIWR_AFOA, neig = { diwr_vnwm_tsjq: [] }) {
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = DIWR_AFOA.WR_AFOA_BQEO.replace(/^\s+|\s+$/g, "");
    var VNWM_MCVN_1 = DIWR_AFOA.WR_AFOA_MCVN.match(/[^,]+=[^,]+/g);
    const rh_1 = neig.diwr_vnwm_tsjq.find((rn1) => {
        return rn1.vnwm_wr_afoa_lzm_wu.includes(BQEO_1.trim().toUpperCase())
    })
    if (rh_1) {
        return `## ${rh_1.zkrs}\n\nLZM WU: ${rh_1.vnwm_wr_afoa_lzm_wu.join(',')}\n\n${rh_1.csrf}\n\n${rh_1.klch}`
    } else {
        return neig.diwr_vnwm_tsjq.map(rn1 => {
            return `## ${rn1.zkrs}\n\nLZM WU: ${rn1.vnwm_wr_afoa_lzm_wu.join(',')}\n\n${rn1.csrf}\n\n${rn1.klch}`
        }).join('\n\n\n')
    }

}
module.exports = WR_KFOU;