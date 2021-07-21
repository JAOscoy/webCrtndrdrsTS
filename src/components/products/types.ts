export interface ProductComponent {
  productData: {
    title: string;
    description: string;
  };
}

export interface TabsComponent {
  tabsData: {
    calibre: string[];
    // tipo: { value: number; properties: string }[];
    //colorCara: { value: number; properties: string }[];
    //dimensiones: { value: number; properties: string }[];
  };
}
