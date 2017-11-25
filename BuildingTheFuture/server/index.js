// create framework
var express = require("express");
var app = express();
var request = require("request");
var cheerio = require("cheerio");
var cors = require('cors');
//setup
app.set('json spaces', 40);
app.use(cors());
app.options('*', cors());
app.listen(3000);

//link html
var url_home = "http://dichvucong.binhduong.gov.vn";

//get content with title and link
app.get("/all", function (req, res) {
    request(url_home + "/dvc/Default.aspx?tabid=55", function (error, response, body) {
        if (error) {
            res.json({ error: error })
        } else {
            $ = cheerio.load(body);
            //list title;
            var list_title = $(body).find("table.rgMasterTable > tbody > tr");
            var arrayTitle = [];
            list_title.each(function (i, e) { // "i" is serial ; "e" is content html
                var children = $(this).children();
                var row = {
                    "title": children.eq(1).text().trim(),
                    "field": children.eq(2).text().trim(),
                    "organization": children.eq(3).text().trim(),
                    "linkdetail": children.eq(1).find('a').slice(0,1).attr('href')
                };
                arrayTitle.push(row);
            });

            //list pagination
            var list_pagination = $(body).find("div.rgWrap.rgNumPart a");
            var arrayPage = [];
            list_pagination.each(function (i, e) { // "i" is serial ; "e" is content html
                var jsonArg = new Object();
                //jsonArg.page = $(this).text(); // content acquired
                jsonArg[i+1] = e["attribs"]["href"];
                arrayPage.push(jsonArg);
            });
            res.json({ content: arrayTitle, page: arrayPage });
        }
    });
});
////////////////////////////////////////////////////////////////////////
//get detail
app.get("/", function (req, res) {
    var url = req.originalUrl;
    url = url.replace("?/DVC","/DVC");
    request(url_home + url, function (error, response, body) {
        if (error) {
            res.json({ error: error })
        } else {
            $ = cheerio.load(body);

            //get information table
            var table_information = $(body).find("table#tbThongTin");
            var array_information = [];
            table_information.each(function (i, e) { // "i" is serial ; "e" is content html
                var children = $(this).children();
                // const result = $("#tbThongTin tr").map((i, element) => ({
                //     currency: $(element).find('td:nth-of-type()').text().trim()
                //   })).get()
                var row = {
                    "field": $("#dnn_ctr439_UCDetailPage_lblvLinhVuc").text(),
                    "organization": $("#dnn_ctr439_UCDetailPage_lblvCQTrucTiepThucHien").text(),
                    "doing": $("#dnn_ctr439_UCDetailPage_lbCachThucHien").text(),
                    "termofsettlement": $("#dnn_ctr439_UCDetailPage_lblvTHGQ").text(),
                    "fees": children.find("tr td table tr").first().find('td:nth-child(1)').text().trim(),
                    "stepstaken": children.find("tr td table tr").text().trim()
                };
                array_information.push(row);
            });

            //get documents submit
            var table_documents_submit = $(body).find("table.rgMasterTable > tbody > tr");
            var array_docs = [];
            table_documents_submit.each(function(i, e){
                var children = $(this).children();
                var row = {
                    "name": children.eq(1).text().trim(),
                    "downloaddocs": children.eq(2).find('a').slice(0,1).attr('href')
                };
                if(row.name !== "")
                array_docs.push(row);
            });

            //get info detail
            var table_info_detail = $(body).find("table#tbChiTiet")
            var array_infod = [];
            table_info_detail.each(function(i, e){
                var children = $(this).children();
                var row = {
                    "agencydecides" : $("#dnn_ctr439_UCDetailPage_lbCQThamQuyen").text(),
                    "authorizedperson": $("#dnn_ctr439_UCDetailPage_lbCQHoacNCTQ").text(),
                    "agencydirectly" : $("#dnn_ctr439_UCDetailPage_lbCQTrucTiepThucHien").text(),
                    "coordinatingagency" : $("#dnn_ctr439_UCDetailPage_lbCQPhoiHop").text(),
                    "doing" : $("#dnn_ctr439_UCDetailPage_lbCachTTH").text(),
                    "objectsimplemented" : $("#dnn_ctr439_UCDetailPage_lbDTTH").text(),
                    "result" : $("#dnn_ctr439_UCDetailPage_lbKQCTH").text()
                };
                array_infod.push(row);
            });
            res.json({information : array_information,
                        documents : array_docs,
                        infodetail: array_infod });
        }
    });
});