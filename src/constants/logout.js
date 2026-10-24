export const LOGOUT_OPTIONS = {
  this_device: "this_device",
  every_device: "every_device"
};

const LOGOUT_OPTIONS_LABEL = {
  [LOGOUT_OPTIONS.this_device]: "Just this device",
  [LOGOUT_OPTIONS.every_device]: "Every Device"
};

const LOGOUT_OPTIONS_DESCRIPTION = {
  [LOGOUT_OPTIONS.this_device]: "You'll need to sign in again here. Your other devices stay signed in.",
  /*TODO: {replace with number of sessions}*/
  [LOGOUT_OPTIONS.every_device]: "Ends all {0} sessions, including your phone and other browsers."
};

export const LOGOUT_OPTIONS_DATA = {
  [LOGOUT_OPTIONS.this_device]: {
    label: LOGOUT_OPTIONS_LABEL[LOGOUT_OPTIONS.this_device],
    description: LOGOUT_OPTIONS_DESCRIPTION[LOGOUT_OPTIONS.this_device]
  },
  [LOGOUT_OPTIONS.every_device]: {
    label: LOGOUT_OPTIONS_LABEL[LOGOUT_OPTIONS.every_device],
    description: LOGOUT_OPTIONS_DESCRIPTION[LOGOUT_OPTIONS.every_device]
  }
};