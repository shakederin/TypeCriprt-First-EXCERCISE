function calculateBmi(height: number, weight: number): string{
    const bmi = (weight/(height/100)**2);
    switch(true){
        case (bmi<=16):
            return "Underweight";
        case (bmi>16 && bmi<25):
            return "Normal range";
        case (bmi>=25):
            return "Underweight"        
    }
}
console.log(calculateBmi(187, 71))