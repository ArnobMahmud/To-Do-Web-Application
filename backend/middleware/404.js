const error = (req, res) => res.status(500).send("Route not found");

module.exports = error;
