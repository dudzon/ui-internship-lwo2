export const GOLF_SCORES = {
    HOLE_IN_HOLE :"Hole-in-one!",
    EAGLE:"Eagle",
    BIRDIE:"Birdie",
    PAR:"Par",
    BOGEY:"Bogey",
    DOUBLE_BOGEY:"Double Bogey",
    GO_HOME:"Go Home!"
}

export const golfCourse = (par,strokes) =>{
 switch(strokes){
     case strokes == 1:
     return GOLF_SCORES.HOLE_IN_HOLE;
     break;
     case strokes <= par -2:
     return GOLF_SCORES.EAGLE;
     break;
     case strokes == par -1:
     return GOLF_SCORES.BIRDIE;
     break;
     case strokes == par:
     return GOLF_SCORES.PAR;
     break;
     case strokes == par +1:
     return GOLF_STROKES.BOGEY;
     break;
     case strokes == par +2:
     return GOLF_STROKES.DOUBLE_BOGEY;
     break;
     case strokes >= par +3:
     return GOLF_STROKES.GO_HOME;
 }
}