
/** convertAndFormat accepts a number and converts it to string
 *  for readability
 *
 *  input: initialNum (int)
 *  output: readableNum (str)
 *
 *  convertAndFormat(1234); // "1,234"
 *  convertAndFormat(1000000); // "1,000,000"
 *  convertAndFormat(9876543210); // "9,876,543,210"
 *  convertAndFormat(6); // "6"
 *  convertAndFormat(-10); // "-10"
 *  convertAndFormat(-5678); // "-5,678"
 *  convertAndFormat(12345.678); // "12,345.678"
 *  convertAndFormat(-3141592.65); // "-3,141,592.65"
 *  convertAndFormat('not a number'); // error
 *
 */
function convertAndFormat(initialNum) {
  if (typeof(initialNum) !== 'number') {
    throw new TypeError ("must input a number!");
  }

  const splitStringifiedNum = String(initialNum).split('');
  const decimalIdx = splitStringifiedNum.includes('.') ? splitStringifiedNum.indexOf('.') : undefined;
  const startIdx = splitStringifiedNum[0] === '-' ? 1 : 0;
  const splitWholeNum = splitStringifiedNum.slice(startIdx, decimalIdx).reverse();

  const preText = startIdx === 1 ? '-' : '';
  const decimalSubtext = decimalIdx ? splitStringifiedNum.slice(decimalIdx).join('') : '';
  const readableNum = splitWholeNum.map((digitStr, idx) => {
    if (idx % 3 == 0 && idx > 0) {
      return `${digitStr},`;
    }
    return digitStr;
  }).reverse().join('');


  return `${preText}${readableNum}${decimalSubtext}`;
}

module.exports = convertAndFormat;