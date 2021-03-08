const notificationContainer = document.querySelector(
  "body > ytd-app > ytd-popup-container"
);

const observer = new MutationObserver((mutationsList, observer) => {
  mutationsList.forEach((mutation) => {
    if (mutation.type !== "childList") {
      return;
    }

    const stillWatchingButton = document.getElementById("confirm-button");
    if (stillWatchingButton) {
      stillWatchingButton.click();
    }
  });
});

observer.observe(notificationContainer, { childList: true });

// observer.disconnect();
