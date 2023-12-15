module.exports = (fn) => {
    return (req, res, next) => {
        fn(req, res, next);
    };
}; // to avoid uncaught promise error to go silent
// used if root-level of an asyncronous chain of function