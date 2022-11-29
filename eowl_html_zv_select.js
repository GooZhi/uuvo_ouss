function eowl_html_zv_usni(vnwm_zzzz_nikc,rj_select_name){
    if(vnwm_zzzz_nikc.length==0){
        throw new Error('csrf-vnwm_zzzz_nikc.length ac aon lh vp-')
    }
    if(rj_select_name==null){
        throw new Error("csrf-mcvn nrap-")
    }
    var uxux_yhld=typeof(vnwm_zzzz_nikc)
    if(uxux_yhld!="object"){
        throw new Error('csrf-mcvn uxux aoao ji object-'+uxux_yhld)
    }
    var vnwm_jtyp=vnwm_zzzz_nikc.map(rn1=>{
        return "<option>"+rn1+"</option>"
    })
    return "<select name=\""+rj_select_name+"\"  size=\"10\">\n"+vnwm_jtyp.join("\n")+"\n            </select><br>    "
}
module.exports=eowl_html_zv_usni;