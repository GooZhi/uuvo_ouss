const eowl_html_zv_usni = require('./eowl_html_zv_select')
const fs = require('fs')

function wlyc_nikc_ouss_yhld(req, res, config) {
    if (config == null) {
        throw new Error("csrf-mcvn nrap-")
    }
    if (!fs.existsSync(config.yxna_diwr_zzzz_nikc_ouss)) {
        if (config.yxna_diwr_zzzz_nikc_ouss == undefined) {
            throw new Error("csrf-nrap nikc ouss zzzz yxna neig-" + JSON.stringify(config))
        }
        try {
            fs.mkdirSync(config.yxna_diwr_zzzz_nikc_ouss.replace(/(?:\/|\\)[^\/\\]+$/, "/"))
        } catch (err) {

        }
        var diwr_yhld = { vnwm_vdzv_nikc: [] }
        fs.writeFileSync(config.yxna_diwr_zzzz_nikc_ouss, JSON.stringify(diwr_yhld))
    }
    config.diwr_zzzz_nikc_ouss = require(config.yxna_diwr_zzzz_nikc_ouss)

    var vnwm_vdzv_nikc = config.diwr_zzzz_nikc_ouss.vnwm_vdzv_nikc
    if (vnwm_vdzv_nikc.length == 0) {
        vnwm_vdzv_nikc[0] = {nikc:"so vdzv ybkc",vkvy:"utf8",udao:".txt"}
    }
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    });
    res.write(`<title>NIKC OUSS</title>
    <h2>NIKC OUSS</h2>
    <form name="home" action="/" method="get">
        <button>go home</button>
    </form>
    <center>
        <h2>NIKC OUSS</h2>
        <div style="clear: both;">
            <form name="NIKC_OUSS_YHLD" action="/nikc_ouss" method="post">
    `);
    res.write(eowl_html_zv_usni(vnwm_vdzv_nikc.map(rn1=>{
        return rn1.nikc
    }), "select_1"));

    res.write(`udao : <input type="text" name="vdzv_udao" size="10"><br>vkvy : <input type="text" name="vdzv_vkvy" size="10"><br>yxna : <input type="text" name="vdzv_1" value="" size="20">
    <br>`+ ("rt vdzv yxna ae zqjp ussk tmtm ybkc") + `<br>
    <button>`+ ("zhms") + `</button>
</form>
</div>
<center>`)
    res.end();
}
module.exports = wlyc_nikc_ouss_yhld