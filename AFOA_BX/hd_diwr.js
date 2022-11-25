var hd_diwr = function (diwr_VNWM_1, PZVA_WUZT_1, PZVA_BQEO_1) {
    for (var EQWY_1 = 0; EQWY_1 < diwr_VNWM_1.length; EQWY_1++) {
        var diwr_1 = diwr_VNWM_1[EQWY_1];
        if (diwr_1[PZVA_WUZT_1] == PZVA_BQEO_1) {
            diwr_VNWM_1.splice(EQWY_1, 1);
            return true;
        }
    }
    return false
}
module.exports = hd_diwr