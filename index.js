const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials.map(uncapitalizedTitles => {
//     let uncapitalizedWordsArray = uncapitalizedTitles.split(" ");
//     const cappedWordsArray = uncapitalizedWordsArray.map(uncapitalizedWords => uncapitalizedWords.charAt(0).toUpperCase() + uncapitalizedWords.slice(1));
//     return cappedWordsArray.join(' ');
//   });
// }

//  ++++++Code below is a simpler version of of the above function.+++++

const titleCased = () => {
  return tutorials.map(uncapTitles =>
    uncapTitles.split(" ").map(uncapWords => uncapWords.charAt(0).toUpperCase() + uncapWords.slice(1)).join(" "));
}
