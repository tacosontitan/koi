/**
 * Represents a request to review code.
 */
export interface CodeReviewRequest
    extends Request
{
    /**
     * The original code that is being reviewed.
     */
    original: string;
    
    /**
     * The code that is being proposed as a change.
     */
    proposed: string;
}