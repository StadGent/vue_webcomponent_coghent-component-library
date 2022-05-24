export type ImageSource = {
  imageUrl: string;
  infoJson: string;
  fallBackUrl: string;
  noImageUrl: string;
};

export type ModalState = "show" | "hide" | "loading" | "small";
