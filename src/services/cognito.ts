import {
  CognitoIdentityProviderClient,
  ConfirmSignUpCommand,
  DeleteUserCommand,
  InitiateAuthCommand,
  SignUpCommand,
} from '@aws-sdk/client-cognito-identity-provider'
import { createHmac } from 'crypto'
import { aws } from '../config'

const client = new CognitoIdentityProviderClient({ region: 'us-west-2' })

const createSecretHash = (email: string) =>
  createHmac('sha256', aws.cognito.clientSecret)
    .update(email + aws.cognito.clientId)
    .digest('base64')

export function register(email: string, password: string) {
  return client.send(
    new SignUpCommand({
      Username: email,
      Password: password,
      ClientId: aws.cognito.clientId,
      SecretHash: createSecretHash(email),
    })
  )
}

export function verify(email: string, code: string) {
  return client.send(
    new ConfirmSignUpCommand({
      Username: email,
      ConfirmationCode: code,
      ClientId: aws.cognito.clientId,
      SecretHash: createSecretHash(email),
    })
  )
}

export function authenticate(email: string, password: string) {
  return client.send(
    new InitiateAuthCommand({
      AuthFlow: 'USER_PASSWORD_AUTH',
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
        SECRET_HASH: createSecretHash(email),
      },
      ClientId: aws.cognito.clientId,
    })
  )
}

export function remove(accessToken: string) {
  return client.send(new DeleteUserCommand({ AccessToken: accessToken }))
}
