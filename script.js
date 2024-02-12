// function calculateBMI() {
//     let height = document.getElementById("height").value / 100;
//     let weight = document.getElementById("weight").value;
//     let bmi = weight / (height * height);
//     let result = document.getElementById("result");

//     if (bmi < 18.5) {
//         result.innerHTML = "Your BMI is " + bmi.toFixed(1) + ". You are underweight.";
//         // Tips for underweight individuals
//         result.innerHTML += "<br><br>Tips to reach a normal weight:<br>" +
//                             "<br> "+
//                              "1. Increase calorie intake with nutrient-dense foods.<br>" +
//                              "2. Include protein-rich foods for muscle growth.<br>" +
//                              "3. Eat frequent balanced meals and snacks.<br>" +
//                              "4. Consult with a healthcare professional for personalized guidance.";
//     } else if (bmi >= 18.5 && bmi < 25) {
//         result.innerHTML = "Your BMI is " + bmi.toFixed(1) + ". You have a normal weight.";
//         // Tips for maintaining a normal weight
//         result.innerHTML += "<br><br>Tips to stay fit:<br>" +
//                             "<br> "+
//                              "1. Maintain a balanced diet with fruits, vegetables, and lean proteins.<br>" +
//                              "2. Incorporate regular physical activity into your routine.<br>" +
//                              "3. Stay hydrated and prioritize adequate sleep.";
//     } else if (bmi >= 25 && bmi < 30) {
//         result.innerHTML = "Your BMI is " + bmi.toFixed(1) + ". You are overweight.";
//         // Tips for overweight individuals
//         result.innerHTML += "<br><br>Tips to stay fit while overweight:<br>" +
//                             "<br> "+
//                              "1. Adopt a balanced and calorie-controlled diet.<br>" +
//                              "2. Engage in regular aerobic and strength training exercises.<br>" +
//                              "3. Seek support from healthcare providers or weight loss programs.";
//     } else {
//         result.innerHTML = "Your BMI is " + bmi.toFixed(1) + ". You are obese.";
//         // Tips for obese individuals
//         result.innerHTML += "<br><br>Tips to stay fit while obese:<br>" +
//                             "<br> "+
//                             "1. Set realistic weight loss goals.<br>" +
//                             "2. Create a personalized meal plan and exercise regimen.<br>" +
//                             "3. Focus on long-term lifestyle changes for overall health.";
//     }
// }

function calculateBMI() {
    let height = document.getElementById("height").value / 100;
    let weight = document.getElementById("weight").value;
    let bmi = weight / (height * height);
    let result = document.getElementById("result");
  
    if (bmi < 18.5) {
      result.innerHTML = "Your BMI is " + bmi.toFixed(1) + ". You are underweight.";
      // Tips for underweight individuals
      result.innerHTML += "<br><br>Tips to reach a normal weight:<br>" +
                          "<br> " +
                          "1. Increase calorie intake with nutrient-dense foods.<br>" +
                          "2. Include protein-rich foods for muscle growth.<br>" +
                          "3. Eat frequent balanced meals and snacks.<br>" +
                          "4. Consult with a healthcare professional for personalized guidance.";
    } else if (bmi >= 18.5 && bmi < 25) {
      result.innerHTML = "Your BMI is " + bmi.toFixed(1) + ". You have a normal weight.";
      // Tips for maintaining a normal weight
      result.innerHTML += "<br><br>Tips to stay fit:<br>" +
                          "<br> " +
                          "1. Maintain a balanced diet with fruits, vegetables, and lean proteins.<br>" +
                          "2. Incorporate regular physical activity into your routine.<br>" +
                          "3. Stay hydrated and prioritize adequate sleep.";
  
      // Add firework animation
      document.body.classList.add("firework");
  
      setTimeout(function() {
        document.body.classList.remove("firework");
      }, 5000);
    } else if (bmi >= 25 && bmi < 30) {
      result.innerHTML = "Your BMI is " + bmi.toFixed(1) + ". You are overweight.";
      // Tips for overweight individuals
      result.innerHTML += "<br><br>Tips to stay fit while overweight:<br>" +
                          "<br> " +
                          "1. Adopt a balanced and calorie-controlled diet.<br>" +
                          "2. Engage in regular aerobic and strength training exercises.<br>" +
                          "3. Seek support from healthcare providers or weight loss programs.";
    } else {
      result.innerHTML = "Your BMI is " + bmi.toFixed(1) + ". You are obese.";
      // Tips for obese individuals
      result.innerHTML += "<br><br>Tips to stay fit while obese:<br>" +
                          "<br> " +
                          "1. Set realistic weight loss goals.<br>" +
                          "2. Create a personalized meal plan and exercise regimen.<br>" +
                          "3. Focus on long-term lifestyle changes for overall health.";
    }
  }
