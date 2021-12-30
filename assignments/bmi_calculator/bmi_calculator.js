// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if (mass <= 0){
        return  ("INVALID INPUT");    
       }
    if (height <= 0){
        return  ("INVALID INPUT");
       }
    var bmi = mass / (height * height);
      return (bmi);
}
module.exports = BMICalculator;
