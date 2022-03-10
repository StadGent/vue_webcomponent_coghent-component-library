const useIIIF = (_url: string) => {
  const noImageUrl = "/no-image.png";

  const generateUrl = (
    filename: string,
    format: "square" | "full",
    width: string | "max" = "1000",
    height: number | undefined = undefined
  ) => {
    return `${_url}iiif/3/${filename}/${format}/${
      width === "max" ? width : `^${width},${height ? height : ""}`
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
