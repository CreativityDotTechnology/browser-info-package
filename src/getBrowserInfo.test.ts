import getBrowserInfo from '../src/index';

describe('Chrome User Agents', () => {
  it('detects Chrome on Windows', () => {
    const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3';
    const info = getBrowserInfo(userAgent);
    expect(info.browserName).toBe('Chrome');
    expect(info.majorVersion).toBe('58');
  });

  it('detects Chrome on macOS', () => {
    const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36';
    const info = getBrowserInfo(userAgent);
    expect(info.browserName).toBe('Chrome');
    expect(info.majorVersion).toBe('118');
  });

  it('detects Firefox', () => {
    const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/109.0';
    const info = getBrowserInfo(userAgent);
    expect(info.browserName).toBe('Firefox');
    expect(info.majorVersion).toBe('109');
  });

  it('detects Safari', () => {
    const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/603.2.4 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.4';
    const info = getBrowserInfo(userAgent);
    expect(info.browserName).toBe('Safari');
    expect(info.majorVersion).toBe('10');
  });

  it('detects Edge', () => {
    const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134';
    const info = getBrowserInfo(userAgent);
    expect(info.browserName).toBe('Edge');
    expect(info.majorVersion).toBe('17');
  });

  it('detects IE', () => {
    const userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko';
    const info = getBrowserInfo(userAgent);
    expect(info.browserName).toBe('IE');
    expect(info.majorVersion).toBe('11');
  });
  
});
