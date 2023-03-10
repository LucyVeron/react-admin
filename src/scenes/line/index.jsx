import Header from '../../components/Header';
import LineChart from '../../components/LineChart';
import { Box } from '@mui/material'

function Line() {
    return (
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Simple Pie Chart" />
            <Box height="75vh">
                <LineChart />
            </Box>
        </Box>
    )
}

export default Line