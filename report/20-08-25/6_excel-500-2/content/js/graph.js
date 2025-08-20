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
        data: {"result": {"minY": 18.0, "minX": 0.0, "maxY": 4649.0, "series": [{"data": [[0.0, 18.0], [0.1, 18.0], [0.2, 19.0], [0.3, 19.0], [0.4, 22.0], [0.5, 22.0], [0.6, 22.0], [0.7, 97.0], [0.8, 103.0], [0.9, 103.0], [1.0, 103.0], [1.1, 103.0], [1.2, 103.0], [1.3, 112.0], [1.4, 112.0], [1.5, 112.0], [1.6, 113.0], [1.7, 113.0], [1.8, 118.0], [1.9, 118.0], [2.0, 123.0], [2.1, 123.0], [2.2, 127.0], [2.3, 127.0], [2.4, 127.0], [2.5, 139.0], [2.6, 139.0], [2.7, 156.0], [2.8, 156.0], [2.9, 164.0], [3.0, 164.0], [3.1, 189.0], [3.2, 189.0], [3.3, 189.0], [3.4, 189.0], [3.5, 192.0], [3.6, 192.0], [3.7, 192.0], [3.8, 192.0], [3.9, 194.0], [4.0, 194.0], [4.1, 197.0], [4.2, 197.0], [4.3, 199.0], [4.4, 199.0], [4.5, 201.0], [4.6, 201.0], [4.7, 202.0], [4.8, 202.0], [4.9, 202.0], [5.0, 202.0], [5.1, 206.0], [5.2, 206.0], [5.3, 213.0], [5.4, 213.0], [5.5, 224.0], [5.6, 224.0], [5.7, 225.0], [5.8, 225.0], [5.9, 227.0], [6.0, 227.0], [6.1, 229.0], [6.2, 229.0], [6.3, 231.0], [6.4, 231.0], [6.5, 232.0], [6.6, 232.0], [6.7, 244.0], [6.8, 244.0], [6.9, 244.0], [7.0, 244.0], [7.1, 247.0], [7.2, 247.0], [7.3, 247.0], [7.4, 247.0], [7.5, 264.0], [7.6, 264.0], [7.7, 278.0], [7.8, 278.0], [7.9, 283.0], [8.0, 283.0], [8.1, 295.0], [8.2, 295.0], [8.3, 296.0], [8.4, 296.0], [8.5, 300.0], [8.6, 300.0], [8.7, 304.0], [8.8, 318.0], [8.9, 318.0], [9.0, 322.0], [9.1, 322.0], [9.2, 332.0], [9.3, 332.0], [9.4, 344.0], [9.5, 344.0], [9.6, 347.0], [9.7, 347.0], [9.8, 347.0], [9.9, 347.0], [10.0, 348.0], [10.1, 348.0], [10.2, 369.0], [10.3, 369.0], [10.4, 393.0], [10.5, 393.0], [10.6, 395.0], [10.7, 395.0], [10.8, 400.0], [10.9, 400.0], [11.0, 413.0], [11.1, 413.0], [11.2, 422.0], [11.3, 422.0], [11.4, 431.0], [11.5, 431.0], [11.6, 434.0], [11.7, 434.0], [11.8, 437.0], [11.9, 437.0], [12.0, 459.0], [12.1, 459.0], [12.2, 461.0], [12.3, 461.0], [12.4, 463.0], [12.5, 463.0], [12.6, 464.0], [12.7, 464.0], [12.8, 466.0], [12.9, 466.0], [13.0, 468.0], [13.1, 468.0], [13.2, 477.0], [13.3, 477.0], [13.4, 479.0], [13.5, 479.0], [13.6, 488.0], [13.7, 488.0], [13.8, 493.0], [13.9, 493.0], [14.0, 506.0], [14.1, 506.0], [14.2, 506.0], [14.3, 506.0], [14.4, 513.0], [14.5, 513.0], [14.6, 519.0], [14.7, 519.0], [14.8, 519.0], [14.9, 519.0], [15.0, 533.0], [15.1, 533.0], [15.2, 535.0], [15.3, 535.0], [15.4, 540.0], [15.5, 540.0], [15.6, 542.0], [15.7, 542.0], [15.8, 565.0], [15.9, 565.0], [16.0, 567.0], [16.1, 567.0], [16.2, 569.0], [16.3, 569.0], [16.4, 577.0], [16.5, 577.0], [16.6, 577.0], [16.7, 577.0], [16.8, 582.0], [16.9, 582.0], [17.0, 594.0], [17.1, 594.0], [17.2, 594.0], [17.3, 594.0], [17.4, 595.0], [17.5, 595.0], [17.6, 595.0], [17.7, 595.0], [17.8, 597.0], [17.9, 597.0], [18.0, 600.0], [18.1, 600.0], [18.2, 606.0], [18.3, 606.0], [18.4, 608.0], [18.5, 608.0], [18.6, 610.0], [18.7, 610.0], [18.8, 614.0], [18.9, 614.0], [19.0, 623.0], [19.1, 623.0], [19.2, 632.0], [19.3, 632.0], [19.4, 633.0], [19.5, 633.0], [19.6, 642.0], [19.7, 642.0], [19.8, 650.0], [19.9, 650.0], [20.0, 655.0], [20.1, 655.0], [20.2, 660.0], [20.3, 660.0], [20.4, 662.0], [20.5, 662.0], [20.6, 681.0], [20.7, 681.0], [20.8, 684.0], [20.9, 684.0], [21.0, 690.0], [21.1, 690.0], [21.2, 692.0], [21.3, 692.0], [21.4, 712.0], [21.5, 712.0], [21.6, 722.0], [21.7, 722.0], [21.8, 722.0], [21.9, 722.0], [22.0, 722.0], [22.1, 722.0], [22.2, 732.0], [22.3, 732.0], [22.4, 735.0], [22.5, 735.0], [22.6, 737.0], [22.7, 737.0], [22.8, 742.0], [22.9, 742.0], [23.0, 742.0], [23.1, 742.0], [23.2, 743.0], [23.3, 743.0], [23.4, 743.0], [23.5, 743.0], [23.6, 744.0], [23.7, 744.0], [23.8, 744.0], [23.9, 744.0], [24.0, 746.0], [24.1, 746.0], [24.2, 784.0], [24.3, 784.0], [24.4, 799.0], [24.5, 799.0], [24.6, 800.0], [24.7, 800.0], [24.8, 821.0], [24.9, 821.0], [25.0, 832.0], [25.1, 832.0], [25.2, 849.0], [25.3, 849.0], [25.4, 901.0], [25.5, 901.0], [25.6, 906.0], [25.7, 906.0], [25.8, 915.0], [25.9, 915.0], [26.0, 945.0], [26.1, 945.0], [26.2, 946.0], [26.3, 946.0], [26.4, 967.0], [26.5, 967.0], [26.6, 969.0], [26.7, 969.0], [26.8, 1038.0], [26.9, 1038.0], [27.0, 1052.0], [27.1, 1052.0], [27.2, 1075.0], [27.3, 1075.0], [27.4, 1098.0], [27.5, 1098.0], [27.6, 1124.0], [27.7, 1124.0], [27.8, 1136.0], [27.9, 1136.0], [28.0, 1150.0], [28.1, 1150.0], [28.2, 1152.0], [28.3, 1152.0], [28.4, 1162.0], [28.5, 1162.0], [28.6, 1173.0], [28.7, 1173.0], [28.8, 1175.0], [28.9, 1175.0], [29.0, 1192.0], [29.1, 1192.0], [29.2, 1223.0], [29.3, 1223.0], [29.4, 1224.0], [29.5, 1224.0], [29.6, 1242.0], [29.7, 1242.0], [29.8, 1247.0], [29.9, 1247.0], [30.0, 1293.0], [30.1, 1293.0], [30.2, 1293.0], [30.3, 1293.0], [30.4, 1303.0], [30.5, 1303.0], [30.6, 1335.0], [30.7, 1335.0], [30.8, 1341.0], [30.9, 1341.0], [31.0, 1342.0], [31.1, 1342.0], [31.2, 1363.0], [31.3, 1363.0], [31.4, 1377.0], [31.5, 1377.0], [31.6, 1387.0], [31.7, 1387.0], [31.8, 1396.0], [31.9, 1396.0], [32.0, 1401.0], [32.1, 1401.0], [32.2, 1417.0], [32.3, 1417.0], [32.4, 1420.0], [32.5, 1420.0], [32.6, 1430.0], [32.7, 1430.0], [32.8, 1432.0], [32.9, 1432.0], [33.0, 1439.0], [33.1, 1439.0], [33.2, 1467.0], [33.3, 1467.0], [33.4, 1475.0], [33.5, 1475.0], [33.6, 1492.0], [33.7, 1492.0], [33.8, 1503.0], [33.9, 1503.0], [34.0, 1504.0], [34.1, 1504.0], [34.2, 1521.0], [34.3, 1521.0], [34.4, 1523.0], [34.5, 1523.0], [34.6, 1540.0], [34.7, 1540.0], [34.8, 1543.0], [34.9, 1543.0], [35.0, 1556.0], [35.1, 1556.0], [35.2, 1558.0], [35.3, 1558.0], [35.4, 1575.0], [35.5, 1575.0], [35.6, 1579.0], [35.7, 1579.0], [35.8, 1588.0], [35.9, 1588.0], [36.0, 1606.0], [36.1, 1606.0], [36.2, 1612.0], [36.3, 1612.0], [36.4, 1612.0], [36.5, 1612.0], [36.6, 1614.0], [36.7, 1614.0], [36.8, 1625.0], [36.9, 1625.0], [37.0, 1656.0], [37.1, 1656.0], [37.2, 1663.0], [37.3, 1663.0], [37.4, 1665.0], [37.5, 1665.0], [37.6, 1668.0], [37.7, 1668.0], [37.8, 1668.0], [37.9, 1671.0], [38.0, 1671.0], [38.1, 1673.0], [38.2, 1673.0], [38.3, 1682.0], [38.4, 1682.0], [38.5, 1689.0], [38.6, 1689.0], [38.7, 1696.0], [38.8, 1696.0], [38.9, 1715.0], [39.0, 1715.0], [39.1, 1724.0], [39.2, 1724.0], [39.3, 1731.0], [39.4, 1731.0], [39.5, 1732.0], [39.6, 1732.0], [39.7, 1750.0], [39.8, 1750.0], [39.9, 1755.0], [40.0, 1755.0], [40.1, 1756.0], [40.2, 1756.0], [40.3, 1785.0], [40.4, 1785.0], [40.5, 1883.0], [40.6, 1883.0], [40.7, 1884.0], [40.8, 1884.0], [40.9, 1893.0], [41.0, 1893.0], [41.1, 1912.0], [41.2, 1912.0], [41.3, 1924.0], [41.4, 1924.0], [41.5, 1935.0], [41.6, 1935.0], [41.7, 2028.0], [41.8, 2028.0], [41.9, 2034.0], [42.0, 2034.0], [42.1, 2046.0], [42.2, 2046.0], [42.3, 2061.0], [42.4, 2061.0], [42.5, 2082.0], [42.6, 2082.0], [42.7, 2095.0], [42.8, 2095.0], [42.9, 2153.0], [43.0, 2153.0], [43.1, 2156.0], [43.2, 2156.0], [43.3, 2252.0], [43.4, 2252.0], [43.5, 2254.0], [43.6, 2254.0], [43.7, 2265.0], [43.8, 2265.0], [43.9, 2285.0], [44.0, 2285.0], [44.1, 2321.0], [44.2, 2321.0], [44.3, 2384.0], [44.4, 2384.0], [44.5, 2485.0], [44.6, 2485.0], [44.7, 2507.0], [44.8, 2507.0], [44.9, 2515.0], [45.0, 2515.0], [45.1, 2569.0], [45.2, 2569.0], [45.3, 2571.0], [45.4, 2571.0], [45.5, 2571.0], [45.6, 2571.0], [45.7, 2645.0], [45.8, 2645.0], [45.9, 2663.0], [46.0, 2663.0], [46.1, 2695.0], [46.2, 2695.0], [46.3, 2696.0], [46.4, 2696.0], [46.5, 2737.0], [46.6, 2737.0], [46.7, 2740.0], [46.8, 2740.0], [46.9, 2775.0], [47.0, 2775.0], [47.1, 2779.0], [47.2, 2779.0], [47.3, 2812.0], [47.4, 2812.0], [47.5, 2817.0], [47.6, 2817.0], [47.7, 2830.0], [47.8, 2830.0], [47.9, 2844.0], [48.0, 2844.0], [48.1, 2852.0], [48.2, 2852.0], [48.3, 2883.0], [48.4, 2883.0], [48.5, 2887.0], [48.6, 2887.0], [48.7, 2907.0], [48.8, 2907.0], [48.9, 2914.0], [49.0, 2914.0], [49.1, 2934.0], [49.2, 2934.0], [49.3, 2937.0], [49.4, 2937.0], [49.5, 2955.0], [49.6, 2955.0], [49.7, 2962.0], [49.8, 2962.0], [49.9, 2982.0], [50.0, 2982.0], [50.1, 2986.0], [50.2, 2986.0], [50.3, 2997.0], [50.4, 2997.0], [50.5, 2998.0], [50.6, 2998.0], [50.7, 3020.0], [50.8, 3020.0], [50.9, 3027.0], [51.0, 3027.0], [51.1, 3029.0], [51.2, 3029.0], [51.3, 3030.0], [51.4, 3030.0], [51.5, 3044.0], [51.6, 3044.0], [51.7, 3047.0], [51.8, 3047.0], [51.9, 3049.0], [52.0, 3049.0], [52.1, 3051.0], [52.2, 3051.0], [52.3, 3051.0], [52.4, 3051.0], [52.5, 3053.0], [52.6, 3053.0], [52.7, 3054.0], [52.8, 3054.0], [52.9, 3066.0], [53.0, 3066.0], [53.1, 3069.0], [53.2, 3069.0], [53.3, 3076.0], [53.4, 3076.0], [53.5, 3096.0], [53.6, 3096.0], [53.7, 3107.0], [53.8, 3107.0], [53.9, 3112.0], [54.0, 3112.0], [54.1, 3115.0], [54.2, 3115.0], [54.3, 3123.0], [54.4, 3123.0], [54.5, 3125.0], [54.6, 3125.0], [54.7, 3136.0], [54.8, 3136.0], [54.9, 3145.0], [55.0, 3145.0], [55.1, 3159.0], [55.2, 3159.0], [55.3, 3166.0], [55.4, 3166.0], [55.5, 3194.0], [55.6, 3194.0], [55.7, 3212.0], [55.8, 3212.0], [55.9, 3218.0], [56.0, 3218.0], [56.1, 3234.0], [56.2, 3234.0], [56.3, 3234.0], [56.4, 3234.0], [56.5, 3236.0], [56.6, 3236.0], [56.7, 3240.0], [56.8, 3240.0], [56.9, 3253.0], [57.0, 3253.0], [57.1, 3264.0], [57.2, 3264.0], [57.3, 3297.0], [57.4, 3297.0], [57.5, 3300.0], [57.6, 3300.0], [57.7, 3311.0], [57.8, 3311.0], [57.9, 3318.0], [58.0, 3318.0], [58.1, 3366.0], [58.2, 3366.0], [58.3, 3367.0], [58.4, 3367.0], [58.5, 3371.0], [58.6, 3371.0], [58.7, 3373.0], [58.8, 3373.0], [58.9, 3378.0], [59.0, 3378.0], [59.1, 3380.0], [59.2, 3380.0], [59.3, 3383.0], [59.4, 3383.0], [59.5, 3386.0], [59.6, 3386.0], [59.7, 3393.0], [59.8, 3393.0], [59.9, 3401.0], [60.0, 3401.0], [60.1, 3405.0], [60.2, 3405.0], [60.3, 3406.0], [60.4, 3406.0], [60.5, 3414.0], [60.6, 3414.0], [60.7, 3417.0], [60.8, 3417.0], [60.9, 3437.0], [61.0, 3437.0], [61.1, 3451.0], [61.2, 3451.0], [61.3, 3457.0], [61.4, 3457.0], [61.5, 3463.0], [61.6, 3463.0], [61.7, 3477.0], [61.8, 3477.0], [61.9, 3482.0], [62.0, 3482.0], [62.1, 3508.0], [62.2, 3508.0], [62.3, 3528.0], [62.4, 3528.0], [62.5, 3556.0], [62.6, 3556.0], [62.7, 3559.0], [62.8, 3559.0], [62.9, 3568.0], [63.0, 3568.0], [63.1, 3580.0], [63.2, 3580.0], [63.3, 3591.0], [63.4, 3591.0], [63.5, 3593.0], [63.6, 3593.0], [63.7, 3612.0], [63.8, 3612.0], [63.9, 3619.0], [64.0, 3619.0], [64.1, 3630.0], [64.2, 3630.0], [64.3, 3641.0], [64.4, 3641.0], [64.5, 3648.0], [64.6, 3648.0], [64.7, 3652.0], [64.8, 3652.0], [64.9, 3675.0], [65.0, 3675.0], [65.1, 3677.0], [65.2, 3677.0], [65.3, 3696.0], [65.4, 3696.0], [65.5, 3700.0], [65.6, 3700.0], [65.7, 3704.0], [65.8, 3704.0], [65.9, 3704.0], [66.0, 3704.0], [66.1, 3708.0], [66.2, 3708.0], [66.3, 3712.0], [66.4, 3712.0], [66.5, 3713.0], [66.6, 3713.0], [66.7, 3718.0], [66.8, 3718.0], [66.9, 3719.0], [67.0, 3719.0], [67.1, 3724.0], [67.2, 3724.0], [67.3, 3724.0], [67.4, 3724.0], [67.5, 3734.0], [67.6, 3734.0], [67.7, 3735.0], [67.8, 3735.0], [67.9, 3736.0], [68.0, 3736.0], [68.1, 3736.0], [68.2, 3736.0], [68.3, 3736.0], [68.4, 3736.0], [68.5, 3742.0], [68.6, 3742.0], [68.7, 3747.0], [68.8, 3747.0], [68.9, 3747.0], [69.0, 3747.0], [69.1, 3755.0], [69.2, 3755.0], [69.3, 3755.0], [69.4, 3755.0], [69.5, 3759.0], [69.6, 3759.0], [69.7, 3764.0], [69.8, 3764.0], [69.9, 3765.0], [70.0, 3765.0], [70.1, 3768.0], [70.2, 3768.0], [70.3, 3771.0], [70.4, 3771.0], [70.5, 3774.0], [70.6, 3774.0], [70.7, 3774.0], [70.8, 3774.0], [70.9, 3778.0], [71.0, 3778.0], [71.1, 3780.0], [71.2, 3780.0], [71.3, 3781.0], [71.4, 3781.0], [71.5, 3781.0], [71.6, 3781.0], [71.7, 3781.0], [71.8, 3781.0], [71.9, 3784.0], [72.0, 3784.0], [72.1, 3787.0], [72.2, 3787.0], [72.3, 3789.0], [72.4, 3789.0], [72.5, 3792.0], [72.6, 3792.0], [72.7, 3795.0], [72.8, 3795.0], [72.9, 3800.0], [73.0, 3800.0], [73.1, 3802.0], [73.2, 3802.0], [73.3, 3803.0], [73.4, 3803.0], [73.5, 3806.0], [73.6, 3806.0], [73.7, 3807.0], [73.8, 3807.0], [73.9, 3808.0], [74.0, 3808.0], [74.1, 3810.0], [74.2, 3810.0], [74.3, 3811.0], [74.4, 3811.0], [74.5, 3812.0], [74.6, 3812.0], [74.7, 3818.0], [74.8, 3818.0], [74.9, 3823.0], [75.0, 3823.0], [75.1, 3831.0], [75.2, 3831.0], [75.3, 3831.0], [75.4, 3831.0], [75.5, 3832.0], [75.6, 3832.0], [75.7, 3834.0], [75.8, 3834.0], [75.9, 3840.0], [76.0, 3840.0], [76.1, 3841.0], [76.2, 3841.0], [76.3, 3845.0], [76.4, 3845.0], [76.5, 3846.0], [76.6, 3846.0], [76.7, 3847.0], [76.8, 3847.0], [76.9, 3849.0], [77.0, 3849.0], [77.1, 3849.0], [77.2, 3849.0], [77.3, 3850.0], [77.4, 3850.0], [77.5, 3854.0], [77.6, 3854.0], [77.7, 3858.0], [77.8, 3858.0], [77.9, 3859.0], [78.0, 3859.0], [78.1, 3860.0], [78.2, 3860.0], [78.3, 3865.0], [78.4, 3865.0], [78.5, 3867.0], [78.6, 3867.0], [78.7, 3878.0], [78.8, 3878.0], [78.9, 3878.0], [79.0, 3878.0], [79.1, 3879.0], [79.2, 3879.0], [79.3, 3882.0], [79.4, 3882.0], [79.5, 3886.0], [79.6, 3886.0], [79.7, 3892.0], [79.8, 3892.0], [79.9, 3894.0], [80.0, 3894.0], [80.1, 3895.0], [80.2, 3895.0], [80.3, 3896.0], [80.4, 3896.0], [80.5, 3896.0], [80.6, 3896.0], [80.7, 3898.0], [80.8, 3898.0], [80.9, 3900.0], [81.0, 3900.0], [81.1, 3900.0], [81.2, 3900.0], [81.3, 3903.0], [81.4, 3903.0], [81.5, 3903.0], [81.6, 3903.0], [81.7, 3904.0], [81.8, 3904.0], [81.9, 3908.0], [82.0, 3908.0], [82.1, 3909.0], [82.2, 3909.0], [82.3, 3910.0], [82.4, 3910.0], [82.5, 3915.0], [82.6, 3915.0], [82.7, 3918.0], [82.8, 3918.0], [82.9, 3920.0], [83.0, 3920.0], [83.1, 3920.0], [83.2, 3920.0], [83.3, 3922.0], [83.4, 3922.0], [83.5, 3925.0], [83.6, 3925.0], [83.7, 3926.0], [83.8, 3926.0], [83.9, 3927.0], [84.0, 3927.0], [84.1, 3928.0], [84.2, 3928.0], [84.3, 3928.0], [84.4, 3928.0], [84.5, 3931.0], [84.6, 3931.0], [84.7, 3932.0], [84.8, 3932.0], [84.9, 3933.0], [85.0, 3933.0], [85.1, 3934.0], [85.2, 3934.0], [85.3, 3936.0], [85.4, 3936.0], [85.5, 3938.0], [85.6, 3938.0], [85.7, 3939.0], [85.8, 3939.0], [85.9, 3939.0], [86.0, 3939.0], [86.1, 3940.0], [86.2, 3940.0], [86.3, 3943.0], [86.4, 3943.0], [86.5, 3945.0], [86.6, 3945.0], [86.7, 3948.0], [86.8, 3948.0], [86.9, 3948.0], [87.0, 3948.0], [87.1, 3949.0], [87.2, 3949.0], [87.3, 3951.0], [87.4, 3951.0], [87.5, 3954.0], [87.6, 3954.0], [87.7, 3961.0], [87.8, 3961.0], [87.9, 3965.0], [88.0, 3965.0], [88.1, 3965.0], [88.2, 3965.0], [88.3, 3970.0], [88.4, 3970.0], [88.5, 3975.0], [88.6, 3975.0], [88.7, 3984.0], [88.8, 3984.0], [88.9, 3985.0], [89.0, 3985.0], [89.1, 3989.0], [89.2, 3989.0], [89.3, 3991.0], [89.4, 3991.0], [89.5, 4005.0], [89.6, 4005.0], [89.7, 4005.0], [89.8, 4005.0], [89.9, 4008.0], [90.0, 4008.0], [90.1, 4008.0], [90.2, 4008.0], [90.3, 4009.0], [90.4, 4009.0], [90.5, 4012.0], [90.6, 4012.0], [90.7, 4020.0], [90.8, 4020.0], [90.9, 4024.0], [91.0, 4024.0], [91.1, 4036.0], [91.2, 4036.0], [91.3, 4041.0], [91.4, 4041.0], [91.5, 4043.0], [91.6, 4043.0], [91.7, 4050.0], [91.8, 4050.0], [91.9, 4052.0], [92.0, 4052.0], [92.1, 4053.0], [92.2, 4053.0], [92.3, 4062.0], [92.4, 4062.0], [92.5, 4063.0], [92.6, 4063.0], [92.7, 4071.0], [92.8, 4071.0], [92.9, 4074.0], [93.0, 4074.0], [93.1, 4078.0], [93.2, 4078.0], [93.3, 4079.0], [93.4, 4079.0], [93.5, 4086.0], [93.6, 4086.0], [93.7, 4091.0], [93.8, 4091.0], [93.9, 4104.0], [94.0, 4104.0], [94.1, 4104.0], [94.2, 4104.0], [94.3, 4115.0], [94.4, 4115.0], [94.5, 4117.0], [94.6, 4117.0], [94.7, 4129.0], [94.8, 4129.0], [94.9, 4136.0], [95.0, 4136.0], [95.1, 4137.0], [95.2, 4137.0], [95.3, 4148.0], [95.4, 4148.0], [95.5, 4155.0], [95.6, 4155.0], [95.7, 4165.0], [95.8, 4165.0], [95.9, 4169.0], [96.0, 4169.0], [96.1, 4172.0], [96.2, 4172.0], [96.3, 4195.0], [96.4, 4195.0], [96.5, 4201.0], [96.6, 4201.0], [96.7, 4206.0], [96.8, 4206.0], [96.9, 4213.0], [97.0, 4213.0], [97.1, 4217.0], [97.2, 4217.0], [97.3, 4221.0], [97.4, 4221.0], [97.5, 4224.0], [97.6, 4224.0], [97.7, 4230.0], [97.8, 4230.0], [97.9, 4289.0], [98.0, 4289.0], [98.1, 4306.0], [98.2, 4306.0], [98.3, 4319.0], [98.4, 4319.0], [98.5, 4322.0], [98.6, 4322.0], [98.7, 4323.0], [98.8, 4323.0], [98.9, 4332.0], [99.0, 4332.0], [99.1, 4351.0], [99.2, 4351.0], [99.3, 4376.0], [99.4, 4376.0], [99.5, 4411.0], [99.6, 4411.0], [99.7, 4435.0], [99.8, 4435.0], [99.9, 4649.0], [100.0, 4649.0]], "isOverall": false, "label": "เพิ่มทะเบียนบุคคลด้วย Excel", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 43.0, "series": [{"data": [[0.0, 4.0], [600.0, 17.0], [700.0, 16.0], [800.0, 4.0], [900.0, 7.0], [1000.0, 4.0], [1100.0, 8.0], [1200.0, 6.0], [1300.0, 8.0], [1400.0, 9.0], [1500.0, 11.0], [100.0, 18.0], [1600.0, 14.0], [1700.0, 8.0], [1800.0, 3.0], [1900.0, 3.0], [2000.0, 6.0], [2100.0, 2.0], [2200.0, 4.0], [2300.0, 2.0], [2400.0, 1.0], [2500.0, 5.0], [2600.0, 4.0], [2700.0, 4.0], [2800.0, 7.0], [2900.0, 10.0], [3000.0, 15.0], [3100.0, 10.0], [200.0, 20.0], [3200.0, 9.0], [3300.0, 12.0], [3400.0, 11.0], [3500.0, 8.0], [3700.0, 37.0], [3600.0, 9.0], [3800.0, 40.0], [3900.0, 43.0], [4000.0, 22.0], [4100.0, 13.0], [4200.0, 8.0], [4300.0, 7.0], [4400.0, 2.0], [4600.0, 1.0], [300.0, 12.0], [400.0, 16.0], [500.0, 20.0]], "isOverall": false, "label": "เพิ่มทะเบียนบุคคลด้วย Excel", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 16.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 331.0, "series": [{"data": [[0.0, 16.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 65.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 331.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 88.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 250.66400000000007, "minX": 1.7556603E12, "maxY": 250.66400000000007, "series": [{"data": [[1.7556603E12, 250.66400000000007]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7556603E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 18.0, "minX": 1.0, "maxY": 4649.0, "series": [{"data": [[3.0, 2910.5], [4.0, 3383.0], [6.0, 3083.5], [7.0, 2775.0], [8.0, 2779.0], [9.0, 2852.0], [10.0, 2740.0], [12.0, 2937.0], [13.0, 2937.0], [14.0, 2907.0], [15.0, 2817.0], [17.0, 2968.5], [18.0, 3311.0], [19.0, 4649.0], [20.0, 4435.0], [21.0, 4411.0], [23.0, 4306.0], [24.0, 4213.0], [25.0, 4169.0], [28.0, 4227.666666666667], [31.0, 4108.333333333333], [33.0, 4201.0], [34.0, 4041.0], [39.0, 4165.8], [45.0, 4040.1666666666665], [50.0, 4139.0], [53.0, 4102.0], [54.0, 4062.0], [57.0, 4133.5], [61.0, 3939.0], [60.0, 3985.0], [63.0, 3902.0], [66.0, 3968.3333333333335], [75.0, 4042.3333333333335], [77.0, 4155.0], [76.0, 3931.0], [82.0, 3825.5], [80.0, 3928.3333333333335], [85.0, 3828.3333333333335], [95.0, 3878.1], [97.0, 3719.0], [96.0, 4091.0], [106.0, 3798.3333333333335], [110.0, 3761.75], [114.0, 3808.75], [119.0, 3958.25], [118.0, 3781.0], [123.0, 3967.25], [126.0, 3549.6666666666665], [133.0, 2982.0], [131.0, 3854.0], [128.0, 3873.0], [141.0, 3723.5], [139.0, 3768.0], [137.0, 3722.8571428571427], [150.0, 3939.0], [146.0, 3975.0], [158.0, 3940.0], [157.0, 3925.0], [156.0, 3932.0], [152.0, 3628.1], [165.0, 3708.0], [163.0, 3575.0], [162.0, 3473.5], [161.0, 3846.0], [160.0, 3918.0], [174.0, 3677.4444444444443], [173.0, 3051.0], [168.0, 3948.0], [182.0, 3928.0], [181.0, 3435.0], [183.0, 3867.0], [189.0, 3721.3333333333335], [187.0, 3920.5], [185.0, 3834.5], [198.0, 3704.0], [196.0, 3766.8749999999995], [207.0, 3580.0], [206.0, 3701.1666666666665], [205.0, 3803.0], [204.0, 3812.0], [215.0, 3806.0], [213.0, 3538.5], [223.0, 3525.0], [221.0, 2812.0], [220.0, 2844.0], [219.0, 3787.0], [218.0, 3781.0], [216.0, 3736.0], [227.0, 3231.3333333333335], [224.0, 3559.0], [239.0, 3264.0], [238.0, 3037.6666666666665], [235.0, 3508.0], [234.0, 3308.714285714286], [247.0, 3437.0], [246.0, 2911.0], [245.0, 2569.0], [244.0, 3053.0], [254.0, 3108.0], [248.0, 2515.0], [270.0, 2285.0], [271.0, 2833.0], [268.0, 2384.0], [267.0, 3297.0], [266.0, 3318.0], [265.0, 3280.5], [263.0, 3304.2], [259.0, 3236.0], [257.0, 3350.1428571428573], [287.0, 737.0], [286.0, 1850.6666666666667], [283.0, 681.0], [282.0, 1924.0], [281.0, 2682.3333333333335], [278.0, 2034.0], [277.0, 3027.0], [276.0, 3115.0], [275.0, 3029.0], [274.0, 2848.3333333333335], [291.0, 650.0], [302.0, 597.0], [301.0, 560.5], [299.0, 623.0], [298.0, 661.0], [296.0, 742.0], [295.0, 1756.0], [294.0, 2737.0], [293.0, 722.0], [290.0, 655.0], [289.0, 660.0], [288.0, 662.0], [317.0, 582.0], [318.0, 601.5], [316.0, 606.0], [307.0, 434.0], [306.0, 577.0], [305.0, 576.3333333333334], [315.0, 413.0], [314.0, 1652.0], [312.0, 632.0], [310.0, 600.0], [309.0, 535.0], [308.0, 431.0], [333.0, 295.0], [334.0, 283.0], [332.0, 318.0], [323.0, 567.0], [322.0, 512.0], [320.0, 582.0], [331.0, 202.0], [330.0, 344.0], [329.0, 395.0], [328.0, 348.0], [326.0, 393.0], [324.0, 594.0], [349.0, 245.5], [351.0, 232.0], [348.0, 229.0], [338.0, 468.0], [337.0, 354.0], [336.0, 192.0], [346.0, 300.0], [345.0, 296.0], [344.0, 304.0], [343.0, 164.0], [342.0, 506.0], [341.0, 278.0], [340.0, 466.0], [366.0, 197.0], [354.0, 364.2], [353.0, 225.0], [352.0, 231.0], [355.0, 113.0], [359.0, 1334.0], [358.0, 332.0], [357.0, 347.0], [356.0, 189.0], [367.0, 239.33333333333334], [365.0, 2156.0], [364.0, 224.0], [363.0, 2153.0], [362.0, 1293.0], [361.0, 2061.0], [360.0, 2258.5], [382.0, 2046.0], [383.0, 127.0], [381.0, 106.0], [371.0, 1242.0], [370.0, 1696.0], [369.0, 213.0], [368.0, 206.0], [378.0, 1893.0], [377.0, 139.0], [376.0, 1038.0], [375.0, 1175.0], [374.0, 1173.0], [373.0, 2082.0], [372.0, 1052.0], [398.0, 18.0], [399.0, 1606.0], [397.0, 22.0], [396.0, 969.0], [395.0, 1833.5], [393.0, 1152.0], [392.0, 1737.5], [390.0, 156.0], [385.0, 123.0], [384.0, 103.0], [387.0, 2028.0], [386.0, 112.0], [389.0, 199.0], [388.0, 322.0], [415.0, 1671.0], [414.0, 1669.0], [412.0, 1304.6666666666667], [409.0, 833.0], [406.0, 823.5], [404.0, 1216.0], [403.0, 614.0], [424.0, 799.0], [429.0, 1637.5], [427.0, 692.0], [426.0, 1715.0], [425.0, 1665.0], [423.0, 770.0], [422.0, 1035.0], [420.0, 1731.0], [419.0, 742.0], [418.0, 1694.0], [417.0, 743.0], [416.0, 1724.0], [445.0, 1492.0], [446.0, 1192.0], [444.0, 1189.5], [435.0, 1507.0], [434.0, 1293.0], [432.0, 1378.0], [442.0, 1558.0], [441.0, 1575.0], [440.0, 1612.0], [439.0, 1247.0], [438.0, 1475.0], [437.0, 1178.5], [462.0, 542.0], [463.0, 1430.0], [461.0, 1098.0], [460.0, 1503.0], [459.0, 1136.0], [458.0, 1501.6666666666667], [457.0, 1417.0], [456.0, 1150.0], [453.0, 1124.0], [451.0, 1333.0], [449.0, 633.0], [448.0, 1434.0], [452.0, 1363.0], [477.0, 477.0], [479.0, 437.0], [476.0, 1303.0], [467.0, 1391.5], [465.0, 1426.0], [475.0, 461.0], [474.0, 577.0], [473.0, 690.0], [472.0, 1223.0], [471.0, 945.0], [470.0, 832.0], [469.0, 1342.0], [468.0, 1377.0], [491.0, 792.3333333333334], [488.0, 554.5], [487.0, 285.3333333333333], [486.0, 384.5], [485.0, 490.5], [483.0, 1224.0], [482.0, 513.0], [481.0, 533.0], [480.0, 898.5], [1.0, 3076.0]], "isOverall": false, "label": "เพิ่มทะเบียนบุคคลด้วย Excel", "isController": false}, {"data": [[250.66199999999995, 2436.6279999999983]], "isOverall": false, "label": "เพิ่มทะเบียนบุคคลด้วย Excel-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 491.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 10873.6, "minX": 1.7556603E12, "maxY": 2964441.033333333, "series": [{"data": [[1.7556603E12, 10873.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7556603E12, 2964441.033333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7556603E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2436.6279999999983, "minX": 1.7556603E12, "maxY": 2436.6279999999983, "series": [{"data": [[1.7556603E12, 2436.6279999999983]], "isOverall": false, "label": "เพิ่มทะเบียนบุคคลด้วย Excel", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7556603E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2368.132, "minX": 1.7556603E12, "maxY": 2368.132, "series": [{"data": [[1.7556603E12, 2368.132]], "isOverall": false, "label": "เพิ่มทะเบียนบุคคลด้วย Excel", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7556603E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1330.966, "minX": 1.7556603E12, "maxY": 1330.966, "series": [{"data": [[1.7556603E12, 1330.966]], "isOverall": false, "label": "เพิ่มทะเบียนบุคคลด้วย Excel", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7556603E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 192.0, "minX": 1.7556603E12, "maxY": 4649.0, "series": [{"data": [[1.7556603E12, 4649.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7556603E12, 4051.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7556603E12, 4372.75]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7556603E12, 4170.05]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7556603E12, 192.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7556603E12, 3375.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7556603E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 19.0, "minX": 5.0, "maxY": 3900.0, "series": [{"data": [[74.0, 3280.5], [19.0, 2914.0], [5.0, 264.0], [188.0, 3900.0], [100.0, 1223.0], [114.0, 1893.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[100.0, 19.0], [114.0, 393.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 188.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 5.0, "maxY": 3900.0, "series": [{"data": [[74.0, 3280.5], [19.0, 2914.0], [5.0, 258.0], [188.0, 3900.0], [100.0, 1223.0], [114.0, 1893.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[100.0, 0.0], [114.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 188.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.7556603E12, "maxY": 8.333333333333334, "series": [{"data": [[1.7556603E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7556603E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.4666666666666666, "minX": 1.7556603E12, "maxY": 6.866666666666666, "series": [{"data": [[1.7556603E12, 1.4666666666666666]], "isOverall": false, "label": "Non HTTP response code: javax.net.ssl.SSLException", "isController": false}, {"data": [[1.7556603E12, 6.866666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7556603E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.4666666666666666, "minX": 1.7556603E12, "maxY": 6.866666666666666, "series": [{"data": [[1.7556603E12, 6.866666666666666]], "isOverall": false, "label": "เพิ่มทะเบียนบุคคลด้วย Excel-success", "isController": false}, {"data": [[1.7556603E12, 1.4666666666666666]], "isOverall": false, "label": "เพิ่มทะเบียนบุคคลด้วย Excel-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7556603E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.4666666666666666, "minX": 1.7556603E12, "maxY": 6.866666666666666, "series": [{"data": [[1.7556603E12, 6.866666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7556603E12, 1.4666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7556603E12, "title": "Total Transactions Per Second"}},
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

