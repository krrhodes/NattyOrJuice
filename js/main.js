let RESPONSE_LIST = ["Natty, you're just small",
  "Get in the gym",
  "Raise your standards",
  "Seriously?",
  "Creatine abuse",
  "Get offline",
  "Why do you care",
  "Snap city tho",
  "Natty, but they shouldn't be",
  "Did this person consent to their photo being uploaded here"
];

window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
    if (this.files && this.files[0]) {
      var img = document.querySelector('img');
      img.onload = () => {
        URL.revokeObjectURL(img.src);  // no longer needed, free memory
      }

      img.src = URL.createObjectURL(this.files[0]); // set src to blob url

      var result = document.querySelector('#resultContainer');
      result.style.visibility='visible';
      var resIdx = Math.floor(Math.random() * 10);
      result.children[0].innerHTML = "Result: Natty, 9" + resIdx + "% Certainty";
      var resultText = document.querySelector('#resultText');
      resultText.innerHTML = RESPONSE_LIST[resIdx];
    }
  });
});


