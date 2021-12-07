function calculateExercises(hourEachDay: number[], target:number):output {
    let trainingDays: number = 0;
    let totalHours: number = 0;
    let numberRating: 1|2|3 ;
    let textRating: string ;
    for( let day of hourEachDay){
        if(day!==0){
            trainingDays++
        }
        totalHours+=day
    }
    let average: number = totalHours/hourEachDay.length;
    if(average>=target*1.2){
        numberRating =3;
        textRating = "Great Week! Well done."
    }
    if(average<target*1.2 && average>target*0.8){   
        numberRating = 2;
        textRating = "Not Too Bad But Could Be Better"
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
    }
}   

interface output {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number 
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));