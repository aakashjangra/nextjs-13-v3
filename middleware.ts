import { NextResponse } from 'next/server'

//middleware for API requests
export const middleware = (request: Request) => {
  console.log(request.url)
  return NextResponse.redirect(new URL('/', request.url))
}

export default middleware

export const config = {
  matcher: ['/home'], //middleware runs for matching paths only
}
