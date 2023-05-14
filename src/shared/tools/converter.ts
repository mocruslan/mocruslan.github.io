class Converter {
    public static stringToUint8Array(str: string): Uint8Array {
        const encoder = new TextEncoder();
        return encoder.encode(str);
    }
}

export {Converter};