// export says that this is available for other files to import
const secretNumber = 3


// named (without the default)
// - you can export multiple of these from a file
// default
// - there can only be one
// - I usually only export default if it's the only thing I'm exporting from the file

export default secretNumber

// global variables - can be used and changed from anywhere
// with vite we kind of can't make those anymore


// exporting and importing is for static data
// mostly for functions
// also for constants
// NOT for state - it's not going work nice for you
// makes things a little tricky this week
// but going forward we'll have a better way to handle state