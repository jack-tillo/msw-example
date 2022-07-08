// src/mocks/handlers.js
import { rest, RestRequest } from 'msw'

type SampleRequest = {
  name: string
  age: number
}

export const handlers = [
  rest.post(
    '/user/manager/create',
    (req: RestRequest<SampleRequest>, res, ctx) => {
      if (req.body.name === 'craig') {
        return res(ctx.status(400))
      }
      const obj = {
        ...req.body,
        job: 'manager',
      }
      return res(ctx.status(200), ctx.json(obj))
    }
  ),
]
