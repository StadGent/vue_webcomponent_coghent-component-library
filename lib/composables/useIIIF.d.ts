declare const useIIIF: (_url: string) => {
    noImageUrl: string;
    generateUrl: (filename: string, format: "square" | "full", width?: string | "max", height?: number | undefined) => string;
    generateInfoUrl: (filename: string) => string;
};
export { useIIIF };
