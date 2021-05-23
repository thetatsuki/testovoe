import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = (props) => (
    <ContentLoader
        speed={2}
        width={"100%"}
        height={376}
        viewBox="0 0 224 376"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props} >
        <rect x="5" y="271" rx="3" ry="3" width="100%" height="6" />
        <rect x="10" y="293" rx="3" ry="3" width="52" height="6" />
        <rect x="6" y="310" rx="3" ry="3" width="410" height="6" />
        <rect x="6" y="326" rx="3" ry="3" width="380" height="6" />
        <rect x="6" y="342" rx="3" ry="3" width="178" height="6" />
        <rect x="0" y="-1" rx="0" ry="0" width="224" height="260" />
    </ContentLoader>
)

export default Loader