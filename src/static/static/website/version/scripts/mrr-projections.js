$("input")
    .on("input", function () {
        // console.log("change called for ", $(this));
        if ($(this).val() == "") {
            $(this).val(0);
        }
        calculateProjections();
    })

function drawGraph() {
    calculateProjections();
}

$('.form-group').click(function () {
    $(this).find('input').focus();
})
$( window ).on( "load", function() {
    drawGraph();
});
function calculateProjections() {
    var newCustomers = parseInt($('#newCustomers').val());  // New Customers every month
    var arpu = parseInt($('#arpu').val());  // Average Revenue per User
    var churn = parseInt($('#netChurn').val()); // Net Churn Rate
    var churnPerc = churn / 100;    // Net Churn Rate / 100
    var mrrGoal = parseInt($('#mrrGoal').val());    // MRR Now
    var growth = parseInt($('#growth').val());  // Growth every month
    var goalReached = false;
    var dval = -1;
    var mySeries = [];

    clearTable();
    // newMRR
    var newMRR = newCustomers * arpu;   // New Customers every month * Average Revenue per User
    $(".newMRR").text(newMRR);

    // mrrNow
    var mrrNow = parseInt($('#mrrNow').val());

    newval = mrrNow;
    console.log("MrrNow & NewVal = "+ newval);
    for (i = 0; i < 13; i++) {
        lostMrr = Math.round(newval * churnPerc);
        $('.table-begMo').append('<td>' + newval + '</td>');
        $('.table-newMRR').append('<td>' + newMRR + '</td>');
        $('.table-lostMRR').append('<td>' + lostMrr + '</td>');

        newval += newMRR - lostMrr;
        newMRR += Math.round(newMRR * (growth / 100));
        mySeries.push(newval);

        if (newval > mrrGoal && !goalReached) {
            goalReached = true;
            dval = i
        }
    }
    //$('table').show();


    // mrrGoal
    $(".mrr-goal").text(mrrGoal);

    $(function () {
        var options = {
            chart: {
                renderTo: 'chartWrap',
                type: 'column',
                plotBackgroundColor: null,
                backgroundColor: null,
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: [
                    'Now',
                    '1mo+',
                    '2mo+',
                    '3mo+',
                    '4mo+',
                    '5mo+',
                    '6mo+',
                    '7mo+',
                    '8mo+',
                    '9mo+',
                    '10mo+',
                    '11mo+',
                    '12mo+'
                ],
                crosshair: false,
                tickLength: 0,
                lineColor: '#8A8D92'
            },
            yAxis: {
                floor: mrrNow - (mrrNow / 10),
                //ceiling: endMo12,
                min: 0,
                title: {
                    text: '$USD'
                },
                plotLines: [{
                    color: '#FF1449', // Color value
                    dashStyle: 'longdashdot', // Style of the plot line. Default to solid
                    value: mrrGoal, // Value of where the line will appear
                    width: 2, // Width of the line    
                    label: {
                        text: 'MRR Goal',
                        style: {
                            color: '#FF1449',
                            fontWeight: 'bold'
                        }
                    }
                }],
                gridLineWidth: 1,
                gridLineColor: '#444A52'
            },
            tooltip: {
                headerFormat: '<span class="nMonths">{point.key}</span>',
                pointFormat: '<table><tr>' +
                    '<td><b><span>$</span>{point.y}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true,
                backgroundColor: '#35435C',
                borderColor: '#35435C',
                borderRadius: 2,
                borderWidth: 0,
                color: '#fff'
            },
            legend: {
                enabled: false
            },

            series: [{
                type: 'column',
                name: 'End of Month MRR',
                data: mySeries,
                borderWidth: 0
            }],
            plotOptions: {
                column: {
                    colorByPoint: true
                }
            },
            colors: [{
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#6FB2BC'],
                    [1, '#6693E8']
                ]
            }, {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#70B7BA'],
                    [1, '#6894E6']
                ]
            }, {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#71B7B3'],
                    [1, '#6797E2']
                ]
            }, {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#72B8AE'],
                    [1, '#699BE2']
                ]
            }, {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#72BCAB'],
                    [1, '#699EDF']
                ]
            }, {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#6CB69F'],
                    [1, '#6AA1DA']
                ]
            }, {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#75C8A1'],
                    [1, '#6CA6D2']
                ]
            }, {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#76CB9E'],
                    [1, '#6DA9CE']
                ]
            }, {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#77CE9A'],
                    [1, '#6DACCA']
                ]
            }, {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#77D095'],
                    [1, '#6DAFC6']
                ]
            }, {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#78D391'],
                    [1, '#6EB1C1']
                ]
            }, {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#79D68D'],
                    [1, '#6FB4BE']
                ]
            }, {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#7BE091'],
                    [1, '#70B7B9']
                ]
            }, ]

        };

        var chart = new Highcharts.Chart(options);
        if (dval > -1) {
            chart.series[0].data[dval].update({
                color: {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#FF1449'],
                        [1, '#FF1461']
                    ]
                }
            });
        }


        // Apply the theme
        //Highcharts.setOptions(Highcharts.theme);


    });

    function clearTable() {
        $('.table-begMo').find('td').remove();
        $('.table-newMRR').find('td').remove();
        $('.table-lostMRR').find('td').remove();
    }

}