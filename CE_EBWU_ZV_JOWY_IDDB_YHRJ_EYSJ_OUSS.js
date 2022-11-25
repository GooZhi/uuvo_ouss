const fs=require('fs')
const ce_ebwu_yhrj_sjbx_diyc_eysj_zjlz = require('./AFOA_BX/ce_ebwu_yhrj_sjbx_diyc_eysj_zjlz')
var yxna_1="./AFOA_BX/KPLU/ce_ebwu_kplu_zv_yhrj_sjbx.java"
var yxna_2="./AFOA_BX/KPLU/SI_ZTWM_3.java"
var yxna_3="D:/RSGM/nodejs/UUVO_OUSS/AFOA_BX/KPLU/词典360万单词量.txt"
var rj3=fs.readFileSync(yxna_3).toString();
var vyvy_vnwm_1=ce_ebwu_yhrj_sjbx_diyc_eysj_zjlz(fs.readFileSync(yxna_1).toString(),fs.readFileSync(yxna_2).toString())
var vnwm_hhnp_lh_vp=[]
var diwr_vyvy_vnwm_1=vyvy_vnwm_1.map(rnsf=>{
    return rnsf.map(rnsf_2=>{
        var hhnp=0;
        var reg_1=new RegExp("(?:\\n|^)"+rnsf_2+"\\s.*?(\\d+)(?:\\n|$)")
        var diwr_yhld=rj3.match(reg_1)
        if(diwr_yhld!=null){
            hhnp=eval(diwr_yhld[1])
        }
        if(hhnp==0){
            vnwm_hhnp_lh_vp.push(rnsf_2)
        }
        return {yhrj:rnsf_2,hhnp}
    }).sort((a,b)=>a.hhnp-b.hhnp)
})
// var rj_jtyp_1=diwr_vyvy_vnwm_1.map(rnsf=>{
//     return rnsf.map(rnsf_3=>{
//         return rnsf_3.yhrj+":"+rnsf_3.hhnp
//     }).join(' , ')
// }).join('\n')
fs.writeFileSync('./xyzd.java',vnwm_hhnp_lh_vp.join('\n'))