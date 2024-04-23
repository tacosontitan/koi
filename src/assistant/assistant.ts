import OpenAi from "openai";
import {AssistantOptions} from "./assistantOptions";
import {RequestProcessor} from "../requestProcessor";
import {Beta} from "openai/resources";
import ThreadCreateParams = Beta.ThreadCreateParams;
import Thread = Beta.Thread;
import {Threads} from "openai/resources/beta";
import Run = Threads.Run;

/**
 * Represents the assistant for interacting with the OpenAI API.
 */
export class Assistant
{
    constructor(
        private readonly openAi: OpenAi,
        private readonly options: AssistantOptions)
    {
        
    }
    
    public async createRun(prompt: string): Promise<Run>
    {
        let runRequest: Threads.ThreadCreateAndRunParamsNonStreaming = {
            assistant_id: this.options.id,
            temperature: this.options.temperature,
            response_format: { type: "json_object" },
            thread: {
                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ]
            }
        };
        
        return this.openAi.beta.threads.createAndRun(runRequest);
    }
}