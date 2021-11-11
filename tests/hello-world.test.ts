import { handler } from '../src/handlers/hello-world';
import { APIGatewayEventDefaultAuthorizerContext } from 'aws-lambda';
import * as _ from 'lodash';

describe('src/handlers/hello-world', () => {
  describe('handler', () => {
    let event: APIGatewayEventDefaultAuthorizerContext;
    const _getSpy = jest.spyOn(_, 'get');

    describe('success', () => {
      it('should return 200 / hello world', async () => {
        await expect(handler(event)).resolves.toMatchObject({
          statusCode: 200,
          body: JSON.stringify({ message: 'Hello world!' }),
        });
      });
    });

    describe('failure', () => {
      it('should return 500 / throw error', async () => {
        _getSpy.mockImplementation(() => {
          throw new Error();
        });

        await expect(handler(event)).resolves.toMatchObject({
          statusCode: 500,
        });
      });
    });
  });
});
