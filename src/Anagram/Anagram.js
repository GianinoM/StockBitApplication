import React from "react";

export class Anagram extends React.Component {
  sort(word) {
    let splitWords = Array.from(word);

    for (let i = 0; i < splitWords.length; i++) {
      for (let s = 0; s < splitWords.length; s++) {
        if (splitWords[i].charCodeAt(0) < splitWords[s].charCodeAt(0)) {
          var tmp = splitWords[i];
          splitWords[i] = splitWords[s];
          splitWords[s] = tmp;
        }
      }
    }

    return splitWords;
  }

  render() {
    let words = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];
    let groupedWords = [];
    let clonedWords = [];
    let sortedGroupedWords = [];

    for (let i in words) {
      groupedWords.push(this.sort(words[i]).join(""));
      clonedWords.push(this.sort(words[i]).join(""));
    }

    let prevIndex = 0;
    sortedGroupedWords.push("[");
    for (let i = 0; i < groupedWords.length; i++) {
      for (let s = i; s < groupedWords.length; s++) {
        if (groupedWords[prevIndex] === groupedWords[s]) {
          if (groupedWords[i] !== groupedWords[s]) {
            var tmp = words[i];
            words[i] = words[s];
            words[s] = tmp;

            var tmp2 = clonedWords[i];
            clonedWords[i] = clonedWords[s];
            clonedWords[s] = tmp2;
          }
        }
      }
      sortedGroupedWords.push('"' + words[i] + '",');
      if (
        clonedWords[i] !== clonedWords[i + 1] &&
        clonedWords[i] === clonedWords[prevIndex]
      ) {
        sortedGroupedWords.push("],");
        sortedGroupedWords.push(<br />);
        sortedGroupedWords.push("[");
      }
      prevIndex = i;
    }
    sortedGroupedWords.push("],");

    return (
      <div>
        <span>
          kata-kata:
          <br />
          ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];
        </span>
        <br />
        Ekspektasi:
        <br />
        ["kita", "atik", "tika"],
        <br />
        ["aku", "kua"],
        <br />
        ["makan"],
        <br />
        ["kia"]
        <br />
        Hasil
        <br />
        {sortedGroupedWords}
      </div>
    );
  }
}
