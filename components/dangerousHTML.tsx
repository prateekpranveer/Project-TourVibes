import React from 'react'

const DangerousHTML = ({htmlContent}:any) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default DangerousHTML