const constants = Object.freeze({
  CLICK_DELAY: 500,
  DEFAULT_PREFERENCES: Object.freeze({
    NUM_ITERATIONS: 30,
    DELAY: 600,
    AUTO_CLICK: false,
    RANDOM_GUESSES: false,
    RANDOM_LETTERS: false,
    PLATFORM_SPOOFING: 'desktop-and-mobile',
  }),
  MESSAGE_TYPES: Object.freeze({
    SPOOF_USER_AGENT: 0,
    ACTIVELY_SEARCHING_MOBILE: 1,
  }),
  // TODO: add more user agents
  MOBILE_USER_AGENTS: [
    'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.85 Mobile Safari/537.36 Edg/84.0.522.35',
  ],
  EDGE_USER_AGENT: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.85 Safari/537.36 Edg/84.0.522.35',
});