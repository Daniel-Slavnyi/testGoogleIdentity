// 320076352803-3a78ijvqst0v1fdqs2bo1a05jmqohfl3.apps.googleusercontent.com - clientID

window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      "320076352803-3a78ijvqst0v1fdqs2bo1a05jmqohfl3.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });
  google.accounts.id.renderButton(document.getElementById("signInDiv"), {
    theme: "outline",
    size: "large",
    type: "icon",
  });

  google.accounts.id.prompt();
};

function handleCredentialResponse(response) {
  const credential = response.credential;
  console.log("credential", credential);
}
