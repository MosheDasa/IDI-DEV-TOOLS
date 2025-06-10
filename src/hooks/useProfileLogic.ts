import { useState, useEffect } from 'react';

interface AutoCompleteOption {
    value: string;
}

export const useProfileLogic = () => {
    const [userAndRoleField, setUserAndRoleField] = useState<string>('אמיר שגב | מומחה הבטחת איכות עסקי ויהולציה');
    const [displayName, setDisplayName] = useState<string>('אמיר שגב');
    const [displayRole, setDisplayRole] = useState<string>('מומחה הבטחת איכות ויהולציה');
    const [userNameId, setUserNameId] = useState<string>('I-amir');
    const [employeeCode, setEmployeeCode] = useState<string>('828');
    const [managerName, setManagerName] = useState<string>('אור שלי');

    const initialAutoCompleteOptions: AutoCompleteOption[] = [
        { value: 'אמיר שגב | מומחה הבטחת איכות עסקי ויהולציה' },
        { value: 'דנה לוי | מנהלת פרויקטים' },
        { value: 'יוסי כהן | מפתח תוכנה בכיר' },
        { value: 'שרה גרין | אנליסטית נתונים' },
        { value: 'איתי פרץ | מעצב UI/UX' },
        { value: 'רוני בלום | מנהל מוצר' },
    ];
    const [autoCompleteOptions, setAutoCompleteOptions] = useState<AutoCompleteOption[]>(initialAutoCompleteOptions);

    useEffect(() => {
        const parts = userAndRoleField.split(' | ');
        if (parts.length === 2) {
            setDisplayName(parts[0].trim());
            setDisplayRole(parts[1].trim());
        } else {
            setDisplayName(userAndRoleField.trim());
            setDisplayRole('');
        }
    }, [userAndRoleField]);

    const handleAutoCompleteSearch = (value: string): void => {
        if (!value) {
            setAutoCompleteOptions(initialAutoCompleteOptions);
        } else {
            const filtered = initialAutoCompleteOptions.filter(item =>
                item.value.toLowerCase().includes(value.toLowerCase())
            );
            if (value && !filtered.some(option => option.value === value)) {
                setAutoCompleteOptions([{ value: value }, ...filtered]);
            } else {
                setAutoCompleteOptions(filtered);
            }
        }
    };

    const handleAutoCompleteChange = (value: string): void => {
        setUserAndRoleField(value);
    };

    return {
        userAndRoleField,
        displayName,
        displayRole,
        userNameId,
        employeeCode,
        managerName,
        autoCompleteOptions,
        handleAutoCompleteSearch,
        handleAutoCompleteChange
    };
}; 