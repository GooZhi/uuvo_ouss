const fs=require('fs')
const ce_ebwu_yhrj_sjbx_diyc_eysj_zjlz = require('./ce_ebwu_yhrj_sjbx_diyc_eysj_zjlz')
var yxna_1=`D:\RSGM\nodejs\UUVO_OUSS\AFOA_BX\KPLU\ce_ebwu_kplu_zv_yhrj_sjbx.java`
var yxna_2="D:\\RSGM\\nodejs\\node_OUSS\\KPLU\\SI_ZTWM_3.java"
var rj_jtyp_1=ce_ebwu_yhrj_sjbx_diyc_eysj_zjlz(yxna_1,yxna_2).map(rnsf=>{
    return rnsf.map(rnsf_2=>{
        return rnsf_2.yhrj
    }).join(' , ')
}).join('\n')

fs.write('./xyzd.java',rj_jtyp_1)