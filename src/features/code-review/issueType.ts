/*
 * Represents different types of issues that can be reported.
 */
export enum IssueType
{
    /*
     * Specifies that the issue is a potential bug.
     */
    Bug = 0,
    
    /*
     * Specifies that the issue related to performance.
     */
    Performance = 1,
    
    /*
     * Specifies that the issue is a security vulnerability.
     */
    Security = 2
}