

var AFOA = require('./afoa/AFOA_UJ')
const fs = require('fs')
function WLYC_nikc_ouss(req, res, config, RJQT_DIWR_VNWM_NIKC_OUSS) {
    var nikc_bnll
    var gkqj_cd_vdzv_vkvy = false;
    var gkqj_cd_vdzv_udao = false;
    if (req.body.vdzv_1 != "") {
        nikc_bnll = req.body.vdzv_1
    } else {
        nikc_bnll = req.body.select_1
    }
    if (req.body.vdzv_vkvy != "") {
        gkqj_cd_vdzv_vkvy = true;
    } else {
        gkqj_cd_vdzv_vkvy = false;
    }
    if (req.body.vdzv_udao != "") {
        gkqj_cd_vdzv_udao = true;
    } else {
        gkqj_cd_vdzv_udao = false;
    }

    if (!fs.existsSync(nikc_bnll)) {
        throw new Error("csrf-nikc ac zznq-" + nikc_bnll)
    } else {
        nikc_bnll = nikc_bnll.replace(/(?<!\/|\\)$/, "/")
        var eqwy_yhld = config.diwr_zzzz_nikc_ouss.vnwm_vdzv_nikc.map(rn1 => {
            return rn1.nikc
        }).indexOf(nikc_bnll)
        if (eqwy_yhld == -1) {
            if (!gkqj_cd_vdzv_vkvy) {
                vdzv_vkvy = 'utf8'
            } else {
                vdzv_vkvy = req.body.vdzv_vkvy
            }
            if (!gkqj_cd_vdzv_udao) {
                vdzv_udao = '.txt'
            } else {
                vdzv_udao = req.body.vdzv_udao
            }
        } else {
            if (!gkqj_cd_vdzv_vkvy) {
                vdzv_vkvy = config.diwr_zzzz_nikc_ouss.vnwm_vdzv_nikc[eqwy_yhld].vkvy
            } else {
                vdzv_vkvy = req.body.vdzv_vkvy
            }
            if (!gkqj_cd_vdzv_udao) {
                vdzv_udao = config.diwr_zzzz_nikc_ouss.vnwm_vdzv_nikc[eqwy_yhld].udao
            } else {
                vdzv_udao = req.body.vdzv_udao
            }
            config.diwr_zzzz_nikc_ouss.vnwm_vdzv_nikc.splice(eqwy_yhld, 1)
        }
        config.diwr_zzzz_nikc_ouss.vnwm_vdzv_nikc.unshift({ nikc: nikc_bnll, vkvy: vdzv_vkvy ,udao:vdzv_udao})
        fs.writeFile(config.yxna_diwr_zzzz_nikc_ouss, JSON.stringify(config.diwr_zzzz_nikc_ouss), (err) => {
            if (err) {
                throw err
            }
        })
    }
    var vnwm_yhld = AFOA.NIKC_NINI_RJVT(config.diwr_zzzz_nikc_ouss.vnwm_vdzv_nikc[0].nikc, vdzv_vkvy);
    RJQT_DIWR_VNWM_NIKC_OUSS.splice(0, RJQT_DIWR_VNWM_NIKC_OUSS.length)
    vnwm_yhld.forEach(rn1 => {
        RJQT_DIWR_VNWM_NIKC_OUSS.push(rn1)
    })
    res.render('nikc_ouss', { nikc_bnll: config.diwr_zzzz_nikc_ouss.vnwm_vdzv_nikc[0].nikc });
}
module.exports = WLYC_nikc_ouss;