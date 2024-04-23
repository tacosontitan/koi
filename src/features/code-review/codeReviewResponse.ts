import {Issue} from "./issue";

/**
 * Represents a response from a code review.
 */
export interface CodeReviewResponse
    extends Response
{
    /**
     * Any issues that were identified during the code review.
     */
    issues: Issue[];
}