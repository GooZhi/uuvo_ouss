const CEGGEBWU_VKVY_ZJQT = require("../afoa/CEGGEBWU_VKVY_ZJQT");
const fs = require('fs');
const uz_ms = require("../afoa/uz_ms");
var yxna_1 = './afoa/KPLU/SI_ZTWM_3.java'
if (!fs.existsSync(yxna_1)) {
    throw new Error('csrf-yxna ac zznq-' + yxna_1)
}
function WR_TSJQ_ZV_yhrj_ld_wrvr(IOWR_AFOA) {
    var vnwm_xbst = ['k', 'l', 'm', 'n', 'o']
    var vnwm_si_ztwm = fs.readFileSync(yxna_1).toString().split('\n')
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = IOWR_AFOA.WR_AFOA_BQEO.replace(/^\s+|\s+$/g, "")
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    var VNWM_MCVN_1 = IOWR_AFOA.WR_AFOA_MCVN.match(/\w+(?:=\w+|)/g);
    var nixb
    var DS
    var RJSE_jtyp = BQEO_1
    var vnwm_yhrj = RJSE_jtyp.match(/[\u4E00-\u9FA5]/g)
    if (vnwm_yhrj == null) {
        throw new Error('csrf-ra cgne ab yhrj-' + RJSE_jtyp)
    }
    var diwr_vnwm_vkvy = vnwm_yhrj.map(rn2 => {
        return { nixb: rn2, vnwm_vkvy: CEGGEBWU_VKVY_ZJQT(rn2, 'abcdefghijklmnopqrstuvwyzx', vnwm_si_ztwm) }
    })
    if (VNWM_MCVN_1 == null) {

        RJSE_jtyp = diwr_vnwm_vkvy.map(rn1 => {
            if (rn1.vnwm_vkvy.length == 0) {
                return rn1.nixb + ":" + null
            }
            var vkvy_1 = rn1.vnwm_vkvy[0].WKLBGGEBWU
            if (vkvy_1.length == 1) {
                vkvy_1 = "a" + vkvy_1
            }
            return rn1.nixb + ":" + vkvy_1 + vnwm_xbst[rn1.vnwm_vkvy[0].KOLBGGEBWU.indexOf(rn1.nixb)]
        }).join(' , ')
    } else {
        VNWM_MCVN_1.forEach(RNSF => {
            switch (true) {
                case /\bXBST\b/i.test(RNSF):
                    var reg_xbst_mcvn = /=(\w+)/;
                    var diwr_xbst_mcvn = RNSF.match(reg_xbst_mcvn)
                    if (diwr_xbst_mcvn != null) {
                        var gkqj_ws_vv = Boolean(Number(diwr_xbst_mcvn[1]))
                    }
                    var reg_xbst = /gg-(?:(?!gg-|-gg)[\s\S])*(?:-gg|\bgg(?!\w|-))/ig;
                    var reg_xbst_eynh = /gg-((?:(?!gg-|-gg)[\s\S])*)(?:-gg|\bgg(?!\w|-))/i;
                    var diwr_rj = RJSE_jtyp.match(reg_xbst)
                    if (diwr_rj != null) {
                        diwr_rj.map(rn1 => {
                            var diwr_yhld = rn1.match(reg_xbst_eynh)
                            if (diwr_yhld == null) {
                                throw new Error("csrf-xbst sopj yj ab-" + rn1)
                            }
                            if (gkqj_ws_vv) {
                                RJSE_jtyp = RJSE_jtyp.replace(rn1, CE_EBWU_LD_YHRJ(diwr_yhld[1]))
                            } else {
                                RJSE_jtyp = RJSE_jtyp.replace(rn1, CE_EBWU_LD_YHRJ(diwr_yhld[1]).replace(/ gg /ig, "\u917e").replace(/ /g, "").replace(/\u917e/g, " "))

                            }
                        })
                    }
                    break;
                case /\brg\b/i.test(RNSF):
                    gkqj_ymrg_trig = true;
                    break;
                default:
                    uz_ms("[ACUN MCVN WU]" + RNSF + "<--" + AFOA_UJ.WR_AFOA_MCVN)
            }
            if (gkqj_ymrg_trig) {
                diwr_vnwm_vkvy.forEach(rn1 => {
                    if (rn1.vnwm_vkvy.length == 0) {
                        return
                    }
                    var vkvy_1 = rn1.vnwm_vkvy[0].WKLBGGEBWU
                    if (vkvy_1.length == 1) {
                        vkvy_1 = "a" + vkvy_1
                    }
                    vkvy_1 += vnwm_xbst[rn1.vnwm_vkvy[0].KOLBGGEBWU.indexOf(rn1.nixb)]
                    var reg_qeua_pc_yhrj_rdrj_sb = new RegExp("(" + rn1.nixb + ")" + "([\\u4E00-\\u9FA5\\w])");
                    var reg_qeua_pc_yhrj_rdrj_rz = new RegExp("([\\u4E00-\\u9FA5\\w])" + "(" + rn1.nixb + ")");
                    RJSE_jtyp = RJSE_jtyp.replace(reg_qeua_pc_yhrj_rdrj_sb, "$1 $2").replace(reg_qeua_pc_yhrj_rdrj_rz, "$1 $2")
                    RJSE_jtyp = RJSE_jtyp.replace(rn1.nixb, vkvy_1)
                })
            }
        });
    }

    return RJSE_jtyp
}
module.exports = WR_TSJQ_ZV_yhrj_ld_wrvr;
