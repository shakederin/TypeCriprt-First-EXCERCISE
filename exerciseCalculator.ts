export function calculateExercises(hourEachDay: number[], target:number):output {
    let trainingDays = 0;
    let totalHours = 0;
    let numberRating: 1|2|3 ;
    let textRating: string ;
    for(const day of hourEachDay){
        if(day!==0){
            trainingDays++;
        }
        totalHours+=day;
    }
    const average: number = totalHours/hourEachDay.length;
    if(average>=target*1.2){
        numberRating =3;
        textRating = "Great Week! Well done.";
    }
    if(average<target*1.2 && average>target*0.8){   
        numberRating = 2;
        textRating = "Not Too Bad But Could Be Better";
    }else{
        numberRating =1;
        textRating = "You Need To Get Yourself Together... NOW!"
    }
    return  { 
        periodLength: hourEachDay.length,
        trainingDays: trainingDays,
        success: average>=target? true : false,
        rating: numberRating,
        ratingDescription: textRating,
        target: target,
        average: average
    };
}   

export interface output {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number 
}

const hourEachDay: number[] =[];
for(let i = 3 ; i<process.argv.length ; i++){
    if(!isNaN(i)){
        hourEachDay.push(Number(process.argv[i]));
    }else {
        throw "please enter only numbers";
    }
}

// const target = Number(process.argv[Number(process.argv[2])]);

// console.log(calculateExercises(hourEachDay, target));