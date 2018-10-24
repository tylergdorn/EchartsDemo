// based on prepared DOM, initialize echarts instance
$(document).ready(function(){
    
    // specify chart configuration item and data
    let randomData = [];
    for(let i = 0; i < 5; i++){
        randomData.push(Math.floor(Math.random() * 30));
    }
    let myChart = echarts.init(document.getElementById('main'));
    let option = {
        title: {
            text: 'ECharts example'
        },
        tooltip: {},
        legend: {
            data:['Example']
        },
        xAxis: {
            data: ["something","hawaii","china","random","pants","data"]
        },
        yAxis: {},
        series: [{
            name: 'Example',
            type: 'bar',
            data: randomData
        }]
    };
    myChart.setOption(option);
    

    
    //i'm aware this looks horrid
    var x = $.csv.toObjects(`age,male,female
0 to 9,2075391,2065096
10 to 19,1711664,1711627
20 to 29,1395091,1542876
30 to 39,1073914,1140383
40 to 49,810979,845260
50 to 59,560534,592970
60 to 69,351893,399019
70 to 79,166194,199326
80+,40772,55704`);
    // console.table(x);
    let dataMale = [];
    let dataFemale = [];
    for(datum of x){
        let temp = {value: datum.male, name: datum.age};
        let temp2 = {value: datum.female, name: datum.age};
        // console.log(temp);
        dataMale.push(temp);
        dataFemale.push(temp2);
    }
    console.log(dataMale);
    // console.log(dataFemale);
    var chart = echarts.init(document.getElementById('main2'));
    let options = {
        title: {
            text: 'Male Population'
        },
        tooltip: {},
        series: [
            {
                type: 'pie',
                data: dataMale,
                roseType: 'radius',
                animationType: 'scale',
                animationEasing: 'bounceOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            },
            
        ]
    
    }
    
    chart.setOption(options);
    var chartfemale = echarts.init(document.getElementById('main3'));
    let options2 = {
        title: {
            text: 'Female Population'
        },
        tooltip: {},
        series: [
            {
                type: 'pie',
                data: dataFemale,
                
            },
            
        ]
    
    }
    
    chartfemale.setOption(options2);
    radarGraph();
    // use configuration item and data specified to show chart
});

function radarGraph(){
    let myChart = echarts.init(document.getElementById('main4'));

    option = {
        title: {
            text: 'Deaths from Cholera in Naples'
        },
        tooltip: {},
        legend: {
            data: ['Male Deaths per 10000', 'Female Deaths per 10000']
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
               }
            },
            indicator: [
               { name: 'age 0-1', max: 40},
               { name: 'age 2-5', max: 40},
               { name: 'age 6-10', max: 40},
               { name: 'age 11-15', max: 40},
               { name: 'age 16-20', max: 40},
               { name: 'age 21-40', max: 40},
               { name: 'age 41-60', max: 40},
               { name: 'age 61-81', max: 30},
               { name: 'age over 80', max: 40}
            ]
        },
        series: [{
            name: 'Male and Female Deaths from Cholera in naples, per 10000',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [8.2, 14.0, 12.1, 7.8, 7.2, 12.1, 13.7, 20.5, 39.6],
                    name : 'Male Deaths per 10000'
                },
                 {
                    value : [8.9, 14.7, 11.2, 7.1, 7.2, 11.8, 12.9, 20.5, 37.8],
                    name : 'Female Deaths per 10000'
                }
            ]
        }]
    };
    myChart.setOption(option);

}