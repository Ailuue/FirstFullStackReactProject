const RE = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default recipients => {
  const rArray = recipients
    .split(",")
    .map(email => email.trim())
    .filter(email => {
      return email.length && RE.test(email) === false;
    })
    .join(" , ");

  if (rArray.length) {
    return `These emails are invalid: ${rArray}`;
  }
};
