/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 78.61741263028817, "KoPercent": 21.382587369711832};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.6515366339668914, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.9320388349514563, 500, 1500, "HTTP Request-3"], "isController": false}, {"data": [0.935814455231931, 500, 1500, "HTTP Request-16"], "isController": false}, {"data": [0.6510248112189859, 500, 1500, "HTTP Request-2"], "isController": false}, {"data": [0.9325782092772384, 500, 1500, "HTTP Request-15"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request-5"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request-14"], "isController": false}, {"data": [0.9433656957928802, 500, 1500, "HTTP Request-4"], "isController": false}, {"data": [0.941747572815534, 500, 1500, "HTTP Request-13"], "isController": false}, {"data": [0.9363538295577131, 500, 1500, "HTTP Request-19"], "isController": false}, {"data": [0.3059467918622848, 500, 1500, "HTTP Request-1"], "isController": false}, {"data": [0.9395900755124056, 500, 1500, "HTTP Request-18"], "isController": false}, {"data": [0.01643192488262911, 500, 1500, "HTTP Request-0"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request-17"], "isController": false}, {"data": [0.9428263214670982, 500, 1500, "HTTP Request-12"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request-11"], "isController": false}, {"data": [0.9374325782092773, 500, 1500, "HTTP Request-10"], "isController": false}, {"data": [0.0, 500, 1500, "HTTP Request-21"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request-20"], "isController": false}, {"data": [0.9379719525350594, 500, 1500, "HTTP Request-7"], "isController": false}, {"data": [1.0E-4, 500, 1500, "HTTP Request"], "isController": false}, {"data": [0.9277238403451996, 500, 1500, "HTTP Request-6"], "isController": false}, {"data": [0.9379719525350594, 500, 1500, "HTTP Request-9"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request-8"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 26096, 5580, 21.382587369711832, 3883.535484365461, 31, 28461, 336.0, 4114.500000000007, 13515.35000000001, 21302.800000000032, 894.8324932277201, 18194.762185281863, 739.8745306552823], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["HTTP Request-3", 927, 0, 0.0, 391.57281553398025, 236, 598, 395.0, 509.0, 525.0, 540.0, 81.64523515941518, 93.36579137858905, 50.0714918751101], "isController": false}, {"data": ["HTTP Request-16", 927, 0, 0.0, 389.9137001078752, 235, 755, 390.0, 510.0, 525.0, 542.72, 80.75616342887011, 101.02406772693615, 32.88605483382699], "isController": false}, {"data": ["HTTP Request-2", 927, 0, 0.0, 1028.6763754045303, 104, 7250, 203.0, 3163.600000000001, 4168.599999999999, 6201.520000000001, 83.64161328160246, 112.9651866879455, 45.98655105228729], "isController": false}, {"data": ["HTTP Request-15", 927, 0, 0.0, 388.4627831715208, 234, 600, 389.0, 510.0, 522.5999999999999, 535.0, 80.6086956521739, 92.18045176630434, 49.43580163043478], "isController": false}, {"data": ["HTTP Request-5", 927, 0, 0.0, 37.94822006472489, 31, 285, 35.0, 44.0, 51.0, 82.0, 83.43083430834308, 112.6805115707407, 45.87066378476285], "isController": false}, {"data": ["HTTP Request-14", 927, 0, 0.0, 36.11003236245956, 32, 379, 35.0, 38.0, 42.0, 57.440000000000055, 83.6491608012994, 112.9753802619112, 45.990700713995665], "isController": false}, {"data": ["HTTP Request-4", 927, 0, 0.0, 385.1370010787486, 237, 548, 383.0, 506.0, 519.0, 533.0, 80.8971114407889, 101.20039038637752, 32.943452608211885], "isController": false}, {"data": ["HTTP Request-13", 927, 0, 0.0, 387.53613807982754, 236, 573, 390.0, 506.20000000000005, 521.5999999999999, 535.44, 81.59493002376551, 102.07334507855822, 33.22762287100607], "isController": false}, {"data": ["HTTP Request-19", 927, 0, 0.0, 385.39697950377564, 235, 789, 386.0, 509.0, 522.0, 538.0, 77.97123391370174, 97.54018617524603, 31.751957560560182], "isController": false}, {"data": ["HTTP Request-1", 1278, 2, 0.1564945226917058, 3110.6791862284817, 320, 13173, 2000.5, 7399.700000000001, 9897.35, 11760.150000000001, 86.95652173913044, 15968.985353090768, 35.355589150847116], "isController": false}, {"data": ["HTTP Request-18", 927, 0, 0.0, 388.38403451995646, 235, 570, 384.0, 507.0, 522.0, 535.72, 79.7899810638664, 91.24420686112067, 48.93369932432432], "isController": false}, {"data": ["HTTP Request-0", 1278, 0, 0.0, 9178.860719874781, 118, 19984, 9564.0, 15299.700000000004, 17245.1, 19035.440000000017, 55.80055014626905, 67.30269369733223, 22.505495322665155], "isController": false}, {"data": ["HTTP Request-17", 927, 0, 0.0, 38.56957928802583, 31, 152, 35.0, 52.0, 58.0, 69.44000000000005, 82.65715559518502, 111.63559198060634, 45.44529160164958], "isController": false}, {"data": ["HTTP Request-12", 927, 0, 0.0, 384.1294498381877, 236, 761, 381.0, 507.0, 521.0, 536.72, 79.95514921511126, 91.43308567470244, 49.03499385457996], "isController": false}, {"data": ["HTTP Request-11", 927, 0, 0.0, 35.8727076591155, 31, 85, 35.0, 38.0, 43.0, 57.72000000000003, 83.09429903191108, 112.22599175891897, 45.68563511227142], "isController": false}, {"data": ["HTTP Request-10", 927, 0, 0.0, 389.4368932038832, 238, 556, 392.0, 509.0, 524.5999999999999, 534.0, 81.40147523709167, 101.83133767452581, 33.14884294322972], "isController": false}, {"data": ["HTTP Request-21", 927, 927, 100.0, 38.81014023732472, 31, 369, 35.0, 51.0, 59.0, 87.16000000000008, 80.13485477178423, 108.22900795837656, 44.05851878565871], "isController": false}, {"data": ["HTTP Request-20", 927, 0, 0.0, 38.81014023732472, 31, 369, 35.0, 51.0, 59.0, 87.16000000000008, 80.13485477178423, 108.22900795837656, 44.05851878565871], "isController": false}, {"data": ["HTTP Request-7", 927, 0, 0.0, 387.4670981661274, 234, 584, 387.0, 507.0, 521.0, 539.72, 81.56621205455346, 102.03741957215134, 33.215928151121865], "isController": false}, {"data": ["HTTP Request", 5000, 4651, 93.02, 16024.947599999974, 759, 28461, 17092.0, 19139.9, 20851.8, 26316.909999999996, 171.45012515859136, 9294.033883902548, 369.93726532764117], "isController": false}, {"data": ["HTTP Request-6", 927, 0, 0.0, 390.8015102481125, 234, 558, 394.0, 512.2, 527.0, 537.72, 80.55965933779439, 92.12437605913792, 49.40572857825671], "isController": false}, {"data": ["HTTP Request-9", 927, 0, 0.0, 388.625674217908, 235, 760, 385.0, 510.0, 523.0, 535.0, 80.53866203301477, 92.10036449283233, 49.39285132493484], "isController": false}, {"data": ["HTTP Request-8", 927, 0, 0.0, 36.52858683926645, 31, 116, 35.0, 40.0, 47.0, 69.16000000000008, 83.62652232746956, 112.94480505751014, 45.978253974966165], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: youtube.com:443 failed to respond", 19, 0.34050179211469533, 0.07280809319435928], "isController": false}, {"data": ["Non HTTP response code: javax.net.ssl.SSLException/Non HTTP response message: readHandshakeRecord", 1, 0.017921146953405017, 0.0038320049049662785], "isController": false}, {"data": ["Non HTTP response code: java.io.IOException/Non HTTP response message: Exceeded maximum number of redirects: 20", 1854, 33.225806451612904, 7.10453709380748], "isController": false}, {"data": ["Non HTTP response code: javax.net.ssl.SSLHandshakeException/Non HTTP response message: Remote host terminated the handshake", 3706, 66.415770609319, 14.201410177805027], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 26096, 5580, "Non HTTP response code: javax.net.ssl.SSLHandshakeException/Non HTTP response message: Remote host terminated the handshake", 3706, "Non HTTP response code: java.io.IOException/Non HTTP response message: Exceeded maximum number of redirects: 20", 1854, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: youtube.com:443 failed to respond", 19, "Non HTTP response code: javax.net.ssl.SSLException/Non HTTP response message: readHandshakeRecord", 1, "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["HTTP Request-1", 1278, 2, "Non HTTP response code: javax.net.ssl.SSLHandshakeException/Non HTTP response message: Remote host terminated the handshake", 2, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["HTTP Request-21", 927, 927, "Non HTTP response code: java.io.IOException/Non HTTP response message: Exceeded maximum number of redirects: 20", 927, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["HTTP Request", 5000, 4651, "Non HTTP response code: javax.net.ssl.SSLHandshakeException/Non HTTP response message: Remote host terminated the handshake", 3704, "Non HTTP response code: java.io.IOException/Non HTTP response message: Exceeded maximum number of redirects: 20", 927, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: youtube.com:443 failed to respond", 19, "Non HTTP response code: javax.net.ssl.SSLException/Non HTTP response message: readHandshakeRecord", 1, "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
