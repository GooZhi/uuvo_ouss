const wr_afoa_bx = require("./wr_afoa_bx")
const WR_TSJQ_ZV_CE_EBWU_LD_YHRJ = require("./WR_TSJQ_ZV_CE_EBWU_LD_YHRJ")
var diwr_vnwm_tsjq = new wr_afoa_bx().diwr_vnwm_tsjq

function WR_AFOA_RJOK(bqeo_kp, rj_nixb, ebwu) {
    if (ebwu == null) {
        ebwu = "WRVR"
    }
    switch (true) {
        case /afoa_wu/i.test(rj_nixb):
            return diwr_vnwm_tsjq.map(rn1 => {
                return rn1.wr_afoa_wu
            }).join('\n---------------\n')
        case /afoa_lzm_wu/i.test(rj_nixb):
            return diwr_vnwm_tsjq.map(rn1 => {
                return rn1.vnwm_wr_afoa_lzm_wu.join(',')
            }).join('\n---------------\n')
        case /csrf/i.test(rj_nixb):
            return diwr_vnwm_tsjq.map(rn1 => {
                return rn1.csrf
            }).join('\n---------------\n')
        case /klch/i.test(rj_nixb):
            return diwr_vnwm_tsjq.map(rn1 => {
                return rn1.klch
            }).join('\n---------------\n')
        case /^sopc$/i.test(rj_nixb):
            var diwr_xbst_kibl
            if (/\byhrj\b/i.test(ebwu)) {
                var rj_yhld = diwr_vnwm_tsjq.map(rn1 => {
                    var rj_yhld_2 = "gg-cqpi fr: " + rn1.vnwm_wr_afoa_lzm_wu.map(rn2 => {
                        return "md-" + rn2 + "-md"
                    }).join(' ae ') + ":\n"
                    rj_yhld_2 += "csrf: "+rn1.csrf + "\nklch:\n-gg";
                    var diwr_yhld = { WR_AFOA_WU: "WRVR_LD_YHRJ", WR_AFOA_MCVN: "XBST=0", WR_AFOA_BQEO: rj_yhld_2 }
                    return WR_TSJQ_ZV_CE_EBWU_LD_YHRJ(diwr_yhld) + rn1.klch.replace(/\n[^\n\S]+/g, "\n")
                }).join("\n---------------\n")
                return rj_yhld
            }
            else {
                var rj_yhld = diwr_vnwm_tsjq.map(rn1 => {
                    return "cqpi fr: "+rn1.vnwm_wr_afoa_lzm_wu.map(rn2 => {
                        return "md-" + rn2 + "-md"
                    }).join(' ae ') + ":\n" + "csrf: "+rn1.csrf + "\nklch:\n" + rn1.klch.replace(/\n[^\n\S]+/g, "\n")
                }).join("\n---------------\n")
                return rj_yhld
            }

        default:
            throw new Error('acun mcvn', { cause: { nixb: rj_nixb, kp: "" } })
    }
}
module.exports = WR_AFOA_RJOK;