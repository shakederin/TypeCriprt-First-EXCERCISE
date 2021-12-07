function calculateBmi(height, weight) {
    var bmi = (weight / Math.pow((height / 100), 2));
    console.log(bmi, "l");
    switch (true) {
        case (bmi <= 16):
            return "Underweight";
        case (bmi > 16 && bmi < 25):
            return "Normal range";
        case (bmi >= 25):
            return "Underweight";
    }
}
console.log(calculateBmi(187, 71));
