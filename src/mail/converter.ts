class EmailConverter {
    /**
     * Convert Map to Email Lambda input format
     * @param mapData
     * */
    public static mapToEmailLambdaJson(mapData: Map<string, string>): string {
        return JSON.stringify({
            "to": mapData.get("to"),
            "subject": mapData.get("subject"),
            "payload": mapData.get("payload"),
        })
    }
}

export {EmailConverter};