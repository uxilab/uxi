export const required = value => (value ? undefined : 'Required');

export const validPassword = (value) => {
  if(value.length < 8) {
    return 'Password must contain at least 8 characters';
  }

  return null;
}

const isUrl = (str) => {
  /* eslint-disable no-useless-escape */
  const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  return regexp.test(str);
};

export const email = (v) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !re.test(v);
};

export const url = value => (isUrl(value) ? null : 'Invalid Url');

export const uuid = (v) => {
  const re = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  return !re.test(v);
};

export default {
  required,
  url,
  email,
  uuid,
};
