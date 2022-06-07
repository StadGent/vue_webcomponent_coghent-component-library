export type ImageSource = {
  imageUrl: string;
  infoJson: string;
  fallBackUrl: string;
  noImageUrl: string;
  mediaType: object;
};

export type ModalState = "show" | "hide" | "loading" | "small";
