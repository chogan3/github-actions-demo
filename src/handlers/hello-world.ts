import {
  APIGatewayEventDefaultAuthorizerContext,
  APIGatewayProxyResult,
} from 'aws-lambda';
import { get as _get } from 'lodash';

export const handler = async (
  event: APIGatewayEventDefaultAuthorizerContext
): Promise<APIGatewayProxyResult> => {
  let origin;
  try {
    // event/context variables
    origin = _get(event, 'headers.origin', '');

    return {
      isBase64Encoded: false,
      statusCode: 200,
      body: JSON.stringify({ message: 'hello world' }),
    };
  } catch (err) {
    // Despite catching an error, we still return 'successfully' but with statusCode 500 (an error code)
    return {
      isBase64Encoded: false,
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
