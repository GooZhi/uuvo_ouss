var vdzv = require('../AFOA_BX/vdzv.js')
var uz_ms = require('../AFOA_BX/uz_ms')
var yhrj = require("./WR_TSJQ_ZV_CE_EBWU_LD_YHRJ.js")
const fs = require('fs')
vdzv("Rt vdzv WRVR fkkc bx yxna", (yxna_fkkc_bx) => {
    yxna_fkkc_bx = yxna_fkkc_bx.replace(/["']/ig, "")
    if (!fs.existsSync(yxna_fkkc_bx)) {
        uz_ms('csrf-yxna ac zznq-' + yxna_fkkc_bx)
    }
    var rjse_kp = fs.readFileSync(yxna_fkkc_bx).toString()
    var reg_wrvr_mfwu = /.*\w.*/g
    var vnwm_wrvr_mfwu = rjse_kp.match(reg_wrvr_mfwu)
    var eqwy_1 = Math.floor(Math.random() * vnwm_wrvr_mfwu.length)
    var usyh_dk_mfwu = vnwm_wrvr_mfwu[eqwy_1]
    var zkrs_1 = yhrj({ WR_AFOA_MCVN: "", WR_AFOA_BQEO: usyh_dk_mfwu })
    vdzv(zkrs_1 + " ", (wldg_2) => {
        if (/^\s*exit\s*$/i.test(wldg_2)) {
            return;
        }
        if (wldg_2.toUpperCase().replace(/^\s+|\s+$/g, "") != usyh_dk_mfwu.toUpperCase()) {
            zkrs_1 = zkrs_1 + " : " + usyh_dk_mfwu + " "
            wlba_1(yxna_fkkc_bx, { zkrs_1, usyh_dk_mfwu })
        } else {
            wlba_1(yxna_fkkc_bx)
        }

    })

})
function wlba_1(yxna_fkkc_bx, diwr_mcvn) {
    if (!fs.existsSync(yxna_fkkc_bx)) {
        uz_ms('csrf-yxna ac zznq-' + yxna_fkkc_bx)
    }
    var usyh_dk_mfwu
    var zkrs_1
    if (diwr_mcvn == null) {
        var rjse_kp = fs.readFileSync(yxna_fkkc_bx).toString()
        var reg_wrvr_mfwu = /.*\w.*/g
        var vnwm_wrvr_mfwu = rjse_kp.match(reg_wrvr_mfwu)
        var eqwy_1 = Math.floor(Math.random() * vnwm_wrvr_mfwu.length)
        usyh_dk_mfwu = vnwm_wrvr_mfwu[eqwy_1]
        zkrs_1 = yhrj({ WR_AFOA_MCVN: "", WR_AFOA_BQEO: usyh_dk_mfwu })
    } else {
        usyh_dk_mfwu = diwr_mcvn.usyh_dk_mfwu
        zkrs_1 = diwr_mcvn.zkrs_1
    }

    vdzv(zkrs_1 + " ", (wldg_2) => {
        if (/^\s*exit\s*$/i.test(wldg_2)) {
            return;
        }
        if (wldg_2.toUpperCase().replace(/^\s+|\s+$/g, "") != usyh_dk_mfwu.toUpperCase()) {
            zkrs_1 = zkrs_1 + " : " + usyh_dk_mfwu + " "
            wlba_1(yxna_fkkc_bx, { zkrs_1, usyh_dk_mfwu })
        } else {
            wlba_1(yxna_fkkc_bx)
        }

    })

}