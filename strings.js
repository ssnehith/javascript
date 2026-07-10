const language = "JavaScript";

console.log(language);
console.log("String length:", language.length);

console.log("Uppercase:", language.toUpperCase());
console.log("Lowercase:", language.toLowerCase());

console.log("First character:", language.charAt(0));
console.log("Last character:", language.charAt(language.length - 1));

console.log("Contains Script:", language.includes("Script"));
console.log("Sliced value:", language.slice(0, 4));
console.log("Replaced value:", language.replace("Java", "Type"));