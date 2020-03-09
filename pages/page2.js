import React, { Fragment, Component } from 'react'
import Page2, { OtherComponent as Foobar } from '../components/Page2'

const Page2Page = (props) => (
  <Fragment>
    <Page2 />
    <Foobar />
  </Fragment>
)

const Page2PageB = (props) => {
  return (
    <Fragment>
      <Page2 />
      <Foobar />
    </Fragment>
  )
}

class Page2PageC extends Component {
  render() {
    return (
      <div>
        Page2 class component
      </div>
    )
  }
}

export default Page2Page
