import React from 'react'
import { controlType } from '../../../constants/control';
import MultipleDropdown from '../multipleDropdown';

function FilterControl({ type, label, dataSource, onChangeHandleDispatch }) {
    const renderControl = () => {
        switch (type) {
            case controlType.multipleDropdown:
                return (<MultipleDropdown label={label} dataSource={dataSource} onChangeHandleDispatch={onChangeHandleDispatch} />);
            default:
                return null;
        }
    }
    return (
        <>
            {renderControl()}
        </>
    )
}

export default FilterControl
