function WLYC_unicode_LDRG(req,res) {
    var ZTFR_SU_LD_unicode=require('./afoa/ZTFR_SU_LD_unicode')
    var unicode_LD_ZTFR_SU=require('./afoa/unicode_LD_ZTFR_SU')
    var JTYP_1 = ZTFR_SU_LD_unicode(req.body.VDZV_1)
    var JTYP_2 = unicode_LD_ZTFR_SU(req.body.VDZV_1)
    res.render('unicode_LDRG', { JTYP_1, JTYP_2 });
}
module.exports = WLYC_unicode_LDRG;