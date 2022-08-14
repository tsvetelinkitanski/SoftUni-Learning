function mirrorWords(str) {
  let strToCheck = str[0];
  let pattern = /([@|#])[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g;
  let matches = pattern.exec(strToCheck);
  let result = [];
  let mirrors = [];
  let readyWords = [];

  while (matches !== null) {
    result.push(matches[0]);
    matches = pattern.exec(strToCheck);
  }
  for (let el of result) {
    if (el === el.split("").reverse().join("")) {
      el = el.substring(1, el.length - 1);
      mirrors.push(el);
    }
  }

  if (result.length > 0) {
    console.log(`${result.length} word pairs found!`);
  } else {
    console.log(`No word pairs found!`);
  }
  for (let word of mirrors) {
    if (word.includes("@")) {
      word = word.split("@@").join(" <=> ");
      readyWords.push(word);
    } else if (word.includes("#")) {
      word = word.split("##").join(" <=> ");
      readyWords.push(word);
    }
  }

  if (mirrors.length < 1) {
    console.log("No mirror words!");
  } else {
    console.log(`The mirror words are:`);
    console.log(readyWords.join(", "));
  }
}
mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);

console.log("========");

mirrorWords(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
console.log("==========");

mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
