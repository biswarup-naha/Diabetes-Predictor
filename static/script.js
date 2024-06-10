document
  .getElementById("diabetes-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const age = document.getElementById("age").value;
    const glucose = document.getElementById("glucose").value;
    const gender = document.getElementById("gender").value;
    const hypertension = document.querySelector('input[name="ht"]:checked')
      ? document.querySelector('input[name="ht"]:checked').value
      : null;
    const heart_disease = document.querySelector('input[name="hd"]:checked')
      ? document.querySelector('input[name="hd"]:checked').value
      : null;
    const smoking = document.getElementById("smoking").value;
    const bmi = document.getElementById("bmi").value;
    const hbg4 = document.getElementById("hbg4").value;

    // Convert form data to numeric values as needed
    let genderNumeric;
    switch (gender) {
      case "male":
        genderNumeric = 0;
        break;
      case "female":
        genderNumeric = 1;
        break;
      case "other":
        genderNumeric = 2;
        break;
    }

    let hypertensionNumeric = hypertension === "yes" ? 1 : 0;
    let heartNumeric = heart_disease === "yes" ? 1 : 0;

    let smokingNumeric;
    switch (smoking) {
      case "never":
        smokingNumeric = 0;
        break;
      case "ever":
        smokingNumeric = 3;
        break;
      case "current":
        smokingNumeric = 1;
        break;
      case "not current":
        smokingNumeric = 2;
        break;
    }

    // Prepare the data object to be sent to the backend
    const formData = {
      gender: genderNumeric,
      age: parseInt(age),
      hypertension: hypertensionNumeric,
      heart_disease: heartNumeric,
      smoking_history: smokingNumeric,
      bmi: parseFloat(bmi),
      HbA1c_level: parseFloat(hbg4),
      blood_glucose_level: parseFloat(glucose),
    };

    // Send the form data to the backend using fetch
    fetch("/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Prediction result:", data);
        // Display the prediction result on the page
        document.getElementById(
          "prediction-result"
        ).innerText = `Prediction: ${data.prediction}`;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
