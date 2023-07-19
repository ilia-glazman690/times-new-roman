const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default prompt
  event.preventDefault();

  // Store the event for later use
  deferredPrompt = event;

  // Show the install button
  butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the installation prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;

    // Reset the deferredPrompt variable
    deferredPrompt = null;

    // Hide the install button
    butInstall.style.display = 'none';

    // Log the user's choice
    console.log('User choice:', choiceResult.outcome);

    // Check if the app was installed
    if (choiceResult.outcome === 'accepted') {
      console.log('App installed');
    } else {
      console.log('App not installed');
    }
  }
});

window.addEventListener('appinstalled', (event) => {
  // The app has been successfully installed
  console.log('App installed');
});

