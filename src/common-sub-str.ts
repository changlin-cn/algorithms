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

/**
 * 获取最长公共子序列
 * @param {string} word1
 * @param {string} word2
 */
export function LCS(word1: string, word2: string): string {
  const table: number[][] = [];

  for (let i = 0; i <= word1.length; i++) {
    table[i] = [];
    for (let j = 0; j <= word2.length; j++) {
      table[i][j] = 0;
    }
  }

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + 1;
      } else if (table[i - 1][j] >= table[i][j - 1]) {
        table[i][j] = table[i - 1][j];
      } else {
        table[i][j] = table[i][j - 1];
      }
    }
  }
  // console.log(table);
  const res = [];
  let jStart = word2.length;
  loop1: for (let i = word1.length; i > 0; i--) {
    for (let j = jStart; j > 0; j--) {
      const leftTop = table[i - 1][j - 1];
      const left = table[i][j - 1];
      const top = table[i - 1][j];
      const current = table[i][j];
      // debugger
      if (current === leftTop + 1 && left === leftTop && top === leftTop) {
        res.unshift(word1[i - 1]);
        jStart = j - 1;
        continue loop1;
      }
      if (top === leftTop && left > leftTop) {
        continue;
      }
      if (i > 1) {
        continue loop1;
      }
    }
  }
  // console.log(res);
  return res.join('');
}

/*

export function LCS(word1: string, word2: string): string {
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
