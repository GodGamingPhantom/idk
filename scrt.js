const form = document.getElementById('secretMessageForm');
form.addEventListener('submit', function(event) {
 event.preventDefault();

 const message = document.getElementById('secretMessage').value;
 if (!message) {
 alert('Please enter a secret message!');
 return;
 }

 const webhookUrl = 'https://discord.com/api/webhooks/1199573706360488056/ePCSgmpTCraIwfGKfofGCMleuDdUnLbcMj__yN1O9h_sOBuZFvf9tYfDs0v0QkgEpfzX';
 const data = {
 content: message
 };

 fetch(webhookUrl, {
 method: 'POST',
 body: JSON.stringify(data),
 headers: {
 'Content-Type': 'application/json'
 }
 })
 .then(response => {
 if (!response.ok) {
 alert('Error sending message!');
 } else {
 alert('Your secret message has been sent!');
 }
 form.reset();
 })
 .catch(error => {
 alert('Error sending message to Discord!');
 console.error(error);
 });
});
