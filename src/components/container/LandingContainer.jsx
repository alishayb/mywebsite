import Button from "@components/common/button/Button"
import MainHeading from "../common/heading/MainHeading"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LandingContainer = () => {
  return (
    <div className="center-container-mobile md:center-container-desktop h-[70vh]">
      <div className="center-component col-span-2">
        <MainHeading>Sorry, this web is being updated! </MainHeading>
        <p className="text-center md:text-left">
          In the meantime, you can look me through LinkedIn:
        </p>
        <Button href="https://www.linkedin.com/in/alisha-yumna-bakri-922682166/">Alisha Yumna Bakri</Button>
      </div>
      <div className="svg-animation animate-bounce drop-shadow-xl md:drop-shadow-2xl text-main">
        <FontAwesomeIcon icon="fa-solid fa-wrench" />
      </div>
    </div>
  )
}

export default LandingContainer
