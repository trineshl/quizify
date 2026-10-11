import { Hono } from 'hono';
import { IHonoAppBinding } from 'sidekick-backend-hono';
import { appInfo } from '../config/app-config';

export const routesRegistration = (app: Hono<IHonoAppBinding>) => {
  app.get('/test', (c) => {
    return c.json({
      title: `API Portal ${appInfo.appName}`,
      message: `Welcome to the ${appInfo.appName} API portal!`,
      loggedInUser: c.get('user'),
    });
  });

  // app.route('/vehicle-counts', vehicleCountsRouter);
};

export const publicRoutesRegistration = (app: Hono<IHonoAppBinding>) => {
  // app.route('/mobile-app', mobileAppRoutes);
};