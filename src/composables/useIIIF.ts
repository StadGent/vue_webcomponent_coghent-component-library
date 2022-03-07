const useIIIF = (_url: string) => {

  const noImageUrl = '/no-image.png';

  const generateUrl = (
    filename: string,
    format: 'square' | 'full',
    size: number | 'max' = 1000,
  ) => {
    return `${_url}iiif/3/${filename}/${format}/${size === 'max' ? size : size + ','
      }/0/default.jpg`;
  };

  const generateInfoUrl = (filename: string) => {
    return `${_url}iiif/3/${filename}/info.json`;
  };

  return {
    noImageUrl,
    generateUrl,
    generateInfoUrl,
  };
};

export { useIIIF };
