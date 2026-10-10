import { setAccountType, setAppInfo, setNavigationItems, updateRolesEnum } from 'sidekick-client';
import { APP_INFO_ACCOUNT_TYPE, appInfo } from './app-config';
import { navMenu, virtualChildOf } from './nav-items';
import { ROLES } from './roles-enum';

const initSidekickConfig = () => {
  setAppInfo(appInfo);
  setAccountType(APP_INFO_ACCOUNT_TYPE);
  setNavigationItems(navMenu, virtualChildOf);
  updateRolesEnum(ROLES);
};

export default initSidekickConfig;
