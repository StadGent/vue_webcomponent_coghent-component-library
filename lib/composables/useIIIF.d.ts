declare const useIIIF: (_url: string) => {
    noImageUrl: string;
    generateUrl: (filename: string, format: 'square' | 'full', size?: number | 'max') => string;
    generateInfoUrl: (filename: string) => string;
};
export { useIIIF };
