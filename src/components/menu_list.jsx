import React from 'react';

export const CreateMenu = (items, setItems, value, setValue, alertMessage) => {
    if (value === "") {
        alert(alertMessage);
        return;
    }

    setItems([...items, value]);
    setValue("");
};

export const DeleteMenuItem = (index, items, setItems) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
};