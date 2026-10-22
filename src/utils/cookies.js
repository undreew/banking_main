import Cookie from "universal-cookie";
import { isEmpty, isString } from "lodash";
import { APP_COOKIE_EXPIRATION, APP_COOKIE_PREFIX, APP_ENV } from "@/config/AppConfig";

const cookie = new Cookie();

const createCookieName = (name) => {
  if (!name || !isString(name)) return null;
  return [APP_COOKIE_PREFIX, name].filter(v => v).join("-");
}

const getCookie = (name) => {
  const cookieName = createCookieName(name);
  return cookie.get(cookieName);
}

const setCookie = (name, value) => {
  const cookieName = createCookieName(name);

  if (isEmpty(value)) {
    cookie.remove(cookieName);
  } else {
    cookie.set(cookieName, value, {
      maxAge: Number(APP_COOKIE_EXPIRATION),
      secure: APP_ENV !== "dev",
      httpOnly: APP_ENV !== "dev",
      sameSite: "strict"
    });
  }
}

const Cookies = {
  get session() {
    return getCookie("session");
  },

  set session(value) {
    setCookie("session", value);
  }
}

export default Cookies;