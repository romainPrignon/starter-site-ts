import { createMuiTheme } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

const createTheme = () => {
  const theme = createMuiTheme({
    shape: {
      borderRadius: 10
    },
    palette: {
      primary: grey
    }
  })

  return theme
}

export default createTheme
