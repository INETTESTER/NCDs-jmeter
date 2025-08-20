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
        data: {"result": {"minY": 9.0, "minX": 0.0, "maxY": 5560.0, "series": [{"data": [[0.0, 9.0], [0.1, 9.0], [0.2, 9.0], [0.3, 9.0], [0.4, 10.0], [0.5, 10.0], [0.6, 10.0], [0.7, 10.0], [0.8, 10.0], [0.9, 10.0], [1.0, 10.0], [1.1, 10.0], [1.2, 10.0], [1.3, 10.0], [1.4, 10.0], [1.5, 10.0], [1.6, 11.0], [1.7, 11.0], [1.8, 11.0], [1.9, 11.0], [2.0, 11.0], [2.1, 11.0], [2.2, 11.0], [2.3, 11.0], [2.4, 11.0], [2.5, 11.0], [2.6, 11.0], [2.7, 11.0], [2.8, 11.0], [2.9, 11.0], [3.0, 11.0], [3.1, 11.0], [3.2, 11.0], [3.3, 11.0], [3.4, 11.0], [3.5, 12.0], [3.6, 12.0], [3.7, 12.0], [3.8, 12.0], [3.9, 12.0], [4.0, 12.0], [4.1, 12.0], [4.2, 13.0], [4.3, 13.0], [4.4, 13.0], [4.5, 13.0], [4.6, 13.0], [4.7, 13.0], [4.8, 13.0], [4.9, 13.0], [5.0, 13.0], [5.1, 13.0], [5.2, 13.0], [5.3, 13.0], [5.4, 13.0], [5.5, 13.0], [5.6, 13.0], [5.7, 13.0], [5.8, 13.0], [5.9, 13.0], [6.0, 13.0], [6.1, 13.0], [6.2, 13.0], [6.3, 13.0], [6.4, 13.0], [6.5, 13.0], [6.6, 14.0], [6.7, 14.0], [6.8, 14.0], [6.9, 14.0], [7.0, 14.0], [7.1, 14.0], [7.2, 14.0], [7.3, 14.0], [7.4, 14.0], [7.5, 14.0], [7.6, 14.0], [7.7, 14.0], [7.8, 14.0], [7.9, 14.0], [8.0, 14.0], [8.1, 14.0], [8.2, 14.0], [8.3, 14.0], [8.4, 15.0], [8.5, 15.0], [8.6, 15.0], [8.7, 15.0], [8.8, 15.0], [8.9, 15.0], [9.0, 15.0], [9.1, 15.0], [9.2, 15.0], [9.3, 15.0], [9.4, 15.0], [9.5, 15.0], [9.6, 16.0], [9.7, 16.0], [9.8, 16.0], [9.9, 16.0], [10.0, 16.0], [10.1, 16.0], [10.2, 17.0], [10.3, 17.0], [10.4, 18.0], [10.5, 18.0], [10.6, 18.0], [10.7, 18.0], [10.8, 18.0], [10.9, 18.0], [11.0, 18.0], [11.1, 18.0], [11.2, 18.0], [11.3, 18.0], [11.4, 18.0], [11.5, 18.0], [11.6, 18.0], [11.7, 18.0], [11.8, 19.0], [11.9, 19.0], [12.0, 19.0], [12.1, 19.0], [12.2, 19.0], [12.3, 19.0], [12.4, 19.0], [12.5, 19.0], [12.6, 19.0], [12.7, 19.0], [12.8, 19.0], [12.9, 19.0], [13.0, 20.0], [13.1, 20.0], [13.2, 20.0], [13.3, 20.0], [13.4, 21.0], [13.5, 21.0], [13.6, 21.0], [13.7, 21.0], [13.8, 21.0], [13.9, 21.0], [14.0, 21.0], [14.1, 21.0], [14.2, 21.0], [14.3, 21.0], [14.4, 22.0], [14.5, 22.0], [14.6, 23.0], [14.7, 23.0], [14.8, 23.0], [14.9, 23.0], [15.0, 24.0], [15.1, 24.0], [15.2, 24.0], [15.3, 24.0], [15.4, 25.0], [15.5, 25.0], [15.6, 26.0], [15.7, 26.0], [15.8, 26.0], [15.9, 26.0], [16.0, 26.0], [16.1, 26.0], [16.2, 26.0], [16.3, 26.0], [16.4, 27.0], [16.5, 27.0], [16.6, 27.0], [16.7, 27.0], [16.8, 28.0], [16.9, 28.0], [17.0, 29.0], [17.1, 29.0], [17.2, 31.0], [17.3, 31.0], [17.4, 32.0], [17.5, 32.0], [17.6, 32.0], [17.7, 32.0], [17.8, 35.0], [17.9, 35.0], [18.0, 36.0], [18.1, 36.0], [18.2, 37.0], [18.3, 37.0], [18.4, 38.0], [18.5, 38.0], [18.6, 41.0], [18.7, 41.0], [18.8, 41.0], [18.9, 41.0], [19.0, 44.0], [19.1, 44.0], [19.2, 50.0], [19.3, 50.0], [19.4, 67.0], [19.5, 67.0], [19.6, 67.0], [19.7, 67.0], [19.8, 85.0], [19.9, 85.0], [20.0, 102.0], [20.1, 102.0], [20.2, 106.0], [20.3, 106.0], [20.4, 112.0], [20.5, 112.0], [20.6, 131.0], [20.7, 131.0], [20.8, 154.0], [20.9, 154.0], [21.0, 206.0], [21.1, 206.0], [21.2, 209.0], [21.3, 209.0], [21.4, 222.0], [21.5, 222.0], [21.6, 260.0], [21.7, 260.0], [21.8, 384.0], [21.9, 384.0], [22.0, 551.0], [22.1, 551.0], [22.2, 557.0], [22.3, 557.0], [22.4, 724.0], [22.5, 724.0], [22.6, 751.0], [22.7, 751.0], [22.8, 776.0], [22.9, 776.0], [23.0, 790.0], [23.1, 790.0], [23.2, 913.0], [23.3, 913.0], [23.4, 924.0], [23.5, 924.0], [23.6, 933.0], [23.7, 933.0], [23.8, 933.0], [23.9, 933.0], [24.0, 944.0], [24.1, 944.0], [24.2, 985.0], [24.3, 985.0], [24.4, 989.0], [24.5, 989.0], [24.6, 997.0], [24.7, 997.0], [24.8, 1015.0], [24.9, 1015.0], [25.0, 1031.0], [25.1, 1031.0], [25.2, 1065.0], [25.3, 1065.0], [25.4, 1095.0], [25.5, 1095.0], [25.6, 1105.0], [25.7, 1105.0], [25.8, 1112.0], [25.9, 1112.0], [26.0, 1146.0], [26.1, 1146.0], [26.2, 1150.0], [26.3, 1150.0], [26.4, 1156.0], [26.5, 1156.0], [26.6, 1239.0], [26.7, 1239.0], [26.8, 1242.0], [26.9, 1242.0], [27.0, 1264.0], [27.1, 1264.0], [27.2, 1287.0], [27.3, 1287.0], [27.4, 1291.0], [27.5, 1291.0], [27.6, 1302.0], [27.7, 1302.0], [27.8, 1312.0], [27.9, 1312.0], [28.0, 1330.0], [28.1, 1330.0], [28.2, 1334.0], [28.3, 1334.0], [28.4, 1358.0], [28.5, 1358.0], [28.6, 1370.0], [28.7, 1370.0], [28.8, 1375.0], [28.9, 1375.0], [29.0, 1382.0], [29.1, 1382.0], [29.2, 1449.0], [29.3, 1449.0], [29.4, 1500.0], [29.5, 1500.0], [29.6, 1612.0], [29.7, 1612.0], [29.8, 2726.0], [29.9, 2726.0], [30.0, 2971.0], [30.1, 2971.0], [30.2, 2973.0], [30.3, 2973.0], [30.4, 2975.0], [30.5, 2975.0], [30.6, 3100.0], [30.7, 3100.0], [30.8, 3115.0], [30.9, 3115.0], [31.0, 3146.0], [31.1, 3146.0], [31.2, 3297.0], [31.3, 3297.0], [31.4, 3329.0], [31.5, 3329.0], [31.6, 3389.0], [31.7, 3389.0], [31.8, 3391.0], [31.9, 3391.0], [32.0, 3424.0], [32.1, 3424.0], [32.2, 3450.0], [32.3, 3450.0], [32.4, 3456.0], [32.5, 3456.0], [32.6, 3480.0], [32.7, 3480.0], [32.8, 3492.0], [32.9, 3492.0], [33.0, 3498.0], [33.1, 3498.0], [33.2, 3499.0], [33.3, 3499.0], [33.4, 3644.0], [33.5, 3644.0], [33.6, 3669.0], [33.7, 3669.0], [33.8, 3679.0], [33.9, 3679.0], [34.0, 3703.0], [34.1, 3703.0], [34.2, 3709.0], [34.3, 3709.0], [34.4, 3714.0], [34.5, 3714.0], [34.6, 3724.0], [34.7, 3724.0], [34.8, 3728.0], [34.9, 3728.0], [35.0, 3734.0], [35.1, 3734.0], [35.2, 3740.0], [35.3, 3740.0], [35.4, 3765.0], [35.5, 3765.0], [35.6, 3765.0], [35.7, 3765.0], [35.8, 3770.0], [35.9, 3770.0], [36.0, 3785.0], [36.1, 3785.0], [36.2, 3789.0], [36.3, 3789.0], [36.4, 3792.0], [36.5, 3792.0], [36.6, 3792.0], [36.7, 3792.0], [36.8, 3794.0], [36.9, 3794.0], [37.0, 3796.0], [37.1, 3796.0], [37.2, 3801.0], [37.3, 3801.0], [37.4, 3801.0], [37.5, 3811.0], [37.6, 3811.0], [37.7, 3814.0], [37.8, 3814.0], [37.9, 3815.0], [38.0, 3815.0], [38.1, 3818.0], [38.2, 3818.0], [38.3, 3828.0], [38.4, 3828.0], [38.5, 3836.0], [38.6, 3836.0], [38.7, 3837.0], [38.8, 3837.0], [38.9, 3841.0], [39.0, 3841.0], [39.1, 3842.0], [39.2, 3842.0], [39.3, 3847.0], [39.4, 3847.0], [39.5, 3847.0], [39.6, 3847.0], [39.7, 3851.0], [39.8, 3851.0], [39.9, 3852.0], [40.0, 3852.0], [40.1, 3860.0], [40.2, 3860.0], [40.3, 3866.0], [40.4, 3866.0], [40.5, 3867.0], [40.6, 3867.0], [40.7, 3869.0], [40.8, 3869.0], [40.9, 3877.0], [41.0, 3877.0], [41.1, 3885.0], [41.2, 3885.0], [41.3, 3887.0], [41.4, 3887.0], [41.5, 3891.0], [41.6, 3891.0], [41.7, 3892.0], [41.8, 3892.0], [41.9, 3892.0], [42.0, 3892.0], [42.1, 3895.0], [42.2, 3895.0], [42.3, 3900.0], [42.4, 3900.0], [42.5, 3901.0], [42.6, 3901.0], [42.7, 3902.0], [42.8, 3902.0], [42.9, 3903.0], [43.0, 3903.0], [43.1, 3905.0], [43.2, 3905.0], [43.3, 3919.0], [43.4, 3919.0], [43.5, 3921.0], [43.6, 3921.0], [43.7, 3923.0], [43.8, 3923.0], [43.9, 3925.0], [44.0, 3925.0], [44.1, 3926.0], [44.2, 3926.0], [44.3, 3928.0], [44.4, 3928.0], [44.5, 3929.0], [44.6, 3929.0], [44.7, 3932.0], [44.8, 3932.0], [44.9, 3934.0], [45.0, 3934.0], [45.1, 3935.0], [45.2, 3935.0], [45.3, 3936.0], [45.4, 3936.0], [45.5, 3937.0], [45.6, 3937.0], [45.7, 3938.0], [45.8, 3938.0], [45.9, 3938.0], [46.0, 3938.0], [46.1, 3944.0], [46.2, 3944.0], [46.3, 3947.0], [46.4, 3947.0], [46.5, 3949.0], [46.6, 3949.0], [46.7, 3952.0], [46.8, 3952.0], [46.9, 3964.0], [47.0, 3964.0], [47.1, 3974.0], [47.2, 3974.0], [47.3, 3974.0], [47.4, 3974.0], [47.5, 3974.0], [47.6, 3974.0], [47.7, 3975.0], [47.8, 3975.0], [47.9, 3981.0], [48.0, 3981.0], [48.1, 3987.0], [48.2, 3987.0], [48.3, 3989.0], [48.4, 3989.0], [48.5, 3990.0], [48.6, 3990.0], [48.7, 3997.0], [48.8, 3997.0], [48.9, 4010.0], [49.0, 4010.0], [49.1, 4015.0], [49.2, 4015.0], [49.3, 4023.0], [49.4, 4023.0], [49.5, 4028.0], [49.6, 4028.0], [49.7, 4053.0], [49.8, 4053.0], [49.9, 4057.0], [50.0, 4057.0], [50.1, 4064.0], [50.2, 4064.0], [50.3, 4065.0], [50.4, 4065.0], [50.5, 4066.0], [50.6, 4066.0], [50.7, 4066.0], [50.8, 4066.0], [50.9, 4086.0], [51.0, 4086.0], [51.1, 4087.0], [51.2, 4087.0], [51.3, 4090.0], [51.4, 4090.0], [51.5, 4090.0], [51.6, 4090.0], [51.7, 4091.0], [51.8, 4091.0], [51.9, 4098.0], [52.0, 4098.0], [52.1, 4099.0], [52.2, 4099.0], [52.3, 4100.0], [52.4, 4100.0], [52.5, 4102.0], [52.6, 4102.0], [52.7, 4105.0], [52.8, 4105.0], [52.9, 4114.0], [53.0, 4114.0], [53.1, 4115.0], [53.2, 4115.0], [53.3, 4120.0], [53.4, 4120.0], [53.5, 4122.0], [53.6, 4122.0], [53.7, 4124.0], [53.8, 4124.0], [53.9, 4129.0], [54.0, 4129.0], [54.1, 4134.0], [54.2, 4134.0], [54.3, 4140.0], [54.4, 4140.0], [54.5, 4149.0], [54.6, 4149.0], [54.7, 4155.0], [54.8, 4155.0], [54.9, 4155.0], [55.0, 4155.0], [55.1, 4185.0], [55.2, 4185.0], [55.3, 4186.0], [55.4, 4186.0], [55.5, 4188.0], [55.6, 4188.0], [55.7, 4201.0], [55.8, 4201.0], [55.9, 4222.0], [56.0, 4222.0], [56.1, 4224.0], [56.2, 4224.0], [56.3, 4232.0], [56.4, 4232.0], [56.5, 4243.0], [56.6, 4243.0], [56.7, 4288.0], [56.8, 4288.0], [56.9, 4291.0], [57.0, 4291.0], [57.1, 4296.0], [57.2, 4296.0], [57.3, 4298.0], [57.4, 4298.0], [57.5, 4301.0], [57.6, 4301.0], [57.7, 4311.0], [57.8, 4311.0], [57.9, 4313.0], [58.0, 4313.0], [58.1, 4345.0], [58.2, 4345.0], [58.3, 4363.0], [58.4, 4363.0], [58.5, 4376.0], [58.6, 4376.0], [58.7, 4377.0], [58.8, 4377.0], [58.9, 4395.0], [59.0, 4395.0], [59.1, 4400.0], [59.2, 4400.0], [59.3, 4405.0], [59.4, 4405.0], [59.5, 4431.0], [59.6, 4431.0], [59.7, 4431.0], [59.8, 4431.0], [59.9, 4452.0], [60.0, 4452.0], [60.1, 4453.0], [60.2, 4453.0], [60.3, 4456.0], [60.4, 4456.0], [60.5, 4464.0], [60.6, 4464.0], [60.7, 4467.0], [60.8, 4467.0], [60.9, 4487.0], [61.0, 4487.0], [61.1, 4495.0], [61.2, 4495.0], [61.3, 4507.0], [61.4, 4507.0], [61.5, 4514.0], [61.6, 4514.0], [61.7, 4537.0], [61.8, 4537.0], [61.9, 4537.0], [62.0, 4537.0], [62.1, 4543.0], [62.2, 4543.0], [62.3, 4544.0], [62.4, 4544.0], [62.5, 4552.0], [62.6, 4552.0], [62.7, 4555.0], [62.8, 4555.0], [62.9, 4563.0], [63.0, 4563.0], [63.1, 4567.0], [63.2, 4567.0], [63.3, 4567.0], [63.4, 4567.0], [63.5, 4570.0], [63.6, 4570.0], [63.7, 4572.0], [63.8, 4572.0], [63.9, 4576.0], [64.0, 4576.0], [64.1, 4577.0], [64.2, 4577.0], [64.3, 4581.0], [64.4, 4581.0], [64.5, 4582.0], [64.6, 4582.0], [64.7, 4583.0], [64.8, 4583.0], [64.9, 4591.0], [65.0, 4591.0], [65.1, 4608.0], [65.2, 4608.0], [65.3, 4614.0], [65.4, 4614.0], [65.5, 4629.0], [65.6, 4629.0], [65.7, 4631.0], [65.8, 4631.0], [65.9, 4640.0], [66.0, 4640.0], [66.1, 4643.0], [66.2, 4643.0], [66.3, 4648.0], [66.4, 4648.0], [66.5, 4652.0], [66.6, 4652.0], [66.7, 4652.0], [66.8, 4652.0], [66.9, 4679.0], [67.0, 4679.0], [67.1, 4688.0], [67.2, 4688.0], [67.3, 4697.0], [67.4, 4697.0], [67.5, 4703.0], [67.6, 4703.0], [67.7, 4704.0], [67.8, 4704.0], [67.9, 4715.0], [68.0, 4715.0], [68.1, 4722.0], [68.2, 4722.0], [68.3, 4731.0], [68.4, 4731.0], [68.5, 4733.0], [68.6, 4733.0], [68.7, 4738.0], [68.8, 4738.0], [68.9, 4739.0], [69.0, 4739.0], [69.1, 4740.0], [69.2, 4740.0], [69.3, 4746.0], [69.4, 4746.0], [69.5, 4748.0], [69.6, 4748.0], [69.7, 4750.0], [69.8, 4750.0], [69.9, 4753.0], [70.0, 4753.0], [70.1, 4758.0], [70.2, 4758.0], [70.3, 4772.0], [70.4, 4772.0], [70.5, 4774.0], [70.6, 4774.0], [70.7, 4774.0], [70.8, 4774.0], [70.9, 4779.0], [71.0, 4779.0], [71.1, 4791.0], [71.2, 4791.0], [71.3, 4803.0], [71.4, 4803.0], [71.5, 4807.0], [71.6, 4807.0], [71.7, 4809.0], [71.8, 4809.0], [71.9, 4820.0], [72.0, 4820.0], [72.1, 4822.0], [72.2, 4822.0], [72.3, 4824.0], [72.4, 4824.0], [72.5, 4830.0], [72.6, 4830.0], [72.7, 4835.0], [72.8, 4835.0], [72.9, 4837.0], [73.0, 4837.0], [73.1, 4843.0], [73.2, 4843.0], [73.3, 4849.0], [73.4, 4849.0], [73.5, 4854.0], [73.6, 4854.0], [73.7, 4854.0], [73.8, 4854.0], [73.9, 4857.0], [74.0, 4857.0], [74.1, 4857.0], [74.2, 4857.0], [74.3, 4860.0], [74.4, 4860.0], [74.5, 4866.0], [74.6, 4866.0], [74.7, 4868.0], [74.8, 4868.0], [74.9, 4868.0], [75.0, 4868.0], [75.1, 4869.0], [75.2, 4869.0], [75.3, 4870.0], [75.4, 4870.0], [75.5, 4873.0], [75.6, 4873.0], [75.7, 4874.0], [75.8, 4874.0], [75.9, 4876.0], [76.0, 4876.0], [76.1, 4879.0], [76.2, 4879.0], [76.3, 4879.0], [76.4, 4879.0], [76.5, 4879.0], [76.6, 4879.0], [76.7, 4880.0], [76.8, 4880.0], [76.9, 4881.0], [77.0, 4881.0], [77.1, 4883.0], [77.2, 4883.0], [77.3, 4887.0], [77.4, 4887.0], [77.5, 4891.0], [77.6, 4891.0], [77.7, 4892.0], [77.8, 4892.0], [77.9, 4892.0], [78.0, 4892.0], [78.1, 4901.0], [78.2, 4901.0], [78.3, 4903.0], [78.4, 4903.0], [78.5, 4909.0], [78.6, 4909.0], [78.7, 4915.0], [78.8, 4915.0], [78.9, 4917.0], [79.0, 4917.0], [79.1, 4917.0], [79.2, 4917.0], [79.3, 4918.0], [79.4, 4918.0], [79.5, 4920.0], [79.6, 4920.0], [79.7, 4934.0], [79.8, 4934.0], [79.9, 4940.0], [80.0, 4940.0], [80.1, 4945.0], [80.2, 4945.0], [80.3, 4953.0], [80.4, 4953.0], [80.5, 4956.0], [80.6, 4956.0], [80.7, 4962.0], [80.8, 4962.0], [80.9, 4963.0], [81.0, 4963.0], [81.1, 4978.0], [81.2, 4978.0], [81.3, 4980.0], [81.4, 4980.0], [81.5, 4981.0], [81.6, 4981.0], [81.7, 4982.0], [81.8, 4982.0], [81.9, 4985.0], [82.0, 4985.0], [82.1, 4986.0], [82.2, 4986.0], [82.3, 4989.0], [82.4, 4989.0], [82.5, 4992.0], [82.6, 4992.0], [82.7, 4992.0], [82.8, 4992.0], [82.9, 5007.0], [83.0, 5007.0], [83.1, 5012.0], [83.2, 5012.0], [83.3, 5016.0], [83.4, 5016.0], [83.5, 5026.0], [83.6, 5026.0], [83.7, 5043.0], [83.8, 5043.0], [83.9, 5044.0], [84.0, 5044.0], [84.1, 5045.0], [84.2, 5045.0], [84.3, 5045.0], [84.4, 5045.0], [84.5, 5050.0], [84.6, 5050.0], [84.7, 5054.0], [84.8, 5054.0], [84.9, 5060.0], [85.0, 5060.0], [85.1, 5064.0], [85.2, 5064.0], [85.3, 5065.0], [85.4, 5065.0], [85.5, 5067.0], [85.6, 5067.0], [85.7, 5068.0], [85.8, 5068.0], [85.9, 5076.0], [86.0, 5076.0], [86.1, 5086.0], [86.2, 5086.0], [86.3, 5090.0], [86.4, 5090.0], [86.5, 5092.0], [86.6, 5092.0], [86.7, 5093.0], [86.8, 5093.0], [86.9, 5095.0], [87.0, 5095.0], [87.1, 5116.0], [87.2, 5116.0], [87.3, 5118.0], [87.4, 5118.0], [87.5, 5123.0], [87.6, 5123.0], [87.7, 5124.0], [87.8, 5124.0], [87.9, 5126.0], [88.0, 5126.0], [88.1, 5130.0], [88.2, 5130.0], [88.3, 5137.0], [88.4, 5137.0], [88.5, 5139.0], [88.6, 5139.0], [88.7, 5139.0], [88.8, 5139.0], [88.9, 5141.0], [89.0, 5141.0], [89.1, 5142.0], [89.2, 5142.0], [89.3, 5146.0], [89.4, 5146.0], [89.5, 5148.0], [89.6, 5148.0], [89.7, 5155.0], [89.8, 5155.0], [89.9, 5158.0], [90.0, 5158.0], [90.1, 5161.0], [90.2, 5161.0], [90.3, 5170.0], [90.4, 5170.0], [90.5, 5175.0], [90.6, 5175.0], [90.7, 5175.0], [90.8, 5175.0], [90.9, 5179.0], [91.0, 5179.0], [91.1, 5189.0], [91.2, 5189.0], [91.3, 5189.0], [91.4, 5189.0], [91.5, 5189.0], [91.6, 5189.0], [91.7, 5191.0], [91.8, 5191.0], [91.9, 5195.0], [92.0, 5195.0], [92.1, 5196.0], [92.2, 5196.0], [92.3, 5197.0], [92.4, 5197.0], [92.5, 5206.0], [92.6, 5206.0], [92.7, 5207.0], [92.8, 5207.0], [92.9, 5211.0], [93.0, 5211.0], [93.1, 5213.0], [93.2, 5213.0], [93.3, 5214.0], [93.4, 5214.0], [93.5, 5222.0], [93.6, 5222.0], [93.7, 5223.0], [93.8, 5223.0], [93.9, 5224.0], [94.0, 5224.0], [94.1, 5230.0], [94.2, 5230.0], [94.3, 5239.0], [94.4, 5239.0], [94.5, 5241.0], [94.6, 5241.0], [94.7, 5242.0], [94.8, 5242.0], [94.9, 5247.0], [95.0, 5247.0], [95.1, 5249.0], [95.2, 5249.0], [95.3, 5272.0], [95.4, 5272.0], [95.5, 5284.0], [95.6, 5284.0], [95.7, 5285.0], [95.8, 5285.0], [95.9, 5287.0], [96.0, 5287.0], [96.1, 5291.0], [96.2, 5291.0], [96.3, 5298.0], [96.4, 5298.0], [96.5, 5299.0], [96.6, 5299.0], [96.7, 5303.0], [96.8, 5303.0], [96.9, 5304.0], [97.0, 5304.0], [97.1, 5316.0], [97.2, 5316.0], [97.3, 5322.0], [97.4, 5322.0], [97.5, 5330.0], [97.6, 5330.0], [97.7, 5343.0], [97.8, 5343.0], [97.9, 5344.0], [98.0, 5344.0], [98.1, 5349.0], [98.2, 5349.0], [98.3, 5369.0], [98.4, 5369.0], [98.5, 5380.0], [98.6, 5380.0], [98.7, 5385.0], [98.8, 5385.0], [98.9, 5432.0], [99.0, 5432.0], [99.1, 5534.0], [99.2, 5534.0], [99.3, 5544.0], [99.4, 5544.0], [99.5, 5544.0], [99.6, 5544.0], [99.7, 5558.0], [99.8, 5558.0], [99.9, 5560.0], [100.0, 5560.0]], "isOverall": false, "label": "เพิ่มทะเบียนบุคคลด้วย Excel", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 100.0, "series": [{"data": [[0.0, 100.0], [700.0, 4.0], [900.0, 8.0], [1000.0, 4.0], [1100.0, 5.0], [1200.0, 5.0], [1300.0, 8.0], [1400.0, 1.0], [1500.0, 1.0], [1600.0, 1.0], [100.0, 5.0], [2700.0, 1.0], [2900.0, 3.0], [3100.0, 3.0], [200.0, 4.0], [3200.0, 1.0], [3300.0, 3.0], [3400.0, 7.0], [3600.0, 3.0], [3700.0, 16.0], [3800.0, 25.0], [3900.0, 33.0], [4000.0, 17.0], [4100.0, 17.0], [4200.0, 9.0], [4300.0, 8.0], [4400.0, 11.0], [4500.0, 19.0], [4600.0, 12.0], [300.0, 1.0], [4700.0, 19.0], [4800.0, 34.0], [4900.0, 24.0], [5000.0, 21.0], [5100.0, 27.0], [5200.0, 21.0], [5300.0, 11.0], [5400.0, 1.0], [5500.0, 5.0], [500.0, 2.0]], "isOverall": false, "label": "เพิ่มทะเบียนบุคคลด้วย Excel", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 352.0, "series": [{"data": [[0.0, 1.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 38.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 352.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 109.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 248.16999999999973, "minX": 1.75566132E12, "maxY": 248.16999999999973, "series": [{"data": [[1.75566132E12, 248.16999999999973]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75566132E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 9.0, "minX": 1.0, "maxY": 5560.0, "series": [{"data": [[2.0, 4102.0], [3.0, 3115.0], [4.0, 4114.0], [6.0, 4758.5], [7.0, 5299.0], [8.0, 4066.0], [9.0, 4015.0], [10.0, 5560.0], [13.0, 4381.0], [14.0, 5558.0], [15.0, 5544.0], [17.0, 5337.5], [18.0, 5191.0], [20.0, 5202.5], [21.0, 5068.0], [22.0, 5330.0], [23.0, 3892.0], [26.0, 5134.0], [27.0, 3895.0], [28.0, 4980.0], [29.0, 5007.0], [31.0, 5277.5], [32.0, 3905.0], [35.0, 3582.5], [34.0, 5369.0], [37.0, 3714.0], [36.0, 5093.0], [38.0, 3885.0], [41.0, 5224.0], [40.0, 5212.0], [42.0, 4989.0], [45.0, 5179.666666666667], [47.0, 3842.0], [46.0, 3851.0], [48.0, 5118.0], [52.0, 2971.0], [54.0, 3850.4], [59.0, 4874.0], [58.0, 5015.25], [61.0, 3796.0], [60.0, 5344.0], [67.0, 3395.0], [65.0, 3853.6666666666665], [64.0, 3841.0], [71.0, 5112.333333333333], [70.0, 5197.0], [74.0, 3836.0], [79.0, 4963.0], [78.0, 5134.5], [83.0, 5016.0], [81.0, 3734.0], [80.0, 3480.0], [87.0, 3811.0], [89.0, 5012.0], [88.0, 4617.2], [94.0, 5135.0], [99.0, 5037.333333333333], [98.0, 5239.0], [96.0, 3765.0], [101.0, 3728.0], [100.0, 3703.0], [109.0, 4854.0], [108.0, 5179.0], [115.0, 5082.2], [112.0, 5099.5], [118.0, 5230.0], [123.0, 5189.0], [121.0, 3792.0], [120.0, 4970.75], [126.0, 3974.0], [125.0, 5116.0], [135.0, 5045.0], [133.0, 5069.5], [131.0, 4986.0], [128.0, 4835.0], [141.0, 3944.0], [140.0, 4904.666666666667], [139.0, 5211.0], [147.0, 5082.0], [144.0, 5051.333333333333], [157.0, 5189.0], [166.0, 4957.416666666667], [165.0, 4941.333333333333], [175.0, 4753.0], [173.0, 5147.0], [172.0, 4805.6], [179.0, 5086.0], [178.0, 4703.0], [177.0, 4824.0], [176.0, 5133.0], [191.0, 4746.0], [189.0, 4922.4], [188.0, 4631.0], [185.0, 3794.0], [184.0, 4997.0], [199.0, 4777.6], [198.0, 4748.0], [195.0, 4917.0], [193.0, 4898.333333333333], [206.0, 4890.6], [201.0, 4897.5], [215.0, 4537.0], [214.0, 4870.0], [213.0, 4711.0], [211.0, 4731.0], [210.0, 4222.0], [209.0, 4860.0], [208.0, 4552.0], [222.0, 4704.0], [221.0, 3492.0], [220.0, 4535.666666666667], [217.0, 4721.5], [231.0, 3450.0], [230.0, 4431.0], [229.0, 4731.333333333333], [226.0, 4438.0], [239.0, 4495.0], [238.0, 4645.5], [236.0, 3390.0], [234.0, 4640.0], [233.0, 4562.0], [245.0, 4503.333333333333], [244.0, 4576.0], [241.0, 4570.0], [240.0, 4629.0], [255.0, 4514.0], [254.0, 4509.25], [250.0, 3297.0], [249.0, 4577.0], [248.0, 4429.0], [268.0, 4241.5], [266.0, 4155.0], [265.0, 4188.0], [264.0, 4400.0], [263.0, 3990.0], [262.0, 4467.0], [261.0, 4452.0], [260.0, 4090.0], [259.0, 4472.25], [284.0, 4010.0], [282.0, 4057.3333333333335], [279.0, 4233.0], [276.0, 3975.0], [275.0, 4028.0], [274.0, 4301.0], [273.0, 4377.0], [272.0, 4308.25], [300.0, 4013.75], [297.0, 4053.0], [295.0, 4023.5], [293.0, 3937.0], [292.0, 3990.75], [289.0, 4186.0], [316.0, 3740.0], [315.0, 4008.1666666666665], [313.0, 4029.5], [307.0, 4057.0], [335.0, 3818.333333333333], [334.0, 2726.0], [328.0, 3891.0], [327.0, 3866.0], [326.0, 4094.5], [324.0, 3939.714285714286], [321.0, 4099.0], [351.0, 2973.0], [350.0, 3100.0], [349.0, 3146.0], [348.0, 3714.25], [344.0, 3802.0], [340.0, 3721.3333333333335], [337.0, 3938.0], [336.0, 3818.0], [364.0, 10.5], [367.0, 20.0], [366.0, 13.0], [365.0, 28.0], [362.0, 13.666666666666666], [359.0, 20.0], [357.0, 21.0], [356.0, 20.0], [354.0, 16.0], [353.0, 17.5], [382.0, 36.0], [383.0, 24.0], [381.0, 20.0], [380.0, 41.0], [379.0, 26.0], [378.0, 25.0], [377.0, 41.0], [376.0, 11.0], [375.0, 44.0], [368.0, 18.0], [370.0, 15.0], [369.0, 102.0], [374.0, 19.333333333333332], [373.0, 12.0], [398.0, 40.5], [399.0, 11.0], [396.0, 15.0], [387.0, 19.0], [386.0, 23.0], [385.0, 12.0], [384.0, 31.0], [395.0, 26.0], [394.0, 18.0], [393.0, 19.0], [392.0, 58.0], [390.0, 13.0], [389.0, 16.0], [388.0, 24.0], [413.0, 473.0], [408.0, 567.5], [411.0, 563.25], [407.0, 499.5], [406.0, 500.33333333333337], [404.0, 592.0], [405.0, 22.0], [403.0, 742.0], [402.0, 14.0], [401.0, 29.0], [400.0, 13.0], [412.0, 112.0], [409.0, 397.0], [410.0, 9.0], [415.0, 11.0], [414.0, 11.0], [429.0, 10.0], [424.0, 549.5], [416.0, 587.8], [427.0, 555.0], [426.0, 652.0], [425.0, 480.5], [431.0, 14.5], [428.0, 18.0], [419.0, 67.0], [418.0, 14.0], [417.0, 85.0], [422.0, 50.0], [421.0, 10.0], [420.0, 14.0], [446.0, 35.0], [437.0, 898.75], [436.0, 674.0], [445.0, 846.3333333333333], [447.0, 154.0], [444.0, 19.0], [439.0, 27.0], [435.0, 11.0], [434.0, 13.0], [433.0, 11.0], [432.0, 13.0], [438.0, 26.0], [443.0, 11.0], [442.0, 11.0], [441.0, 14.0], [440.0, 14.0], [463.0, 844.3333333333333], [461.0, 883.6666666666667], [460.0, 1242.0], [451.0, 18.0], [450.0, 18.0], [449.0, 79.0], [462.0, 748.0], [459.0, 18.0], [458.0, 21.0], [457.0, 1312.0], [456.0, 1612.0], [455.0, 15.0], [454.0, 15.0], [453.0, 10.0], [452.0, 1382.0], [465.0, 1429.0], [464.0, 854.5], [466.0, 1065.0], [1.0, 4120.0]], "isOverall": false, "label": "เพิ่มทะเบียนบุคคลด้วย Excel", "isController": false}, {"data": [[248.16800000000018, 3257.994]], "isOverall": false, "label": "เพิ่มทะเบียนบุคคลด้วย Excel-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 466.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 12093.0, "minX": 1.75566132E12, "maxY": 2813335.183333333, "series": [{"data": [[1.75566132E12, 12093.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75566132E12, 2813335.183333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75566132E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3257.994, "minX": 1.75566132E12, "maxY": 3257.994, "series": [{"data": [[1.75566132E12, 3257.994]], "isOverall": false, "label": "เพิ่มทะเบียนบุคคลด้วย Excel", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75566132E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3250.8499999999963, "minX": 1.75566132E12, "maxY": 3250.8499999999963, "series": [{"data": [[1.75566132E12, 3250.8499999999963]], "isOverall": false, "label": "เพิ่มทะเบียนบุคคลด้วย Excel", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75566132E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1358.309999999999, "minX": 1.75566132E12, "maxY": 1358.309999999999, "series": [{"data": [[1.75566132E12, 1358.309999999999]], "isOverall": false, "label": "เพิ่มทะเบียนบุคคลด้วย Excel", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75566132E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 384.0, "minX": 1.75566132E12, "maxY": 5560.0, "series": [{"data": [[1.75566132E12, 5560.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75566132E12, 5196.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75566132E12, 5544.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75566132E12, 5293.8]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.75566132E12, 384.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75566132E12, 4487.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75566132E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 15.0, "minX": 10.0, "maxY": 4954.5, "series": [{"data": [[10.0, 928.5], [81.0, 1240.5], [166.0, 4954.5], [57.0, 3932.0], [60.0, 3036.5], [126.0, 4567.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[81.0, 15.0], [60.0, 19.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 166.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 10.0, "maxY": 4954.5, "series": [{"data": [[10.0, 928.5], [81.0, 1240.5], [166.0, 4954.5], [57.0, 3932.0], [60.0, 3036.0], [126.0, 4567.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[81.0, 0.0], [60.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 166.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.75566132E12, "maxY": 8.333333333333334, "series": [{"data": [[1.75566132E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75566132E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.8166666666666667, "minX": 1.75566132E12, "maxY": 6.516666666666667, "series": [{"data": [[1.75566132E12, 1.8166666666666667]], "isOverall": false, "label": "Non HTTP response code: javax.net.ssl.SSLException", "isController": false}, {"data": [[1.75566132E12, 6.516666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75566132E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.8166666666666667, "minX": 1.75566132E12, "maxY": 6.516666666666667, "series": [{"data": [[1.75566132E12, 6.516666666666667]], "isOverall": false, "label": "เพิ่มทะเบียนบุคคลด้วย Excel-success", "isController": false}, {"data": [[1.75566132E12, 1.8166666666666667]], "isOverall": false, "label": "เพิ่มทะเบียนบุคคลด้วย Excel-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75566132E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.8166666666666667, "minX": 1.75566132E12, "maxY": 6.516666666666667, "series": [{"data": [[1.75566132E12, 6.516666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75566132E12, 1.8166666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75566132E12, "title": "Total Transactions Per Second"}},
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

