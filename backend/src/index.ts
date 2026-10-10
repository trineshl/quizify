import { Hono } from "hono";
import { IHonoAppBinding, initSideKick } from "sidekick-backend-hono";
import { APP_INFO_ACCOUNT_TYPE, appInfo } from "./config/app-config";
import { freePurchasedPlan } from "./config/subscription-utils";
import featureFlags from "./config/feature-flags";

const honoApp = new Hono<IHonoAppBinding>();

initSideKick(
  {
    appInfo: appInfo,
    accountType: APP_INFO_ACCOUNT_TYPE,
    cors: {
      allowedOrigins: ["http://localhost:5173", '*'],
    },
    subscriptions: {
      currency: "",
      currencySymbol: "",
      freePlan: freePurchasedPlan,
      premiumPlans: [],
      faqs: [],
    },
    secretConfig: {
      //All secret
      cloudFlareApiKey: process.env.CLOUDFLARE_API_TOKEN,
    },
    featureFlags: featureFlags,
  },
  honoApp,
);

export default honoApp;