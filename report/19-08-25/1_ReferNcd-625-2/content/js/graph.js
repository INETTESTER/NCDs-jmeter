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
        data: {"result": {"minY": 43.0, "minX": 0.0, "maxY": 2524.0, "series": [{"data": [[0.0, 43.0], [0.1, 43.0], [0.2, 43.0], [0.3, 43.0], [0.4, 45.0], [0.5, 46.0], [0.6, 46.0], [0.7, 46.0], [0.8, 47.0], [0.9, 47.0], [1.0, 47.0], [1.1, 47.0], [1.2, 47.0], [1.3, 48.0], [1.4, 48.0], [1.5, 48.0], [1.6, 48.0], [1.7, 48.0], [1.8, 48.0], [1.9, 48.0], [2.0, 48.0], [2.1, 49.0], [2.2, 49.0], [2.3, 50.0], [2.4, 50.0], [2.5, 51.0], [2.6, 51.0], [2.7, 51.0], [2.8, 51.0], [2.9, 51.0], [3.0, 51.0], [3.1, 51.0], [3.2, 52.0], [3.3, 52.0], [3.4, 52.0], [3.5, 52.0], [3.6, 52.0], [3.7, 53.0], [3.8, 53.0], [3.9, 53.0], [4.0, 53.0], [4.1, 53.0], [4.2, 53.0], [4.3, 53.0], [4.4, 53.0], [4.5, 54.0], [4.6, 54.0], [4.7, 55.0], [4.8, 55.0], [4.9, 55.0], [5.0, 55.0], [5.1, 55.0], [5.2, 55.0], [5.3, 55.0], [5.4, 55.0], [5.5, 55.0], [5.6, 55.0], [5.7, 55.0], [5.8, 56.0], [5.9, 56.0], [6.0, 56.0], [6.1, 56.0], [6.2, 56.0], [6.3, 56.0], [6.4, 57.0], [6.5, 57.0], [6.6, 57.0], [6.7, 57.0], [6.8, 57.0], [6.9, 57.0], [7.0, 57.0], [7.1, 57.0], [7.2, 57.0], [7.3, 57.0], [7.4, 57.0], [7.5, 57.0], [7.6, 58.0], [7.7, 58.0], [7.8, 58.0], [7.9, 58.0], [8.0, 58.0], [8.1, 58.0], [8.2, 58.0], [8.3, 58.0], [8.4, 59.0], [8.5, 59.0], [8.6, 59.0], [8.7, 59.0], [8.8, 59.0], [8.9, 59.0], [9.0, 59.0], [9.1, 59.0], [9.2, 60.0], [9.3, 60.0], [9.4, 60.0], [9.5, 60.0], [9.6, 60.0], [9.7, 60.0], [9.8, 60.0], [9.9, 60.0], [10.0, 61.0], [10.1, 61.0], [10.2, 61.0], [10.3, 61.0], [10.4, 61.0], [10.5, 61.0], [10.6, 61.0], [10.7, 61.0], [10.8, 62.0], [10.9, 62.0], [11.0, 62.0], [11.1, 62.0], [11.2, 62.0], [11.3, 62.0], [11.4, 62.0], [11.5, 62.0], [11.6, 63.0], [11.7, 63.0], [11.8, 63.0], [11.9, 63.0], [12.0, 63.0], [12.1, 63.0], [12.2, 64.0], [12.3, 64.0], [12.4, 64.0], [12.5, 64.0], [12.6, 64.0], [12.7, 65.0], [12.8, 65.0], [12.9, 65.0], [13.0, 67.0], [13.1, 67.0], [13.2, 67.0], [13.3, 67.0], [13.4, 67.0], [13.5, 68.0], [13.6, 68.0], [13.7, 68.0], [13.8, 68.0], [13.9, 68.0], [14.0, 68.0], [14.1, 68.0], [14.2, 68.0], [14.3, 69.0], [14.4, 69.0], [14.5, 70.0], [14.6, 71.0], [14.7, 71.0], [14.8, 71.0], [14.9, 71.0], [15.0, 71.0], [15.1, 72.0], [15.2, 72.0], [15.3, 72.0], [15.4, 72.0], [15.5, 72.0], [15.6, 72.0], [15.7, 73.0], [15.8, 73.0], [15.9, 73.0], [16.0, 73.0], [16.1, 73.0], [16.2, 73.0], [16.3, 73.0], [16.4, 73.0], [16.5, 73.0], [16.6, 73.0], [16.7, 73.0], [16.8, 73.0], [16.9, 73.0], [17.0, 73.0], [17.1, 73.0], [17.2, 73.0], [17.3, 74.0], [17.4, 74.0], [17.5, 76.0], [17.6, 76.0], [17.7, 77.0], [17.8, 77.0], [17.9, 77.0], [18.0, 77.0], [18.1, 77.0], [18.2, 77.0], [18.3, 77.0], [18.4, 77.0], [18.5, 78.0], [18.6, 79.0], [18.7, 79.0], [18.8, 80.0], [18.9, 81.0], [19.0, 81.0], [19.1, 81.0], [19.2, 81.0], [19.3, 81.0], [19.4, 82.0], [19.5, 82.0], [19.6, 82.0], [19.7, 83.0], [19.8, 83.0], [19.9, 83.0], [20.0, 83.0], [20.1, 84.0], [20.2, 85.0], [20.3, 85.0], [20.4, 87.0], [20.5, 87.0], [20.6, 87.0], [20.7, 89.0], [20.8, 89.0], [20.9, 90.0], [21.0, 91.0], [21.1, 91.0], [21.2, 91.0], [21.3, 93.0], [21.4, 93.0], [21.5, 94.0], [21.6, 94.0], [21.7, 95.0], [21.8, 96.0], [21.9, 96.0], [22.0, 96.0], [22.1, 97.0], [22.2, 97.0], [22.3, 98.0], [22.4, 98.0], [22.5, 98.0], [22.6, 99.0], [22.7, 99.0], [22.8, 100.0], [22.9, 105.0], [23.0, 105.0], [23.1, 107.0], [23.2, 107.0], [23.3, 108.0], [23.4, 109.0], [23.5, 109.0], [23.6, 111.0], [23.7, 112.0], [23.8, 112.0], [23.9, 112.0], [24.0, 112.0], [24.1, 113.0], [24.2, 119.0], [24.3, 119.0], [24.4, 122.0], [24.5, 122.0], [24.6, 122.0], [24.7, 122.0], [24.8, 122.0], [24.9, 126.0], [25.0, 127.0], [25.1, 127.0], [25.2, 128.0], [25.3, 132.0], [25.4, 132.0], [25.5, 136.0], [25.6, 136.0], [25.7, 140.0], [25.8, 141.0], [25.9, 141.0], [26.0, 143.0], [26.1, 144.0], [26.2, 144.0], [26.3, 145.0], [26.4, 145.0], [26.5, 146.0], [26.6, 147.0], [26.7, 147.0], [26.8, 149.0], [26.9, 149.0], [27.0, 149.0], [27.1, 151.0], [27.2, 151.0], [27.3, 155.0], [27.4, 155.0], [27.5, 155.0], [27.6, 155.0], [27.7, 156.0], [27.8, 156.0], [27.9, 156.0], [28.0, 156.0], [28.1, 156.0], [28.2, 156.0], [28.3, 156.0], [28.4, 158.0], [28.5, 158.0], [28.6, 158.0], [28.7, 158.0], [28.8, 158.0], [28.9, 161.0], [29.0, 161.0], [29.1, 161.0], [29.2, 161.0], [29.3, 165.0], [29.4, 165.0], [29.5, 165.0], [29.6, 165.0], [29.7, 167.0], [29.8, 167.0], [29.9, 167.0], [30.0, 171.0], [30.1, 180.0], [30.2, 180.0], [30.3, 181.0], [30.4, 181.0], [30.5, 185.0], [30.6, 194.0], [30.7, 194.0], [30.8, 196.0], [30.9, 199.0], [31.0, 199.0], [31.1, 207.0], [31.2, 207.0], [31.3, 207.0], [31.4, 208.0], [31.5, 208.0], [31.6, 210.0], [31.7, 211.0], [31.8, 211.0], [31.9, 214.0], [32.0, 214.0], [32.1, 216.0], [32.2, 217.0], [32.3, 217.0], [32.4, 217.0], [32.5, 218.0], [32.6, 218.0], [32.7, 218.0], [32.8, 218.0], [32.9, 223.0], [33.0, 224.0], [33.1, 224.0], [33.2, 224.0], [33.3, 225.0], [33.4, 225.0], [33.5, 227.0], [33.6, 227.0], [33.7, 227.0], [33.8, 229.0], [33.9, 229.0], [34.0, 230.0], [34.1, 233.0], [34.2, 233.0], [34.3, 234.0], [34.4, 237.0], [34.5, 237.0], [34.6, 244.0], [34.7, 244.0], [34.8, 245.0], [34.9, 254.0], [35.0, 254.0], [35.1, 255.0], [35.2, 257.0], [35.3, 257.0], [35.4, 263.0], [35.5, 263.0], [35.6, 266.0], [35.7, 266.0], [35.8, 266.0], [35.9, 267.0], [36.0, 269.0], [36.1, 269.0], [36.2, 270.0], [36.3, 270.0], [36.4, 273.0], [36.5, 277.0], [36.6, 277.0], [36.7, 279.0], [36.8, 282.0], [36.9, 282.0], [37.0, 282.0], [37.1, 282.0], [37.2, 283.0], [37.3, 284.0], [37.4, 284.0], [37.5, 287.0], [37.6, 288.0], [37.7, 288.0], [37.8, 291.0], [37.9, 291.0], [38.0, 292.0], [38.1, 294.0], [38.2, 294.0], [38.3, 296.0], [38.4, 296.0], [38.5, 296.0], [38.6, 298.0], [38.7, 298.0], [38.8, 304.0], [38.9, 305.0], [39.0, 305.0], [39.1, 306.0], [39.2, 307.0], [39.3, 307.0], [39.4, 308.0], [39.5, 308.0], [39.6, 310.0], [39.7, 311.0], [39.8, 311.0], [39.9, 313.0], [40.0, 318.0], [40.1, 318.0], [40.2, 325.0], [40.3, 325.0], [40.4, 325.0], [40.5, 327.0], [40.6, 327.0], [40.7, 329.0], [40.8, 332.0], [40.9, 332.0], [41.0, 333.0], [41.1, 333.0], [41.2, 333.0], [41.3, 334.0], [41.4, 334.0], [41.5, 337.0], [41.6, 338.0], [41.7, 338.0], [41.8, 339.0], [41.9, 339.0], [42.0, 344.0], [42.1, 346.0], [42.2, 346.0], [42.3, 347.0], [42.4, 354.0], [42.5, 354.0], [42.6, 357.0], [42.7, 357.0], [42.8, 358.0], [42.9, 359.0], [43.0, 359.0], [43.1, 359.0], [43.2, 360.0], [43.3, 360.0], [43.4, 361.0], [43.5, 361.0], [43.6, 368.0], [43.7, 375.0], [43.8, 375.0], [43.9, 377.0], [44.0, 379.0], [44.1, 379.0], [44.2, 380.0], [44.3, 380.0], [44.4, 385.0], [44.5, 390.0], [44.6, 390.0], [44.7, 390.0], [44.8, 392.0], [44.9, 392.0], [45.0, 395.0], [45.1, 395.0], [45.2, 397.0], [45.3, 398.0], [45.4, 398.0], [45.5, 407.0], [45.6, 412.0], [45.7, 412.0], [45.8, 415.0], [45.9, 415.0], [46.0, 415.0], [46.1, 420.0], [46.2, 420.0], [46.3, 427.0], [46.4, 444.0], [46.5, 444.0], [46.6, 457.0], [46.7, 457.0], [46.8, 462.0], [46.9, 463.0], [47.0, 463.0], [47.1, 464.0], [47.2, 471.0], [47.3, 471.0], [47.4, 472.0], [47.5, 472.0], [47.6, 476.0], [47.7, 481.0], [47.8, 481.0], [47.9, 485.0], [48.0, 488.0], [48.1, 488.0], [48.2, 510.0], [48.3, 510.0], [48.4, 520.0], [48.5, 524.0], [48.6, 524.0], [48.7, 530.0], [48.8, 539.0], [48.9, 539.0], [49.0, 555.0], [49.1, 555.0], [49.2, 564.0], [49.3, 567.0], [49.4, 567.0], [49.5, 572.0], [49.6, 574.0], [49.7, 574.0], [49.8, 577.0], [49.9, 577.0], [50.0, 580.0], [50.1, 581.0], [50.2, 581.0], [50.3, 589.0], [50.4, 627.0], [50.5, 627.0], [50.6, 628.0], [50.7, 628.0], [50.8, 633.0], [50.9, 649.0], [51.0, 649.0], [51.1, 663.0], [51.2, 670.0], [51.3, 670.0], [51.4, 675.0], [51.5, 675.0], [51.6, 683.0], [51.7, 684.0], [51.8, 684.0], [51.9, 695.0], [52.0, 696.0], [52.1, 696.0], [52.2, 698.0], [52.3, 698.0], [52.4, 703.0], [52.5, 703.0], [52.6, 703.0], [52.7, 703.0], [52.8, 705.0], [52.9, 705.0], [53.0, 710.0], [53.1, 710.0], [53.2, 712.0], [53.3, 716.0], [53.4, 716.0], [53.5, 719.0], [53.6, 727.0], [53.7, 727.0], [53.8, 728.0], [53.9, 728.0], [54.0, 746.0], [54.1, 812.0], [54.2, 812.0], [54.3, 822.0], [54.4, 823.0], [54.5, 823.0], [54.6, 829.0], [54.7, 829.0], [54.8, 890.0], [54.9, 897.0], [55.0, 897.0], [55.1, 910.0], [55.2, 913.0], [55.3, 913.0], [55.4, 938.0], [55.5, 938.0], [55.6, 951.0], [55.7, 1001.0], [55.8, 1001.0], [55.9, 1002.0], [56.0, 1016.0], [56.1, 1016.0], [56.2, 1046.0], [56.3, 1046.0], [56.4, 1065.0], [56.5, 1105.0], [56.6, 1105.0], [56.7, 1116.0], [56.8, 1118.0], [56.9, 1118.0], [57.0, 1140.0], [57.1, 1140.0], [57.2, 1171.0], [57.3, 1216.0], [57.4, 1216.0], [57.5, 1242.0], [57.6, 1244.0], [57.7, 1244.0], [57.8, 1303.0], [57.9, 1303.0], [58.0, 1303.0], [58.1, 1328.0], [58.2, 1328.0], [58.3, 1382.0], [58.4, 1394.0], [58.5, 1394.0], [58.6, 1403.0], [58.7, 1403.0], [58.8, 1415.0], [58.9, 1417.0], [59.0, 1417.0], [59.1, 1419.0], [59.2, 1431.0], [59.3, 1431.0], [59.4, 1438.0], [59.5, 1438.0], [59.6, 1448.0], [59.7, 1449.0], [59.8, 1449.0], [59.9, 1483.0], [60.0, 1489.0], [60.1, 1489.0], [60.2, 1508.0], [60.3, 1508.0], [60.4, 1524.0], [60.5, 1537.0], [60.6, 1537.0], [60.7, 1543.0], [60.8, 1555.0], [60.9, 1555.0], [61.0, 1564.0], [61.1, 1564.0], [61.2, 1564.0], [61.3, 1568.0], [61.4, 1568.0], [61.5, 1573.0], [61.6, 1574.0], [61.7, 1574.0], [61.8, 1576.0], [61.9, 1576.0], [62.0, 1577.0], [62.1, 1578.0], [62.2, 1578.0], [62.3, 1578.0], [62.4, 1584.0], [62.5, 1584.0], [62.6, 1594.0], [62.7, 1594.0], [62.8, 1596.0], [62.9, 1602.0], [63.0, 1602.0], [63.1, 1605.0], [63.2, 1612.0], [63.3, 1612.0], [63.4, 1613.0], [63.5, 1613.0], [63.6, 1613.0], [63.7, 1615.0], [63.8, 1615.0], [63.9, 1623.0], [64.0, 1624.0], [64.1, 1624.0], [64.2, 1627.0], [64.3, 1627.0], [64.4, 1649.0], [64.5, 1671.0], [64.6, 1671.0], [64.7, 1681.0], [64.8, 1686.0], [64.9, 1686.0], [65.0, 1690.0], [65.1, 1690.0], [65.2, 1703.0], [65.3, 1710.0], [65.4, 1710.0], [65.5, 1724.0], [65.6, 1735.0], [65.7, 1735.0], [65.8, 1738.0], [65.9, 1738.0], [66.0, 1748.0], [66.1, 1749.0], [66.2, 1749.0], [66.3, 1765.0], [66.4, 1772.0], [66.5, 1772.0], [66.6, 1774.0], [66.7, 1774.0], [66.8, 1775.0], [66.9, 1783.0], [67.0, 1783.0], [67.1, 1787.0], [67.2, 1805.0], [67.3, 1805.0], [67.4, 1810.0], [67.5, 1810.0], [67.6, 1811.0], [67.7, 1831.0], [67.8, 1831.0], [67.9, 1832.0], [68.0, 1836.0], [68.1, 1836.0], [68.2, 1840.0], [68.3, 1840.0], [68.4, 1847.0], [68.5, 1849.0], [68.6, 1849.0], [68.7, 1855.0], [68.8, 1867.0], [68.9, 1867.0], [69.0, 1869.0], [69.1, 1869.0], [69.2, 1871.0], [69.3, 1892.0], [69.4, 1892.0], [69.5, 1894.0], [69.6, 1897.0], [69.7, 1897.0], [69.8, 1900.0], [69.9, 1900.0], [70.0, 1920.0], [70.1, 1924.0], [70.2, 1924.0], [70.3, 1931.0], [70.4, 1935.0], [70.5, 1935.0], [70.6, 1947.0], [70.7, 1947.0], [70.8, 1948.0], [70.9, 1955.0], [71.0, 1955.0], [71.1, 1956.0], [71.2, 1972.0], [71.3, 1972.0], [71.4, 1993.0], [71.5, 1993.0], [71.6, 1998.0], [71.7, 2022.0], [71.8, 2022.0], [71.9, 2037.0], [72.0, 2038.0], [72.1, 2038.0], [72.2, 2053.0], [72.3, 2053.0], [72.4, 2071.0], [72.5, 2077.0], [72.6, 2077.0], [72.7, 2077.0], [72.8, 2081.0], [72.9, 2081.0], [73.0, 2081.0], [73.1, 2081.0], [73.2, 2102.0], [73.3, 2103.0], [73.4, 2103.0], [73.5, 2106.0], [73.6, 2123.0], [73.7, 2123.0], [73.8, 2129.0], [73.9, 2129.0], [74.0, 2132.0], [74.1, 2133.0], [74.2, 2133.0], [74.3, 2134.0], [74.4, 2135.0], [74.5, 2135.0], [74.6, 2136.0], [74.7, 2136.0], [74.8, 2143.0], [74.9, 2145.0], [75.0, 2145.0], [75.1, 2147.0], [75.2, 2148.0], [75.3, 2148.0], [75.4, 2153.0], [75.5, 2153.0], [75.6, 2159.0], [75.7, 2163.0], [75.8, 2163.0], [75.9, 2170.0], [76.0, 2170.0], [76.1, 2170.0], [76.2, 2172.0], [76.3, 2172.0], [76.4, 2175.0], [76.5, 2177.0], [76.6, 2177.0], [76.7, 2177.0], [76.8, 2177.0], [76.9, 2177.0], [77.0, 2180.0], [77.1, 2180.0], [77.2, 2180.0], [77.3, 2184.0], [77.4, 2184.0], [77.5, 2184.0], [77.6, 2185.0], [77.7, 2185.0], [77.8, 2187.0], [77.9, 2187.0], [78.0, 2187.0], [78.1, 2189.0], [78.2, 2189.0], [78.3, 2189.0], [78.4, 2191.0], [78.5, 2191.0], [78.6, 2191.0], [78.7, 2191.0], [78.8, 2192.0], [78.9, 2193.0], [79.0, 2193.0], [79.1, 2198.0], [79.2, 2198.0], [79.3, 2198.0], [79.4, 2199.0], [79.5, 2199.0], [79.6, 2203.0], [79.7, 2206.0], [79.8, 2206.0], [79.9, 2207.0], [80.0, 2207.0], [80.1, 2207.0], [80.2, 2211.0], [80.3, 2211.0], [80.4, 2222.0], [80.5, 2225.0], [80.6, 2225.0], [80.7, 2226.0], [80.8, 2227.0], [80.9, 2227.0], [81.0, 2230.0], [81.1, 2230.0], [81.2, 2233.0], [81.3, 2233.0], [81.4, 2233.0], [81.5, 2236.0], [81.6, 2237.0], [81.7, 2237.0], [81.8, 2238.0], [81.9, 2238.0], [82.0, 2241.0], [82.1, 2241.0], [82.2, 2241.0], [82.3, 2242.0], [82.4, 2244.0], [82.5, 2244.0], [82.6, 2247.0], [82.7, 2247.0], [82.8, 2248.0], [82.9, 2256.0], [83.0, 2256.0], [83.1, 2257.0], [83.2, 2258.0], [83.3, 2258.0], [83.4, 2258.0], [83.5, 2258.0], [83.6, 2259.0], [83.7, 2260.0], [83.8, 2260.0], [83.9, 2262.0], [84.0, 2264.0], [84.1, 2264.0], [84.2, 2265.0], [84.3, 2265.0], [84.4, 2266.0], [84.5, 2268.0], [84.6, 2268.0], [84.7, 2270.0], [84.8, 2271.0], [84.9, 2271.0], [85.0, 2271.0], [85.1, 2271.0], [85.2, 2271.0], [85.3, 2272.0], [85.4, 2272.0], [85.5, 2273.0], [85.6, 2274.0], [85.7, 2274.0], [85.8, 2274.0], [85.9, 2274.0], [86.0, 2274.0], [86.1, 2275.0], [86.2, 2275.0], [86.3, 2275.0], [86.4, 2278.0], [86.5, 2278.0], [86.6, 2279.0], [86.7, 2279.0], [86.8, 2282.0], [86.9, 2283.0], [87.0, 2283.0], [87.1, 2284.0], [87.2, 2285.0], [87.3, 2285.0], [87.4, 2285.0], [87.5, 2285.0], [87.6, 2285.0], [87.7, 2286.0], [87.8, 2286.0], [87.9, 2290.0], [88.0, 2294.0], [88.1, 2294.0], [88.2, 2295.0], [88.3, 2295.0], [88.4, 2295.0], [88.5, 2295.0], [88.6, 2295.0], [88.7, 2298.0], [88.8, 2299.0], [88.9, 2299.0], [89.0, 2300.0], [89.1, 2300.0], [89.2, 2301.0], [89.3, 2303.0], [89.4, 2303.0], [89.5, 2304.0], [89.6, 2305.0], [89.7, 2305.0], [89.8, 2308.0], [89.9, 2308.0], [90.0, 2310.0], [90.1, 2314.0], [90.2, 2314.0], [90.3, 2319.0], [90.4, 2321.0], [90.5, 2321.0], [90.6, 2324.0], [90.7, 2324.0], [90.8, 2326.0], [90.9, 2327.0], [91.0, 2327.0], [91.1, 2329.0], [91.2, 2329.0], [91.3, 2329.0], [91.4, 2330.0], [91.5, 2330.0], [91.6, 2331.0], [91.7, 2334.0], [91.8, 2334.0], [91.9, 2334.0], [92.0, 2334.0], [92.1, 2334.0], [92.2, 2335.0], [92.3, 2335.0], [92.4, 2337.0], [92.5, 2340.0], [92.6, 2340.0], [92.7, 2348.0], [92.8, 2348.0], [92.9, 2348.0], [93.0, 2348.0], [93.1, 2348.0], [93.2, 2349.0], [93.3, 2349.0], [93.4, 2349.0], [93.5, 2349.0], [93.6, 2350.0], [93.7, 2350.0], [93.8, 2350.0], [93.9, 2350.0], [94.0, 2352.0], [94.1, 2352.0], [94.2, 2352.0], [94.3, 2353.0], [94.4, 2353.0], [94.5, 2353.0], [94.6, 2355.0], [94.7, 2355.0], [94.8, 2358.0], [94.9, 2359.0], [95.0, 2359.0], [95.1, 2362.0], [95.2, 2365.0], [95.3, 2365.0], [95.4, 2366.0], [95.5, 2366.0], [95.6, 2366.0], [95.7, 2367.0], [95.8, 2367.0], [95.9, 2371.0], [96.0, 2373.0], [96.1, 2373.0], [96.2, 2376.0], [96.3, 2376.0], [96.4, 2376.0], [96.5, 2378.0], [96.6, 2378.0], [96.7, 2380.0], [96.8, 2383.0], [96.9, 2383.0], [97.0, 2383.0], [97.1, 2383.0], [97.2, 2383.0], [97.3, 2385.0], [97.4, 2385.0], [97.5, 2394.0], [97.6, 2407.0], [97.7, 2407.0], [97.8, 2409.0], [97.9, 2409.0], [98.0, 2409.0], [98.1, 2414.0], [98.2, 2414.0], [98.3, 2418.0], [98.4, 2425.0], [98.5, 2425.0], [98.6, 2429.0], [98.7, 2429.0], [98.8, 2435.0], [98.9, 2454.0], [99.0, 2454.0], [99.1, 2464.0], [99.2, 2494.0], [99.3, 2494.0], [99.4, 2502.0], [99.5, 2502.0], [99.6, 2508.0], [99.7, 2523.0], [99.8, 2523.0], [99.9, 2524.0]], "isOverall": false, "label": "ดึงข้อมูลการส่งตัวภายในระบบ NCDs", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 142.0, "series": [{"data": [[0.0, 142.0], [600.0, 12.0], [700.0, 11.0], [800.0, 6.0], [900.0, 4.0], [1000.0, 5.0], [1100.0, 5.0], [1200.0, 3.0], [1300.0, 5.0], [1400.0, 10.0], [1500.0, 17.0], [100.0, 52.0], [1600.0, 14.0], [1700.0, 13.0], [1800.0, 16.0], [1900.0, 12.0], [2000.0, 9.0], [2100.0, 40.0], [2200.0, 59.0], [2300.0, 54.0], [2400.0, 11.0], [2500.0, 4.0], [200.0, 48.0], [300.0, 42.0], [400.0, 17.0], [500.0, 14.0]], "isOverall": false, "label": "ดึงข้อมูลการส่งตัวภายในระบบ NCDs", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 75.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 301.0, "series": [{"data": [[0.0, 301.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 75.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 249.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 267.2255999999997, "minX": 1.75557648E12, "maxY": 267.2255999999997, "series": [{"data": [[1.75557648E12, 267.2255999999997]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75557648E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 47.0, "minX": 2.0, "maxY": 2524.0, "series": [{"data": [[2.0, 2206.0], [3.0, 2409.0], [5.0, 2213.0], [7.0, 2248.5], [9.0, 2226.5], [10.0, 2274.0], [14.0, 2337.5], [18.0, 2180.0], [19.0, 2238.0], [20.0, 2228.0], [22.0, 2184.5], [28.0, 2187.0], [30.0, 2275.0], [31.0, 2249.714285714286], [33.0, 2310.5], [35.0, 1215.5], [36.0, 2285.0], [40.0, 2383.0], [42.0, 2242.0], [45.0, 2334.0], [47.0, 2350.0], [46.0, 1810.0], [48.0, 2225.8], [53.0, 2340.0], [55.0, 1711.0], [54.0, 2227.6666666666665], [56.0, 2299.0], [59.0, 2226.0], [58.0, 2224.0], [61.0, 2172.0], [60.0, 2524.0], [63.0, 2211.0], [67.0, 1784.75], [69.0, 2355.5], [68.0, 2189.0], [75.0, 2331.0], [74.0, 2353.0], [72.0, 1669.6666666666665], [78.0, 2307.5], [77.0, 2311.0], [82.0, 991.3333333333334], [81.0, 2177.0], [85.0, 2274.0], [84.0, 2217.5], [90.0, 2244.0], [88.0, 1728.0], [95.0, 2414.5], [93.0, 2371.0], [98.0, 2380.0], [96.0, 2301.6666666666665], [102.0, 2308.0], [100.0, 269.0], [107.0, 1739.6666666666665], [104.0, 2207.0], [110.0, 2264.0], [108.0, 333.0], [115.0, 938.0], [114.0, 1731.0], [119.0, 2233.0], [118.0, 2350.0], [117.0, 2342.0], [121.0, 1572.5], [126.0, 1057.6666666666665], [124.0, 1337.5], [134.0, 2192.0], [133.0, 2203.5], [132.0, 2348.0], [131.0, 2284.0], [130.0, 2324.0], [128.0, 2246.5], [142.0, 2282.0], [141.0, 999.6666666666667], [140.0, 287.0], [137.0, 2286.0], [136.0, 1277.5], [151.0, 2281.5], [150.0, 1450.0], [149.0, 2321.0], [146.0, 449.5], [144.0, 1583.5], [159.0, 2347.5], [157.0, 332.0], [156.0, 910.0], [155.0, 2365.0], [154.0, 2330.0], [153.0, 227.0], [152.0, 2310.0], [167.0, 1360.0], [165.0, 2429.0], [164.0, 539.0], [163.0, 524.0], [162.0, 2077.0], [161.0, 2454.0], [160.0, 564.0], [174.0, 1570.0], [171.0, 2077.0], [170.0, 2336.3333333333335], [183.0, 1321.0], [182.0, 2295.0], [180.0, 2414.0], [179.0, 530.0], [178.0, 208.0], [177.0, 393.5], [176.0, 464.0], [191.0, 2285.0], [190.0, 180.0], [189.0, 974.6666666666667], [186.0, 1476.5], [184.0, 2285.0], [199.0, 344.0], [198.0, 297.5], [196.0, 2266.0], [195.0, 214.0], [194.0, 1226.0], [192.0, 2409.0], [207.0, 476.0], [206.0, 217.0], [205.0, 985.6666666666667], [202.0, 298.5], [200.0, 2106.0], [215.0, 390.0], [214.0, 308.0], [213.0, 395.0], [212.0, 1311.5], [210.0, 1430.5], [208.0, 398.0], [220.0, 2333.0], [217.0, 1411.0], [229.0, 2279.0], [228.0, 194.0], [227.0, 397.0], [226.0, 2129.0], [225.0, 2326.0], [224.0, 1577.0], [238.0, 716.0], [237.0, 368.0], [236.0, 294.0], [235.0, 307.0], [234.0, 871.5], [232.0, 2278.0], [247.0, 2207.0], [246.0, 2233.0], [245.0, 318.0], [244.0, 361.0], [243.0, 223.0], [242.0, 337.0], [241.0, 359.0], [240.0, 1207.0], [255.0, 488.0], [254.0, 1948.0], [253.0, 510.0], [252.0, 2170.0], [251.0, 254.0], [250.0, 2199.0], [249.0, 224.0], [248.0, 156.0], [270.0, 147.0], [268.0, 2071.0], [266.0, 185.0], [264.0, 1560.6666666666667], [259.0, 145.0], [256.0, 207.0], [285.0, 1982.5], [283.0, 91.0], [282.0, 1043.5], [278.0, 471.0], [273.0, 1089.0], [276.0, 2045.0], [303.0, 823.5], [300.0, 1955.0], [299.0, 358.0], [298.0, 1956.0], [297.0, 379.0], [289.0, 73.0], [319.0, 301.93333333333334], [314.0, 86.0], [318.0, 109.33333333333333], [316.0, 290.6666666666667], [307.0, 1935.0], [304.0, 1894.0], [317.0, 78.4], [315.0, 155.11111111111111], [313.0, 345.66666666666663], [312.0, 696.7], [311.0, 411.3333333333333], [310.0, 927.6666666666667], [309.0, 1003.3333333333333], [322.0, 149.0], [320.0, 302.5], [321.0, 305.3333333333333], [324.0, 144.33333333333334], [323.0, 79.5], [326.0, 682.3333333333334], [332.0, 60.5], [335.0, 1006.75], [330.0, 1896.0], [329.0, 1597.0], [334.0, 1849.0], [333.0, 98.0], [338.0, 312.5], [345.0, 304.25], [346.0, 1831.5], [344.0, 866.5], [343.0, 767.75], [342.0, 883.0], [341.0, 606.5], [340.0, 894.2], [339.0, 82.0], [349.0, 722.2500000000001], [348.0, 199.0], [351.0, 721.75], [350.0, 666.3333333333333], [337.0, 812.0], [365.0, 1028.3333333333333], [366.0, 1001.5], [367.0, 1141.6666666666667], [364.0, 1602.0], [354.0, 1543.0], [353.0, 59.5], [352.0, 935.6], [363.0, 1080.0], [362.0, 1568.5], [361.0, 1619.5], [360.0, 937.0], [359.0, 1615.0], [357.0, 866.5], [358.0, 1811.0], [356.0, 61.0], [370.0, 861.0], [379.0, 310.0], [378.0, 1724.0], [377.0, 210.0], [375.0, 1238.0], [373.0, 1559.5], [374.0, 49.0], [371.0, 791.1428571428571], [380.0, 1765.0], [369.0, 717.2], [368.0, 1003.0], [383.0, 684.0], [376.0, 1774.0], [382.0, 61.0], [399.0, 69.5], [397.0, 300.3333333333333], [396.0, 447.0], [387.0, 48.0], [386.0, 859.0], [395.0, 86.0], [394.0, 274.5], [393.0, 739.5], [391.0, 385.0], [390.0, 1259.6666666666667], [388.0, 266.0], [389.0, 291.0], [398.0, 1165.5], [392.0, 1731.0], [414.0, 143.0], [400.0, 245.71428571428572], [407.0, 1372.5], [405.0, 346.0], [404.0, 760.5], [401.0, 56.0], [415.0, 421.0], [412.0, 420.0], [403.0, 47.0], [411.0, 1382.0], [410.0, 333.0], [409.0, 334.0], [408.0, 51.0], [431.0, 1046.0], [424.0, 97.66666666666667], [430.0, 727.0], [429.0, 549.5], [427.0, 698.0], [426.0, 87.0], [425.0, 395.0], [423.0, 1116.0], [416.0, 112.42857142857143], [419.0, 119.85714285714286], [418.0, 152.36842105263156], [417.0, 264.32142857142856], [422.0, 634.0], [421.0, 68.5], [420.0, 72.5], [433.0, 1105.0], [432.0, 81.0]], "isOverall": false, "label": "ดึงข้อมูลการส่งตัวภายในระบบ NCDs", "isController": false}, {"data": [[267.2287999999998, 1034.1295999999995]], "isOverall": false, "label": "ดึงข้อมูลการส่งตัวภายในระบบ NCDs-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 433.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4750.0, "minX": 1.75557648E12, "maxY": 61687.5, "series": [{"data": [[1.75557648E12, 61687.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75557648E12, 4750.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75557648E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1034.1295999999995, "minX": 1.75557648E12, "maxY": 1034.1295999999995, "series": [{"data": [[1.75557648E12, 1034.1295999999995]], "isOverall": false, "label": "ดึงข้อมูลการส่งตัวภายในระบบ NCDs", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75557648E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1033.7183999999997, "minX": 1.75557648E12, "maxY": 1033.7183999999997, "series": [{"data": [[1.75557648E12, 1033.7183999999997]], "isOverall": false, "label": "ดึงข้อมูลการส่งตัวภายในระบบ NCDs", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75557648E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 917.3135999999997, "minX": 1.75557648E12, "maxY": 917.3135999999997, "series": [{"data": [[1.75557648E12, 917.3135999999997]], "isOverall": false, "label": "ดึงข้อมูลการส่งตัวภายในระบบ NCDs", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75557648E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 43.0, "minX": 1.75557648E12, "maxY": 2524.0, "series": [{"data": [[1.75557648E12, 2524.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75557648E12, 2311.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75557648E12, 2461.4]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75557648E12, 2361.1]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.75557648E12, 43.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75557648E12, 580.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75557648E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 82.0, "minX": 93.0, "maxY": 2193.0, "series": [{"data": [[269.0, 263.0], [263.0, 2193.0], [93.0, 82.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 269.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 82.0, "minX": 93.0, "maxY": 2193.0, "series": [{"data": [[269.0, 263.0], [263.0, 2193.0], [93.0, 82.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 269.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.416666666666666, "minX": 1.75557648E12, "maxY": 10.416666666666666, "series": [{"data": [[1.75557648E12, 10.416666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75557648E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.416666666666666, "minX": 1.75557648E12, "maxY": 10.416666666666666, "series": [{"data": [[1.75557648E12, 10.416666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75557648E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.416666666666666, "minX": 1.75557648E12, "maxY": 10.416666666666666, "series": [{"data": [[1.75557648E12, 10.416666666666666]], "isOverall": false, "label": "ดึงข้อมูลการส่งตัวภายในระบบ NCDs-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75557648E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.416666666666666, "minX": 1.75557648E12, "maxY": 10.416666666666666, "series": [{"data": [[1.75557648E12, 10.416666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75557648E12, "title": "Total Transactions Per Second"}},
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

