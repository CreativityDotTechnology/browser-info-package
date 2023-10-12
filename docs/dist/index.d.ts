interface BrowserInfo {
    userAgent: string;
    browserName: string;
    majorVersion: string;
    isMobile: string;
}
declare function getBrowserInfo(userAgent: string): BrowserInfo;
export default getBrowserInfo;
