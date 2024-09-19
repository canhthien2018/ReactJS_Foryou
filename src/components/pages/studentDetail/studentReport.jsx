import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import { LineChart } from '@mui/x-charts/LineChart';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import moment from 'moment';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import TablePagination from '@mui/material/TablePagination';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

const chartData = [
  {
    label: "Đọc",
    data: [50, 25, 30, 45, 65, 10, 30, 40, 50, 90]
  },
  {
    label: "Viết",
    data: [10, 20, 30, 25, 35, 50, 20, 30, 50, 40]
  },
  {
    label: "Vẽ",
    data: [70, 75, 60, 50, 65, 80, 60, 50, 90, 80]
  }
]

const reports = [
  {
    date: new Date(2024, 7, 2),
    status: 'Reported'
  },
  {
    date: new Date(2024, 7, 4),
    status: 'Reported'
  },
  {
    date: new Date(2024, 7, 6),
    status: 'Reported'
  },
  {
    date: new Date(2024, 7, 8),
    status: 'Reported'
  },
  {
    date: new Date(2024, 7, 10),
    status: 'Reported'
  },
  {
    date: new Date(2024, 7, 12),
    status: 'Reported'
  },
  {
    date: new Date(2024, 7, 14),
    status: 'Reported'
  },
  {
    date: new Date(2024, 7, 16),
    status: 'Reported'
  },
  {
    date: new Date(2024, 7, 18),
    status: 'Reported'
  },
  {
    date: new Date(2024, 7, 20),
    status: 'Reported'
  },
  {
    date: new Date(2024, 7, 22),
    status: 'No Reported'
  }
]

function StudentReport() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [tabIndex, setTabIndex] = React.useState("1");

  const selectTabHandle = (event, newValue) => {
    setTabIndex(newValue);
  };


  return (
    <Box sx={{ pl: { xs: 0, xl: 20 }, pr: { xs: 0, xl: 20 } }}>
      <Paper elevation={5} sx={{ borderRadius: 3, mb: 2 }}>
        <Box sx={{ p: 2 }}>
          <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, xl: 12 }}>
            <Grid item xs={4} sm={4} md={4} xl={3}>
              <Typography sx={{ fontSize: 13, fontWeight: 'bold' }}>Class</Typography>
              <Select size='small' sx={{ width: '100%', fontSize: '13px' }}>
                <MenuItem value={1}>Logic Support</MenuItem>
                <MenuItem value={2}>Activity Support</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Box mb={2}>
            <Box sx={{ display: 'flex' }}>
              <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, xl: 12 }}>
                <Grid item xs={4} sm={4} md={4} xl={3}>
                  <Typography sx={{ fontSize: 13, fontWeight: 'bold' }}>Month</Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      views={['month', 'year']}
                      format="MMM YYYY"
                      sx={{ width: '100%' }}
                      slotProps={{
                        textField: {
                          variant: 'outlined',
                          size: 'small',
                          placeholder: 'MMM YYYY',
                          InputProps: {
                            style: {
                              fontSize: 13
                            }
                          },
                        },
                      }} />
                  </LocalizationProvider>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box mb={2}>
            {reports.map((report, index) => (
              <Paper elevation={1} sx={{ width: '100%', display: 'flex', alignItems: 'center', mb: 1, backgroundColor: th => th.palette.backgroundLayout }}>
                <Box sx={{ flex: 1, pl: 2 }}>
                  <Typography sx={{ fontSize: 13, fontWeight: 'bold' }}>{moment(report.date).format('DD/MM/YYYY')}</Typography>
                </Box>
                <Box sx={{ pl: 2, pr: 2 }}>
                  <Chip label={report.status} sx={{ width: '100px', fontSize: 12 }} color={report.status === 'Reported' ? "success" : 'error'} />
                </Box>
                <Box sx={{ pl: 2, pr: 2 }}>
                  <IconButton>
                    <AppRegistrationIcon />
                  </IconButton>
                </Box>
              </Paper>
            ))}
          </Box>
          <Box mb={2}>
            <TablePagination
              component="div"
              count={10}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage='Rows'
            />
          </Box>
        </Box>
        <Divider />
        <Box sx={{ p: { xs: 0, md: 1, xl: 2 } }}>
          <TabContext value={tabIndex}>
            <TabList onChange={selectTabHandle} aria-label="tabs" indicatorColor="primary.dark" sx={{ borderBottom: th => `1px solid ${th.palette.primary.light}` }}>
              <Tab label="Month" value="1" sx={{ fontSize: '11px', '&.Mui-selected': { color: 'white', backgroundColor: th => th.palette.primary.dark } }} />
              <Tab label="Year" value="2" sx={{ fontSize: '11px', '&.Mui-selected': { color: 'white', backgroundColor: th => th.palette.primary.dark } }} />
            </TabList>
            <TabPanel sx={{ pr: 0, pl: 0, pt: 2 }} value="1">
              <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, xl: 12 }}>
                <Grid item xs={4} sm={4} md={4} xl={3}>
                  <Typography sx={{ fontSize: 13, fontWeight: 'bold' }}>Month</Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      views={['month', 'year']}
                      format="MMM YYYY"
                      sx={{ width: '100%' }}
                      slotProps={{
                        textField: {
                          variant: 'outlined',
                          size: 'small',
                          placeholder: 'MMM YYYY',
                          InputProps: {
                            style: {
                              fontSize: 13
                            }
                          },
                        },
                      }} />
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <Box height={{ xs: 300, md: 400 }}>
                <LineChart
                  xAxis={[{ scaleType: 'point', data: reports.filter(x => x.status === 'Reported').map(x => moment(x.date).format('DD MMM')) }]}
                  yAxis={[{ max: 100 }]}
                  series={chartData.map(item => { return { data: item.data, label: item.label } })}
                  margin={{ left: 30, right: 30, top: 70, bottom: 30 }}
                  grid={{ vertical: true, horizontal: true }}
                />
              </Box>
            </TabPanel>
            <TabPanel sx={{ pr: 0, pl: 0, pt: 2 }} value="2">
              <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, xl: 12 }}>
                <Grid item xs={4} sm={4} md={4} xl={3}>
                  <Typography sx={{ fontSize: 13, fontWeight: 'bold' }}>Year</Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      views={['year']}
                      format="YYYY"
                      sx={{ width: '100%' }}
                      slotProps={{
                        textField: {
                          variant: 'outlined',
                          size: 'small',
                          InputProps: {
                            style: {
                              fontSize: 13
                            }
                          },
                        },
                      }} />
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <Box height={{ xs: 300, md: 400 }}>
                <LineChart
                  xAxis={[{ scaleType: 'point', data: reports.filter(x => x.status === 'Reported').map(x => moment(x.date).format('DD MMM')) }]}
                  yAxis={[{ max: 100 }]}
                  series={chartData.map(item => { return { data: item.data, label: item.label } })}
                  margin={{ left: 30, right: 30, top: 70, bottom: 30 }}
                  grid={{ vertical: true, horizontal: true }}
                />
              </Box>
            </TabPanel>
          </TabContext >
        </Box>

      </Paper>
    </Box>
  )
}

export default StudentReport
