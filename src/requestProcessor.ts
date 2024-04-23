import { Request } from './request';

/**
 * Represents a request processor that processes requests and returns responses.
 */
export abstract class RequestProcessor<
    TRequest extends Request<TResponse>,
    TResponse>
{
    /**
     * Processes a request.
     * @param request The request to process.
     */
    abstract processRequest(request: TRequest): TResponse;
}