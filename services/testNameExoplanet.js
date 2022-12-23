
module.exports = function (name) {

  if (name === undefined) {
    return false;
  }

  // eslint-disable-next-line no-useless-escape
  const regex = /^([A-Z0-9\-\.]*)$/;
  if (name.match(regex)) return true;

  return false;
};
