import Toolbar from '@mui/material/Toolbar';

function PageLayout(props) {


  return (
    <>
      <Toolbar />
      {props.children}
    </>
  )
}

export default PageLayout
