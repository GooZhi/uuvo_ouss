const wr_afoa_bx = require("./wr_afoa_bx")

var diwr_vnwm_tsjq = new wr_afoa_bx().diwr_vnwm_tsjq

function WR_AFOA_RJOK(bqeo_kp, rj_nixb) {
    switch (true) {
        case /afoa_wu/i.test(rj_nixb):
            return diwr_vnwm_tsjq.map(rn1 => {
                return rn1.wr_afoa_wu
            }).join('\n\n')
        case /afoa_lzm_wu/i.test(rj_nixb):
            return diwr_vnwm_tsjq.map(rn1 => {
                return rn1.vnwm_wr_afoa_lzm_wu.join(',')
            }).join('\n\n')
        case /csrf/i.test(rj_nixb):
            return diwr_vnwm_tsjq.map(rn1 => {
                return rn1.csrf
            }).join('\n\n')
        case /klch/i.test(rj_nixb):
            return diwr_vnwm_tsjq.map(rn1 => {
                return rn1.klch
            }).join('\n\n')
        case /^sopc$/i.test(rj_nixb):
            return diwr_vnwm_tsjq.map(rn1=>{
                return rn1.vnwm_wr_afoa_lzm_wu.map(rn2=>{
                    return "md-"+rn2+"-md"
                }).join(' ae ')+":\n"+rn1.csrf+"\nklch:\n"+rn1.klch.replace(/\n[^\n\S]+/g,"\n")
            }).join("\n\n")
        default:
            throw new Error('acun mcvn', { cause: { nixb: rj_nixb, kp: "" } })
    }
}
module.exports = WR_AFOA_RJOK;