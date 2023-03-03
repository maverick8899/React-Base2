import config from "../config";
// import Admin from "../pages/Admin/Admin";
import User from "../pages/User/User";
import Home from "../pages/Home/Home";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.user, component: User },
  // { path: config.routes.admin, component: Admin },
];
const privateRoutes = [
  {
    //
  },
];

export { publicRoutes, privateRoutes };
