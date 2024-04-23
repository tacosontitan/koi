import {IssueType} from "./issueType";
import {RecommendedFix} from "./recommendedFix";

/**
 * Represents an issue that can be reported.
 */
export interface Issue
{
    /**
     * The type of the issue.
     */
    type: IssueType;
    
    /**
     * The reason for the issue.
     */
    reason: string;
    
    /**
     * The signature of the issue.
     */
    signature: string;
    
    /**
     * The fix for the issue.
     */
    fix: RecommendedFix;
    
    /**
     * The sources for the issue.
     */
    sources: string[];
}