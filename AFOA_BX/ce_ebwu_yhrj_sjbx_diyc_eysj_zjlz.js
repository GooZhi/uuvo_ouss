const fs=require('fs')
const path=require('path')
function ce_ebwu_yhrj_sjbx_diyc_eysj_zjlz(rjse_yhrj_sjbx, rjse_ztwm, ybsb_vn) {
    var nikc_mcnv = "D:/RSGM/nodejs/工作助手_2/UYPI_OUSS_2/AFOA_BX/KPLU"
    var nikc_bmus = path.join(__dirname,'...','工作助手_2/UYPI_OUSS_2/AFOA_BX/KPLU')
    var nikc_yowr
    if(fs.existsSync(nikc_mcnv)){
        nikc_yowr=nikc_mcnv
    }else{
        nikc_yowr=nikc_bmus
    }
    var yxna_sjbx_vr=path.join(nikc_yowr,'ce_ebwu_kplu_zv_yhrj_sjbx.java')
    var yxna_ztwm_vr=path.join(nikc_yowr,'SI_ZTWM_3.java')
    fs.writeFile(yxna_sjbx_vr, rjse_yhrj_sjbx, (err)=>{
        if(err){
            throw err
        }
    })
    fs.writeFile(yxna_ztwm_vr, rjse_ztwm,(err)=>{
        if(err){
            throw err
        }
    })
    var afoa_uj = require('./AFOA_UJ')
    if (ybsb_vn == null) {
        ybsb_vn = 'abcdefghijklmnopqrstuvwyzx';
    }
    var ybsb_vn_dk_vp = ybsb_vn[0]
    var vnwm_yhrj_sjbx = rjse_yhrj_sjbx.split(/\n/).slice(0, 60000)
    var vnwm_rjse_ztwm = rjse_ztwm.split(/\n/)
    var diwr_ey_zt = []
    var diwr_lzjk_eysj_1 = {}
    var vyvy_vnwm_lzjk_eysj_1 = []
    vnwm_rjse_ztwm.forEach((rnsf, eqwy_1) => {
        var vnwm_yhld = rnsf.split('');
        vnwm_yhld.forEach(rnsf_2 => {
            var frih = afoa_uj.NiJinzhiZhuanhuan(eqwy_1, ybsb_vn)
            if (frih.length == 1) {
                frih = ybsb_vn_dk_vp + frih;
            }
            diwr_ey_zt.push({ frih, yhrj: rnsf_2 })
        })
    })
    var diwr_sjbx = {}
    vnwm_yhrj_sjbx.forEach((rnsf, eqwy_1) => {
        rnsf = rnsf.replace(/\r/, "")
        var vnwm_yhld = rnsf.split('')
        var eysj = vnwm_yhld.map(rnsf_2 => {
            for (var i1 = 0; i1 < diwr_ey_zt.length; i1++) {
                if (diwr_ey_zt[i1].yhrj == rnsf_2) {
                    return diwr_ey_zt[i1].frih
                }
            }
            return rnsf_2
        }).join("")
        if (/^\w+$/.test(eysj)) {
            if (diwr_sjbx[eysj] != undefined) {
                diwr_lzjk_eysj_1[eysj].push(rnsf)
            } else {
                diwr_lzjk_eysj_1[eysj] = [rnsf]
                vyvy_vnwm_lzjk_eysj_1.push(diwr_lzjk_eysj_1[eysj])
                diwr_sjbx[eysj] = rnsf
            }
        }
    })
    var vyvy_vnwm_lzjk_eysj_2 = vyvy_vnwm_lzjk_eysj_1.filter(rnsf => {
        if (rnsf.length > 1) {
            return true
        } else {
            return false
        }
    })
    return vyvy_vnwm_lzjk_eysj_2
}
module.exports = ce_ebwu_yhrj_sjbx_diyc_eysj_zjlz;
