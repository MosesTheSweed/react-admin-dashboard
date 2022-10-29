import {ColorModeContext, useMode} from '/src/theme.js';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {Routes, Route} from 'react-router-dom';
import Topbar from '/src/scenes/global/Tobbar.jsx';
import Sidebar from '/src/scenes/global/Sidebar.jsx';
// import Dashboard from '/src/scenes/dashboard.jsx';
// import Team from '/src/scenes/team.jsx';
// import Invoices from '/src/scenes/invoices.jsx';
// import Contacts from '/src/scenes/contacts.jsx';
// import Bar from '/src/scenes/bar.jsx';
// import Form from '/src/scenes/form.jsx';
// import Line from '/src/scenes/line.jsx';
// import Pie from '/src/scenes/pie.jsx';
// import FAQ from '/src/scenes/faw.jsx';
// import Geography from '/src/scenes/geography.jsx';
// import Calendar from '/src/scenes/calendar.jsx';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className='content'>
            <Topbar />
            <Routes>
              {/*<Route path='/' element={<Dashboard />} />*/}
              {/*<Route path='/team' element={<Team />} />*/}
              {/*<Route path='/contacts' element={<Contacts />} />*/}
              {/*<Route path='/invoices' element={<Invoices />} />*/}
              {/*<Route path='/form' element={<Form />} />*/}
              {/*<Route path='/bar' element={<Bar />} />*/}
              {/*<Route path='/pie' element={<Pie />} />*/}
              {/*<Route path='/line' element={<Line />} />*/}
              {/*<Route path='/faq' element={<FAQ />} />*/}
              {/*<Route path='/geography' element={<Geography />} />*/}
              {/*<Route path='/calendar' element={<Calendar />} />*/}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
