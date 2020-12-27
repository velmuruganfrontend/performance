
function SVG(tag) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag);
}

function replaceRectsWithPaths(parentElement) {
    var rects = $(parentElement).find('rect');
    $.each(rects, function () {
        var rectX = $(this).attr('x');
        var rectY = $(this).attr('y');
        var rectX2 = parseFloat(rectX) + parseFloat($(this).attr('width'));
        var rectY2 = parseFloat(rectY) + parseFloat($(this).attr('height'));
        var convertedPath = 'M' + rectX + ',' + rectY + ' ' + rectX2 + ',' + rectY + ' ' + rectX2 + ',' + rectY2 + ' ' + rectX + ',' + rectY2 + ' ' + rectX + ',' + rectY;
        var rectClass = $(this).attr('class');
        var rectTransformAttr = $(this).attr('transform');

        $(SVG('path'))
            .attr('class', rectClass)
            .attr('transform', rectTransformAttr)
            .attr('d', convertedPath)
            .attr('fill', $(this).attr('fill'))
            .attr('stroke', $(this).attr('stroke'))
            .attr('stroke-width', $(this).attr('stroke-width'))
            .attr('stroke-linecap', $(this).attr('stroke-linecap'))
            .insertAfter(this);
    });
    $(rects).remove();
}

function replaceLinesWithPaths(parentElement) {
    var lines = $(parentElement).find('line');
    $.each(lines, function () {
        var lineX1 = $(this).attr('x1');
        var lineY1 = $(this).attr('y1');
        var lineX2 = $(this).attr('x2');
        var lineY2 = $(this).attr('y2');
        var convertedPath = 'M' + lineX1 + ',' + lineY1 + ' ' + lineX2 + ',' + lineY2;
        var lineClass = $(this).attr('class');

        $(SVG('path'))
            .attr('class', lineClass)
            .attr('d', convertedPath)
            .attr('fill', $(this).attr('fill'))
            .attr('stroke', $(this).attr('stroke'))
            .attr('stroke-width', $(this).attr('stroke-width'))
            .attr('stroke-linecap', $(this).attr('stroke-linecap'))
            .insertAfter(this);
    });
    $(lines).remove();
}

function replaceCirclesWithPaths(parentElement) {
    var circles = $(parentElement).find('circle');
    $.each(circles, function () {
        var cX = $(this).attr('cx');
        var cY = $(this).attr('cy');
        var r = $(this).attr('r');
        var r2 = parseFloat(r * 2);
        var convertedPath = 'M' + cX + ', ' + cY + ' m' + (-r) + ', 0 ' + 'a ' + r + ', ' + r + ' 0 1,0 ' + r2 + ',0 ' + 'a ' + r + ', ' + r + ' 0 1,0 ' + (-r2) + ',0 ';
        var circleClass = $(this).attr('class');
        
        $(SVG('path'))
            .attr('class', circleClass)
            .attr('d', convertedPath)
            .attr('fill', $(this).attr('fill'))
            .attr('stroke', $(this).attr('stroke'))
            .attr('stroke-width', $(this).attr('stroke-width'))
            .attr('stroke-linecap', $(this).attr('stroke-linecap'))
            .insertAfter(this);
    });
    $(circles).remove();
}

function replaceEllipsesWithPaths(parentElement) {
    var ellipses = $(parentElement).find('ellipse');
    $.each(ellipses, function () {
        var cX = $(this).attr('cx');
        var cY = $(this).attr('cy');
        var rX = $(this).attr('rx');
        var rY = $(this).attr('ry');
        var convertedPath = 'M' + cX + ', ' + cY + ' m' + (-rX) + ', 0 ' + 'a ' + rX + ', ' + rY + ' 0 1,0 ' + rX * 2 + ',0 ' + 'a ' + rX + ', ' + rY + ' 0 1,0 ' + (-rX * 2) + ',0 ';
        var ellipsesClass = $(this).attr('class');
        
        $(SVG('path'))
            .attr('class', ellipsesClass)
            .attr('d', convertedPath)
            .attr('fill', $(this).attr('fill'))
            .attr('stroke', $(this).attr('stroke'))
            .attr('stroke-width', $(this).attr('stroke-width'))
            .attr('stroke-linecap', $(this).attr('stroke-linecap'))
            .insertAfter(this);
    });
    $(ellipses).remove();
}

function replacePolygonsWithPaths(parentElement) {
    var polygons = $(parentElement).find('polygon');
    $.each(polygons, function () {
        var points = $(this).attr('points');
        var polyPoints = points.split(/[ ,]+/);
        var endPoint = polyPoints[0] + ', ' + polyPoints[1];
        var polygonsClass = $(this).attr('class');
        
        $(SVG('path'))
            .attr('class', polygonsClass)
            .attr('d', 'M' + points + ' ' + endPoint)
            .attr('fill', $(this).attr('fill'))
            .attr('stroke', $(this).attr('stroke'))
            .attr('stroke-width', $(this).attr('stroke-width'))
            .attr('stroke-linecap', $(this).attr('stroke-linecap'))
            .insertAfter(this);
    });
    $(polygons).remove();
}

function replacePolylinesWithPaths(parentElement) {
    var polylines = $(parentElement).find('polyline');
    $.each(polylines, function () {
        var points = $(this).attr('points');
        var polylinesClass = $(this).attr('class');
        
        $(SVG('path'))
            .attr('class', polylinesClass)
            .attr('d', 'M' + points)
            .attr('fill', $(this).attr('fill'))
            .attr('stroke', $(this).attr('stroke'))
            .attr('stroke-width', $(this).attr('stroke-width'))
            .attr('stroke-linecap', $(this).attr('stroke-linecap'))
            .insertAfter(this);
    });
    $(polylines).remove();
}

function drawSVGPaths(_parentElement, _timeDelay) {
    var paths = $(_parentElement).find('path');
    $.each(paths, function (i) {
        var totalLength = this.getTotalLength();
        $(this).css({
            'stroke-dashoffset': totalLength,
            'stroke-dasharray': totalLength + ' ' + totalLength
        });
        $(this).delay(_timeDelay * i).animate({
            'stroke-dashoffset': 0
        });
    });
}

function replaceWithPaths(parentElement) {
    replaceRectsWithPaths(parentElement);
    replaceLinesWithPaths(parentElement);
    replaceEllipsesWithPaths(parentElement);
    replaceCirclesWithPaths(parentElement);
    replacePolygonsWithPaths(parentElement);
    replacePolylinesWithPaths(parentElement);
}

function startSVGAnimation(parentElement) {
    drawSVGPaths(parentElement, 10);
    $(parentElement).find('path').show();
}

replaceWithPaths($('.hero'));
setTimeout(function(){
    startSVGAnimation($('.hero'));
}, 500)