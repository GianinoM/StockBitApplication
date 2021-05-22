import React from "react";

export class Anagram extends React.Component {
  sort(word) {
    let splitWords = Array.from(word);

    for (let i = 0; i < splitWords.length; i++) {
      for (let s = 0; s < splitWords.length; s++) {
        if (splitWords[i].charCodeAt(0) < splitWords[s].charCodeAt(0)) {
          let tmp = splitWords[i];
          splitWords[i] = splitWords[s];
          splitWords[s] = tmp;
        }
      }
    }

    return splitWords;
  }

  existInArray(item, array) {
    for (let key in array) {
      let value = array[key];
      return value.word === item;
    }
  }

  swapWords(groupedWords, clonedWords, words) {
    let prevIndex = 0;
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

      prevIndex = i;
    }

    return words;
  }

  groupWords(clonedWords, words) {
    let objects = [];
    let grouped = [];
    let result = [];
    let index = 0;
    for (let i = 0; i < words.length; i++) {
      for (let s = i; s < words.length; s++) {
        if (clonedWords[s] === clonedWords[i]) {
          objects.push({ group: index, word: words[s] });
        } else {
          index = index + 1;
          break;
        }
        i = s;
      }
    }

    for (let key in objects) {
      let value = objects[key];
      if (!grouped[value.group]) {
        grouped[value.group] = [];
      }
      grouped[value.group].push('"' + value.word + '"');
    }

    for (let key in grouped) {
      let value = grouped[key];
      result.push("[" + value + "],");
      result.push(<br />);
    }

    return result;
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

    sortedGroupedWords = this.swapWords(groupedWords, clonedWords, words);
    sortedGroupedWords = this.groupWords(clonedWords, sortedGroupedWords);

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
