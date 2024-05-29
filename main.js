 export function sciences(marks){
   if(marks>=70){
    return "A"
   }else if(marks>=60 && marks<=69){
    return "B"
   }
   else if(marks>=50 && marks<=59){
    return "C"
   }
   else if(marks>=40 && marks<=49){
    return "pass"
   }
   else{
    return "sup"
   }
}
console.log(sciences(90))
export function humanity(marks){
    if(marks>=80){ 
        return "A"
    }
    else if(marks>=70 && marks<=79){
        return "B"
    }
    else if(marks>=60 && marks<=69){
        return "C"
    }
    else if(marks>=50 && marks<=59){
        return "pass"
    }
    else{
        return "sup"
    }
}

export function languages(marks){
    if(marks>=75){
        return "A"
    }
    else if(marks>=65 && marks<=74){
        return "B"
    }
    else if(marks>=55 && marks<=64){
        return "C"
    }
    else if(marks>=45 && marks<=54){
        return "pass"
    }
    else{
        return "sup"
    }
}
export function calculateGradesAndAverage(student) {
    const grades = {
      name: student.name,
      math: sciences(student.math),
      eng: languages(student.eng),
      kisw: languages(student.kisw),
      phyc: sciences(student.phyc),
      chem: sciences(student.chem),
      cre: humanity(student.cre),
      comp: sciences(student.comp),
    };
  
    const totalScore = student.math + student.eng + student.kisw + student.phyc + student.chem + student.cre + student.comp;
    grades.average = Math.floor(totalScore / 7);
  
    return grades;
  }
  const studentScore = {name: "john Doe", math: 80, eng: 65, kisw: 48, phyc: 67, chem: 56, cre:89, comp: 82};
  const output = calculateGradesAndAverage(studentScore);
  console.log(output)
  
