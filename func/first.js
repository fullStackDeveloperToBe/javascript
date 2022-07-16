const radius = [3,6,4,8,9];

const area = function() {
    
}

const radiusOfCircle = function(radius) {
    const output = [];
    for(let i=0;i<radius.length;i++) {
    output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

console.log(radiusOfCircle(radius))

