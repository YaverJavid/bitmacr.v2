function hexToRgbObject(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}


function getRandColor() {
    return `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
}

function getQuadrant(arr, quadrant) {
    var rows = arr.length;
    var cols = arr[0].length;
    var midRow = Math.floor(rows / 2);
    var midCol = Math.floor(cols / 2);
    if (quadrant == 1) {
        return arr.slice(0, midRow).map(row => row.slice(0, midCol));
    } else if (quadrant == 2) {
        return arr.slice(0, midRow).map(row => row.slice(midCol));
    } else if (quadrant == 3) {
        return arr.slice(midRow).map(row => row.slice(0, midCol));
    } else if (quadrant == 4) {
        return arr.slice(midRow).map(row => row.slice(midCol));
    } else {
        return null;
    }
}

function squareArray(arr) {
    let size = Math.round(Math.sqrt(arr.length))
    var newArr = [];
    for (var i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}

function flip2DArrayVertically(arr) {
    var newArr = arr.slice();
    return newArr.reverse();
}

function flip2DArrayHorizontally(arr) {
    var newArr = arr.slice();
    return newArr.map(function(row) {
        return row.slice().reverse();
    });
}

function rgbToHex(str) {
    str = str.replace('rgb(', '').replace(')').split(',')
    let r = parseInt(str[0])
    let g = parseInt(str[1])
    let b = parseInt(str[2])
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}


function downloadCanvasAsImage(canvas, fileName = 'yj') {
    const dataUrl = canvas.toDataURL();
    const anchor = document.createElement('a');
    anchor.href = dataUrl;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

function matchNumbers(n1, n2, th){
    if(n1 == n2) return true
    let dn = Math.abs(n1 - n2)
    return dn < th
}

function matchHexColors(c1, c2, th){
    c1 = hexToRgbObject(c1)
    c2 = hexToRgbObject(c2)
    return (
        matchNumbers(c1.r, c2.r, th) &&
        matchNumbers(c1.g, c2.g ,th) &&
        matchNumbers(c1.b, c2.b, th)
        )
}
