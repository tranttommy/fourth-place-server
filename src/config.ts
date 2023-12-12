export const port = process.env.PORT || 3000

export const aws = {
  cognito: {
    clientId: process.env.AWS_COGNITO_CLIENT_ID || '',
    clientSecret: process.env.AWS_COGNITO_CLIENT_SECRET || '',
  },
}
