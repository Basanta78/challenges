export {};
declare global {
  interface String {
    basanta(opinion: "like" | "dislike"): string;
  }
}

String.prototype.basanta = function (opinion: "like" | "dislike"): string {
  return `basanta ${opinion} '${this}'`;
};

console.log("chocolate".basanta("like"));
console.log("chocolate".basanta("dislike"));
