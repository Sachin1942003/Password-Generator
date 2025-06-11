function generatePassword(){
   const length=document.getElementById("length").value;
   const uppercase=document.getElementById("uppercase").checked;
   const numbers=document.getElementById("numbers").checked;
   const special=document.getElementById("special").checked;
   
   const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
   const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numberChars = "0123456789";
   const specialChars = "!@#$%^&*()_+{}[]<>?";
   
   let availableChars=lowercaseChars;
   if(uppercase) availableChars+=uppercaseChars;
   if(numbers) availableChars+=numberChars;
   if(special) availableChars+=specialChars;
   if (isNaN(length) || length <= 0) {
      alert("Please enter a valid password length.");
      return;
  }
   let password="";
   for(let i=0;i<length;i++){
      const index=Math.floor(Math.random() * availableChars.length);
      password+=availableChars[index];
   }
   document.getElementById("password").textContent=password;
   const copyBtn = document.getElementById("copy");
   copyBtn.disabled = !password;
}
document.getElementById("copy").addEventListener("click", function(){
   const password=document.getElementById("password").textContent;
   if (password) {
     navigator.clipboard.writeText(password);
   }
});
document.getElementById("generate").addEventListener("click", generatePassword);
