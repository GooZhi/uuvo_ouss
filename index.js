const child_process = require('child_process')
const commd = require('./scripts/commd')
const outputs = require('./scripts/outputs')
var express = require('express');
const bodyParser = require('body-parser');
var UKYP_RTUL = require('./WLYC_UKYP')
var ZKRS_DREQ_RTUL = require('./ZKRS_DREQ_RTUL')
var BQEO_DREQ_RTUL = require('./BQEO_DREQ_RTUL')
var RJQT_WDBU_RTUL = require('./RJQT_WDBU_RTUL')
var WLYC_ASCIIGGLDRG = require('./WLYC_ASCIIGGLDRG');
var WLYC_nikc_ouss = require('./WLYC_nikc_ouss');
var WLYC_EYRHGGHQTB = require('./WLYC_EYRHGGHQTB');
var WLYC_DIZCGGOUSS = require('./WLYC_DIZCGGOUSS');
var WLYC_ZSGGTRGGYJGGEYRH = require('./WLYC_ZSGGTRGGYJGGEYRH');
var WLYC_EOSRGGJUZCGGTZGGYJEYRH = require('./WLYC_EOSRGGJUZCGGTZGGYJEYRH');
var WLYC_EYRH_NINI_HQMV_YENH_YYHA = require('./WLYC_EYRH_NINI_HQMV_YENH_YYHA');
var WLYC_NINI_SIIH_DIAX = require('./WLYC_NINI_SIIH_DIAX');
var WLYC_SIIHGGUXGGRJSEGGBRTZGGFS = require('./WLYC_SIIHGGUXGGRJSEGGBRTZGGFS');
var WLYC_VKVY_LD_TYUB_VN_ZNZK_NQLL = require('./WLYC_VKVY_LD_TYUB_VN_ZNZK_NQLL');
var WLYC_VKVY_LD_TYUB_VN_ZNZK_NQUD = require('./WLYC_VKVY_LD_TYUB_VN_ZNZK_NQUD');
var WLYC_sysData_ZJZJ = require('./WLYC_sysData_ZJZJ');
var WLYC_unicode_LDRG = require('./WLYC_unicode_LDRG')
var WLYC_WR_EBWU = require('./WLYC_WR_EBWU')
var AFOA = require('./afoa/AFOA_UJ');
var RJQT_DIWR_VNWM_NODE_OUSS;
var RJQT_DIWR_VNWM_NIKC_OUSS = [];
var vnwm_NIKC_OUSS_DK_NIKC = [];
var app = express();
app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }));
var config = require("./config.json");
const wlyc_nikc_ouss_yhld = require('./wlyc_nikc_ouss_yhld');
const WLYC_WR_EBWU_ATRS = require('./WLYC_WR_EBWU_ATRS');
const WLYC_SLRH_JYUY = require('./WLYC_SLRH_JYUY');
var nikc_zpyb_node = config.nikc_zpyb_node
var handlebars = require('express3-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || config.port);


app.get('/', function (req, res) {
    res.render('home', { osse: config.version, piqr: config.piqr });
});
app.get('/GLRH', function (req, res) {
    res.render('GLRH');
});
app.get('/HD_LZJK', function (req, res) {
    res.render('HD_LZJK');
});
app.get('/HD_LZJK_FYWYGGXBST', function (req, res) {
    res.render('HD_LZJK_FYWYGGXBST');
});
app.get('/DIZCGGOUSS', function (req, res) {
    res.render('DIZCGGOUSS');
});
app.get('/QH_MAGM', function (req, res) {
    res.render('QH_MAGM');
});
app.get('/ARAGGGVDGGLDRG', function (req, res) {
    res.render('ARAGGGVDGGLDRG');
});
app.get('/unicode_LDRG', function (req, res) {
    res.render('unicode_LDRG');
});
app.get('/WR_EBWU', function (req, res) {
    res.render('WR_EBWU');
});
app.get('/node_ouss', function (req, res) {
    RJQT_DIWR_VNWM_NODE_OUSS = AFOA.NIKC_NINI_RJVT(nikc_zpyb_node);
    res.render('node_ouss');
});
app.get('/nikc_ouss_yhld', function (req, res) {
    wlyc_nikc_ouss_yhld(req, res, config)
});
app.post('/nikc_ouss', function (req, res) {
    WLYC_nikc_ouss(req, res, config, RJQT_DIWR_VNWM_NIKC_OUSS)
});
app.get('/SLRH_JYUY', function (req, res) {
    res.render('SLRH_JYUY')
});

app.post('/SLRH_JYUY', function (req, res) {
    WLYC_SLRH_JYUY(req, res)
});

app.get('/WR_EBWU_ATRS', function (req, res) {
    WLYC_WR_EBWU_ATRS(req, res)
});
app.get('/ASCIIGGLDRG', function (req, res) {
    res.render('ASCIIGGLDRG');
});
app.get('/ZSGGTRGGYJGGEYRH', function (req, res) {
    res.render('ZSGGTRGGYJGGEYRH');
});
app.get('/EOSRGGJUZCGGTZGGYJGGEYRH', function (req, res) {
    res.render('EOSRGGJUZCGGTZGGYJGGEYRH');
});
app.get('/EYRH_REUY', function (req, res) {
    res.render('EYRH_REUY');
});
app.get('/EYRH_NINI_HQMV_YENH_YYHA', function (req, res) {
    res.render('EYRH_NINI_HQMV_YENH_YYHA');
});
app.get('/EYRH_NINI_HQMV', function (req, res) {
    res.render('EYRH_NINI_HQMV');
});
app.get('/yfxb_fkkc', function (req, res) {
    res.render('yfxb_fkkc');
});
app.get('/EYRHGGHQTB', function (req, res) {
    res.render('EYRHGGHQTB');
});
app.get('/NINI_SIIH_DIAX', function (req, res) {
    res.render('NINI_SIIH_DIAX');
});
app.get('/SIIHGGUXGGRJSEGGBRTZGGFS', function (req, res) {
    res.render('SIIHGGUXGGRJSEGGBRTZGGFS');
});
app.get('/EYRH_REUY_CJZY', function (req, res) {
    res.render('EYRH_REUY_CJZY');
});
app.get('/VKVY_LD_TYUB_VN_ZNZK_NQUD', function (req, res) {
    res.render('VKVY_LD_TYUB_VN_ZNZK_NQUD');
});
app.get('/VKVY_LD_TYUB_VN_ZNZK_NQLL', function (req, res) {
    res.render('VKVY_LD_TYUB_VN_ZNZK_NQLL');
});
app.get('/about', function (req, res) {
    //var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about');
});
app.use(express.static(__dirname + '/afoa'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());
app.get('/newsletter', function (req, res) {
    res.render('newsletter', { csrf: 'CSRF token goes here' });
});
app.get('/sysData_ZJZJ', function (req, res) {
    res.render('sysData_ZJZJ');
});
app.get('/drbz_exym', function (req, res) {
    res.render('home')
    var child_yhld = child_process.exec('node drbz_exym.js', function (err, stdout, stderr) {
        if (err) {
            console.log('exec msox\n\n')
            console.error(err);
        } else {
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
        }
    })
    child_yhld.unref()
    setTimeout(() => {
        process.exit()
    }, 1000);
});
app.get('/crom_exym', function (req, res) {
    res.send('已退出')
    process.exit(0)
});
app.post('/sysData_ZJZJ', function (req, res) {
    WLYC_sysData_ZJZJ(req, res);
});
app.post('/UKYP', function (req, res) {
    UKYP_RTUL(req, res, { NIKC_KP: nikc_zpyb_node, RJQT_DIWR_VNWM: RJQT_DIWR_VNWM_NODE_OUSS, udao: '.js', vkvy_nmky: 'utf8' });
});
app.post('/NINI_ZKRS_DREQ', function (req, res) {
    ZKRS_DREQ_RTUL(req, res, RJQT_DIWR_VNWM_NODE_OUSS, '/RJQT_WDBU');
});
app.post('/NINI_BQEO_DREQ', function (req, res) {
    BQEO_DREQ_RTUL(req, res, RJQT_DIWR_VNWM_NODE_OUSS, '/RJQT_WDBU');
});
app.post('/RJQT_WDBU', function (req, res) {
    RJQT_WDBU_RTUL(req, res, nikc_zpyb_node, RJQT_DIWR_VNWM_NODE_OUSS, "utf8");
});
app.post('/NIKC_UKYP', function (req, res) {
    UKYP_RTUL(req, res, { NIKC_KP: config.diwr_zzzz_nikc_ouss.vnwm_vdzv_nikc[0].nikc, RJQT_DIWR_VNWM: RJQT_DIWR_VNWM_NIKC_OUSS, udao: config.diwr_zzzz_nikc_ouss.vnwm_vdzv_nikc[0].udao, vkvy_nmky: config.diwr_zzzz_nikc_ouss.vnwm_vdzv_nikc[0].vkvy });
});
app.post('/NIKC_NINI_ZKRS_DREQ', function (req, res) {
    ZKRS_DREQ_RTUL(req, res, RJQT_DIWR_VNWM_NIKC_OUSS, '/NIKC_RJQT_WDBU');
});
app.post('/NIKC_NINI_BQEO_DREQ', function (req, res) {
    BQEO_DREQ_RTUL(req, res, RJQT_DIWR_VNWM_NIKC_OUSS, '/NIKC_RJQT_WDBU');
});
app.post('/NIKC_RJQT_WDBU', function (req, res) {
    RJQT_WDBU_RTUL(req, res, config.diwr_zzzz_nikc_ouss.vnwm_vdzv_nikc[0].nikc, RJQT_DIWR_VNWM_NIKC_OUSS, config.diwr_zzzz_nikc_ouss.vnwm_vdzv_nikc[0].vkvy);
});
app.post('/ARAGGGVDGGLDRG', function (req, res) {
    res.render('ARAGGGVDGGLDRG', { JTYP_1: req.body.VDZV_1.toUpperCase(), JTYP_2: req.body.VDZV_1.toLowerCase() });
});
app.post('/unicode_LDRG', function (req, res) {
    WLYC_unicode_LDRG(req, res)
});
app.post('/WR_EBWU', function (req, res) {
    WLYC_WR_EBWU(req, res, config)
});
app.get('/afoa', function (req, res) {
    res.render('afoa')
});
app.post('/afoa', function (req, res) {
    commd(req.body.vdzv, outputs(), {}).then(jtyj_1 => {
        res.json(jtyj_1)
    })
});
app.post('/VKVY_LD_TYUB_VN_ZNZK_NQUD', function (req, res) {
    WLYC_VKVY_LD_TYUB_VN_ZNZK_NQUD(req, res);
});
app.post('/VKVY_LD_TYUB_VN_ZNZK_NQLL', function (req, res) {
    WLYC_VKVY_LD_TYUB_VN_ZNZK_NQLL(req, res);
});
app.post('/ZSGGTRGGYJGGEYRH', function (req, res) {
    WLYC_ZSGGTRGGYJGGEYRH(req, res);
});
app.post('/NINI_SIIH_DIAX', function (req, res) {
    WLYC_NINI_SIIH_DIAX(req, res);
});
app.post('/EOSRGGJUZCGGTZGGYJGGEYRH', function (req, res) {
    WLYC_EOSRGGJUZCGGTZGGYJEYRH(req, res);
});
app.post('/EYRHGGHQTB', function (req, res) {
    WLYC_EYRHGGHQTB(req, res);
});
app.post('/EYRH_NINI_HQMV_YENH_YYHA', function (req, res) {
    WLYC_EYRH_NINI_HQMV_YENH_YYHA(req, res);
});
app.post('/ASCIIGGLDRG', function (req, res) {
    WLYC_ASCIIGGLDRG(req, res);
});
app.post('/SIIHGGUXGGRJSEGGBRTZGGFS', function (req, res) {
    WLYC_SIIHGGUXGGRJSEGGBRTZGGFS(req, res);
});
app.post('/DIZCGGOUSS', function (req, res) {
    WLYC_DIZCGGOUSS(req, res);
});
app.use(function (req, res, next) {
    var req_RJSE_1;
    for (key1 in req) {
        req_RJSE_1 += "\n" + key1;
    }
    res.status(404);
    res.render('404', { JTHA_1: "YYHA YJ AC AB:" + req.url });
});

app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(500);
    res.render('500', { err: err, err_stack: err.stack });
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.\nhttp://localhost:' + app.get('port'));
});