/**
 * 获取最长公共字符串
 * @param str1
 * @param str2
 */
export function commonSubStr(str1: string, str2: string): string {
  if (str1 === '' || str2 === '') {
    return '';
  }
  const shorter = str1.length < str2.length ? str1 : str2;
  const longer = str1.length >= str2.length ? str1 : str2;
  for (let i = shorter.length - 1; i > 0; i--) {
    for (let j = 0; j + i < shorter.length; j++) {
      const subStr = shorter.substr(j, i);
      if (longer.indexOf(subStr) > -1) {
        return subStr;
      }
    }
  }
  return '';
}
/*
export function commonSubStr2(str1: string, str2: string): string {
  if (str1 === '' || str2 === '') {
    return '';
  }
  const shorter = (str1.length < str2.length ? str1 : str2).split('');
  const longer = (str1.length >= str2.length ? str1 : str2).split('');
  for (let i = shorter.length; i > 0; i--) {
    for (let j = 0; j + i < shorter.length + 1; j++) {
      const subStr = shorter.slice(j, j + i);
      for (let k = 0; k + i < longer.length + 1; k++) {
        const temp = longer.slice(k, k + i);
        if (isSamePermutation(subStr, temp)) {
          return subStr.join('');
        }
      }
    }
  }
  return '';
}

function isSamePermutation(arr1: unknown[], arr2: unknown[]): boolean {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

export function commonSubStr3(word1: string, word2: string): string {
  let max = 0;
  let index = 0;
  const lcsarr = new Array(word1.length + 1);
  for (let i = 0; i <= word1.length + 1; i++) {
    lcsarr[i] = new Array(word2.length + 1);
    for (let j = 0; j <= word2.length + 1; j++) {
      lcsarr[i][j] = 0;
    }
  }

  for (let i = 0; i <= word1.length; i++) {
    for (let j = 0; j <= word2.length; j++) {
      if (i === 0 || j === 0) {
        lcsarr[i][j] = 0;
      } else {
        if (word1[i - 1] == word2[j - 1]) {
          lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
        } else {
          lcsarr[i][j] = 0;
        }
      }
      if (max < lcsarr[i][j]) {
        max = lcsarr[i][j];
        index = i;
      }
    }
  }

  let str = '';
  if (max == 0) {
    return str;
  } else {
    console.log(index,max)
    for (let i = index - max; i <= max; i++) {
      str += word1[i];
    }
    return str;
  }
}
*/
