// based on prepared DOM, initialize echarts instance
$(document).ready(function(){
    var myChart = echarts.init(document.getElementById('main'));

    // specify chart configuration item and data
    var option = {
        title: {
            text: 'ECharts entry example'
        },
        tooltip: {},
        legend: {
            data:['Sales']
        },
        xAxis: {
            data: ["shirt","cardign","chiffon shirt","pants","heels","socks"]
        },
        yAxis: {},
        series: [{
            name: 'Sales',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
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
    // use configuration item and data specified to show chart
});
