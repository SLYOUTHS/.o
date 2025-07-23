function isMobilePhone() {
    const ua = navigator.userAgent;
    // Matches Android phones, iPhones, and most mobile phones, but excludes iPad and Tablet
    const isMobile = /Mobi|Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    const isTablet = /iPad|Tablet/i.test(ua);
    return isMobile && !isTablet;
  }

  if (isMobilePhone()) {
    window.location.href = "mobile.html"; // Change this to your target HTML file
  }
