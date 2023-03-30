import React, { useRef } from 'react';
import Form, {FormRef} from './Form';

const AppContext: React.FC = () => {
    const formRef = useRef<FormRef>(null);

    function handleSubmit(){
        formRef.current?.submit();
    }

    return (
        <Form ref={formRef}/>
    )
}

export default AppContext;
