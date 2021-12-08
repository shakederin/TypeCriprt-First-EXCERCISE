export function calculateBmi(height: number, weight: number): string{
    const bmi = (weight/(height/100)**2);
    switch(true){
        case (bmi<=16):
            return "Underweight";
        case (bmi>16 && bmi<25):
            return "Normal range";
        case (bmi>=25):
            return "Underweight";
        default:
            return "please enter numbers";        
    }
}
// const height: number = Number(process.argv[2])
// const weight: number = Number(process.argv[3])
// console.log(calculateBmi(height, weight))
