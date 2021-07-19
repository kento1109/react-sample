import React from 'react';
import styled from 'styled-components';

type Props = {
    value: string,
    isChecked: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};