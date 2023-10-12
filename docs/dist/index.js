function getBrowserInfo(userAgent) {
    let browserName = "Unknown";
    let majorVersion = "Unknown";
    let isMobile = /Mobile|Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(userAgent) ? "Yes" : "No";
    // Edge
    if (userAgent.indexOf("Edg") > -1) {
        browserName = "Edge";
        majorVersion = (userAgent.match(/Edg\/(\d+)/) || [])[1] || "Unknown";
    }
    // Samsung Browser
    else if (/SamsungBrowser/.test(userAgent)) {
        browserName = "Samsung Browser";
        majorVersion = (userAgent.match(/SamsungBrowser\/(\d+)/) || [])[1] || "Unknown";
    }
    // Chrome on iOS
    else if (/CriOS/.test(userAgent)) {
        browserName = "Chrome on iOS";
        majorVersion = (userAgent.match(/CriOS\/(\d+)/) || [])[1] || "Unknown";
    }
    // Safari
    else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
        browserName = "Safari";
        majorVersion = (userAgent.match(/Version\/(\d+)/) || [])[1] || "Unknown";
    }
    // Firefox
    else if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Firefox";
        majorVersion = (userAgent.match(/Firefox\/(\d+)/) || [])[1] || "Unknown";
    }
    // Internet Explorer
    else if (userAgent.indexOf("MSIE") > -1) {
        browserName = "IE";
        const versionMatch = userAgent.match(/MSIE (\d+)/);
        majorVersion = (versionMatch || [])[1] || "Unknown";
    }
    // Chrome
    else if (userAgent.indexOf("Chrome") > -1) {
        browserName = "Chrome";
        majorVersion = (userAgent.match(/Chrome\/(\d+)/) || [])[1] || "Unknown";
    }
    return {
        userAgent: userAgent,
        browserName: browserName,
        majorVersion: majorVersion,
        isMobile: isMobile
    };
}
export default getBrowserInfo;
