import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.kordonmedya.app",
  appName: "kordonmedya",
  webDir: "out",
  server: {
    androidScheme: "http",
    allowNavigation: [
      "localhost",
      "http://162.244.80.31:8746",
      "*.your-domain.com",
    ],
    cleartext: true,
  },
  ios: {},
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: true,
    loggingBehavior: "debug",
  },
};

export default config;
