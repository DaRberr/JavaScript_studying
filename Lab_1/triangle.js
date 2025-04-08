const EPSILON = 0.000_001;
const MAX_VALUE = 10_000_000;

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function isInvalidValue(value) {
    return value < EPSILON || value > MAX_VALUE;
}

function solveFromLegs(a, b) {
    if (isInvalidValue(a) || isInvalidValue(b)) return "Invalid input values.";

  let c;

  if (a <= EPSILON) {
    c = EPSILON + b;
} else if (b <= EPSILON) {
    c = EPSILON + a;
} else { 
    c = Math.hypot(a, b);
}

    let alpha = toDegrees(Math.atan2(a, b));
    let beta = 90.0 - alpha;

    return { a, b, c, alpha, beta };
}


function solveFromLegAndHypotenuse(a, c) {
    if (isInvalidValue(a) || isInvalidValue(c) || a >= c) return "Invalid input values.";
    let b = Math.sqrt(Math.max(0, c * c - a * a));
    let alpha = toDegrees(Math.asin(a / c));
    let beta = 90 - alpha;
    return { a, b, c, alpha, beta };
}

function solveFromLegAndAngle(leg, angle, isAdjacent) {
    if (isInvalidValue(leg) || angle <= EPSILON || angle >= 90 - EPSILON) return "Invalid input values.";
    let rad = toRadians(angle);
    let a, b, c;

    if (isAdjacent) {
        a = leg;
        c = a / Math.cos(rad);
        b = Math.sqrt(Math.max(0, c * c - a * a));
    } else {
        b = leg;
        c = b / Math.sin(rad);
        a = Math.sqrt(Math.max(0, c * c - b * b));
    }

    if (isInvalidValue(a) || isInvalidValue(b) || isInvalidValue(c)) return "Invalid input values.";
    let alpha = isAdjacent ? angle : 90 - angle;
    let beta = 90 - alpha;
    return { a, b, c, alpha, beta };
}

function solveFromHypotenuseAndAngle(c, angle) {
    if (isInvalidValue(c) || angle <= EPSILON || angle >= 90 - EPSILON) return "Invalid input values.";
    let rad = toRadians(angle);
    let a = c * Math.sin(rad);
    let b = c * Math.cos(rad);
    if (isInvalidValue(a) || isInvalidValue(b)) return "Invalid input values.";
    let alpha = angle;
    let beta = 90 - alpha;
    return { a, b, c, alpha, beta };
}

function triangle(value1, type1, value2, type2) {
    console.log("Usage: triangle(value1, type1, value2, type2)");
    console.log("Types: leg, hypotenuse, adjacent angle, opposite angle, angle");
    
    const validTypes = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log("Invalid type. Please refer to the usage instructions.");
        return "failed";
    }

    if (value1 <= 0 || value2 <= 0) {
        console.log("Values must be positive numbers.");
        return "failed";
    }

    let result;
    if (type1 === "leg" && type2 === "leg") {
        result = solveFromLegs(value1, value2);
    } else if (type1 === "leg" && type2 === "hypotenuse") {
        result = solveFromLegAndHypotenuse(value1, value2);
    } else if (type1 === "hypotenuse" && type2 === "leg") {
        result = solveFromLegAndHypotenuse(value2, value1);
    } else if (type1 === "leg" && type2 === "adjacent angle") {
        result = solveFromLegAndAngle(value1, value2, true);
    } else if (type1 === "adjacent angle" && type2 === "leg") {
        result = solveFromLegAndAngle(value2, value1, true);
    } else if (type1 === "leg" && type2 === "opposite angle") {
        result = solveFromLegAndAngle(value1, value2, false);
    } else if (type1 === "opposite angle" && type2 === "leg") {
        result = solveFromLegAndAngle(value2, value1, false);
    } else if (type1 === "hypotenuse" && type2 === "angle") {
        result = solveFromHypotenuseAndAngle(value1, value2);
    } else if (type1 === "angle" && type2 === "hypotenuse") {
        result = solveFromHypotenuseAndAngle(value2, value1);
    } else {
        console.log("Invalid combination of inputs. Please check the instructions.");
        return "failed";
    }

    if (typeof result === "string") {
        console.log(result);
        return "failed";
    }

    console.log(`a = ${result.a.toFixed(7)}, b = ${result.b.toFixed(7)}, c = ${result.c.toFixed(10)}`);
    console.log(`alpha = ${result.alpha.toFixed(10)}°, beta = ${result.beta.toFixed(10)}°`);
    return "success";
}
