import {Issue} from "../issue";

/*
 * Represents a response from the assistant.
 */
export interface AssistantResponse
{
    /*
     * The ID of the response.
     */
    id: string;
    
    /*
     * Any issues identified by the assistant.
     */
    issues: Issue[];
}