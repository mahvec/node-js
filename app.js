// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// function greetMahvec(greetFn) {
//   const name = "Mahvec";
//   greetFn(name);
// }

// greetMahvec(greet);

// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, topping) => {
//   console.log(
//     `Order recieved,! Baking a ${size} pizza with ${topping} topping`
//   );
// });

// emitter.on("order-pizza", (size) => {
//   if (size === "large") {
//     console.log("thanks for ordering with us!");
//   }
// });
// console.log("which comes first? the log or the order");
// emitter.emit("order-pizza", "large", "pepperoni");

// const PizzaShop = require("./pizzaShop");
// const DrinkMachine = require("./drink-machine");

// const pizzashop = new PizzaShop();
// const drinkMachine = new DrinkMachine();
// pizzashop.order();
// pizzashop.displayOrderNumber();

// pizzashop.on("order", (size, toppings) => {
//   console.log(
//     `Order recieved,! Baking a ${size} pizza with ${toppings} topping`
//   );
//   drinkMachine.serveDrink(size);
// });

// pizzashop.order("large", "pepperoni");

// const buffer = new Buffer.from("Victor");

// console.log(buffer);
// console.log(buffer.toJSON());

/////////////////
/// FS MODULE ///
/////////////////

// const fs = require("fs");

// const FileContent = fs.readFileSync("./file.txt", "utf-8");

// console.log(FileContent);

// fs.readFileSync("./file.txt", (error, data) => {
//   console.log(error);
//   console.log(data);
// });

/////////////////
///   PATH    ///
/////////////////

// const fs = require("fs");
// const zlib = require("zlib");

// const gzip = zlib.createGzip();

// const readableStream = fs.createReadStream("./file.txt", {
//   encoding: "utf-8",
// });

// readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

// const writableStream = fs.createWriteStream("./file2.txt");

// readableStream.pipe(writableStream);
// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writableStream.write(chunk);
// });

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const superHero = {
//     firstname: "Victor",
//     lastname: "Opone",
//   };

//   const name1 = superHero.firstname;
//   const name2 = superHero.lastname;
//   fs.createReadStream("./index.html").pipe(res);
//   res.writeHead(200, { "content-type": "text/html" });
//   let html = fs.readFileSync("./index.html", "utf-8");
//   html = html.replace("{{name1}}", name1);
//   html = html.replace("{{name2}}", name2);
//   res.end(html);
//   // res.end("<p>hello world this is my first server<p>");
//   // res.end(JSON.stringify(superHero));
//   // console.log(req);
// });

// server.listen(3000, () => {
//   console.log("server running on port 3000");
// });

// const routes = require("./routes");
// console.log(routes);
const threadpool = require("./threadpool");
console.log(threadpool);
