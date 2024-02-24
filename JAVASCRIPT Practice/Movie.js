let movie = "RRR";
let guess = prompt("Enter the movie name:");

while((guess != movie) && (guess != "quit")){
    console.log("Worng guess");
    guess = prompt("Enter the movie name:");
}