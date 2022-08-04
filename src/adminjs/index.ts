import { brandingOptions } from './branding';
import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { adminJsResources } from "./resources";

//Models
import { User } from "../models";
import bcrypt from 'bcrypt'

//Tradução
import { locale } from "./locale";
import { dashboardOption } from "./dashboard";
import { authenticationOptions } from './auth';

AdminJS.registerAdapter(AdminJSSequelize);

export const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  resources: adminJsResources,
  branding: brandingOptions,
  locale: locale,
  dashboard: dashboardOption
});

export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(
  adminJs,
  authenticationOptions,
  null, 
  { resave: false, saveUnitialized: false }
);
