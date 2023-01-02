const marked = require('marked');
const wk_mk_html_code = require('./wk_mk_html_code');
function md_RJOK_html_fs(rj_kp, diwr_mcvn) {
    var rj_1 = rj_kp
    rj_1 = marked.marked(rj_1)
    if (diwr_mcvn != null && diwr_mcvn.gkqj_dyvy_nppr) {
        rj_1 = wk_mk_html_code(rj_1, 'javascript')
    }
    return rj_1
}
module.exports = md_RJOK_html_fs