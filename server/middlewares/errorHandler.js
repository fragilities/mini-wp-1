
function errorHandler(err, req, res, next) {
   console.log(Object.keys(err))
   console.log(err)

   const errorCode = err.errorCode || 500
   const message = err.message || 'internal server error'

   res.status(errorCode).json(message)
}

module.exports = errorHandler