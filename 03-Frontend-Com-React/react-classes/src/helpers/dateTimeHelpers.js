function lefPad(value, count = 2, char = "0") {
  const stringValue = value.toString();
  let newValue = stringValue;
  if (stringValue.length < count) {
    for (let i = 0; i < count - stringValue.length; i++) {
      newValue = char + value;
    }
  }
  return newValue;
}

function getNewTimestamp() {
  const now = new Date();
  let result = "";
  result += lefPad(now.getDate());
  result += "/";
  result += lefPad(now.getMonth() + 1);
  result += "/";
  result += now.getFullYear();
  result += " ";
  result += lefPad(now.getHours());
  result += ":";
  result += lefPad(now.getMinutes());
  result += ":";
  result += lefPad(now.getSeconds());
  result += ".";
  result += lefPad(now.getMilliseconds(), 3);

  return result;
}

export { getNewTimestamp };
