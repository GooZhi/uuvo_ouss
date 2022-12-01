function WRVR_LD_YHRJ_XBST_KIBL(rj_kp) {
    var rj_1 = rj_kp.replace(/gg-/ig, "xbst_kibl_gg_ld").replace(/md-/ig, "xbst_kibl_md_ld").replace(/-gg/ig, "xbst_kibl_gg_ds").replace(/-md/ig, "xbst_kibl_md_ds")
    return { rj_kp, rj_jtyp: rj_1, vnwm_xbst_dyih: [{ xbst: "gg-", reg_xbst: /gg-/ig, xbst_dyih: "xbst_kibl_gg_ld" }, { xbst: "md-", reg_xbst: /md-/ig, xbst_dyih: "xbst_kibl_md_ld" }, { xbst: "-gg", reg_xbst: /-gg/ig, xbst_dyih: "xbst_kibl_gg_ds" }, { xbst: "-md", reg_xbst: /-md/ig, xbst_dyih: "xbst_kibl_md_ds" }] }
}
module.exports = WRVR_LD_YHRJ_XBST_KIBL