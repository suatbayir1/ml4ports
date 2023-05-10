interface ContainerChartProps {
    containers: {
        date: string;
        REGEME_KEY: number;
        DESCRIPTION: string;
        count: number;
    }[];
    regime_names: {
        REGEME_KEY: number;
        DESCRIPTION: string
    }[];
    startDate: Date | null,
    endDate: Date | null
}

  export default ContainerChartProps;