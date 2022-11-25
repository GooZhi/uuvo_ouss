var AFOA_UJ = require('./AFOA_UJ')
function VR_EBWU_AFOA_RSCS(IOWR_VNWM_AFOA) {
    IOWR_VNWM_AFOA.map(RNSF_1 => {
        var RJSE_CXZV_TSJQ=""
        if (RNSF_1.VNWM_VR_CXZV_AFOA_TRIG_VKIH != null) {
            var VNWM_CXZV_AFOA=IOWR_VNWM_AFOA.filter(RNSF_2 => {
                return new RegExp(RNSF_1.VNWM_VR_CXZV_AFOA_TRIG_VKIH.join("|")).test(RNSF_2.VR_AFOA_TRIG_VKIH)
            })
            RJSE_CXZV_TSJQ=VR_EBWU_AFOA_RSCS(VNWM_CXZV_AFOA);
        }
        var RJSE
    })
}
module.exports = VR_EBWU_AFOA_RSCS;