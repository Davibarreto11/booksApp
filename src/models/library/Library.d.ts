export default interface Library {
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  idBook: string;
  title: string;
  authors: string;
  publisher: string;
  publishedDate: string;
  description: string;
  categories: Json[];
  imageLink: Json;
  language: string;
  searchInfo: Json;
}
