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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 2279.0, "series": [{"data": [[0.0, 30.0], [0.1, 30.0], [0.2, 30.0], [0.3, 30.0], [0.4, 32.0], [0.5, 32.0], [0.6, 32.0], [0.7, 32.0], [0.8, 32.0], [0.9, 32.0], [1.0, 32.0], [1.1, 32.0], [1.2, 32.0], [1.3, 33.0], [1.4, 33.0], [1.5, 33.0], [1.6, 33.0], [1.7, 33.0], [1.8, 33.0], [1.9, 33.0], [2.0, 33.0], [2.1, 33.0], [2.2, 33.0], [2.3, 33.0], [2.4, 33.0], [2.5, 34.0], [2.6, 34.0], [2.7, 34.0], [2.8, 34.0], [2.9, 34.0], [3.0, 34.0], [3.1, 34.0], [3.2, 34.0], [3.3, 34.0], [3.4, 34.0], [3.5, 35.0], [3.6, 35.0], [3.7, 35.0], [3.8, 35.0], [3.9, 35.0], [4.0, 35.0], [4.1, 35.0], [4.2, 35.0], [4.3, 35.0], [4.4, 35.0], [4.5, 35.0], [4.6, 35.0], [4.7, 35.0], [4.8, 35.0], [4.9, 35.0], [5.0, 35.0], [5.1, 35.0], [5.2, 35.0], [5.3, 35.0], [5.4, 35.0], [5.5, 35.0], [5.6, 35.0], [5.7, 35.0], [5.8, 35.0], [5.9, 35.0], [6.0, 35.0], [6.1, 35.0], [6.2, 36.0], [6.3, 36.0], [6.4, 36.0], [6.5, 36.0], [6.6, 36.0], [6.7, 36.0], [6.8, 36.0], [6.9, 36.0], [7.0, 36.0], [7.1, 36.0], [7.2, 36.0], [7.3, 36.0], [7.4, 36.0], [7.5, 36.0], [7.6, 36.0], [7.7, 36.0], [7.8, 36.0], [7.9, 36.0], [8.0, 37.0], [8.1, 37.0], [8.2, 37.0], [8.3, 37.0], [8.4, 37.0], [8.5, 37.0], [8.6, 37.0], [8.7, 37.0], [8.8, 37.0], [8.9, 37.0], [9.0, 37.0], [9.1, 37.0], [9.2, 37.0], [9.3, 37.0], [9.4, 37.0], [9.5, 37.0], [9.6, 38.0], [9.7, 38.0], [9.8, 38.0], [9.9, 38.0], [10.0, 38.0], [10.1, 38.0], [10.2, 38.0], [10.3, 38.0], [10.4, 38.0], [10.5, 38.0], [10.6, 38.0], [10.7, 38.0], [10.8, 39.0], [10.9, 39.0], [11.0, 39.0], [11.1, 39.0], [11.2, 39.0], [11.3, 39.0], [11.4, 39.0], [11.5, 39.0], [11.6, 39.0], [11.7, 39.0], [11.8, 39.0], [11.9, 39.0], [12.0, 39.0], [12.1, 39.0], [12.2, 39.0], [12.3, 39.0], [12.4, 39.0], [12.5, 39.0], [12.6, 39.0], [12.7, 39.0], [12.8, 40.0], [12.9, 40.0], [13.0, 40.0], [13.1, 40.0], [13.2, 40.0], [13.3, 40.0], [13.4, 40.0], [13.5, 40.0], [13.6, 41.0], [13.7, 41.0], [13.8, 41.0], [13.9, 41.0], [14.0, 41.0], [14.1, 41.0], [14.2, 41.0], [14.3, 41.0], [14.4, 42.0], [14.5, 42.0], [14.6, 42.0], [14.7, 42.0], [14.8, 42.0], [14.9, 42.0], [15.0, 42.0], [15.1, 42.0], [15.2, 42.0], [15.3, 42.0], [15.4, 42.0], [15.5, 42.0], [15.6, 42.0], [15.7, 42.0], [15.8, 42.0], [15.9, 42.0], [16.0, 42.0], [16.1, 42.0], [16.2, 42.0], [16.3, 42.0], [16.4, 43.0], [16.5, 43.0], [16.6, 43.0], [16.7, 43.0], [16.8, 43.0], [16.9, 43.0], [17.0, 43.0], [17.1, 43.0], [17.2, 43.0], [17.3, 43.0], [17.4, 43.0], [17.5, 43.0], [17.6, 43.0], [17.7, 43.0], [17.8, 44.0], [17.9, 44.0], [18.0, 44.0], [18.1, 44.0], [18.2, 44.0], [18.3, 44.0], [18.4, 44.0], [18.5, 44.0], [18.6, 44.0], [18.7, 44.0], [18.8, 44.0], [18.9, 44.0], [19.0, 44.0], [19.1, 44.0], [19.2, 44.0], [19.3, 44.0], [19.4, 44.0], [19.5, 44.0], [19.6, 45.0], [19.7, 45.0], [19.8, 45.0], [19.9, 45.0], [20.0, 45.0], [20.1, 45.0], [20.2, 45.0], [20.3, 45.0], [20.4, 45.0], [20.5, 45.0], [20.6, 45.0], [20.7, 45.0], [20.8, 45.0], [20.9, 45.0], [21.0, 45.0], [21.1, 45.0], [21.2, 45.0], [21.3, 45.0], [21.4, 46.0], [21.5, 46.0], [21.6, 46.0], [21.7, 46.0], [21.8, 46.0], [21.9, 46.0], [22.0, 47.0], [22.1, 47.0], [22.2, 47.0], [22.3, 47.0], [22.4, 47.0], [22.5, 47.0], [22.6, 47.0], [22.7, 47.0], [22.8, 47.0], [22.9, 47.0], [23.0, 47.0], [23.1, 47.0], [23.2, 48.0], [23.3, 48.0], [23.4, 48.0], [23.5, 48.0], [23.6, 48.0], [23.7, 48.0], [23.8, 48.0], [23.9, 48.0], [24.0, 48.0], [24.1, 48.0], [24.2, 48.0], [24.3, 48.0], [24.4, 48.0], [24.5, 48.0], [24.6, 49.0], [24.7, 49.0], [24.8, 49.0], [24.9, 49.0], [25.0, 49.0], [25.1, 49.0], [25.2, 49.0], [25.3, 49.0], [25.4, 49.0], [25.5, 49.0], [25.6, 51.0], [25.7, 51.0], [25.8, 51.0], [25.9, 51.0], [26.0, 51.0], [26.1, 51.0], [26.2, 52.0], [26.3, 52.0], [26.4, 52.0], [26.5, 52.0], [26.6, 52.0], [26.7, 52.0], [26.8, 52.0], [26.9, 52.0], [27.0, 52.0], [27.1, 52.0], [27.2, 53.0], [27.3, 53.0], [27.4, 53.0], [27.5, 53.0], [27.6, 53.0], [27.7, 53.0], [27.8, 53.0], [27.9, 53.0], [28.0, 53.0], [28.1, 53.0], [28.2, 53.0], [28.3, 53.0], [28.4, 55.0], [28.5, 55.0], [28.6, 55.0], [28.7, 55.0], [28.8, 55.0], [28.9, 55.0], [29.0, 56.0], [29.1, 56.0], [29.2, 57.0], [29.3, 57.0], [29.4, 57.0], [29.5, 57.0], [29.6, 57.0], [29.7, 57.0], [29.8, 58.0], [29.9, 58.0], [30.0, 58.0], [30.1, 58.0], [30.2, 59.0], [30.3, 59.0], [30.4, 59.0], [30.5, 59.0], [30.6, 59.0], [30.7, 59.0], [30.8, 59.0], [30.9, 59.0], [31.0, 60.0], [31.1, 60.0], [31.2, 60.0], [31.3, 60.0], [31.4, 62.0], [31.5, 62.0], [31.6, 62.0], [31.7, 62.0], [31.8, 62.0], [31.9, 62.0], [32.0, 62.0], [32.1, 62.0], [32.2, 63.0], [32.3, 63.0], [32.4, 65.0], [32.5, 65.0], [32.6, 65.0], [32.7, 65.0], [32.8, 66.0], [32.9, 66.0], [33.0, 66.0], [33.1, 66.0], [33.2, 68.0], [33.3, 68.0], [33.4, 71.0], [33.5, 71.0], [33.6, 73.0], [33.7, 73.0], [33.8, 73.0], [33.9, 74.0], [34.0, 74.0], [34.1, 75.0], [34.2, 75.0], [34.3, 79.0], [34.4, 79.0], [34.5, 81.0], [34.6, 81.0], [34.7, 83.0], [34.8, 83.0], [34.9, 85.0], [35.0, 85.0], [35.1, 92.0], [35.2, 92.0], [35.3, 94.0], [35.4, 94.0], [35.5, 96.0], [35.6, 96.0], [35.7, 109.0], [35.8, 109.0], [35.9, 111.0], [36.0, 111.0], [36.1, 111.0], [36.2, 111.0], [36.3, 112.0], [36.4, 112.0], [36.5, 114.0], [36.6, 114.0], [36.7, 115.0], [36.8, 115.0], [36.9, 135.0], [37.0, 135.0], [37.1, 143.0], [37.2, 143.0], [37.3, 145.0], [37.4, 145.0], [37.5, 152.0], [37.6, 152.0], [37.7, 154.0], [37.8, 154.0], [37.9, 158.0], [38.0, 158.0], [38.1, 158.0], [38.2, 158.0], [38.3, 159.0], [38.4, 159.0], [38.5, 160.0], [38.6, 160.0], [38.7, 160.0], [38.8, 160.0], [38.9, 163.0], [39.0, 163.0], [39.1, 164.0], [39.2, 164.0], [39.3, 164.0], [39.4, 164.0], [39.5, 166.0], [39.6, 166.0], [39.7, 168.0], [39.8, 168.0], [39.9, 174.0], [40.0, 174.0], [40.1, 174.0], [40.2, 174.0], [40.3, 177.0], [40.4, 177.0], [40.5, 178.0], [40.6, 178.0], [40.7, 179.0], [40.8, 179.0], [40.9, 182.0], [41.0, 182.0], [41.1, 190.0], [41.2, 190.0], [41.3, 192.0], [41.4, 192.0], [41.5, 194.0], [41.6, 194.0], [41.7, 197.0], [41.8, 197.0], [41.9, 200.0], [42.0, 200.0], [42.1, 201.0], [42.2, 201.0], [42.3, 202.0], [42.4, 202.0], [42.5, 206.0], [42.6, 206.0], [42.7, 206.0], [42.8, 206.0], [42.9, 207.0], [43.0, 207.0], [43.1, 209.0], [43.2, 209.0], [43.3, 211.0], [43.4, 211.0], [43.5, 213.0], [43.6, 213.0], [43.7, 215.0], [43.8, 215.0], [43.9, 221.0], [44.0, 221.0], [44.1, 221.0], [44.2, 221.0], [44.3, 238.0], [44.4, 238.0], [44.5, 239.0], [44.6, 239.0], [44.7, 240.0], [44.8, 240.0], [44.9, 241.0], [45.0, 241.0], [45.1, 244.0], [45.2, 244.0], [45.3, 248.0], [45.4, 248.0], [45.5, 250.0], [45.6, 250.0], [45.7, 251.0], [45.8, 251.0], [45.9, 255.0], [46.0, 255.0], [46.1, 255.0], [46.2, 255.0], [46.3, 255.0], [46.4, 255.0], [46.5, 256.0], [46.6, 256.0], [46.7, 257.0], [46.8, 257.0], [46.9, 257.0], [47.0, 257.0], [47.1, 257.0], [47.2, 257.0], [47.3, 262.0], [47.4, 262.0], [47.5, 263.0], [47.6, 263.0], [47.7, 263.0], [47.8, 263.0], [47.9, 266.0], [48.0, 266.0], [48.1, 266.0], [48.2, 266.0], [48.3, 276.0], [48.4, 276.0], [48.5, 279.0], [48.6, 279.0], [48.7, 494.0], [48.8, 494.0], [48.9, 494.0], [49.0, 494.0], [49.1, 567.0], [49.2, 567.0], [49.3, 608.0], [49.4, 608.0], [49.5, 692.0], [49.6, 692.0], [49.7, 703.0], [49.8, 703.0], [49.9, 779.0], [50.0, 779.0], [50.1, 788.0], [50.2, 788.0], [50.3, 797.0], [50.4, 797.0], [50.5, 836.0], [50.6, 836.0], [50.7, 857.0], [50.8, 857.0], [50.9, 860.0], [51.0, 860.0], [51.1, 863.0], [51.2, 863.0], [51.3, 881.0], [51.4, 881.0], [51.5, 892.0], [51.6, 892.0], [51.7, 898.0], [51.8, 898.0], [51.9, 927.0], [52.0, 927.0], [52.1, 934.0], [52.2, 934.0], [52.3, 936.0], [52.4, 936.0], [52.5, 939.0], [52.6, 939.0], [52.7, 940.0], [52.8, 940.0], [52.9, 944.0], [53.0, 944.0], [53.1, 944.0], [53.2, 944.0], [53.3, 945.0], [53.4, 945.0], [53.5, 948.0], [53.6, 948.0], [53.7, 951.0], [53.8, 951.0], [53.9, 952.0], [54.0, 952.0], [54.1, 964.0], [54.2, 964.0], [54.3, 964.0], [54.4, 964.0], [54.5, 964.0], [54.6, 964.0], [54.7, 972.0], [54.8, 972.0], [54.9, 975.0], [55.0, 975.0], [55.1, 983.0], [55.2, 983.0], [55.3, 984.0], [55.4, 984.0], [55.5, 1006.0], [55.6, 1006.0], [55.7, 1012.0], [55.8, 1012.0], [55.9, 1024.0], [56.0, 1024.0], [56.1, 1036.0], [56.2, 1036.0], [56.3, 1040.0], [56.4, 1040.0], [56.5, 1047.0], [56.6, 1047.0], [56.7, 1083.0], [56.8, 1083.0], [56.9, 1092.0], [57.0, 1092.0], [57.1, 1112.0], [57.2, 1112.0], [57.3, 1121.0], [57.4, 1121.0], [57.5, 1127.0], [57.6, 1127.0], [57.7, 1128.0], [57.8, 1128.0], [57.9, 1140.0], [58.0, 1140.0], [58.1, 1145.0], [58.2, 1145.0], [58.3, 1154.0], [58.4, 1154.0], [58.5, 1163.0], [58.6, 1163.0], [58.7, 1167.0], [58.8, 1167.0], [58.9, 1171.0], [59.0, 1171.0], [59.1, 1183.0], [59.2, 1183.0], [59.3, 1184.0], [59.4, 1184.0], [59.5, 1187.0], [59.6, 1187.0], [59.7, 1189.0], [59.8, 1189.0], [59.9, 1191.0], [60.0, 1191.0], [60.1, 1192.0], [60.2, 1192.0], [60.3, 1196.0], [60.4, 1196.0], [60.5, 1196.0], [60.6, 1196.0], [60.7, 1210.0], [60.8, 1210.0], [60.9, 1215.0], [61.0, 1215.0], [61.1, 1216.0], [61.2, 1216.0], [61.3, 1220.0], [61.4, 1220.0], [61.5, 1225.0], [61.6, 1225.0], [61.7, 1241.0], [61.8, 1241.0], [61.9, 1251.0], [62.0, 1251.0], [62.1, 1258.0], [62.2, 1258.0], [62.3, 1268.0], [62.4, 1268.0], [62.5, 1270.0], [62.6, 1270.0], [62.7, 1273.0], [62.8, 1273.0], [62.9, 1286.0], [63.0, 1286.0], [63.1, 1291.0], [63.2, 1291.0], [63.3, 1295.0], [63.4, 1295.0], [63.5, 1297.0], [63.6, 1297.0], [63.7, 1312.0], [63.8, 1312.0], [63.9, 1316.0], [64.0, 1316.0], [64.1, 1330.0], [64.2, 1330.0], [64.3, 1332.0], [64.4, 1332.0], [64.5, 1334.0], [64.6, 1334.0], [64.7, 1335.0], [64.8, 1335.0], [64.9, 1336.0], [65.0, 1336.0], [65.1, 1336.0], [65.2, 1336.0], [65.3, 1342.0], [65.4, 1342.0], [65.5, 1346.0], [65.6, 1346.0], [65.7, 1349.0], [65.8, 1349.0], [65.9, 1351.0], [66.0, 1351.0], [66.1, 1362.0], [66.2, 1362.0], [66.3, 1363.0], [66.4, 1363.0], [66.5, 1382.0], [66.6, 1382.0], [66.7, 1383.0], [66.8, 1383.0], [66.9, 1389.0], [67.0, 1389.0], [67.1, 1394.0], [67.2, 1394.0], [67.3, 1407.0], [67.4, 1407.0], [67.5, 1420.0], [67.6, 1420.0], [67.7, 1422.0], [67.8, 1422.0], [67.9, 1423.0], [68.0, 1423.0], [68.1, 1423.0], [68.2, 1423.0], [68.3, 1423.0], [68.4, 1423.0], [68.5, 1428.0], [68.6, 1428.0], [68.7, 1430.0], [68.8, 1430.0], [68.9, 1431.0], [69.0, 1431.0], [69.1, 1432.0], [69.2, 1432.0], [69.3, 1434.0], [69.4, 1434.0], [69.5, 1434.0], [69.6, 1434.0], [69.7, 1437.0], [69.8, 1437.0], [69.9, 1437.0], [70.0, 1437.0], [70.1, 1437.0], [70.2, 1437.0], [70.3, 1437.0], [70.4, 1437.0], [70.5, 1439.0], [70.6, 1439.0], [70.7, 1439.0], [70.8, 1439.0], [70.9, 1439.0], [71.0, 1439.0], [71.1, 1440.0], [71.2, 1440.0], [71.3, 1442.0], [71.4, 1442.0], [71.5, 1448.0], [71.6, 1448.0], [71.7, 1450.0], [71.8, 1450.0], [71.9, 1455.0], [72.0, 1455.0], [72.1, 1463.0], [72.2, 1463.0], [72.3, 1463.0], [72.4, 1463.0], [72.5, 1464.0], [72.6, 1464.0], [72.7, 1467.0], [72.8, 1467.0], [72.9, 1469.0], [73.0, 1469.0], [73.1, 1474.0], [73.2, 1474.0], [73.3, 1476.0], [73.4, 1476.0], [73.5, 1487.0], [73.6, 1487.0], [73.7, 1500.0], [73.8, 1500.0], [73.9, 1501.0], [74.0, 1501.0], [74.1, 1502.0], [74.2, 1502.0], [74.3, 1510.0], [74.4, 1510.0], [74.5, 1511.0], [74.6, 1511.0], [74.7, 1513.0], [74.8, 1513.0], [74.9, 1518.0], [75.0, 1518.0], [75.1, 1519.0], [75.2, 1519.0], [75.3, 1520.0], [75.4, 1520.0], [75.5, 1520.0], [75.6, 1520.0], [75.7, 1526.0], [75.8, 1526.0], [75.9, 1539.0], [76.0, 1539.0], [76.1, 1553.0], [76.2, 1553.0], [76.3, 1557.0], [76.4, 1557.0], [76.5, 1572.0], [76.6, 1572.0], [76.7, 1574.0], [76.8, 1574.0], [76.9, 1579.0], [77.0, 1579.0], [77.1, 1586.0], [77.2, 1586.0], [77.3, 1586.0], [77.4, 1586.0], [77.5, 1587.0], [77.6, 1587.0], [77.7, 1592.0], [77.8, 1592.0], [77.9, 1593.0], [78.0, 1593.0], [78.1, 1599.0], [78.2, 1599.0], [78.3, 1605.0], [78.4, 1605.0], [78.5, 1606.0], [78.6, 1606.0], [78.7, 1612.0], [78.8, 1612.0], [78.9, 1617.0], [79.0, 1617.0], [79.1, 1624.0], [79.2, 1624.0], [79.3, 1625.0], [79.4, 1625.0], [79.5, 1626.0], [79.6, 1626.0], [79.7, 1629.0], [79.8, 1629.0], [79.9, 1630.0], [80.0, 1630.0], [80.1, 1632.0], [80.2, 1632.0], [80.3, 1634.0], [80.4, 1634.0], [80.5, 1655.0], [80.6, 1655.0], [80.7, 1657.0], [80.8, 1657.0], [80.9, 1665.0], [81.0, 1665.0], [81.1, 1667.0], [81.2, 1667.0], [81.3, 1671.0], [81.4, 1671.0], [81.5, 1677.0], [81.6, 1677.0], [81.7, 1682.0], [81.8, 1682.0], [81.9, 1685.0], [82.0, 1685.0], [82.1, 1689.0], [82.2, 1689.0], [82.3, 1689.0], [82.4, 1689.0], [82.5, 1690.0], [82.6, 1690.0], [82.7, 1692.0], [82.8, 1692.0], [82.9, 1699.0], [83.0, 1699.0], [83.1, 1710.0], [83.2, 1710.0], [83.3, 1720.0], [83.4, 1720.0], [83.5, 1726.0], [83.6, 1726.0], [83.7, 1746.0], [83.8, 1746.0], [83.9, 1752.0], [84.0, 1752.0], [84.1, 1757.0], [84.2, 1757.0], [84.3, 1763.0], [84.4, 1763.0], [84.5, 1766.0], [84.6, 1766.0], [84.7, 1778.0], [84.8, 1778.0], [84.9, 1783.0], [85.0, 1783.0], [85.1, 1785.0], [85.2, 1785.0], [85.3, 1786.0], [85.4, 1786.0], [85.5, 1832.0], [85.6, 1832.0], [85.7, 1833.0], [85.8, 1833.0], [85.9, 1834.0], [86.0, 1834.0], [86.1, 1850.0], [86.2, 1850.0], [86.3, 1854.0], [86.4, 1854.0], [86.5, 1872.0], [86.6, 1872.0], [86.7, 1873.0], [86.8, 1873.0], [86.9, 1880.0], [87.0, 1880.0], [87.1, 1890.0], [87.2, 1890.0], [87.3, 1898.0], [87.4, 1898.0], [87.5, 1900.0], [87.6, 1900.0], [87.7, 1908.0], [87.8, 1908.0], [87.9, 1914.0], [88.0, 1914.0], [88.1, 1915.0], [88.2, 1915.0], [88.3, 1920.0], [88.4, 1920.0], [88.5, 1932.0], [88.6, 1932.0], [88.7, 1932.0], [88.8, 1932.0], [88.9, 1933.0], [89.0, 1933.0], [89.1, 1941.0], [89.2, 1941.0], [89.3, 1945.0], [89.4, 1945.0], [89.5, 1949.0], [89.6, 1949.0], [89.7, 1951.0], [89.8, 1951.0], [89.9, 1955.0], [90.0, 1955.0], [90.1, 1962.0], [90.2, 1962.0], [90.3, 1977.0], [90.4, 1977.0], [90.5, 1987.0], [90.6, 1987.0], [90.7, 2009.0], [90.8, 2009.0], [90.9, 2012.0], [91.0, 2012.0], [91.1, 2015.0], [91.2, 2015.0], [91.3, 2021.0], [91.4, 2021.0], [91.5, 2024.0], [91.6, 2024.0], [91.7, 2025.0], [91.8, 2025.0], [91.9, 2032.0], [92.0, 2032.0], [92.1, 2045.0], [92.2, 2045.0], [92.3, 2061.0], [92.4, 2061.0], [92.5, 2073.0], [92.6, 2073.0], [92.7, 2075.0], [92.8, 2075.0], [92.9, 2082.0], [93.0, 2082.0], [93.1, 2084.0], [93.2, 2084.0], [93.3, 2091.0], [93.4, 2091.0], [93.5, 2093.0], [93.6, 2093.0], [93.7, 2093.0], [93.8, 2093.0], [93.9, 2102.0], [94.0, 2102.0], [94.1, 2106.0], [94.2, 2106.0], [94.3, 2110.0], [94.4, 2110.0], [94.5, 2118.0], [94.6, 2118.0], [94.7, 2120.0], [94.8, 2120.0], [94.9, 2120.0], [95.0, 2120.0], [95.1, 2121.0], [95.2, 2121.0], [95.3, 2124.0], [95.4, 2124.0], [95.5, 2128.0], [95.6, 2128.0], [95.7, 2132.0], [95.8, 2132.0], [95.9, 2142.0], [96.0, 2142.0], [96.1, 2143.0], [96.2, 2143.0], [96.3, 2146.0], [96.4, 2146.0], [96.5, 2149.0], [96.6, 2149.0], [96.7, 2154.0], [96.8, 2154.0], [96.9, 2157.0], [97.0, 2157.0], [97.1, 2166.0], [97.2, 2166.0], [97.3, 2172.0], [97.4, 2172.0], [97.5, 2173.0], [97.6, 2173.0], [97.7, 2181.0], [97.8, 2181.0], [97.9, 2184.0], [98.0, 2184.0], [98.1, 2189.0], [98.2, 2189.0], [98.3, 2203.0], [98.4, 2203.0], [98.5, 2213.0], [98.6, 2213.0], [98.7, 2218.0], [98.8, 2218.0], [98.9, 2218.0], [99.0, 2218.0], [99.1, 2231.0], [99.2, 2231.0], [99.3, 2237.0], [99.4, 2237.0], [99.5, 2241.0], [99.6, 2241.0], [99.7, 2265.0], [99.8, 2265.0], [99.9, 2279.0], [100.0, 2279.0]], "isOverall": false, "label": "ดึงข้อมูลทะเบียนบุคคลทั้งหน่วยบริการ", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 178.0, "series": [{"data": [[0.0, 178.0], [2100.0, 22.0], [2200.0, 9.0], [600.0, 2.0], [700.0, 4.0], [200.0, 34.0], [800.0, 7.0], [900.0, 18.0], [1000.0, 8.0], [1100.0, 18.0], [1200.0, 15.0], [1300.0, 18.0], [1400.0, 32.0], [1500.0, 23.0], [400.0, 2.0], [100.0, 31.0], [1600.0, 24.0], [1700.0, 12.0], [1800.0, 10.0], [1900.0, 16.0], [500.0, 1.0], [2000.0, 16.0]], "isOverall": false, "label": "ดึงข้อมูลทะเบียนบุคคลทั้งหน่วยบริการ", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 124.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 245.0, "series": [{"data": [[0.0, 245.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 124.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 131.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 217.642, "minX": 1.75558506E12, "maxY": 217.642, "series": [{"data": [[1.75558506E12, 217.642]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75558506E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 30.0, "minX": 1.0, "maxY": 2279.0, "series": [{"data": [[2.0, 279.0], [3.0, 257.0], [4.0, 251.0], [5.0, 250.0], [6.0, 239.0], [7.0, 211.0], [8.0, 248.0], [9.0, 255.0], [10.0, 241.0], [12.0, 239.0], [14.0, 201.0], [15.0, 221.0], [16.0, 215.0], [18.0, 198.0], [19.0, 2279.0], [20.0, 213.0], [22.0, 179.0], [24.0, 206.0], [25.0, 207.0], [26.0, 166.0], [27.0, 168.0], [28.0, 174.0], [29.0, 177.0], [31.0, 188.0], [33.0, 164.0], [32.0, 174.0], [34.0, 164.0], [37.0, 164.0], [39.0, 158.0], [38.0, 221.0], [41.0, 201.0], [40.0, 143.0], [43.0, 192.0], [42.0, 197.0], [46.0, 1949.0], [53.0, 1955.0], [55.0, 2265.0], [59.0, 2241.0], [58.0, 2118.0], [61.0, 2231.0], [60.0, 1890.0], [62.0, 1900.0], [65.0, 1914.0], [64.0, 2075.0], [68.0, 1004.0], [75.0, 2218.0], [74.0, 2042.5], [78.0, 2049.0], [83.0, 2146.0], [81.0, 2203.0], [87.0, 2166.0], [89.0, 2106.0], [93.0, 1974.3333333333333], [103.0, 2142.3333333333335], [102.0, 2091.0], [111.0, 1832.0], [109.0, 2166.0], [114.0, 2154.0], [112.0, 2015.0], [116.0, 2057.6666666666665], [123.0, 60.0], [121.0, 2142.5], [120.0, 2149.0], [125.0, 2120.0], [124.0, 1085.6666666666667], [132.0, 2110.0], [130.0, 1785.0], [128.0, 1079.0], [142.0, 2093.0], [140.0, 2093.0], [139.0, 1069.0], [150.0, 2009.0], [149.0, 39.0], [147.0, 33.0], [157.0, 1987.0], [156.0, 1720.0], [155.0, 1054.0], [153.0, 33.0], [152.0, 33.0], [166.0, 44.0], [165.0, 2012.0], [164.0, 1962.0], [163.0, 36.0], [162.0, 34.0], [161.0, 1032.5], [160.0, 2061.0], [175.0, 2032.0], [174.0, 37.0], [171.0, 2045.0], [183.0, 35.0], [182.0, 30.0], [180.0, 590.6666666666667], [179.0, 2021.0], [177.0, 2024.0], [176.0, 1746.0], [190.0, 62.0], [187.0, 46.0], [185.0, 48.0], [199.0, 1915.0], [198.0, 58.0], [197.0, 1692.0], [196.0, 1977.0], [195.0, 990.5], [194.0, 36.0], [193.0, 35.0], [192.0, 988.5], [207.0, 64.25], [206.0, 49.8], [204.0, 663.875], [202.0, 48.0], [201.0, 1783.0], [205.0, 1592.0], [203.0, 435.0], [200.0, 55.0], [214.0, 567.0], [211.0, 845.5], [210.0, 851.7499999999999], [209.0, 770.7142857142857], [208.0, 42.0], [215.0, 1050.2857142857142], [213.0, 43.0], [212.0, 910.25], [222.0, 35.0], [221.0, 710.6], [219.0, 43.0], [218.0, 1178.1666666666665], [217.0, 1260.0], [220.0, 96.0], [216.0, 42.0], [231.0, 38.0], [230.0, 1630.0], [229.0, 1682.0], [227.0, 829.5], [226.0, 590.3333333333334], [225.0, 1539.0], [239.0, 1335.0], [238.0, 684.5], [237.0, 1062.0], [233.0, 974.6], [234.0, 1434.0], [247.0, 1531.0], [246.0, 1535.5], [244.0, 34.0], [243.0, 38.0], [242.0, 1518.0], [241.0, 1439.0], [255.0, 1516.0], [253.0, 1336.0], [254.0, 1137.25], [252.0, 1451.3333333333333], [250.0, 1434.0], [249.0, 1612.0], [248.0, 1553.0], [264.0, 702.0], [263.0, 589.2], [256.0, 1382.0], [259.0, 1433.0], [258.0, 1586.0], [257.0, 1394.5], [262.0, 872.5], [261.0, 1424.8], [260.0, 1423.0], [268.0, 865.5], [267.0, 180.5], [266.0, 152.33333333333334], [265.0, 165.66666666666666], [271.0, 1192.0], [270.0, 1215.0], [269.0, 1501.0], [285.0, 1191.0], [287.0, 1273.0], [284.0, 55.0], [275.0, 1401.0], [274.0, 1231.4], [273.0, 1366.6666666666667], [272.0, 1280.5], [283.0, 722.5], [282.0, 43.0], [281.0, 1351.0], [280.0, 733.0], [279.0, 1303.5], [278.0, 1311.25], [277.0, 1438.0], [276.0, 1362.4285714285713], [289.0, 395.75], [296.0, 278.7], [294.0, 299.5], [292.0, 431.0], [288.0, 709.0], [290.0, 557.6666666666666], [300.0, 393.0], [291.0, 44.0], [295.0, 288.5], [297.0, 184.99999999999997], [298.0, 50.0], [302.0, 428.33333333333337], [303.0, 40.0], [301.0, 539.5], [317.0, 618.0], [319.0, 299.3888888888889], [307.0, 473.5], [312.0, 410.0], [318.0, 43.0], [316.0, 694.6666666666667], [315.0, 387.8], [313.0, 407.5333333333333], [310.0, 892.0], [306.0, 1006.0], [305.0, 30.0], [304.0, 399.0], [309.0, 35.0], [308.0, 43.0], [320.0, 809.0], [323.0, 807.6], [322.0, 855.0], [324.0, 952.0], [321.0, 32.0], [1.0, 255.0]], "isOverall": false, "label": "ดึงข้อมูลทะเบียนบุคคลทั้งหน่วยบริการ", "isController": false}, {"data": [[217.642, 829.9960000000004]], "isOverall": false, "label": "ดึงข้อมูลทะเบียนบุคคลทั้งหน่วยบริการ-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 324.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 3791.6666666666665, "minX": 1.75558506E12, "maxY": 30325.0, "series": [{"data": [[1.75558506E12, 30325.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75558506E12, 3791.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75558506E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 829.9960000000004, "minX": 1.75558506E12, "maxY": 829.9960000000004, "series": [{"data": [[1.75558506E12, 829.9960000000004]], "isOverall": false, "label": "ดึงข้อมูลทะเบียนบุคคลทั้งหน่วยบริการ", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75558506E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 829.84, "minX": 1.75558506E12, "maxY": 829.84, "series": [{"data": [[1.75558506E12, 829.84]], "isOverall": false, "label": "ดึงข้อมูลทะเบียนบุคคลทั้งหน่วยบริการ", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75558506E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 811.2520000000004, "minX": 1.75558506E12, "maxY": 811.2520000000004, "series": [{"data": [[1.75558506E12, 811.2520000000004]], "isOverall": false, "label": "ดึงข้อมูลทะเบียนบุคคลทั้งหน่วยบริการ", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75558506E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 30.0, "minX": 1.75558506E12, "maxY": 2279.0, "series": [{"data": [[1.75558506E12, 2279.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75558506E12, 1961.3000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75558506E12, 2230.87]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75558506E12, 2120.95]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.75558506E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75558506E12, 783.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75558506E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 171.0, "minX": 24.0, "maxY": 944.0, "series": [{"data": [[319.0, 944.0], [157.0, 255.0], [24.0, 171.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 319.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 171.0, "minX": 24.0, "maxY": 944.0, "series": [{"data": [[319.0, 944.0], [157.0, 255.0], [24.0, 171.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 319.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.75558506E12, "maxY": 8.333333333333334, "series": [{"data": [[1.75558506E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75558506E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.75558506E12, "maxY": 8.333333333333334, "series": [{"data": [[1.75558506E12, 8.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75558506E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.75558506E12, "maxY": 8.333333333333334, "series": [{"data": [[1.75558506E12, 8.333333333333334]], "isOverall": false, "label": "ดึงข้อมูลทะเบียนบุคคลทั้งหน่วยบริการ-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75558506E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.75558506E12, "maxY": 8.333333333333334, "series": [{"data": [[1.75558506E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75558506E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

