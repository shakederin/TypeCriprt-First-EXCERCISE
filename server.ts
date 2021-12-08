import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";
import { output } from "./exerciseCalculator";
const app = express();
const port = 3000;

app.use(express.json());

app.get("/hello", (_req,res)=>{
    res.send('Hello Full Stack!');
});


app.get("/bmi", (req,res)=>{
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);
    if(isNaN(height) || isNaN(weight)){
        res.status(403).json({
            error: "malformatted parameters"
          });
          res.end();
        return;
    }
    const response: string = calculateBmi(height,weight);
    res.json({
        weight: weight,
        height: height,
        bmi: response
      });
});

app.post("/exercises", (req,res)=>{
    const dailyExercises :number[] = req.body.daily_exercises;
    if(!dailyExercises){
        res.status(403).json({
            error: "parameters missing"
          });
          return;
    }
    const target :number = req.body.target;    
    if(!target){
        res.status(403).json({
            error: "parameters missing"
        });
        return;
    }
    for(const day of dailyExercises){
        if(typeof day !== typeof 1){
            res.status(403).json({
                error: "malformatted parameters"
            });
            return;
        }
    }
    if(typeof target !== typeof 1){        
        res.status(403).json({
            error: "malformatted parameters"
          });
          return;
    }

    const resulte: output = calculateExercises(dailyExercises, target);
    res.json(resulte);
});
app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
});

