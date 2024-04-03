// export type Brand = {
//   id: number;
//   name: string;
// };

export interface BrandListItemDto {
  id: number;
  name: string;
  createdDate: Date | string; // Backend'den string olarak gelebilir. Biz oluşturursak da Date olarak oluşturabiliriz.
}
