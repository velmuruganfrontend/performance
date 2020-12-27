$(document).ready(function() {

    var $arpu = $("#arpu").val(40);var $arpuCh = $("#arpuCh").val(0);
    var $nc = $("#nc").val(10); var $ncCh = $("#ncCh").val(1);
    var $fme = $("#fme").val(10000); var $fmeCh = $("#fmeCh").val(1);
    var $cac = $("#cac").val(50); var $cacCh = $("#cacCh").val(0);
    var $churn = $("#churn").val(1);

    var chart = new Highcharts.Chart({
        credits : {
            enabled : false
        },
        chart : {
            renderTo : 'container',
            type : 'line',
            marginRight : 130,
            marginBottom : 50
        },
        title : {
            text : 'Income vs. Expense',
            x : -20
        },
        subtitle : {
            text : 'Operational Breakeven Numbers',
            x : -20
        },
        xAxis : {
            title : {
                text : 'Quarters'
            },
            categories : [ 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7',
            'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Q13', 'Q14',
            'Q15', 'Q16', 'Q17', 'Q18', 'Q19', 'Q20']
        },
        yAxis : {
            title : {
                text : '$'
            },
            plotLines : [ {
                value : 0,
                width : 1,
                color : '#808080'
            } ]
        },
        tooltip : {
            formatter : function() {
                return '<b>' + this.series.name + '</b><br/>'
                + this.x + ': ' + "$" + this.y;
            }
        },
        legend : {
            layout : 'vertical',
            align : 'right',
            verticalAlign : 'top',
            x : -10,
            y : 100,
            borderWidth : 0
        },
        series : [ {
            name : 'Quarterly Income',
            data : []
        }, {
            name : 'Quarterly Expense',
            data : []
        } ]
    });

    var series = chart.series[0], shift = series.data.length > 20;

    function momInc(currentValue, mom) {
        return currentValue + (currentValue * mom / 100);
    }

    function calculateExpense() {
        var totalMonthlyExpense = new Array();
        var quarterlyExpenses = new Array();
        var quarterCount = 1;
        var curMonthFixedExpense = parseInt($fme.val());
        var increaseMonthToMonth = parseFloat($fmeCh.val());
        var costOfCustomerAquistion = parseFloat($cac.val());
        var curQuartelyExpense = 0;
        var curPayingCustEveryMonth = parseInt($nc.val());
        for ( var monthCount = 1; monthCount <= 60; monthCount++) {

            //calculate the total expense by adding customer acquistation cost.
            var curMonthTotalExpense = Math.round(curMonthFixedExpense 
            + (curPayingCustEveryMonth * costOfCustomerAquistion));
            totalMonthlyExpense[monthCount - 1] = curMonthTotalExpense;

            //calculate the fixed increase with percentage.
            curMonthFixedExpense = momInc(curMonthFixedExpense, increaseMonthToMonth);

            if(monthCount % 3 == 0){
                quarterlyExpenses[quarterCount - 1] = curMonthTotalExpense;
                quarterCount++;
            }
        }
        // console.log("total monthly expenses", totalMonthlyExpense);
        // console.log("quarterly expenses", quarterlyExpenses);
        chart.series[1].setData(quarterlyExpenses, true, shift);
    }

    function calculateIncome() {
        var totalMonthlyRevenue = new Array();
        var quarterlyRevenue = new Array();
        var quarterCount = 1;
        var curArpu = parseInt($arpu.val());
        var newPayingCustomers = parseInt($nc.val());
        var currentPayingCustomers = 0;
        var prevMonthIncome = 0;
        var curQuartelyRevenue = 0;
        for (var monthCount = 1; monthCount <= 60; monthCount++) {
            var churnFactor = Math.floor(currentPayingCustomers * parseFloat($churn.val()) / 100);
            currentPayingCustomers += Math.round(newPayingCustomers - churnFactor);
            var curMonthIncome  = totalMonthlyRevenue[monthCount - 1] = Math.round(curArpu * currentPayingCustomers);
            curArpu = momInc(curArpu, parseFloat($arpuCh.val()));
            newPayingCustomers = momInc(newPayingCustomers, parseFloat($ncCh.val()))
            if(monthCount % 3 == 0){
                quarterlyRevenue[quarterCount - 1] = curMonthIncome;
                quarterCount++;
            }
        }
        // console.log("total monthly revenue", totalMonthlyRevenue);
        // console.log("total quarterly revenue", quarterlyRevenue);
        chart.series[0].setData(quarterlyRevenue, true, shift);
    }

    $('#arpu').spinner({
        incremental : true,
        min : 1,
        max : 9999,
        step : 5,
        page : 10
    });

    $('#nc').spinner({
        incremental : true,
        min  : 0,
        max  : 100,
        step : 1,
        page : 10
    });

    $('#fme').spinner({
        incremental : true,
        min  : 0,
        max  : 1000000,
        step : 100,
        page : 1000
    });
    $('#fmeCh').spinner({
        incremental : true,
        min  : 1,
        max  : 100,
        step : 1,
        page : 10
    });

    $('#cac').spinner({
        incremental : true,
        min  : 0,
        max  : 10000,
        step : 10,
        page : 100
    });

    $('#churn').spinner({
        incremental : true,
        min  : 0,
        max  : 100,
        step : 1,
        page : 5
    });

    $("input")
    .on("input", function() {
        // console.log("change called for ", $(this));
        if($(this).val() == "") {
            $(this).val(0);
        }
        calculateExpense();
        calculateIncome();})
    .on("spin", function(event, ui){$(this).val(ui.value);drawGraph();});
    
    function drawGraph() {
        calculateExpense();
        calculateIncome();
    }
    drawGraph();
});
