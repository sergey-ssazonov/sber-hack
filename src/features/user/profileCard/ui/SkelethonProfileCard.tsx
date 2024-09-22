import React from "react"
import ContentLoader from "react-content-loader"

const SkelethonProfileCard = () => (
  <ContentLoader 
    speed={2}
    width={186}
    height={74}
    viewBox="0 0 186 74"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="m-6 mt-0"
  >
    <circle cx="20" cy="20" r="20" /> 
    <rect x="53" y="12" rx="3" ry="3" width="52" height="6" /> 
    <rect x="53" y="26" rx="3" ry="3" width="80" height="6" />
  </ContentLoader>
)

export default SkelethonProfileCard

