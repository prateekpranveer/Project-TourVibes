import React from 'react'

const Spinner = ({size}:any) => {
    let mainClass = '';
    let childrenOne = '';
    if (size=='sm') {
        mainClass ='loading2 absolute';
        childrenOne='loading-in2 top-3';
    }
    if (size=='lg') {
        mainClass ='loading absolute';
        childrenOne='loading-in top-3';
    }
    return (
        <div>
            <div className={mainClass}>
                <div className={childrenOne}>
                    <div className='relative'></div>
                </div>
            </div>
        </div>
    )
}

export default Spinner