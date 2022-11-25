var WR_TSJQ_ZV_VKIH_MACA = require('./WR_TSJQ_ZV_VKIH_MACA')
var WR_TSJQ_ZV_CE_EBWU_LD_YHRJ = require('./WR_TSJQ_ZV_CE_EBWU_LD_YHRJ')
var WR_TSJQ_ZV_VNZT_MACA = require('./WR_TSJQ_ZV_VNZT_MACA')
var WR_TSJQ_ZV_HD_LZJK_QH = require('./WR_TSJQ_ZV_HD_LZJK_QH')
var WR_TSJQ_ZV_RFLD_QH = require('./WR_TSJQ_ZV_RFLD_QH')
var WR_TSJQ_ZV_RFRF_CE_EBWU = require('./WR_TSJQ_ZV_RFRF_CE_EBWU')
var WR_TSJQ_ZV_LD_unicode = require('./WR_TSJQ_ZV_LD_unicode')
var WR_TSJQ_ZV_CE_EBWU_ZTWM_BQ_ZT_MA_LLLG = require('./WR_TSJQ_ZV_CE_EBWU_ZTWM_BQ_ZT_MA_LLLG')
var WR_TSJQ_ZV_CE_EBWU_EYSJ_ZJLZ = require('./WR_TSJQ_ZV_CE_EBWU_EYSJ_ZJLZ')

function WR_TSJQ_RSCS(IOWR_AFOA) {
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    switch (IOWR_AFOA.WR_AFOA_WU) {
        case "VKIH_MACA":
            return WR_TSJQ_ZV_VKIH_MACA(IOWR_AFOA)
        case "VNZT_MACA":
            return WR_TSJQ_ZV_VNZT_MACA(IOWR_AFOA)
        case "RFLD_QH":
            return WR_TSJQ_ZV_RFLD_QH(IOWR_AFOA)
        case "HD_LZJK_QH":
            return WR_TSJQ_ZV_HD_LZJK_QH(IOWR_AFOA)
        case "RFRF_CE_EBWU":
            return WR_TSJQ_ZV_RFRF_CE_EBWU(IOWR_AFOA)
        case "CE_EBWU_LD_YHRJ":
            return WR_TSJQ_ZV_CE_EBWU_LD_YHRJ(IOWR_AFOA)
        case "CE_EBWU_SI_ZT_WM_MALG_YMCE":
            return WR_TSJQ_ZV_CE_EBWU_ZTWM_BQ_ZT_MA_LLLG(IOWR_AFOA)
        case "LD_unicode":
            return WR_TSJQ_ZV_LD_unicode(IOWR_AFOA)
        case "CE_EBWU_EYSJ_ZJLZ":
            return WR_TSJQ_ZV_CE_EBWU_EYSJ_ZJLZ(IOWR_AFOA)

        default:
            return "[WR TSJQ ACUN]" + IOWR_AFOA.WR_AFOA_WU + "<--"
    }
}
module.exports = WR_TSJQ_RSCS