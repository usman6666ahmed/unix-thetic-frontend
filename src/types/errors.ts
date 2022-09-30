import { HttpErrorResponse } from "@angular/common/http";

interface CustomError {
  data: object,
  errors: object,
  status: string
}

export interface RailsError extends HttpErrorResponse {
  error: CustomError
}
