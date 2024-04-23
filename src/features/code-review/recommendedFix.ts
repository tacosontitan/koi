/**
 * Represents a recommended fix for an issue.
 */
export interface RecommendedFix
{
    /**
     * The description of the fix.
     */
    description: string;
    
    /**
     * An example of how to apply the fix.
     */
    example: string;
}