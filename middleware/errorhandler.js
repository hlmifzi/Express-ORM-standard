import ApiResponse from "../utils/apiResponse"

export default (err, req, res, next) => {
  if (err) {
    switch (err.status) {
      case 400:
        ApiResponse.badRequest(res, err.message, err.errors)
        break
      case 404:
        ApiResponse.notFound(res, err.message, err.errors)
        break
      case 500:
        ApiResponse.internalServerError(res, err.message, err.errors)
        break
      default:
        ApiResponse.internalServerError(res, err.message, err.errors)
    }
  }
}