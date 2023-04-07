interface LineChartProps {
    goods: {
      date: string;
      GOODS_NAME: string;
      GOODS_GROUP_KEY: number;
      GROUP_NAME: string;
      count: number;
    }[];
    groups : {
      GOODS_GROUP_KEY: number;
      GROUP_NAME: string;
    }[];
    startDate: Date | null;
    endDate: Date | null;
}

  export default LineChartProps;