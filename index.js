// const { parse } = require('url')

module.exports = (req, res) => {
  // const { query } = parse(req.url, true)
  // const { name = 'World' } = query
  console.log("log test");
  const name = "World";
  res.end(`Hello ${name}!`)
}
