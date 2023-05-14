import {InvokeCommand, InvokeCommandOutput, LambdaClient} from "@aws-sdk/client-lambda";
import {Converter} from "../shared/tools/converter";
import {EmailConverter} from "./converter"; // ES Modules import

class Mail {
    private readonly client: LambdaClient;

    constructor(region: string) {
        this.client = this.initClient(region);
    }

    private initClient(region: string): LambdaClient {
        return new LambdaClient({
            region: region,
            // credentials: fromEnv(), // Use environment variables for credentials
        });
    }

    /**
     * Send  email using AWS Lambda
     * @param mapData
     * @return void
     * @throws Error
     * */
    public async sendEmail(mapData: Map<string, string>): Promise<void> {
        const payload: Uint8Array = Converter.stringToUint8Array(EmailConverter.mapToEmailLambdaJson(mapData));

        try {
            const command = new InvokeCommand({
                FunctionName: "aws-lambda-go-sendContactEmail",
                Payload: payload,
            });

            const response: InvokeCommandOutput = await this.client.send(command);
            console.log('Lambda response:', response.StatusCode);
        } catch (error) {
            console.error('Error invoking Lambda function:', error);
        }
    }
}

export {Mail};